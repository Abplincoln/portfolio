import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/content/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";

export function SelectedWork() {
  const productProjects = projectsData.filter((p) => p.meta.category === "product");
  const ecosystemProjects = projectsData.filter((p) => p.meta.category !== "product");

  return (
    <section id="work" className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <SectionHeading
        eyebrow="01 / Selected Work"
        title="Products & Ecosystem Initiatives"
        description="A curated overview of hands-on web applications deployed across BOT Chain and the Bohr testnet, alongside verified ecosystem and campus program roles."
      />

      {/* Part A: Hands-on Applications Built */}
      <div className="space-y-6 mb-20">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground font-normal">
              Applications Built & Deployed
            </h3>
            <p className="text-xs font-mono text-foreground-faint uppercase tracking-wider">
              Hands-on Product Development & Interface Builds
            </p>
          </div>
          <Badge variant="champagne" className="text-[10px]">
            4 Applications
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {productProjects.map((project) => {
            const liveLink = project.links.find((l) => l.type === "live");

            return (
              <article
                key={project.meta.slug}
                className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-background-subtle border border-border hover:border-border-subtle transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-serif text-2xl sm:text-3xl text-foreground font-normal group-hover:text-accent-champagne transition-colors">
                      {project.meta.title}
                    </span>
                    {project.meta.deploymentStatus && (
                      <Badge variant="champagne" className="text-[10px] shrink-0">
                        {project.meta.deploymentStatus}
                      </Badge>
                    )}
                  </div>

                  <p className="text-foreground-muted text-sm sm:text-base leading-relaxed font-sans">
                    {project.meta.tagline}
                  </p>

                  <div className="pt-2 text-xs font-mono text-foreground-faint space-y-1">
                    <p>
                      <span className="text-foreground-muted">Role:</span> {project.actualRole}
                    </p>
                    <p>
                      <span className="text-foreground-muted">Scope:</span> {project.personalContributions.join(" · ")}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border/40 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-foreground-faint uppercase">
                    {project.meta.categoryLabel}
                  </span>

                  {liveLink ? (
                    <a
                      href={liveLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-accent-champagne hover:underline"
                    >
                      <span>Launch App</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-foreground-faint">
                      Testnet Deployment
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Part B: Ecosystem & Community Work */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground font-normal">
              Ecosystem & Program Roles
            </h3>
            <p className="text-xs font-mono text-foreground-faint uppercase tracking-wider">
              Partnerships, Campus Education & Contributor Initiatives
            </p>
          </div>
          <Badge variant="outline" className="text-[10px]">
            3 Organizations
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {ecosystemProjects.map((project) => {
            const liveLink = project.links.find((l) => l.type === "live");

            return (
              <article
                key={project.meta.slug}
                className="group flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-background-subtle border border-border hover:border-border-subtle transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-serif text-xl sm:text-2xl text-foreground font-normal group-hover:text-accent-champagne transition-colors">
                      {project.meta.title}
                    </span>
                    <Badge variant="outline" className="text-[10px] shrink-0">
                      {project.meta.categoryLabel}
                    </Badge>
                  </div>

                  <p className="text-foreground-muted text-xs sm:text-sm leading-relaxed font-sans">
                    {project.meta.tagline}
                  </p>

                  <div className="pt-2 text-xs font-mono text-foreground-faint">
                    <p>
                      <span className="text-foreground-muted">Role:</span> {project.actualRole}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-border/40 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-foreground-faint">
                    {project.meta.organization}
                  </span>

                  {liveLink ? (
                    <a
                      href={liveLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-accent-champagne hover:underline"
                    >
                      <span>Visit</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-foreground-faint">
                      Verified Initiative
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
