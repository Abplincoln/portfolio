export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  handle: string;
  url: string;
  isPrimary?: boolean;
}
