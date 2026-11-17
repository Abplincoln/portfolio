import { ImpactContent } from "@/types/impact";

export const impactData: ImpactContent = {
  sectionTitle: "Selected Contributions",
  sectionSubtitle: "Documented Work Across Ecosystems, Programs & Products",
  overview:
    "A record of specific contributions across ecosystem initiatives, community coordination, and deployed applications.",
  areas: [
    {
      id: "product-deployments",
      pillar: "Application Deployments",
      summary:
        "Built and deployed practical web applications across BOT Chain and the Bohr testnet.",
      keyContributions: [
        "PayX: Medical billing application with BOT Chain mainnet integration.",
        "Vart: Profile and avatar application built for the BOT Chain ecosystem.",
        "Vestali: Crowdfunding application developed on BOT Chain.",
        "Verifyd: Document verification application deployed on BOT Chain Bohr testnet.",
      ],
      initiatives: [
        {
          name: "BOT Chain & Testnet Applications",
          description:
            "Delivered functional web applications for medical billing, avatars, crowdfunding, and document verification.",
          scope: "Hands-on Product Development",
        },
      ],
    },
    {
      id: "ecosystem-and-partnerships",
      pillar: "Partnership Outreach & Community Operations",
      summary:
        "Supported outreach, onboarding, and community management across Gleyo and JTConnect.",
      keyContributions: [
        "Conducted partnership outreach and follow-up communications with prospective collaborators at Gleyo.",
        "Supported community onboarding workflows at Gleyo.",
        "Managed and moderated communication channels for JTConnect.",
      ],
      initiatives: [
        {
          name: "Outreach & Community Management",
          description:
            "Handled partner follow-ups and day-to-day channel moderation.",
          scope: "Partnerships & Community",
        },
      ],
    },
    {
      id: "education-and-content",
      pillar: "Campus Programs & Ecosystem Content",
      summary:
        "Program management at Blockchain Club LAUTECH and content contributions to ZecForge.",
      keyContributions: [
        "Served as Lead Program Manager for Blockchain Club LAUTECH, coordinating campus educational initiatives.",
        "Contributed informational content and resources supporting the Zcash ecosystem at ZecForge.",
        "Participated in community initiatives highlighting privacy technology.",
      ],
      initiatives: [
        {
          name: "Campus & Privacy Initiatives",
          description:
            "Coordinated campus educational initiatives and created resources for the Zcash ecosystem.",
          scope: "Education & Ecosystem Content",
        },
      ],
    },
  ],
};
