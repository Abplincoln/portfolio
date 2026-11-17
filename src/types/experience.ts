export interface ExperienceRecord {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period?: string;
  isCurrent?: boolean;
  focus: string;
  responsibilities: string[];
  technologiesOrDomains?: string[];
  link?: string;
}
