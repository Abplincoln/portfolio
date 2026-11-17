import { SocialLink } from "@/types/navigation";

export interface Profile {
  name: string;
  headline: string;
  pillars: string[];
  bio: string[];
  availability: string;
  email?: string;
  socials: SocialLink[];
}

export const profileData: Profile = {
  name: "Abraham Pelumi",
  headline: "Building within the Web3 ecosystem.",
  pillars: ["Community", "Ecosystems", "Products", "People"],
  bio: [
    "I'm a Web3 ecosystem contributor working across community management, partnerships, program management, education and hands-on product development.",
    "My work spans ecosystem initiatives, community operations and building practical applications, with a particular interest in privacy technology and the growth of Web3.",
  ],
  availability: "Open to ecosystem operations, community, program management & product collaborations",
  socials: [
    {
      platform: "X / Twitter",
      handle: "@Abrahampelumi7",
      url: "https://x.com/Abrahampelumi7",
      isPrimary: true,
    },
    {
      platform: "GitHub",
      handle: "Abplincoln",
      url: "https://github.com/Abplincoln",
      isPrimary: true,
    },
    {
      platform: "Telegram",
      handle: "@abplincoln",
      url: "https://t.me/abplincoln",
      isPrimary: true,
    },
  ],
};
