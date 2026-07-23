import Link from "next/link";
import { LifeBuoy, ExternalLink, ArrowRight } from "lucide-react";
import { getHomepageReviews } from "@/lib/content";
import ReviewCard from "./ReviewCard";

const FACEBOOK_REVIEWS_URL =
  "https://www.facebook.com/leeroofingrenovation/reviews/?id=61550080146310&sk=reviews";

export default async function Reviews() {
  const reviews = await getHomepageReviews();

  return (
    <section id="reviews" className="bg-charcoal-700 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/30">
            <LifeBuoy className="h-9 w-9" strokeWidth={1.75} />
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold uppercase leading-tight text-white sm:text-4xl md:text-5xl">
            To the Rescue!
          </h2>
          <p className="mt-4 text-lg text-silver">
            Don&rsquo;t just take our word for it. Read real{" "}
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

        {/* Masonry-style review cards */}
        <div className="mt-12 gap-6 [column-fill:_balance] sm:columns-2 [&>*]:mb-6">
          {reviews.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>

        <div className="mt-4 text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-sky-400 transition-colors hover:text-sky-300"
          >
            Read All Reviews
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
