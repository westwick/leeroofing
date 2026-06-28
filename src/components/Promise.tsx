import Image from "next/image";
import { PhoneCall, ThumbsUp, Wrench, Handshake } from "lucide-react";

const photos = [
  { src: "/images/story-3.jpg", alt: "Close-up inspection of storm-damaged shingles" },
  { src: "/images/story-roof-crew.jpg", alt: "Lee Roofing crew waving from a roof tear-off" },
  { src: "/images/story-4.jpg", alt: "Lee Roofing team installing a metal roof" },
  { src: "/images/story-1.jpg", alt: "Lee Roofing technician replacing damaged shingles" },
];

const points = [
  {
    icon: ThumbsUp,
    title: "Quality You Can See",
    body: "Premium materials and craftsmanship on every job, big or small.",
  },
  {
    icon: Handshake,
    title: "Service You Can Trust",
    body: "Licensed, bonded & insured with honest, up-front estimates.",
  },
  {
    icon: PhoneCall,
    title: "One Call, We Do It All",
    body: "Roofing to handyman fixes—one trusted crew for the whole home.",
  },
  {
    icon: Wrench,
    title: "Done Right the First Time",
    body: "From the roof down to the floors, we handle the whole home.",
  },
];

export default function Promise() {
  return (
    <section id="story" className="bg-charcoal py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-brand">
            Your Home. Our Expertise.
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-white sm:text-4xl md:text-5xl">
            Quality you can see.
            <span className="block text-silver">Service you can trust.</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg text-silver">
            From storm-damaged roofs to full-home renovations, the Lee Roofing
            &amp; Renovation crew treats your house like our own&mdash;and
            backs every project with workmanship you can rely on.
          </p>

          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {points.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-lg bg-brand/15 text-brand">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <div>
                  <dt className="font-display text-lg font-bold uppercase tracking-wide text-white">
                    {title}
                  </dt>
                  <dd className="mt-1 text-sm text-silver/80">{body}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 shadow-lg"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-brand px-6 py-5 text-white shadow-xl sm:block">
            <p className="font-display text-4xl font-bold leading-none">100%</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-wide">
              Satisfaction
              <br />
              Guaranteed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
