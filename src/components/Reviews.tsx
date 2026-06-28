import { Star, Quote, LifeBuoy, ExternalLink } from "lucide-react";

const FACEBOOK_REVIEWS_URL =
  "https://www.facebook.com/leeroofingrenovation/reviews/?id=61550080146310&sk=reviews";

const reviews = [
  {
    name: "Tracy C.",
    body:
      "I was very impressed! They found the leak asap & fixed the roof on the spot! They came in less than 15 minutes!! They are local too so that really makes a difference!! Thank you!!!",
  },
  {
    name: "Edward M.",
    body:
      "Lee Roofing was able to repair my roof for less than half the price of 3 other estimates I received. They were quick, efficient and reliable. Since getting my repairs done, Robert and his team have come by after the rainy days to double check they did what needed to be done to fix my roof. As a local business owner, unexpected expenses for repairs can be quite challenging. I highly recommend using them for any of your roofing needs.",
  },
  {
    name: "Randy G.",
    body:
      "Amazing company with good quality work at an affordable price. 10/10 will recommend to everyone I know.",
  },
  {
    name: "Ladaju B.",
    body:
      "They did an awesome job fixing my ceiling that was leaking and fixing the electrical wires that were rotted. I would absolutely recommend them.",
  },
];

export default function Reviews() {
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
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="break-inside-avoid rounded-2xl border border-white/10 bg-charcoal-600 p-7 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <Quote className="h-8 w-8 text-brand/60" />
                <div className="flex gap-0.5 text-brand">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-silver">
                &ldquo;{review.body}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-white/10 pt-4">
                <span className="font-bold text-white">{review.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
