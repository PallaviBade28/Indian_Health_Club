"use client";

import { useEffect, useState } from "react";

/**
 * Desktop (md+) gets scroll-scrub video.
 * Phones/tablets portrait width stay on a sharp static poster — Android
 * seeks + fixed video are what made the background look broken.
 */
export function useIsDesktopHero() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return isDesktop;
}
