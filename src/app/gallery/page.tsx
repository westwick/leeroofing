import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryClient from "@/components/GalleryClient";
import PageCTA from "@/components/PageCTA";
import { getAllGalleryPhotos } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Project Gallery | Lee Roofing & Renovation",
  description:
    "Browse recent roofing, exterior, and renovation projects completed by Lee Roofing & Renovation on the Mississippi Gulf Coast.",
};

export default async function GalleryPage() {
  const photos = await getAllGalleryPhotos();

  return (
    <>
      <Header />
      <main>
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-brand">
                Project Gallery
              </p>
              <h1 className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-charcoal sm:text-4xl md:text-5xl">
                Our Recent Work
              </h1>
              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-brand" />
              <p className="mt-4 text-sm text-charcoal/70">
                Tap any photo to view it larger.
              </p>
            </div>

            <div className="mt-10 md:mt-14">
              <GalleryClient photos={photos} />
            </div>

            <div className="mt-12 flex flex-col items-center gap-5">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-3 rounded-md bg-brand px-8 py-4 text-lg font-extrabold text-white shadow-lg transition-transform hover:scale-[1.03]"
              >
                <Phone className="h-5 w-5" />
                {site.phoneDisplay}
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-charcoal/70 transition-colors hover:text-brand"
              >
                <ArrowLeft className="h-4 w-4" />
                Back Home
              </Link>
            </div>
          </div>
        </section>

        <PageCTA
          tagline="Let's make your project our next showstopper."
          subtext="We can't wait to feature your job in this gallery."
        />
      </main>
      <Footer />
    </>
  );
}
