import Image from "next/image";
import { Phone, Star, ShieldCheck, FileText } from "lucide-react";
import { site } from "@/lib/site";

const badges = [
  { icon: Star, label: "5-Star Rated" },
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: FileText, label: "Free Estimates" },
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-charcoal">
      {/* Background image */}
      <Image
        src="/images/hero-drone.jpg"
        alt="Aerial drone view of a freshly installed Lee Roofing shingle roof"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Dark overlays for legibility */}
      <div className="absolute inset-0 bg-charcoal/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/55 to-charcoal/85" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 py-20 text-center md:py-28">
        <h1 className="font-sans text-[2.6rem] font-black uppercase leading-[0.98] tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
          <span className="block">Rain or shine,</span>
          <span className="block text-brand">Leaks don&rsquo;t wait&mdash;</span>
          <span className="block">and neither do we!</span>
        </h1>

        <p className="mt-6 max-w-md text-lg text-silver md:text-xl">
          Call {site.name} and
          <br />
          we&rsquo;ll be there to{" "}
          <em className="font-extrabold italic text-brand">
            get you dry fast!
          </em>
        </p>

        <div className="mt-9 flex w-full max-w-md flex-col gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-brand px-8 py-4 text-lg font-extrabold uppercase tracking-wide text-white shadow-xl shadow-brand/30 transition-transform hover:scale-[1.02]"
          >
            Free Estimate
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-silver/40 bg-charcoal-700/80 px-6 py-4 text-lg font-extrabold text-white backdrop-blur transition-colors hover:border-brand hover:bg-charcoal-600"
          >
            <Phone className="h-5 w-5 text-brand" />
            {site.phoneDisplay}
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-12 w-full max-w-md rounded-xl border border-white/10 bg-charcoal/60 px-5 py-4 backdrop-blur">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {badges.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-silver"
              >
                <span className="grid h-7 w-7 place-items-center rounded-full bg-brand/15 text-brand">
                  <Icon className="h-4 w-4" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
