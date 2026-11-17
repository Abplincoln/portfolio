import Image from "next/image";
import { impactData } from "@/content/impact";
import { SectionHeading } from "@/components/ui/section-heading";

export function SelectedContributions() {
  return (
    <section id="contributions" className="py-24 md:py-32 border-t border-border bg-background-subtle/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-12">
        <SectionHeading
          eyebrow="02 / Selected Contributions"
          title={impactData.sectionTitle}
          description={impactData.overview}
          className="mb-0"
        />

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactData.areas.map((area, index) => (
            <div
              key={area.id}
              className="p-8 rounded-xl border border-border bg-background-subtle flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <span className="font-mono text-xs text-accent-champagne uppercase tracking-widest block">
                  0{index + 1}
                </span>
                <h3 className="font-serif text-2xl text-foreground font-normal">
                  {area.pillar}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed font-sans">
                  {area.summary}
                </p>

                <ul className="space-y-2.5 pt-2 text-xs font-mono text-foreground-faint">
                  {area.keyContributions.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent-champagne mt-0.5">•</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {area.initiatives.length > 0 && (
                <div className="pt-4 border-t border-border/40 font-mono text-[11px] text-accent-muted-gold">
                  <span>Scope: {area.initiatives[0].scope}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Verified Event / Workshop Photograph */}
        <div className="pt-4">
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-2xl overflow-hidden border border-border bg-background-subtle shadow-xl">
            <Image
              src="/images/events/community.jpg"
              alt="Developer workshop session, Ogbomoso"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-foreground-muted backdrop-blur-md bg-background/70 py-2 px-4 rounded-lg border border-border/50">
              <span className="text-foreground font-medium">Developer Workshop Session</span>
              <span className="text-accent-muted-gold">Ogbomoso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
