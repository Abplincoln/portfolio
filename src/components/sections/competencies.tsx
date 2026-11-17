import { competenciesData } from "@/content/competencies";
import { SectionHeading } from "@/components/ui/section-heading";

export function Competencies() {
  return (
    <section id="competencies" className="py-24 md:py-32 border-t border-border max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <SectionHeading
        eyebrow="03 / Areas of Competency"
        title="Disciplines & Capabilities"
        description="Grounded in ecosystem coordination, community engagement, structured campus programs, and practical frontend deployments."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {competenciesData.map((competency, index) => (
          <div
            key={competency.id}
            className="p-7 rounded-xl border border-border bg-background-subtle flex flex-col justify-between space-y-6 hover:border-border-subtle transition-colors"
          >
            <div className="space-y-3">
              <span className="font-mono text-[11px] text-accent-champagne uppercase tracking-widest block">
                0{index + 1}
              </span>
              <h3 className="font-serif text-2xl text-foreground font-normal">
                {competency.title}
              </h3>
              <p className="font-mono text-xs text-accent-muted-gold tracking-wide">
                {competency.descriptor}
              </p>
              <p className="text-foreground-muted text-xs sm:text-sm leading-relaxed font-sans pt-1">
                {competency.description}
              </p>
            </div>

            <div className="pt-4 border-t border-border/40">
              <div className="flex flex-wrap gap-1.5">
                {competency.coreCapabilities.map((cap) => (
                  <span
                    key={cap}
                    className="inline-block px-2.5 py-1 text-[10px] font-mono rounded bg-background border border-border/60 text-foreground-faint"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
