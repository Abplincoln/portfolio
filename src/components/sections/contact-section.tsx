import { ArrowUpRight } from "lucide-react";
import { profileData } from "@/content/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="05 / Contact"
            title="Let's Connect"
            description="Open to strategic ecosystem operations, community initiatives, program management, and practical Web3 product collaborations."
            className="mb-8"
          />

          <div className="flex items-center gap-2 mb-8">
            <span className="h-2 w-2 rounded-full bg-accent-champagne animate-pulse" />
            <span className="font-mono text-xs text-foreground-muted">
              {profileData.availability}
            </span>
          </div>

          <p className="text-foreground-muted text-sm sm:text-base leading-relaxed max-w-xl">
            Whether exploring an ecosystem collaboration, developer initiative, or discussing decentralized applications, feel free to reach out directly through any of my confirmed channels.
          </p>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="p-8 rounded-xl border border-border bg-background-subtle space-y-6">
            <h3 className="font-serif text-xl text-foreground font-normal">
              Direct Channels
            </h3>

            <div className="space-y-3">
              {profileData.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg bg-background border border-border/80 hover:border-accent-champagne/60 text-foreground transition-all group"
                >
                  <div className="space-y-0.5">
                    <span className="font-mono text-xs text-accent-champagne block">
                      {social.platform}
                    </span>
                    <span className="text-sm font-sans text-foreground-muted group-hover:text-foreground transition-colors">
                      {social.handle}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-foreground-faint group-hover:text-accent-champagne transition-colors" />
                </a>
              ))}
            </div>

            <div className="pt-2">
              <Badge variant="subtle" className="text-[10px] w-full justify-center py-2">
                Verified Social Profiles
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
