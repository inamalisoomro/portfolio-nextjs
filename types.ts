export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  role: string;
  tech: string[];
  image: string;
  link?: string;
  github?: string;
  stats?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number; // percentage
    icon?: string;
  }[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}
