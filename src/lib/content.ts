import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);

export const HOMEPAGE_GALLERY_MAX = 12;
export const HOMEPAGE_REVIEWS_MAX = 6;

export type GalleryPhoto = { src: string; alt: string; featured: boolean };
export type StoryPhoto = { src: string; alt: string };
export type Review = {
  name: string;
  body: string;
  rating: number;
  featured: boolean;
};

async function readGallery(): Promise<GalleryPhoto[]> {
  const data = await reader.singletons.gallery.read();
  return (data?.photos ?? [])
    .filter((p): p is { image: string; alt: string; featured: boolean } =>
      Boolean(p.image)
    )
    .map((p) => ({ src: p.image, alt: p.alt, featured: p.featured }));
}

async function readReviews(): Promise<Review[]> {
  const data = await reader.singletons.reviews.read();
  return (data?.items ?? []).map((r) => ({
    name: r.name,
    body: r.body,
    rating: r.rating ?? 5,
    featured: r.featured,
  }));
}

export async function getAllGalleryPhotos(): Promise<GalleryPhoto[]> {
  return readGallery();
}

export async function getHomepageGalleryPhotos(): Promise<GalleryPhoto[]> {
  const photos = await readGallery();
  return photos.filter((p) => p.featured).slice(0, HOMEPAGE_GALLERY_MAX);
}

export async function getStoryPhotos(): Promise<StoryPhoto[]> {
  const data = await reader.singletons.story.read();
  return (data?.photos ?? [])
    .filter((p): p is { image: string; alt: string } => Boolean(p.image))
    .map((p) => ({ src: p.image, alt: p.alt }));
}

export async function getAllReviews(): Promise<Review[]> {
  return readReviews();
}

export async function getHomepageReviews(): Promise<Review[]> {
  const reviews = await readReviews();
  return reviews.filter((r) => r.featured).slice(0, HOMEPAGE_REVIEWS_MAX);
}
