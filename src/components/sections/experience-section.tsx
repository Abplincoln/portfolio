import { ArrowUpRight } from "lucide-react";
import { experienceData } from "@/content/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border bg-background-subtle/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <SectionHeading
          eyebrow="04 / Professional Experience"
          title="Roles & Involvements"
          description="Documented responsibilities across Web3 ecosystem operations, student community programs, and communication management."
        />

        <div className="space-y-6">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="p-8 rounded-xl border border-border bg-background-subtle transition-all hover:border-border-subtle"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-border/40 pb-6 mb-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif text-2xl sm:text-3xl text-foreground font-normal">
                      {exp.role}
                    </h3>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-champagne hover:opacity-80 transition-opacity"
                        aria-label={`Visit ${exp.organization}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <p className="font-mono text-sm text-accent-muted-gold">
                    {exp.organization}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="text-[11px]">
                    {exp.focus}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-8">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-foreground-muted font-sans leading-relaxed">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-accent-champagne mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.technologiesOrDomains && exp.technologiesOrDomains.length > 0 && (
                  <div className="md:col-span-4 flex flex-wrap gap-1.5 md:justify-end">
                    {exp.technologiesOrDomains.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] font-mono rounded bg-background border border-border text-foreground-faint"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
