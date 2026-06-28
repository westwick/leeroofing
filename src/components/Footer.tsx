import Image from "next/image";
import { Phone, Globe, MapPin } from "lucide-react";
import { nav, site } from "@/lib/site";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-charcoal text-silver">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-16 w-16 place-items-center overflow-hidden rounded-md bg-white">
              <Image
                src="/images/logo-mark.png"
                alt="Lee Roofing & Renovation logo"
                width={64}
                height={64}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="font-display text-lg font-bold uppercase leading-none tracking-wide text-white">
              Lee Roofing
              <span className="block text-xs font-semibold tracking-[0.3em] text-silver">
                &amp; Renovation
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm text-silver/80">
            {site.tagline} Roofing, exterior, interior, kitchen &amp; bath, and
            flooring &mdash; done right the first time.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/5 transition-colors hover:bg-brand hover:text-white"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/5 transition-colors hover:bg-brand hover:text-white"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-base font-bold uppercase tracking-[0.2em] text-white">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-silver/80 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-bold uppercase tracking-[0.2em] text-white">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-silver/80 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-brand" />
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3 text-silver/80">
              <Globe className="h-4 w-4 text-brand" />
              {site.website}
            </li>
            <li className="flex items-center gap-3 text-silver/80">
              <MapPin className="h-4 w-4 text-brand" />
              Serving the Mississippi Gulf Coast
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-silver/60 sm:flex-row md:px-6">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Licensed, Bonded &amp; Insured &middot; Free Estimates</p>
        </div>
      </div>
    </footer>
  );
}
