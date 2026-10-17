"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/theme";

const NUDGES = ["Hi 👋", "Wanna talk?", "Ask us anything", "Join on WhatsApp"];

/** Sticky fire mascot CTA — opens WhatsApp, with rotating chat nudges */
export default function StickyWhatsApp() {
  const [nudgeIndex, setNudgeIndex] = useState(0);
  const [showNudge, setShowNudge] = useState(true);

  useEffect(() => {
    const id = window.setInterval(() => {
      setShowNudge(false);
      window.setTimeout(() => {
        setNudgeIndex((i) => (i + 1) % NUDGES.length);
        setShowNudge(true);
      }, 220);
    }, 3200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp — Hi, wanna talk?"
      className="sticky-wa fixed z-[100] flex flex-col items-end gap-2 transition-transform active:scale-[0.98]"
    >
      <div
        className={`sticky-wa__nudge max-w-[11.5rem] transition-all duration-200 ${
          showNudge ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
        }`}
      >
        <p className="rounded-2xl rounded-br-md border border-accent-hot/40 bg-gym-black/90 px-3 py-2 text-left text-[12px] font-semibold leading-snug text-white shadow-[0_8px_24px_rgba(0,0,0,0.45)] backdrop-blur-md sm:text-[13px]">
          {NUDGES[nudgeIndex]}
          <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.14em] text-accent-hot">
            WhatsApp
          </span>
        </p>
      </div>

      <span className="sticky-wa__btn group relative block">
        <span className="sticky-wa__pulse" aria-hidden />
        <Image
          src="/fire-mascot-wa.png"
          alt=""
          width={112}
          height={112}
          className="sticky-wa__avatar relative z-[1] h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16"
          priority
        />
      </span>
    </a>
  );
}
