import { Phone, Globe, ClipboardCheck } from "lucide-react";
import { site } from "@/lib/site";

export default function CallToAction() {
  return (
    <section id="contact" className="relative overflow-hidden bg-brand py-20 md:py-24">
      <div
        aria-hidden
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
        <h2 className="font-display text-3xl font-bold uppercase leading-tight text-white sm:text-4xl md:text-6xl">
          Let&rsquo;s build something
          <span className="block">beautiful together!</span>
        </h2>
        <p className="mt-5 font-display text-2xl font-bold uppercase tracking-wide text-white/90">
          Free Estimates!
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-3 rounded-md bg-white px-8 py-4 text-lg font-extrabold text-charcoal shadow-xl transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-5 w-5 text-brand" />
            {site.phoneDisplay}
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-md border-2 border-white/70 px-8 py-4 text-lg font-extrabold text-white transition-colors hover:bg-white/10"
          >
            <ClipboardCheck className="h-5 w-5" />
            Get a Free Estimate
          </a>
        </div>

        <p className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-white/90">
          <Globe className="h-4 w-4" />
          www.{site.website}
        </p>
      </div>
    </section>
  );
}
