import sharp from "sharp";
import path from "node:path";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, "..", "public", "images");

const jobs = [
  // Wide cinematic banner for the "Banner" layout
  {
    src: path.join(imagesDir, "_map_wide_src.png"),
    out: path.join(imagesDir, "map-wide.png"),
    width: 1600,
    height: 520,
  },
  // Near-square framed panel for the "Split" layout
  {
    src: path.join(imagesDir, "_map_square_src.png"),
    out: path.join(imagesDir, "map-square.png"),
    width: 1200,
    height: 1000,
  },
];

for (const job of jobs) {
  if (!existsSync(job.src)) {
    console.warn(`skip: ${path.basename(job.src)} not found`);
    continue;
  }
  const meta = await sharp(job.src).metadata();
  await sharp(job.src)
    .resize(job.width, job.height, { fit: "cover", position: "centre" })
    .grayscale()
    .normalize()
    .png({ quality: 90 })
    .toFile(job.out);
  console.log(
    `${path.basename(job.src)} (${meta.width}x${meta.height}) -> ${path.basename(
      job.out
    )} (${job.width}x${job.height})`
  );
}
