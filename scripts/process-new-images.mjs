import sharp from "sharp";
import path from "node:path";
import { existsSync, mkdirSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, "..", "public", "images");
const galleryDir = path.join(imagesDir, "gallery");
const assetsDir =
  "C:/Users/Andrew/.cursor/projects/c-Users-Andrew-git-leeroofing/assets";

mkdirSync(galleryDir, { recursive: true });

const assetFiles = readdirSync(assetsDir);
// Match a source asset by the semantic key embedded in its filename (e.g. "_droneshot-").
function findAsset(key) {
  const match = assetFiles.find((f) => f.includes(`_${key}-`));
  if (!match) {
    console.warn(`asset not found for key: ${key}`);
    return null;
  }
  return path.join(assetsDir, match);
}

// width/height act as a bounding box (fit: inside, no enlargement).
const jobs = [
  // Hero background — wide aerial drone shot
  { key: "droneshot", out: path.join(imagesDir, "hero-drone.jpg"), w: 1920, h: 1920, q: 82 },
  // Before / after (soffit) section
  { key: "before", out: path.join(imagesDir, "before.jpg"), w: 1200, h: 1200, q: 82 },
  { key: "after", out: path.join(imagesDir, "after.jpg"), w: 1200, h: 1200, q: 82 },
  // Gallery
  { key: "rooffix2", out: path.join(galleryDir, "rooffix2.jpg"), w: 1200, h: 1200, q: 80 },
  { key: "roof6", out: path.join(galleryDir, "roof6.jpg"), w: 1200, h: 1200, q: 80 },
  { key: "rooffix1", out: path.join(galleryDir, "rooffix1.jpg"), w: 1200, h: 1200, q: 80 },
  { key: "roof5", out: path.join(galleryDir, "roof5.jpg"), w: 1200, h: 1200, q: 80 },
  { key: "roofers2", out: path.join(galleryDir, "roofers2.jpg"), w: 1200, h: 1200, q: 80 },
  { key: "roofers", out: path.join(galleryDir, "roofers.jpg"), w: 1200, h: 1200, q: 80 },
  { key: "roof3", out: path.join(galleryDir, "roof3.jpg"), w: 1200, h: 1200, q: 80 },
  { key: "roof1", out: path.join(galleryDir, "roof1.jpg"), w: 1200, h: 1200, q: 80 },
  { key: "roof2", out: path.join(galleryDir, "roof2.jpg"), w: 1200, h: 1200, q: 80 },
];

for (const job of jobs) {
  const src = findAsset(job.key);
  if (!src || !existsSync(src)) continue;
  const meta = await sharp(src).metadata();
  await sharp(src)
    .resize(job.w, job.h, { fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: job.q, mozjpeg: true })
    .toFile(job.out);
  const outMeta = await sharp(job.out).metadata();
  console.log(
    `${job.key} (${meta.width}x${meta.height}) -> ${path.relative(
      imagesDir,
      job.out
    )} (${outMeta.width}x${outMeta.height})`
  );
}
