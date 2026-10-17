import Image from "next/image";
import { SITE } from "@/lib/content";
import { PHONE_DISPLAY, TEL_URL } from "@/lib/theme";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/70 px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="font-display text-sm uppercase tracking-[0.2em] text-white">
              {SITE.name} · {SITE.city}
            </p>
            <p className="mt-1 text-xs text-white/40">
              EXPLORE prototype — not production-ready
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/55">
          <a href="#pricing" className="hover:text-accent">
            Pricing
          </a>
          <a href="#faq" className="hover:text-accent">
            FAQ
          </a>
          <a href="#contact" className="hover:text-accent">
            Contact
          </a>
          <a href="/privacy" className="hover:text-accent">
            Privacy
          </a>
          <a href="/terms" className="hover:text-accent">
            Terms
          </a>
          <a href={TEL_URL} className="hover:text-accent">
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </footer>
  );
}
