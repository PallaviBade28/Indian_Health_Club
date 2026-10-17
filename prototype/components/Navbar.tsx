"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/content";
import { TEL_URL, WHATSAPP_URL } from "@/lib/theme";
import { useScrollProgress } from "@/hooks/useScrollY";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#pricing", label: "Pricing" },
  { href: "#trainers", label: "Trainers" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.documentElement.dataset.navOpen = open ? "true" : "false";
    return () => {
      document.body.style.overflow = "";
      delete document.documentElement.dataset.navOpen;
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        open ? "z-[110]" : "z-50"
      } ${
        scrolled || open
          ? "bg-gym-black/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt={`${SITE.name} logo`}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover ring-1 ring-white/15 transition-transform group-hover:scale-105"
            priority
          />
          <span className="max-w-[11rem] text-[13px] font-semibold uppercase leading-tight tracking-[0.1em] text-white sm:max-w-none sm:text-base sm:tracking-[0.14em]">
            <span className="text-accent-hot">Indian</span> Health Club
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[15px] font-medium tracking-[0.04em] text-white/75 transition-colors hover:text-accent-hot"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow hidden rounded-md bg-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-gym-black transition-all hover:bg-accent-dim sm:inline-flex md:px-5 md:text-sm"
          >
            Join Now
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-gym-black/95 px-5 py-6 lg:hidden">
          <ul className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block font-display text-lg uppercase tracking-wide text-white/85 hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold uppercase tracking-wider text-gym-black"
              onClick={() => setOpen(false)}
            >
              WhatsApp us
            </a>
            <a
              href={TEL_URL}
              className="rounded-xl border border-white/20 px-4 py-3 text-center text-sm font-semibold uppercase tracking-wider text-white"
              onClick={() => setOpen(false)}
            >
              Call {SITE.shortName}
            </a>
          </div>
        </div>
      )}

      <div
        className="pointer-events-none h-[3px] w-full bg-white/10"
        aria-hidden
      >
        <div
          className="h-full bg-gradient-to-r from-accent-coal via-accent-flame to-accent-hot shadow-[0_0_12px_rgba(255,90,0,0.9),0_0_22px_rgba(255,59,0,0.45)] transition-[width] duration-150 ease-out"
          style={{ width: `${Math.max(progress * 100, progress > 0 ? 2 : 0)}%` }}
        />
      </div>
    </header>
  );
}
