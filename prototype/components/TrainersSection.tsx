"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";
import { TRAINERS } from "@/lib/content";

export default function TrainersSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const coach = TRAINERS[active];

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setDirection(1);
      setActive((i) => (i + 1) % TRAINERS.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [paused]);

  const go = (nextIndex: number, dir: number) => {
    setDirection(dir);
    setActive(nextIndex);
  };

  const prev = () => go((active - 1 + TRAINERS.length) % TRAINERS.length, -1);
  const next = () => go((active + 1) % TRAINERS.length, 1);

  return (
    <section id="trainers" className="section-pad section-veil px-5 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="Elite coaches"
            title="Meet the people behind"
            accent="your progress"
            glowAccent
            support="Auto-rotates with a slide — hover to pause. Use arrows to browse."
          />
        </SectionReveal>

        <SectionReveal delay={80}>
          <div
            className="relative mt-10"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <SpotlightCard className="overflow-hidden rounded-2xl p-0">
              <div
                className="relative min-h-[420px] overflow-hidden lg:min-h-[440px]"
                style={{ perspective: 1100 }}
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={coach.name}
                    custom={direction}
                    variants={{
                      enter: (dir: number) => ({
                        x: dir * 100,
                        opacity: 0,
                        rotateY: dir * 10,
                      }),
                      center: { x: 0, opacity: 1, rotateY: 0 },
                      exit: (dir: number) => ({
                        x: dir * -100,
                        opacity: 0,
                        rotateY: dir * -10,
                      }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="grid lg:grid-cols-[0.9fr_1.1fr]"
                  >
                    <div className="relative min-h-[260px] bg-gradient-to-br from-zinc-700 via-zinc-950 to-black lg:min-h-[440px]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,138,20,0.25),transparent_55%)]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-display text-[7rem] text-white/10 md:text-[9rem]">
                          {coach.initials}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
                        <p className="text-xs uppercase tracking-[0.22em] text-accent-hot">
                          {coach.role}
                        </p>
                        <h3 className="mt-1 font-display text-4xl tracking-wide text-white">
                          {coach.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center p-6 md:p-9">
                      <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.16em] text-white/45">
                        <span className="rounded-md border border-accent-hot/40 px-3 py-1.5 text-accent-hot">
                          {coach.years}
                        </span>
                        <span className="rounded-md border border-white/15 px-3 py-1.5">
                          {coach.focus}
                        </span>
                      </div>

                      <p className="mt-5 text-base leading-relaxed text-white/70">{coach.bio}</p>

                      <p className="mt-5 text-xs uppercase tracking-[0.2em] text-white/35">
                        Specialties
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {coach.specialties.map((s) => (
                          <li
                            key={s}
                            className="rounded-md bg-white/8 px-3 py-1.5 text-sm text-white/75"
                          >
                            {s}
                          </li>
                        ))}
                      </ul>

                      <p className="mt-6 border-l-2 border-accent-hot pl-4 text-sm italic text-white/60">
                        “{coach.quote}”
                      </p>

                      <div className="mt-6 flex items-center gap-2">
                        {TRAINERS.map((_, i) => (
                          <button
                            key={i}
                            type="button"
                            aria-label={`Show coach ${i + 1}`}
                            onClick={() => go(i, i > active ? 1 : -1)}
                            className={`h-1.5 rounded-full transition-all ${
                              active === i ? "w-8 bg-accent-hot" : "w-3 bg-white/25"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </SpotlightCard>

            <button
              type="button"
              aria-label="Previous coach"
              onClick={prev}
              className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/70 text-white backdrop-blur-sm transition-colors hover:border-accent-hot hover:text-accent-hot md:-left-5"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next coach"
              onClick={next}
              className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/70 text-white backdrop-blur-sm transition-colors hover:border-accent-hot hover:text-accent-hot md:-right-5"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
