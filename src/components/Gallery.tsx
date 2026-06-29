"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

const photos = [
  { src: "/images/gallery/rooffix2.jpg", alt: "Skylight installed on a new shingle roof" },
  { src: "/images/gallery/roof5.jpg", alt: "Architectural shingle roof ridge detail" },
  { src: "/images/gallery/roofers.jpg", alt: "Roofer laying underlayment on a steep roof" },
  { src: "/images/gallery/roofers2.jpg", alt: "Lee Roofing crew installing a metal roof" },
  { src: "/images/gallery/rooffix1.jpg", alt: "Skylight flashing and underlayment installation" },
  { src: "/images/gallery/roof1.jpg", alt: "New concrete patio addition" },
  { src: "/images/gallery/roof2.jpg", alt: "Patio foundation preparation" },
  { src: "/images/gallery/roof3.jpg", alt: "Concrete patio pour and finishing" },
  { src: "/images/gallery/patio-final.jpg", alt: "Finished concrete patio behind a brick home" },
  { src: "/images/before.jpg", alt: "Soffit and fascia before Lee Roofing's work" },
  { src: "/images/after.jpg", alt: "Soffit and fascia after Lee Roofing's work" },
];

// The last two are the before/after pair, shown as a wide side-by-side row.
const thumbCount = photos.length - 2;

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    []
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    []
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  return (
    <section id="gallery" className="bg-slate-50 pb-20 md:pb-24">
      {/* Image-backed header puts a real finished roof front and center */}
      <div className="relative isolate overflow-hidden">
        <Image
          src="/images/gallery/roof6.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal/75 via-charcoal/70 to-charcoal/90"
        />
        <div className="mx-auto max-w-2xl px-4 py-20 text-center md:px-6 md:py-24">
          <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-brand">
            Project Gallery
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-white drop-shadow sm:text-4xl md:text-5xl">
            See Our Recent Work
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-brand" />
          <p className="mt-4 text-sm text-white/80">Tap any photo to view it larger.</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-12 md:px-6 md:pt-16">
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 lg:grid-cols-6">
          {photos.slice(0, thumbCount).map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setIndex(i)}
              className="group relative aspect-square overflow-hidden rounded-lg border border-charcoal/10 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              aria-label={`View photo: ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <span className="pointer-events-none absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/20" />
            </button>
          ))}
        </div>

        {/* Before / after pair, side by side on all screen sizes */}
        <div className="mt-3 grid grid-cols-2 gap-2 sm:gap-3">
          {photos.slice(thumbCount).map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setIndex(thumbCount + i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-charcoal/10 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              aria-label={`View photo: ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/20" />
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-3 rounded-md bg-brand px-8 py-4 text-lg font-extrabold text-white shadow-lg transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-5 w-5" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {open && index !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-6"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <figure
            className="relative flex max-h-[85vh] max-w-4xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[index].src}
              alt={photos[index].alt}
              className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
            <figcaption className="mt-3 text-sm font-semibold text-white/80">
              {index + 1} / {photos.length}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6"
            aria-label="Next photo"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </section>
  );
}
