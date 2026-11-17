"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { profileData } from "@/content/profile";
import { Badge } from "@/components/ui/badge";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(".hero-status", { opacity: 0, y: 15, duration: 0.6 })
        .from(".hero-pillars", { opacity: 0, y: 15, duration: 0.6 }, "-=0.4")
        .from(".hero-headline", { opacity: 0, y: 20, duration: 0.8 }, "-=0.4")
        .from(".hero-bio", { opacity: 0, y: 15, duration: 0.6 }, "-=0.4")
        .from(".hero-links", { opacity: 0, y: 15, duration: 0.6 }, "-=0.4")
        .from(".hero-portrait", { opacity: 0, scale: 0.98, duration: 0.8 }, "-=0.6");
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex flex-col justify-between pt-12 md:pt-20 pb-16 max-w-7xl mx-auto px-6 md:px-12 lg:px-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center my-auto">
        {/* Left Column: Introduction & Narrative */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          {/* Availability Badge */}
          <div className="hero-status flex items-center gap-3">
            <Badge variant="champagne" className="gap-2 py-1.5 px-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-champagne animate-pulse" />
              <span>{profileData.availability}</span>
            </Badge>
          </div>

          {/* Pillars Cadence */}
          <div className="hero-pillars">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-muted-gold">
              {profileData.pillars.join(" · ")}
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-headline font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground font-normal tracking-tight leading-[1.08]">
            &ldquo;{profileData.headline}&rdquo;
          </h1>

          {/* Introduction Bio */}
          <div className="hero-bio space-y-4 text-foreground-muted text-base sm:text-lg font-sans leading-relaxed max-w-2xl">
            {profileData.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Actions & Verified Channels */}
          <div className="hero-links pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-mono text-xs uppercase tracking-wider font-medium hover:bg-accent-champagne transition-colors"
            >
              <span>Explore Work</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <div className="flex items-center gap-4 border-l border-border pl-4 sm:pl-6">
              {profileData.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-foreground-muted hover:text-accent-champagne transition-colors"
                >
                  <span>{social.platform}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Prominent Hero Portrait */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <div className="hero-portrait relative w-full max-w-sm sm:max-w-md lg:max-w-none aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-background-subtle shadow-2xl">
            <Image
              src="/images/personal/portrait.jpg"
              alt="Abraham Pelumi"
              fill
              priority
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 480px"
              className="object-cover object-top"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Monospace Card Meta */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-foreground-muted backdrop-blur-md bg-background/70 py-2 px-3.5 rounded-lg border border-border/50">
              <span className="text-foreground font-medium">Abraham Pelumi</span>
              <span className="text-accent-champagne">Web3 Ecosystem</span>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Hairline Bottom Indicator */}
      <div className="pt-12 mt-auto flex items-center justify-between text-xs font-mono text-foreground-faint border-t border-border/40">
        <span>Abraham Pelumi / Portfolio</span>
        <span>Scroll to explore ↓</span>
      </div>
    </section>
  );
}
