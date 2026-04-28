import type { Experience } from '../types';

export const experience: Experience[] = [
    {
        id: crypto.randomUUID(),
        company: 'TechCorp MX',
        role: {
            es: 'Desarrollador Full Stack Senior',
            en: 'Senior Full Stack Developer',
        },
        description: {
            es: 'Lideré el desarrollo de múltiples productos SaaS, gestioné un equipo de 5 desarrolladores y implementé prácticas de CI/CD que redujeron el tiempo de deployment en un 60%.',
            en: 'Led the development of multiple SaaS products, managed a team of 5 developers, and implemented CI/CD practices that reduced deployment time by 60%.',
        },
        startDate: '2022-01',
        endDate: 'present',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    },
    {
        id: crypto.randomUUID(),
        company: 'StartupLabs',
        role: {
            es: 'Desarrollador Frontend',
            en: 'Frontend Developer',
        },
        description: {
            es: 'Desarrollé interfaces de usuario modernas y responsivas para aplicaciones web, colaboré con el equipo de diseño para implementar sistemas de diseño escalables.',
            en: 'Developed modern, responsive user interfaces for web applications, collaborated with the design team to implement scalable design systems.',
        },
        startDate: '2020-06',
        endDate: '2021-12',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma'],
    },
    {
        id: crypto.randomUUID(),
        company: 'Agencia Digital',
        role: {
            es: 'Desarrollador Web Junior',
            en: 'Junior Web Developer',
        },
        description: {
            es: 'Desarrollé sitios web para clientes diversos, aprendí las mejores prácticas de desarrollo y trabajé en proyectos de e-commerce y landing pages.',
            en: 'Developed websites for diverse clients, learned development best practices, and worked on e-commerce and landing page projects.',
        },
        startDate: '2019-01',
        endDate: '2020-05',
        technologies: ['JavaScript', 'Vue.js', 'SCSS', 'WordPress'],
    },
];