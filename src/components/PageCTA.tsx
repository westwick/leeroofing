import { Phone, ClipboardCheck, Globe } from "lucide-react";
import { site } from "@/lib/site";

export default function PageCTA({
  tagline,
  subtext = "Free estimates — rain or shine.",
}: {
  tagline: string;
  subtext?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 md:py-24">
      {/* Subtle dot texture + a soft brand glow, so it reads as its own moment
          without the full-red intensity of the homepage CTA. */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
        <div className="mx-auto h-1 w-16 rounded-full bg-brand" />
        <h2 className="mt-6 font-display text-3xl font-bold uppercase leading-tight text-white sm:text-4xl md:text-5xl">
          {tagline}
        </h2>
        <p className="mt-4 text-lg text-silver">{subtext}</p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-3 rounded-md bg-brand px-8 py-4 text-lg font-extrabold text-white shadow-lg shadow-brand/30 transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-5 w-5" />
            {site.phoneDisplay}
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-md border-2 border-white/30 px-8 py-4 text-lg font-extrabold text-white transition-colors hover:border-brand hover:bg-white/5"
          >
            <ClipboardCheck className="h-5 w-5 text-brand" />
            Get a Free Estimate
          </a>
        </div>

        <p className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-silver/80">
          <Globe className="h-4 w-4 text-brand" />
          www.{site.website}
        </p>
      </div>
    </section>
  );
}
