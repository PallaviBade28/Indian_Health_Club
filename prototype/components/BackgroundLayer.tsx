"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_POSTER, HERO_VIDEO_SRC } from "@/lib/theme";
import { useIsDesktopHero } from "@/hooks/useIsDesktopHero";
import { useScrollScrubVideo } from "@/hooks/useScrollScrubVideo";

function AtmosphericOrbs({ mobile }: { mobile: boolean }) {
  if (mobile) {
    return (
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute -top-24 left-[-20%] h-[320px] w-[320px] rounded-full bg-accent-flame/22 blur-[48px]" />
        <div className="absolute bottom-[-8%] right-[-15%] h-[280px] w-[280px] rounded-full bg-accent-ember/14 blur-[40px]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0" aria-hidden>
      <div className="absolute -top-40 -left-40 h-[560px] w-[560px] rounded-full bg-accent-flame/30 blur-[130px] animate-orb-drift-1" />
      <div className="absolute top-[20%] -right-32 h-[500px] w-[500px] rounded-full bg-accent-coal/22 blur-[110px] animate-orb-drift-2" />
      <div className="absolute bottom-[-10%] left-[15%] h-[440px] w-[440px] rounded-full bg-accent-ember/16 blur-[100px] animate-orb-drift-3" />
      <div className="absolute top-[48%] left-[58%] h-[300px] w-[300px] rounded-full bg-accent/14 blur-[100px] animate-orb-drift-2" />
    </div>
  );
}

export default function BackgroundLayer() {
  const isDesktop = useIsDesktopHero();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  // Only desktop loads / scrubs the video — mobile keeps the sharp poster
  useEffect(() => {
    if (!isDesktop) {
      setLoadVideo(false);
      setVideoReady(false);
      return;
    }

    let cancelled = false;
    let idleId = 0;
    let timeoutId = 0;

    const start = () => {
      if (!cancelled) setLoadVideo(true);
    };

    const ric = window.requestIdleCallback;
    if (typeof ric === "function") {
      idleId = ric(start, { timeout: 900 });
    } else {
      timeoutId = window.setTimeout(start, 180);
    }

    return () => {
      cancelled = true;
      if (idleId && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [isDesktop]);

  useScrollScrubVideo(videoRef, isDesktop && loadVideo && videoReady);

  const handleMetadata = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const markReady = () => setVideoReady(true);
  const showVideo = isDesktop && videoReady;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 h-[100dvh] w-full overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gym-black">
        <AtmosphericOrbs mobile={!isDesktop} />
      </div>

      {/* Mobile: permanent sharp still. Desktop: still until scrub video is ready. */}
      <img
        src={HERO_POSTER}
        alt=""
        width={1280}
        height={720}
        decoding="async"
        fetchPriority="high"
        className={`absolute inset-0 h-full w-full object-cover object-[center_28%] transition-opacity duration-700 md:object-center ${
          showVideo ? "opacity-0" : "opacity-90 md:opacity-85"
        }`}
      />

      {isDesktop && loadVideo && (
        <video
          ref={videoRef}
          src={HERO_VIDEO_SRC}
          poster={HERO_POSTER}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 will-change-[opacity] ${
            showVideo ? "opacity-85" : "opacity-0"
          }`}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          suppressHydrationWarning
          onLoadedMetadata={handleMetadata}
          onLoadedData={markReady}
          onCanPlay={markReady}
          onError={() => setVideoReady(false)}
        />
      )}

      {/* Stronger veil on mobile so text stays readable over cropped portrait still */}
      <div
        className={`absolute inset-0 transition-colors duration-700 ${
          showVideo
            ? "bg-black/30"
            : "bg-black/50 md:bg-black/40"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gym-black/45 via-transparent to-gym-black/90 md:from-gym-black/20 md:to-gym-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-gym-black/55 via-transparent to-gym-black/45 md:from-gym-black/35 md:to-gym-black/30" />
      <div className="absolute inset-0 hidden bg-grain opacity-[0.045] md:block" />
    </div>
  );
}
