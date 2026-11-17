"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function Statement() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!prefersReducedMotion) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, [prefersReducedMotion]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section className="py-24 md:py-32 border-t border-border bg-background-subtle/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-16">
        {/* Top Editorial Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-champagne block mb-2">
              Focus & Approach
            </span>
            <h2 className="font-sans text-sm font-medium tracking-tight text-foreground-faint uppercase">
              Connecting People, Ecosystems & Products
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground font-normal leading-[1.3] tracking-tight">
              Scaling decentralized initiatives requires both human alignment and practical execution—supporting community members, coordinating with partners, and shipping functional tools that solve real needs.
            </blockquote>
            <p className="text-foreground-muted text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-2xl">
              From campus educational programs to ecosystem operations and direct application deployments across the Bohr testnet and BOT Chain, my work bridges community coordination with hands-on development.
            </p>
          </div>
        </div>

        {/* Media Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-border/40">
          {/* Left: Community Engagement Photograph (portrait-2.JPG) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden border border-border bg-background-subtle shadow-xl">
              <Image
                src="/images/personal/portrait-2.JPG"
                alt="Abraham Pelumi speaking at a community gathering"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 720px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-foreground-muted backdrop-blur-md bg-background/70 py-1.5 px-3 rounded-md border border-border/50">
                <span className="text-foreground">Speaking & Community Engagement</span>
                <span className="text-accent-muted-gold">In-Person Session</span>
              </div>
            </div>
            <p className="text-[11px] font-mono text-foreground-faint">
              Facilitating interactive discussions and engaging with emerging builders.
            </p>
          </div>

          {/* Right: Working Video in Vertical 9:16 Aspect Ratio */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-3">
            <div className="relative aspect-[9/16] w-full max-w-[280px] sm:max-w-[300px] rounded-2xl overflow-hidden border border-border bg-background shadow-2xl group">
              <video
                ref={videoRef}
                src="/images/editorial/working.mp4"
                playsInline
                loop
                muted={isMuted}
                preload="metadata"
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Gradient Overlay for Controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20 pointer-events-none" />

              {/* Accessible Controls Bar */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between backdrop-blur-md bg-background/80 p-2 rounded-lg border border-border/60">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="p-1.5 rounded-md hover:bg-background-elevated text-foreground transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 text-accent-champagne" />
                  ) : (
                    <Play className="w-4 h-4 text-foreground" />
                  )}
                </button>

                <span className="text-[10px] font-mono text-foreground-faint tracking-wider uppercase">
                  Working Footage
                </span>

                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  className="p-1.5 rounded-md hover:bg-background-elevated text-foreground transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-foreground-muted" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-accent-champagne" />
                  )}
                </button>
              </div>
            </div>

            <p className="text-[11px] font-mono text-foreground-faint text-center lg:text-right max-w-[280px]">
              Hands-on development and interface execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
