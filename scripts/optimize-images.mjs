// Downscale and re-encode oversized images committed under public/images.
//
// Keystatic Cloud commits client uploads straight to the repo, so this runs in
// CI (see .github/workflows/optimize-images.yml) after such commits. Any image
// whose largest dimension exceeds MAX_DIMENSION is resized and re-encoded in
// place. The dimension check makes the pass idempotent: once an image is within
// the cap it is left untouched on subsequent runs.

import { readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(process.cwd(), "public/images");
const MAX_DIMENSION = 2560;
const JPEG_QUALITY = 82;
const WEBP_QUALITY = 82;
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function* walk(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else if (EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      yield full;
    }
  }
}

async function optimize(file) {
  const input = sharp(file, { failOn: "none" });
  const meta = await input.metadata();
  const width = meta.width ?? 0;
  const height = meta.height ?? 0;

  if (width <= MAX_DIMENSION && height <= MAX_DIMENSION) {
    return false;
  }

  const ext = path.extname(file).toLowerCase();
  let pipeline = input
    .rotate()
    .resize({
      width: MAX_DIMENSION,
      height: MAX_DIMENSION,
      fit: "inside",
      withoutEnlargement: true,
    });

  if (ext === ".png") {
    pipeline = pipeline.png({ compressionLevel: 9 });
  } else if (ext === ".webp") {
    pipeline = pipeline.webp({ quality: WEBP_QUALITY });
  } else {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
  }

  const before = (await stat(file)).size;
  const buffer = await pipeline.toBuffer();
  await writeFile(file, buffer);
  const after = buffer.length;

  const kb = (n) => `${Math.round(n / 1024)}KB`;
  console.log(
    `optimized ${path.relative(process.cwd(), file)}: ` +
      `${width}x${height} ${kb(before)} -> resized to <=${MAX_DIMENSION}px ${kb(after)}`
  );
  return true;
}

let changed = 0;
for await (const file of walk(ROOT)) {
  try {
    if (await optimize(file)) changed += 1;
  } catch (err) {
    console.error(`failed to process ${file}:`, err);
    process.exitCode = 1;
  }
}

console.log(changed === 0 ? "No oversized images found." : `Optimized ${changed} image(s).`);
