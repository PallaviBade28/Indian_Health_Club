"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_VIDEO_CANDIDATES, HERO_VIDEO_FALLBACK } from "@/lib/theme";
import { useScrollScrubVideo } from "@/hooks/useScrollScrubVideo";

const ALL_SOURCES = [...HERO_VIDEO_CANDIDATES, HERO_VIDEO_FALLBACK];

function AtmosphericOrbs() {
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);
  const [sourceIndex, setSourceIndex] = useState(0);
  const [videoReady, setVideoReady] = useState(false);

  const videoSrc = ALL_SOURCES[sourceIndex] ?? HERO_VIDEO_FALLBACK;

  useEffect(() => {
    setMounted(true);
  }, []);

  useScrollScrubVideo(videoRef, mounted && videoReady);

  const handleVideoError = () => {
    setVideoReady(false);
    if (sourceIndex < ALL_SOURCES.length - 1) {
      setSourceIndex((i) => i + 1);
    }
  };

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

      {mounted && (
        <video
          key={videoSrc}
          ref={videoRef}
          src={videoSrc}
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
          onCanPlayThrough={markReady}
          onError={handleVideoError}
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
