"use client";

/**
 * Sparks follow the L→R swipe with light jitter.
 * First ~12 show on all viewports; extras are desktop-only (small).
 */
const CYCLE = 1.35;
const SWIPE_START = 0.28;

const SPARKS = [
  /* Core set — mobile + desktop */
  { left: "8%", top: "30%", size: 2.5 },
  { left: "18%", top: "58%", size: 2 },
  { left: "28%", top: "22%", size: 3 },
  { left: "38%", top: "64%", size: 2 },
  { left: "48%", top: "28%", size: 2.5 },
  { left: "58%", top: "52%", size: 2 },
  { left: "68%", top: "20%", size: 3 },
  { left: "78%", top: "60%", size: 2.5 },
  { left: "88%", top: "34%", size: 2 },
  { left: "95%", top: "55%", size: 2.5 },
  { left: "42%", top: "44%", size: 2 },
  { left: "82%", top: "42%", size: 2 },
  /* Desktop extras — small only */
  { left: "12%", top: "42%", size: 1.5, desktop: true },
  { left: "22%", top: "18%", size: 1.5, desktop: true },
  { left: "32%", top: "48%", size: 1.5, desktop: true },
  { left: "45%", top: "16%", size: 1.5, desktop: true },
  { left: "52%", top: "68%", size: 1.5, desktop: true },
  { left: "62%", top: "36%", size: 1.5, desktop: true },
  { left: "72%", top: "48%", size: 1.5, desktop: true },
  { left: "85%", top: "22%", size: 1.5, desktop: true },
  { left: "92%", top: "62%", size: 1.5, desktop: true },
  { left: "15%", top: "68%", size: 1.25, desktop: true },
  { left: "35%", top: "35%", size: 1.25, desktop: true },
  { left: "55%", top: "24%", size: 1.25, desktop: true },
  { left: "75%", top: "30%", size: 1.25, desktop: true },
  { left: "90%", top: "48%", size: 1.25, desktop: true },
  { left: "25%", top: "55%", size: 1.5, desktop: true },
  { left: "65%", top: "70%", size: 1.25, desktop: true },
  { left: "98%", top: "38%", size: 1.5, desktop: true },
] as const;

function swipeDelay(leftPct: string, index: number) {
  const x = Math.min(100, Math.max(0, parseFloat(leftPct))) / 100;
  const jitter = ((index * 19) % 5) * 0.018;
  const t = Math.min(0.7, SWIPE_START + x * 0.3 + jitter);
  return `${t * CYCLE}s`;
}

/** Electric charge — natural crackle; denser small sparks on desktop */
export default function ChargePulseWord({ word }: { word: string }) {
  const letters = word.split("");

  return (
    <span className="charge-word relative inline-block">
      <span className="charge-word__aura" aria-hidden />

      <span className="charge-word__core relative z-[2]">
        {letters.map((ch, i) => (
          <span
            key={`${ch}-${i}`}
            className="charge-word__letter inline-block"
            style={{ animationDelay: `${i * 0.04}s` }}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </span>

      <span className="charge-word__sweep" aria-hidden />
      <span className="charge-word__crackle" aria-hidden />

      <span
        className="charge-word__sparks pointer-events-none absolute inset-[-28%_-10%] z-[3]"
        aria-hidden
      >
        {SPARKS.map((s, i) => (
          <span
            key={i}
            className={`charge-spark ${i % 5 === 0 ? "charge-spark--cool" : ""} ${
              "desktop" in s && s.desktop ? "charge-spark--desktop" : ""
            }`}
            style={{
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              animationDelay: swipeDelay(s.left, i),
            }}
          />
        ))}
      </span>
    </span>
  );
}
