"use client";

import { useEffect, useRef, type RefObject } from "react";

/** Higher = snappier scrub; lower = smoother but laggier */
const SMOOTH_FACTOR = 0.22;
/**
 * Min seconds between seeks. Keep small once video has frequent keyframes
 * (re-encode with -g 12) so scrub feels closer to 30–60fps.
 */
const MIN_SEEK_DELTA = 0.016;

export function useScrollScrubVideo(
  videoRef: RefObject<HTMLVideoElement | null>,
  ready: boolean
) {
  const targetRef = useRef(0);
  const smoothRef = useRef(0);
  const lastSeekRef = useRef(-1);
  const seekingRef = useRef(false);

  useEffect(() => {
    if (!ready) return;
    const video = videoRef.current;
    if (!video) return;

    let raf = 0;
    let running = true;

    const getProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      return max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    };

    const onSeeked = () => {
      seekingRef.current = false;
    };
    video.addEventListener("seeked", onSeeked);

    const seekTo = (time: number) => {
      if (!video.duration || !Number.isFinite(video.duration)) return;
      if (seekingRef.current && video.readyState < 3) return;

      const clamped = Math.min(Math.max(0, time), Math.max(0, video.duration - 0.05));
      if (Math.abs(clamped - lastSeekRef.current) < MIN_SEEK_DELTA) return;

      lastSeekRef.current = clamped;
      seekingRef.current = true;

      if (typeof video.fastSeek === "function") {
        try {
          video.fastSeek(clamped);
          return;
        } catch {
          /* fall through */
        }
      }
      video.currentTime = clamped;
    };

    const tick = () => {
      if (!running) return;

      targetRef.current = getProgress();
      smoothRef.current += (targetRef.current - smoothRef.current) * SMOOTH_FACTOR;

      if (video.duration && Number.isFinite(video.duration)) {
        seekTo(smoothRef.current * video.duration);
      }

      raf = requestAnimationFrame(tick);
    };

    const onReady = () => {
      video.pause();
      try {
        // Hint browsers to keep more of the file decoded for scrubbing
        video.preload = "auto";
      } catch {
        /* ignore */
      }
      const p = getProgress();
      targetRef.current = p;
      smoothRef.current = p;
      lastSeekRef.current = -1;
      seekingRef.current = false;
      seekTo(p * (video.duration || 0));
      raf = requestAnimationFrame(tick);
    };

    if (video.readyState >= 1) onReady();
    else video.addEventListener("loadedmetadata", onReady, { once: true });

    const onResize = () => {
      targetRef.current = getProgress();
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      running = false;
      window.removeEventListener("resize", onResize);
      video.removeEventListener("seeked", onSeeked);
      cancelAnimationFrame(raf);
    };
  }, [videoRef, ready]);
}
