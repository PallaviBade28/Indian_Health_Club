"use client";

import { useScrollProgress } from "@/hooks/useScrollY";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-white/10 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-accent-deep via-accent-hot to-accent-soft shadow-[0_0_16px_rgba(255,138,20,0.95),0_0_28px_rgba(255,107,0,0.55)] transition-[width] duration-150 ease-out"
        style={{ width: `${Math.max(progress * 100, progress > 0 ? 1.5 : 0)}%` }}
      />
    </div>
  );
}
