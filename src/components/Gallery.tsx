import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { getHomepageGalleryPhotos } from "@/lib/content";
import GalleryClient from "./GalleryClient";

export default async function Gallery() {
  const photos = await getHomepageGalleryPhotos();

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
        <GalleryClient photos={photos} />

        <div className="mt-12 flex flex-col items-center gap-5">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-md border-2 border-charcoal/15 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-charcoal transition-colors hover:border-brand hover:text-brand"
          >
            View Full Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-3 rounded-md bg-brand px-8 py-4 text-lg font-extrabold text-white shadow-lg transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-5 w-5" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
