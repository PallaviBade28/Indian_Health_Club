"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const [displayed, setDisplayed] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const match = value.match(/^([\d.]+)(\+?)$/);
    if (!match) {
      setDisplayed(value);
      return;
    }
    const target = parseFloat(match[1]);
    const suffix = match[2];

    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return;
        hasRun.current = true;
        obs.disconnect();

        const duration = 1400;
        const startTime = performance.now();

        const tick = (now: number) => {
          const raw = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - raw, 3);
          const current = eased * target;
          const rounded =
            target % 1 === 0 ? Math.round(current) : Math.round(current * 10) / 10;
          setDisplayed(rounded.toString() + suffix);
          if (raw < 1) requestAnimationFrame(tick);
          else setDisplayed(target.toString() + suffix);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="accent-glow-text mb-1 font-display text-5xl tabular-nums text-accent-hot sm:text-6xl">
        {displayed}
      </div>
      <div className="text-xs uppercase tracking-[0.2em] text-white/55 sm:text-sm">
        {label}
      </div>
    </div>
  );
}
