import Image from "next/image";
import { MapPin } from "lucide-react";

const mississippi = [
  "Pass Christian",
  "Pascagoula",
  "Long Beach",
  "Gulfport",
  "Gautier",
  "Vancleave",
  "Biloxi",
];

export default function Locations() {
  return (
    <section
      id="locations"
      className="relative isolate overflow-hidden bg-charcoal"
    >
      {/* Full-bleed map background */}
      <Image
        src="/images/map-square.png"
        alt="Greyscale map of the Mississippi Gulf Coast service area"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-50"
      />
      {/* Darkening + seamless top/bottom bleed into neighboring sections */}
      <div className="absolute inset-0 bg-charcoal/70" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-charcoal to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal to-transparent" />
      {/* Subtle brand glow over the coast */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[42%] h-72 w-72 -translate-x-1/2 rounded-full bg-brand/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-5 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-brand">
            Areas We Serve
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-white sm:text-4xl md:text-5xl">
            Proudly Serving the
            <span className="block text-silver">Mississippi Gulf Coast</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-silver md:text-lg">
            We bring the same quality and service to every community we work
            in.
          </p>
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-2.5">
          {mississippi.map((city) => (
            <li key={city}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-sm font-bold text-silver backdrop-blur transition-colors hover:border-brand/50 hover:text-white">
                <MapPin className="h-3.5 w-3.5 text-brand" />
                {city}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
