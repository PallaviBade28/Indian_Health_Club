"use client";

import { motion } from "motion/react";
import { ArrowDownRight, ChevronDown } from "lucide-react";
import ChargePulseWord from "@/components/ChargePulseWord";
import FireWord from "@/components/FireWord";
import { HERO, SITE } from "@/lib/content";
import { WHATSAPP_URL } from "@/lib/theme";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 56 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden px-4 pb-28 pt-24 sm:px-5 sm:pb-24 sm:pt-28 md:items-center md:px-8 md:pb-28">
      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-4xl">
          <motion.div variants={fadeUp} className="mb-4 flex flex-wrap items-center gap-2 sm:mb-5 sm:gap-3">
            <span className="rounded-md border border-accent-hot/60 bg-accent/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-hot sm:px-3 sm:text-[11px] sm:tracking-[0.28em]">
              {SITE.city}, MH
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/45 sm:text-xs sm:tracking-[0.28em]">
              {HERO.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-[2.65rem] leading-[0.95] text-white sm:text-6xl md:text-8xl lg:text-[7.5rem]"
          >
            <span className="block tracking-[0.04em] sm:tracking-[0.06em]">
              {HERO.line1Before}
              <FireWord word={HERO.line1Fire} />
            </span>
            <span className="mt-1 block tracking-[0.04em] sm:tracking-[0.06em]">
              <span className="text-accent-hot">{HERO.line2Before}</span>
              <ChargePulseWord word={HERO.line2Charge} />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-white/70 sm:mt-7 sm:text-lg"
          >
            {HERO.support}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow group inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-accent-flame via-accent to-accent-hot px-6 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-gym-black transition-transform active:scale-[0.98] hover:-translate-y-0.5 hover:from-accent-deep hover:via-accent-flame hover:to-accent sm:w-auto sm:px-8 sm:py-4 sm:tracking-[0.16em]"
            >
              {HERO.primaryCta}
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#pricing"
              className="inline-flex w-full items-center justify-center rounded-md border border-white/30 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:border-accent-hot/70 hover:bg-white/[0.08] sm:w-auto sm:px-8 sm:py-4 sm:tracking-[0.16em]"
            >
              {HERO.secondaryCta}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#stats"
        className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 text-white/35 transition-colors hover:text-accent-hot sm:bottom-7 sm:gap-2"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce-scroll" />
      </a>
    </section>
  );
}
