"use client";

import { MARQUEE_ITEMS } from "@/lib/content";

export default function MarqueeStrip() {
  const loop = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  const tones = [
    "text-accent",
    "text-accent-hot",
    "text-accent-ember",
    "text-accent-flame",
  ];

  return (
    <section
      aria-label="Highlights marquee"
      className="relative overflow-hidden border-y border-accent/40 bg-black py-5"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,59,0,0.14),transparent_65%)]" />
      <div className="live-shimmer-border pointer-events-none absolute inset-x-0 top-0 h-px opacity-80" />
      <div className="live-shimmer-border pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-80" />

      <div className="animate-marquee relative flex w-max gap-10 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`font-display text-2xl tracking-[0.16em] md:text-3xl ${tones[i % tones.length]}`}
          >
            <span className="text-accent-ember/50">◆</span> {item}
          </span>
        ))}
      </div>
    </section>
  );
}
