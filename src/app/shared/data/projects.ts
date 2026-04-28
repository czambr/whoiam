import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: crypto.randomUUID(),
        slug: 'ecommerce-platform',
        featured: true,
        category: 'fullstack',
        title: 'E-commerce Platform',
        description: {
            es: 'Plataforma de comercio electrónico completa con pagos integrados',
            en: 'Full e-commerce platform with integrated payments',
        },
        longDescription: {
            es: 'Plataforma de e-commerce desarrollada con React y Node.js, featuring integración con Stripe para pagos, inventario en tiempo real, panel de administración y diseño responsivo optimizado para conversión.',
            en: 'E-commerce platform built with React and Node.js, featuring Stripe integration for payments, real-time inventory, admin dashboard, and responsive design optimized for conversion.',
        },
        stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
        links: {
            github: 'https://github.com',
            live: 'https://demo.com',
        },
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
        year: 2024,
    },
    {
        id: crypto.randomUUID(),
        slug: 'taskflow',
        featured: true,
        category: 'frontend',
        title: 'TaskFlow',
        description: {
            es: 'Aplicación de gestión de proyectos con tablero Kanban',
            en: 'Project management app with Kanban board',
        },
        longDescription: {
            es: 'Aplicación de gestión de tareas y proyectos con tablero Kanban interactivo, drag-and-drop, sincronización en tiempo real y colaboración multiusuario. Construida con React y Firebase.',
            en: 'Task and project management app with interactive Kanban board, drag-and-drop, real-time sync and multi-user collaboration. Built with React and Firebase.',
        },
        stack: ['React', 'TypeScript', 'Firebase', 'Framer Motion', 'Tailwind CSS'],
        links: {
            github: 'https://github.com',
            live: 'https://demo.com',
        },
        image: 'https://images.unsplash.com/photo-1611229923851-2602a1525c1c?w=800&h=600&fit=crop',
        year: 2024,
    },
    {
        id: crypto.randomUUID(),
        slug: 'api-gateway',
        featured: false,
        category: 'backend',
        title: 'API Gateway',
        description: {
            es: 'Gateway de API robusto con rate limiting y caché',
            en: 'Robust API gateway with rate limiting and caching',
        },
        longDescription: {
            es: 'Sistema de gateway de API desarrollado en Go con rate limiting configurable, caché Redis, autenticación JWT y documentación automática con OpenAPI.',
            en: 'API gateway system built in Go with configurable rate limiting, Redis cache, JWT authentication, and automatic OpenAPI documentation.',
        },
        stack: ['Go', 'Redis', 'JWT', 'OpenAPI', 'Docker'],
        links: {
            github: 'https://github.com',
        },
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
        year: 2023,
    },
    {
        id: crypto.randomUUID(),
        slug: 'weather-dashboard',
        featured: false,
        category: 'frontend',
        title: 'Weather Dashboard',
        description: {
            es: 'Dashboard de clima interactivo con visualizaciones',
            en: 'Interactive weather dashboard with visualizations',
        },
        longDescription: {
            es: 'Dashboard de clima con datos en tiempo real, gráficos interactivos usando D3.js y animaciones fluidas. Soporta múltiples ubicaciones y previsions de 7 días.',
            en: 'Weather dashboard with real-time data, interactive charts using D3.js and smooth animations. Supports multiple locations and 7-day forecasts.',
        },
        stack: ['React', 'TypeScript', 'D3.js', 'OpenWeather API', 'Tailwind CSS'],
        links: {
            github: 'https://github.com',
            live: 'https://demo.com',
        },
        image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
        year: 2023,
    },
    {
        id: crypto.randomUUID(),
        slug: 'chat-app',
        featured: true,
        category: 'fullstack',
        title: 'Real-time Chat',
        description: {
            es: 'Aplicación de chat en tiempo real con WebSockets',
            en: 'Real-time chat application with WebSockets',
        },
        longDescription: {
            es: 'Aplicación de mensajería en tiempo real con WebSockets, encryption de extremo a extremo, soporte para archivos y sincronización offline.',
            en: 'Real-time messaging application with WebSockets, end-to-end encryption, file support, and offline synchronization.',
        },
        stack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
        links: {
            github: 'https://github.com',
            live: 'https://demo.com',
        },
        image: 'https://images.unsplash.com/photo-1611746872915-64382b5c2b36?w=800&h=600&fit=crop',
        year: 2023,
    },
    {
        id: crypto.randomUUID(),
        slug: 'portfolio-v1',
        featured: false,
        category: 'frontend',
        title: 'Portfolio v1',
        description: {
            es: 'Mi primer portafolio personal',
            en: 'My first personal portfolio',
        },
        longDescription: {
            es: 'Mi primer portafolio personal, construido con Vue.js y GSAP para animaciones. Fue mi introducción al desarrollo web profesional.',
            en: 'My first personal portfolio, built with Vue.js and GSAP for animations. It was my introduction to professional web development.',
        },
        stack: ['Vue.js', 'GSAP', 'SCSS'],
        links: {
            github: 'https://github.com',
        },
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
        year: 2022,
    },
];