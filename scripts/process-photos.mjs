import sharp from "sharp";
import path from "node:path";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, "..", "public", "images");

// Smart-cropped square thumbnails for the "Our Story" grid.
const SIZE = 700;
const jobs = [
  { src: "_s1.png", out: "story-1.jpg" },
  { src: "_s2.png", out: "story-roof-crew.jpg" },
  { src: "_s3.png", out: "story-3.jpg" },
  { src: "_s4.png", out: "story-4.jpg" },
];

for (const job of jobs) {
  const src = path.join(imagesDir, job.src);
  if (!existsSync(src)) {
    console.warn(`skip: ${job.src} not found`);
    continue;
  }
  const meta = await sharp(src).metadata();
  let pipeline = sharp(src);
  if (job.trim) {
    pipeline = pipeline.trim({ background: "#000000", threshold: 20 });
  }
  await pipeline
    .resize(SIZE, SIZE, {
      fit: "cover",
      position: sharp.strategy.attention,
    })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(path.join(imagesDir, job.out));
  console.log(
    `${job.src} (${meta.width}x${meta.height}) -> ${job.out} (${SIZE}x${SIZE})`
  );
}
