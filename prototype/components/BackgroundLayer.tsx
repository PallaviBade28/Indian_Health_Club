"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_POSTER, HERO_VIDEO_SRC } from "@/lib/theme";
import { useScrollScrubVideo } from "@/hooks/useScrollScrubVideo";

function AtmosphericOrbs() {
  return (
    <div className="absolute inset-0" aria-hidden>
      <div className="absolute -top-40 -left-40 h-[560px] w-[560px] rounded-full bg-accent-flame/30 blur-[130px] max-md:blur-[90px] animate-orb-drift-1" />
      <div className="absolute top-[20%] -right-32 h-[500px] w-[500px] rounded-full bg-accent-coal/22 blur-[110px] max-md:hidden animate-orb-drift-2" />
      <div className="absolute bottom-[-10%] left-[15%] h-[440px] w-[440px] rounded-full bg-accent-ember/16 blur-[100px] max-md:blur-[80px] animate-orb-drift-3" />
      <div className="absolute top-[48%] left-[58%] h-[300px] w-[300px] rounded-full bg-accent/14 blur-[100px] max-md:hidden animate-orb-drift-2" />
    </div>
  );
}

export default function BackgroundLayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  // Paint poster + UI first; attach video on idle / shortly after mount
  useEffect(() => {
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
  }, []);

  useScrollScrubVideo(videoRef, loadVideo && videoReady);

  const handleMetadata = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const markReady = () => setVideoReady(true);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute inset-0 bg-gym-black">
        <AtmosphericOrbs />
      </div>

      {/* Instant visual shell — sharp still while video boots */}
      <img
        src={HERO_POSTER}
        alt=""
        width={1280}
        height={720}
        decoding="async"
        fetchPriority="high"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-85"
        }`}
      />

      {loadVideo && (
        <video
          ref={videoRef}
          src={HERO_VIDEO_SRC}
          poster={HERO_POSTER}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 will-change-[opacity] ${
            videoReady ? "opacity-85" : "opacity-0"
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

      <div
        className={`absolute inset-0 transition-colors duration-700 ${
          videoReady ? "bg-black/35 md:bg-black/30" : "bg-black/45 md:bg-black/40"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gym-black/20 via-transparent to-gym-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-gym-black/35 via-transparent to-gym-black/30" />
      <div className="absolute inset-0 bg-grain opacity-[0.045]" />
    </div>
  );
}
