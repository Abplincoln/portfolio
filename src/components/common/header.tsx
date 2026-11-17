"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profileData } from "@/content/profile";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Contributions", href: "#contributions" },
  { label: "Competencies", href: "#competencies" },
  { label: "Experience", href: "#experience" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/80 border-b border-border/60 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-20 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="group flex flex-col focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-champagne rounded-sm"
        >
          <span className="font-serif text-xl md:text-2xl text-foreground font-normal tracking-tight group-hover:text-accent-champagne transition-colors">
            {profileData.name}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-foreground-faint">
            Web3 Ecosystem
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-8 text-sm font-sans"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground-muted hover:text-foreground transition-colors font-medium text-xs uppercase tracking-wider font-mono"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-border hover:border-accent-champagne/60 text-xs font-mono text-accent-champagne transition-all hover:bg-background-elevated"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 text-foreground-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-champagne rounded"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background px-6 py-8 space-y-6 animate-in fade-in duration-200">
          <nav aria-label="Mobile" className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-foreground-muted hover:text-foreground font-mono tracking-wide py-1 border-b border-border/40"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-between pt-2 text-base text-accent-champagne font-mono"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
