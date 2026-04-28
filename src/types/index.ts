import type { ComponentType, CSSProperties } from 'react';

export type IconType = ComponentType<{ className?: string; style?: CSSProperties }>;

export interface StackItem {
    name: string;
    Icon: IconType;
    category: 'frontend' | 'backend' | 'devops' | 'tools' | 'mobile';
    colorClass: string;
    bgClass: string;
}

export interface Project {
    id: string;
    slug: string;
    featured: boolean;
    category: 'frontend' | 'fullstack' | 'backend' | 'mobile' | 'other';
    title: string;
    description: { es: string; en: string };
    longDescription?: { es: string; en: string };
    stack: string[];
    links: { github?: string; live?: string };
    image: string;
    year: number;
}

export interface Experience {
    id: string;
    company: string;
    role: { es: string; en: string };
    description: { es: string; en: string };
    startDate: string;
    endDate: string | 'present';
    technologies: string[];
    logo?: string;
}