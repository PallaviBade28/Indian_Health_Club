"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";
import { TRANSFORMATIONS } from "@/lib/content";

function SliderCard({
  name,
  age,
  duration,
  focus,
  trainedBy,
  tag,
  highlight,
  metrics,
  quote,
  beforeLabel,
  afterLabel,
}: (typeof TRANSFORMATIONS)[number]) {
  const [pos, setPos] = useState(52);

  return (
    <SpotlightCard className="card-glow-hover h-full overflow-hidden rounded-2xl p-0">
      <div className="relative aspect-[16/11] select-none touch-none sm:aspect-[16/10]">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-600 via-zinc-900 to-black grayscale" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-3xl tracking-[0.2em] text-white/15">
            {beforeLabel}
          </span>
        </div>

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-flame/70 via-zinc-900 to-black" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-3xl tracking-[0.2em] text-accent-ember/70">
              {afterLabel}
            </span>
          </div>
        </div>

        <div className="absolute inset-y-0 z-[1] w-0.5 bg-white" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-accent text-xs font-bold text-gym-black">
            ⟷
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Before and after slider for ${name}`}
          className="absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0"
        />

        <div className="pointer-events-none absolute left-3 top-3 rounded-md bg-black/55 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-white/75">
          Before
        </div>
        <div className="pointer-events-none absolute right-3 top-3 rounded-md bg-accent-hot px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-gym-black">
          After
        </div>
      </div>

      <div className="space-y-4 px-5 py-5">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-display text-3xl tracking-wide text-white">{name}</h3>
              <span className="rounded-md bg-accent/15 px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-accent-soft">
                {tag}
              </span>
            </div>
            <p className="mt-1 text-sm text-white/50">
              Age {age} · {duration} · {focus}
            </p>
          </div>
          <span className="rounded-md border border-accent-hot/40 bg-accent/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-accent-hot">
            {trainedBy}
          </span>
        </div>

        <p className="rounded-lg border border-accent/20 bg-accent/10 px-3 py-2 text-sm font-medium text-accent-soft">
          {highlight}
        </p>

        <div className="grid grid-cols-2 gap-2.5">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
                {m.label}
              </p>
              <p className="mt-1 text-xs text-white/45">
                <span className="line-through">{m.from}</span>
              </p>
              <p className="text-sm text-accent-hot">
                {m.to}{" "}
                <span className="text-[11px] text-accent-ember">({m.delta})</span>
              </p>
            </div>
          ))}
        </div>

        <p className="text-sm italic leading-relaxed text-white/60">“{quote}”</p>
      </div>
    </SpotlightCard>
  );
}

export default function BeforeAfterSection() {
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const [pageSize, setPageSize] = useState(1);
  const totalPages = Math.ceil(TRANSFORMATIONS.length / pageSize);
  const slice = TRANSFORMATIONS.slice(page * pageSize, page * pageSize + pageSize);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => {
      setPageSize(mq.matches ? 2 : 1);
      setPage(0);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (paused || totalPages <= 1) return;
    const id = window.setInterval(() => {
      setDirection(1);
      setPage((p) => (p + 1) % totalPages);
    }, 5200);
    return () => window.clearInterval(id);
  }, [paused, totalPages]);

  const go = (next: number, dir: number) => {
    setDirection(dir);
    setPage(next);
  };

  return (
    <section id="transformations" className="section-pad section-veil px-5 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="Transformations"
            title="Real work."
            accent="Real results."
            glowAccent
            support="Auto-rotates member stories — tap/hold area or use arrows to browse."
          />
        </SectionReveal>

        <div
          className="relative mt-10 overflow-x-clip"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div className="overflow-hidden" style={{ perspective: 1100 }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={{
                  enter: (dir: number) => ({
                    x: dir * 90,
                    opacity: 0,
                    rotateY: dir * 8,
                  }),
                  center: { x: 0, opacity: 1, rotateY: 0 },
                  exit: (dir: number) => ({
                    x: dir * -90,
                    opacity: 0,
                    rotateY: dir * -8,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-6 md:grid-cols-2"
              >
                {slice.map((item) => (
                  <SliderCard key={item.name} {...item} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            aria-label="Previous transformations"
            onClick={() => go((page - 1 + totalPages) % totalPages, -1)}
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/75 text-white backdrop-blur-sm transition-colors hover:border-accent-hot hover:text-accent-hot md:left-0 md:h-11 md:w-11 md:-translate-x-full"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next transformations"
            onClick={() => go((page + 1) % totalPages, 1)}
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/75 text-white backdrop-blur-sm transition-colors hover:border-accent-hot hover:text-accent-hot md:right-0 md:h-11 md:w-11 md:translate-x-full"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-5 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show page ${i + 1}`}
                onClick={() => go(i, i > page ? 1 : -1)}
                className={`h-1.5 rounded-full transition-all ${
                  page === i ? "w-8 bg-accent-hot" : "w-3 bg-white/25 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
