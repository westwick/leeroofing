import Image from "next/image";
import Link from "next/link";
import { Phone, Globe, MapPin } from "lucide-react";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-silver">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-center text-center">
          <span className="grid h-28 w-28 place-items-center overflow-hidden rounded-xl bg-white p-1">
            <Image
              src="/images/logo-mark.png"
              alt="Lee Roofing & Renovation logo"
              width={112}
              height={112}
              className="h-full w-full object-contain"
            />
          </span>
          <p className="mt-5 max-w-sm text-sm text-silver/80">
            {site.tagline} Roofing, exterior, interior, kitchen &amp; bath, and
            flooring &mdash; done right the first time.
          </p>
        </div>

        <div>
          <h3 className="font-display text-base font-bold uppercase tracking-[0.2em] text-white">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-silver/80 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
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
              www.{site.website}
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
