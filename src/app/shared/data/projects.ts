import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: crypto.randomUUID(),
        slug: 'diners-club-banking',
        featured: true,
        category: 'frontend',
        title: 'Diners Club – Banking Account Management',
        description: {
            es: 'Plataforma bancaria con nuevas funcionalidades para la gestión de cuentas, interfaces seguras y de alto rendimiento.',
            en: 'Banking platform featuring new account management capabilities with secure, high-performance interfaces.',
        },
        longDescription: {
            es: 'Implementación de nuevas funcionalidades enfocadas en la gestión de cuentas bancarias, garantizando interfaces seguras, intuitivas y de alto rendimiento. Se optimizó la comunicación cliente-servidor y el manejo de estado, mejorando la eficiencia del frontend. Incluye coordinación de equipos y definición de APIs consistentes con el equipo backend.',
            en: 'Implementation of new features focused on banking account management, ensuring secure, intuitive and high-performance interfaces. Optimized client-server communication and state management, improving frontend efficiency. Includes team coordination and definition of consistent APIs with the backend team.',
        },
        stack: ['React', 'Next.js', 'React Native', 'TypeScript', 'Docker'],
        links: {
            live: 'https://apps.apple.com/es/app/blu-de-diners-club/id6744373951',
        },
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
        year: 2026,
    },
    {
        id: crypto.randomUUID(),
        slug: 'ttyb-ai-web-app',
        featured: true,
        category: 'frontend',
        title: 'TTYB – AI Web Application',
        description: {
            es: 'Aplicación web de inteligencia artificial con interfaces modulares, streaming de datos en tiempo real y flujos CI/CD automatizados.',
            en: 'AI-powered web application with modular interfaces, real-time data streaming and automated CI/CD pipelines.',
        },
        longDescription: {
            es: 'Diseño e implementación de interfaces de usuario modulares, atractivas y reutilizables enfocadas en una experiencia fluida y escalable. Desarrollo de funcionalidades para una aplicación de inteligencia artificial, incluyendo visualización de resultados y manejo de estados complejos. Implementación de flujos CI/CD para despliegue automático y manejo de streaming de datos en tiempo real.',
            en: 'Design and implementation of modular, attractive and reusable user interfaces focused on a smooth and scalable experience. Development of features for an AI application including result visualization and complex state management. CI/CD pipeline implementation for automatic deployment and real-time data streaming handling.',
        },
        stack: ['React', 'Next.js', 'Tailwind CSS', 'AWS', 'GitHub Actions', 'OpenAI API'],
        links: {
            live: 'https://www.usecleanse.com/',
        },
        image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01',
        year: 2024,
    },
    {
        id: crypto.randomUUID(),
        slug: 'route-marketplace',
        featured: true,
        category: 'fullstack',
        title: 'Route Marketplace',
        description: {
            es: 'Marketplace para la gestión de contratos entre empresas de limpieza y grandes corporaciones, con integraciones a servicios externos.',
            en: 'Marketplace for managing contracts between cleaning companies and large corporations, with external service integrations.',
        },
        longDescription: {
            es: 'Diseño y desarrollo de servicios backend escalables para soportar la gestión de contratos. Implementación de funcionalidades críticas en la API como invitación de contratistas y creación de comunidades de usuarios. Integración con 8base, Google API, HubSpot y Twilio para notificaciones, comunicación y automatización de procesos.',
            en: 'Design and development of scalable backend services to support contract management. Implementation of critical API features such as contractor invitations and user community creation. Integration with 8base, Google API, HubSpot and Twilio for notifications, communication and process automation.',
        },
        stack: ['Node.js', 'NestJS', 'Next.js', '8base', 'Google API', 'HubSpot', 'Twilio'],
        links: {
            live: 'https://login.getroute.com'
        },
        image: 'https://images.unsplash.com/photo-1553413077-190dd305871c',
        year: 2023,
    },
    {
        id: crypto.randomUUID(),
        slug: 'transoceanic-container-system',
        featured: false,
        category: 'fullstack',
        title: 'Grupo Transoceánica – Container Management System',
        description: {
            es: 'Sistema interno para la administración y gestión del traslado de contenedores vacíos.',
            en: 'Internal system for the administration and management of empty container transfers.',
        },
        longDescription: {
            es: 'Desarrollo de un sistema interno orientado a optimizar la administración y el seguimiento del traslado de contenedores vacíos, mejorando la trazabilidad y eficiencia operativa del grupo logístico.',
            en: 'Development of an internal system aimed at optimizing the administration and tracking of empty container transfers, improving traceability and operational efficiency for the logistics group.',
        },
        stack: ['JavaScript', 'Node.js', 'React', 'PostgreSQL'],
        links: {},
        image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3',
        year: 2023,
    },
    {
        id: crypto.randomUUID(),
        slug: 'credimatic-cobol-automation',
        featured: false,
        category: 'backend',
        title: 'Credimatic – Financial Transaction Automation',
        description: {
            es: 'Procesos automatizados en COBOL y Unix Shell para el procesamiento de transacciones y movimientos financieros.',
            en: 'Automated processes in COBOL and Unix Shell for processing financial transactions and movements.',
        },
        longDescription: {
            es: 'Desarrollo de procesos batch automatizados en COBOL y scripting con Unix Shell destinados al procesamiento masivo de transacciones financieras, garantizando integridad, trazabilidad y rendimiento en los movimientos de datos.',
            en: 'Development of automated batch processes in COBOL and Unix Shell scripting for massive financial transaction processing, ensuring integrity, traceability and performance in data movements.',
        },
        stack: ['COBOL', 'Unix Shell'],
        links: {},
        image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01',
        year: 2022,
    },
];
