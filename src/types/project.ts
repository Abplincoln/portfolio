export type ProjectCategory = "ecosystem" | "product" | "education";

export interface ProjectLink {
  label: string;
  url: string;
  type?: "live" | "github" | "community" | "docs" | "media";
}

export interface ProjectMetadata {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  role: string;
  timeline?: string;
  organization?: string;
  deploymentStatus?: string;
  featured: boolean;
  coverImage?: string;
  accentColor?: string;
}

export interface CaseStudy {
  meta: ProjectMetadata;
  context: string;
  objective: string;
  actualRole: string;
  personalContributions: string[];
  execution: {
    overview: string;
    keyPhases?: {
      title: string;
      description: string;
    }[];
  };
  visuals?: {
    caption?: string;
    src: string;
    alt: string;
  }[];
  verifiableOutcomes: string[];
  technicalDetails?: {
    stack?: string[];
    architectureNotes?: string;
    repositoryUrl?: string;
  };
  links: ProjectLink[];
  reflections?: string;
}
