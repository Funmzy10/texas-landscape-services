"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { business } from "@/lib/data";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-paper focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-line bg-paper">
        <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-3 px-4 sm:h-[72px] sm:px-5">
          <Link href="/" className="flex items-center gap-3 leading-none text-ink">
            <svg viewBox="0 0 36 36" className="h-9 w-9 shrink-0" aria-hidden="true">
              <rect x="0.75" y="0.75" width="34.5" height="34.5" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M8 28V17M14 28V10M20 28V15M26 28V12" fill="none" stroke="currentColor" strokeWidth="1.25" />
              <path d="M6 28h24" fill="none" stroke="currentColor" strokeWidth="1.25" />
            </svg>
            <span>
              <span className="block max-w-[8.6rem] font-serif text-[0.98rem] leading-none tracking-tight sm:max-w-none sm:text-[1.2rem]">Texas Landscape</span>
              <span className="mt-1 block text-[0.62rem] uppercase tracking-[0.28em] text-mute">Services</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm md:flex" aria-label="Primary">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={path.startsWith(link.href) ? "text-ink" : "text-mute hover:text-ink"}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={business.phoneHref}
              className="inline-flex h-11 items-center gap-2 bg-moss px-3 text-sm text-paper hover:bg-moss2 sm:px-4"
            >
              <Phone size={16} aria-hidden />
              <span className="hidden sm:inline">{business.phone}</span>
              <span className="sm:hidden">Call</span>
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center border border-ink/20 md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>
        {open ? (
          <nav id="mobile-nav" className="border-t border-line px-5 py-4 md:hidden" aria-label="Mobile">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="block border-b border-line py-3 text-lg">
                {link.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </header>
      <div id="content">{children}</div>
      <footer className="border-t border-line bg-moss text-paper">
        <div className="mx-auto grid max-w-page gap-10 px-5 py-14 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl">Texas Landscape Services</p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-paper/75">{business.tagline}</p>
          </div>
          <div className="text-sm leading-6">
            <p className="text-[0.68rem] uppercase tracking-[0.18em] text-paper/60">Yard and mail</p>
            <p className="mt-3">
              {business.street}
              <br />
              {business.city}, {business.region} {business.postal}
            </p>
            <p className="mt-2 text-paper/70">{business.mail}</p>
          </div>
          <div className="text-sm leading-6">
            <p className="text-[0.68rem] uppercase tracking-[0.18em] text-paper/60">Office</p>
            <p className="mt-3">
              <a href={business.phoneHref} className="underline underline-offset-4">
                {business.phone}
              </a>
              <br />
              <a href={business.emailHref} className="underline underline-offset-4">
                {business.email}
              </a>
            </p>
            <p className="mt-2 text-paper/70">{business.hours}</p>
          </div>
        </div>
        <div className="mx-auto flex max-w-page flex-wrap justify-between gap-3 border-t border-white/10 px-5 py-4 text-xs text-paper/60">
          <span>© {new Date().getFullYear()} Texas Landscape Services</span>
          <span className="flex gap-4">
            <Link href="/privacy" className="underline underline-offset-4">Privacy</Link>
            <a href={business.existingSite} className="underline underline-offset-4">Company site</a>
          </span>
        </div>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-white/10 bg-moss md:hidden">
        <a href={business.phoneHref} className="flex h-14 items-center justify-center gap-2 px-2 text-[13px] text-paper">
          <Phone size={16} aria-hidden />
          <span className="truncate">{business.phone}</span>
        </a>
        <Link
          href="/contact#estimate"
          className="flex h-14 items-center justify-center bg-brass text-sm text-paper"
        >
          Get an estimate
        </Link>
      </div>
    </>
  );
}
