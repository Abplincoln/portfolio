export interface ImpactArea {
  id: string;
  pillar: string;
  summary: string;
  keyContributions: string[];
  initiatives: {
    name: string;
    description: string;
    scope?: string;
  }[];
}

export interface ImpactContent {
  sectionTitle: string;
  sectionSubtitle: string;
  overview: string;
  areas: ImpactArea[];
}
