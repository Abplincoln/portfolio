import { NavItem } from "@/types/navigation";

export interface RouteConfig {
  name: string;
  path: string;
  purpose: string;
  inHeader: boolean;
  inFooter: boolean;
}

export const siteRoutes: RouteConfig[] = [
  {
    name: "Home",
    path: "/",
    purpose:
      "Introduction, headline, selected initiatives, competencies, and contributions summary.",
    inHeader: true,
    inFooter: true,
  },
  {
    name: "About",
    path: "/about",
    purpose:
      "Background, journey, and community-first approach in Web3.",
    inHeader: true,
    inFooter: true,
  },
  {
    name: "Projects",
    path: "/projects",
    purpose:
      "Catalog of work across ecosystem operations, campus education, and deployed Web3 applications.",
    inHeader: true,
    inFooter: true,
  },
  {
    name: "Experience",
    path: "/experience",
    purpose:
      "Documented roles across Gleyo, Blockchain Club LAUTECH, ZecForge, and JTConnect.",
    inHeader: true,
    inFooter: true,
  },
  {
    name: "Contact",
    path: "/contact",
    purpose:
      "Direct communication channels via X / Twitter, GitHub, and Telegram.",
    inHeader: true,
    inFooter: true,
  },
];

export const headerNavLinks: NavItem[] = siteRoutes
  .filter((route) => route.inHeader && route.path !== "/")
  .map((route) => ({
    label: route.name,
    href: route.path,
  }));

export const footerNavLinks: NavItem[] = siteRoutes
  .filter((route) => route.inFooter)
  .map((route) => ({
    label: route.name,
    href: route.path,
  }));
