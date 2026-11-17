import { ArrowUpRight } from "lucide-react";
import { profileData } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16 text-foreground-muted">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <span className="font-serif text-2xl text-foreground font-normal block mb-1">
            {profileData.name}
          </span>
          <p className="font-mono text-xs text-foreground-faint max-w-sm">
            {profileData.headline}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center gap-6">
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

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-foreground-faint">
        <p>© 2026 {profileData.name}. All rights reserved.</p>
        <p className="tracking-wider uppercase">
          {profileData.pillars.join(" · ")}
        </p>
      </div>
    </footer>
  );
}
