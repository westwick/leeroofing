"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, Star, ShieldCheck } from "lucide-react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-charcoal/95 backdrop-blur supports-[backdrop-filter]:bg-charcoal/85 border-b border-white/10">
      {/* Top utility bar */}
      <div className="hidden md:block bg-brand text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs font-semibold tracking-wide">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 fill-current" /> 5-Star Rated
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" /> Licensed, Bonded &amp; Insured
            </span>
          </div>
          <span>Free Estimates &mdash; {site.website}</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-14 w-14 place-items-center overflow-hidden rounded-md bg-white md:h-16 md:w-16">
            <Image
              src="/images/logo-mark.png"
              alt="Lee Roofing & Renovation logo"
              width={64}
              height={64}
              className="h-full w-full object-contain"
              priority
            />
          </span>
          <span className="font-display text-lg font-bold uppercase leading-none tracking-wide text-white md:text-xl">
            Lee Roofing
            <span className="block text-xs font-semibold tracking-[0.3em] text-silver">
              &amp; Renovation
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-bold uppercase tracking-wide text-silver transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 rounded-md bg-brand px-3.5 py-2.5 text-sm font-extrabold uppercase tracking-wide text-white shadow-lg shadow-brand/30 transition-transform hover:scale-[1.03] sm:px-4"
          >
            <Phone className="h-4 w-4" />
            <span className="lg:hidden">Call Now</span>
            <span className="hidden lg:inline">{site.phoneDisplay}</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-white/10 bg-charcoal-700 px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-bold uppercase tracking-wide text-silver hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2 rounded-md bg-brand px-4 py-3 font-extrabold text-white"
              >
                <Phone className="h-5 w-5" /> {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
