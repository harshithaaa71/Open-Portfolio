export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  subtitle?: string;
  description: string;
  tags: string[];
  githubUrl: string;
  featured?: boolean;
  category: 'All' | 'Analytics & ML' | 'Business Intelligence' | 'Healthcare & NLP';
  icon: string;
  // In-depth details matching original dedicated project pages
  problem: string;
  dataset?: string;
  features?: string[];
  toolsUsed: string[];
  keyOutcomesOrInsights: string;
  extendedDescription?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  description?: string;
}

export interface ContactDetails {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}
