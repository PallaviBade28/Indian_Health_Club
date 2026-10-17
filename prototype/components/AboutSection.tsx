"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";
import { ABOUT } from "@/lib/content";

export default function AboutSection() {
  const [active, setActive] = useState(0);
  const [hasChosen, setHasChosen] = useState(false);
  const item = ABOUT.facilities[active];
  const total = ABOUT.facilities.length;

  const pick = (i: number) => {
    setActive(i);
    setHasChosen(true);
  };

  const prev = () => pick((active - 1 + total) % total);
  const next = () => pick((active + 1) % total);

  return (
    <section id="about" className="section-pad section-veil px-5 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 md:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <SectionReveal>
          <SectionHeading
            eyebrow={ABOUT.eyebrow}
            title={ABOUT.title}
            accent={ABOUT.titleAccent}
            glowAccent
            support={ABOUT.body}
          />
          {/* Chip selector — desktop / tablet only */}
          <div className="mt-6 hidden md:block">
            <div className="flex items-center gap-2 text-sm text-accent">
              <span className="font-medium">{ABOUT.chipHint}</span>
              <ChevronRight
                className={`h-4 w-4 ${hasChosen ? "opacity-40" : "animate-chip-nudge"}`}
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {ABOUT.facilities.map((f, i) => (
                <button
                  key={f.title}
                  type="button"
                  onClick={() => pick(i)}
                  className={`rounded-md px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-all ${
                    active === i
                      ? "bg-accent text-gym-black shadow-[0_0_24px_rgba(255,122,0,0.35)]"
                      : "border border-white/15 text-white/65 hover:border-accent/40 hover:text-white"
                  }`}
                >
                  {f.title}
                </button>
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className="relative px-1 md:px-0">
            <SpotlightCard className="relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border-accent/20 bg-gradient-to-br from-orange-950/55 via-zinc-950 to-black p-6 sm:min-h-[340px] md:p-9">
              <div className="pointer-events-none absolute -right-6 top-0 font-display text-[9rem] leading-none text-white/[0.05]">
                0{active + 1}
              </div>
              <p className="font-display text-xl tracking-[0.12em] text-accent">
                0{active + 1} / 0{total}
              </p>
              <div className="relative mt-auto">
                <h3 className="font-display text-3xl tracking-wide text-white sm:text-4xl md:text-5xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-white/65">
                  {item.detail}
                </p>
                <ul className="mt-5 space-y-2">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-white/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(255,122,0,0.8)]" />
                      {b}
                    </li>
                  ))}
                </ul>
                {/* Dot indicators — desktop only (chips handle pick there) */}
                <div className="mt-8 hidden gap-2 md:flex">
                  {ABOUT.facilities.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Show facility ${i + 1}`}
                      onClick={() => pick(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        active === i ? "w-10 bg-accent" : "w-4 bg-white/25 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </SpotlightCard>

            {/* Mobile arrows — flush to card edges so content stays readable */}
            <button
              type="button"
              aria-label="Previous facility"
              onClick={prev}
              className="absolute -left-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/80 text-white backdrop-blur-sm md:hidden"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next facility"
              onClick={next}
              className="absolute -right-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/80 text-white backdrop-blur-sm md:hidden"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
