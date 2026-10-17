"use client";

import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";
import { PROGRAMS } from "@/lib/content";

export default function ProgramsSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="programs" className="section-pad section-veil px-5 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="What we offer"
            title="Training that matches"
            accent="your goal"
            glowAccent
            support="Tap a program for includes and outcomes — or hover on desktop."
          />
        </SectionReveal>

        <div
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          onMouseLeave={() => setOpen(null)}
        >
          {PROGRAMS.map((program, i) => {
            const on = open === i;
            return (
              <SectionReveal key={program.title} delay={i * 45}>
                <button
                  type="button"
                  onClick={() => setOpen(on ? null : i)}
                  onMouseEnter={() => setOpen(i)}
                  className="group block h-full w-full text-left"
                >
                  <SpotlightCard
                    className={`flex h-full flex-col rounded-2xl p-6 transition-all duration-300 ${
                      on ? "border-accent-hot/50 bg-white/[0.04]" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className={`font-display text-4xl transition-colors duration-300 ${
                          on ? "text-accent-ember" : "text-accent-hot"
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <span className="rounded-md bg-accent/15 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-accent-soft">
                        {program.sessionHint}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-3xl tracking-wide text-white">
                      {program.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">
                      {program.detail}
                    </p>
                    <p className="mt-4 text-xs uppercase tracking-[0.16em] text-white/40">
                      Best for · {program.bestFor}
                    </p>

                    <p
                      className={`mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-hot/80 transition-opacity md:hidden ${
                        on ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      Tap for details
                    </p>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        on ? "mt-4 max-h-56 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="space-y-1.5 border-t border-white/10 pt-4">
                        {program.includes.map((item) => (
                          <li key={item} className="text-sm text-white/55">
                            · {item}
                          </li>
                        ))}
                      </ul>
                      <ul className="mt-3 space-y-2">
                        {program.outcomes.map((o) => (
                          <li
                            key={o}
                            className="flex items-center gap-2 text-sm text-white/80"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-accent-hot" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SpotlightCard>
                </button>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
