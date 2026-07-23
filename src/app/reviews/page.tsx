import type { Metadata } from "next";
import Link from "next/link";
import { LifeBuoy, ExternalLink, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import PageCTA from "@/components/PageCTA";
import { getAllReviews } from "@/lib/content";

const FACEBOOK_REVIEWS_URL =
  "https://www.facebook.com/leeroofingrenovation/reviews/?id=61550080146310&sk=reviews";

export const metadata: Metadata = {
  title: "Customer Reviews | Lee Roofing & Renovation",
  description:
    "Read reviews from Lee Roofing & Renovation customers across the Mississippi Gulf Coast.",
};

export default async function ReviewsPage() {
  const reviews = await getAllReviews();

  return (
    <>
      <Header />
      <main>
        <section className="bg-charcoal-700 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/30">
                <LifeBuoy className="h-9 w-9" strokeWidth={1.75} />
              </span>
              <h1 className="mt-6 font-display text-3xl font-bold uppercase leading-tight text-white sm:text-4xl md:text-5xl">
                What Our Customers Say
              </h1>
              <p className="mt-4 text-lg text-silver">
                Read real{" "}
                <a
                  href={FACEBOOK_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-400 transition-colors hover:text-sky-300"
                >
                  Facebook
                  <ExternalLink className="h-4 w-4" />
                </a>{" "}
                reviews from our happy customers.
              </p>
            </div>

            <div className="mt-12 gap-6 [column-fill:_balance] sm:columns-2 lg:columns-3 [&>*]:mb-6">
              {reviews.map((review, i) => (
                <ReviewCard key={`${review.name}-${i}`} review={review} />
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-silver transition-colors hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back Home
              </Link>
            </div>
          </div>
        </section>

        <PageCTA
          tagline="Ready to become our next five-star review?"
          subtext="Let's give you a roofing experience worth raving about."
        />
      </main>
      <Footer />
    </>
  );
}
