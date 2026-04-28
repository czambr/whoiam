import type { Experience } from '../types';


export const experience: Experience[] = [
    {
        id: crypto.randomUUID(),
        company: 'Diners Club',
        role: {
            es: 'Frontend Developer',
            en: 'Frontend Developer',
        },
        description: {
            es: 'Implementación de nuevas funcionalidades para la gestión de cuentas bancarias con interfaces seguras e intuitivas. Optimización de la comunicación cliente-servidor y manejo de estado. Coordinación de equipos de desarrollo y colaboración con backend para definir APIs consistentes.',
            en: 'Implementation of new features for banking account management with secure and intuitive interfaces. Optimization of client-server communication and state management. Development team coordination and collaboration with backend to define consistent APIs.',
        },
        startDate: '2024-10',
        endDate: 'present',
        technologies: ['React', 'Next.js', 'React Native', 'TypeScript', 'Docker'],
        logo: '/images/logos/diners-club.png',
    },
    {
        id: crypto.randomUUID(),
        company: 'Talk to Your Business (TTYB)',
        role: {
            es: 'Frontend Developer',
            en: 'Frontend Developer',
        },
        description: {
            es: 'Diseño e implementación de interfaces modulares y reutilizables para una aplicación de inteligencia artificial. Manejo de streaming de datos en tiempo real e implementación de flujos de CI/CD para despliegue automático.',
            en: 'Design and implementation of modular and reusable interfaces for an AI application. Real-time data streaming handling and CI/CD pipeline implementation for automatic deployment.',
        },
        startDate: '2024-10',
        endDate: '2025-10',
        technologies: ['React', 'Next.js', 'Tailwind CSS', 'AWS', 'GitHub Actions', 'OpenAI API'],
        logo: '/images/logos/ttyb.png',
    },
    {
        id: crypto.randomUUID(),
        company: 'ROUTE INC',
        role: {
            es: 'Full Stack Developer',
            en: 'Full Stack Developer',
        },
        description: {
            es: 'Diseño y desarrollo de servicios backend escalables para Route Marketplace. Implementación de funcionalidades críticas en la API e integración con servicios externos como 8base, Google API, HubSpot y Twilio.',
            en: 'Design and development of scalable backend services for Route Marketplace. Implementation of critical API features and integration with external services such as 8base, Google API, HubSpot and Twilio.',
        },
        startDate: '2023-11',
        endDate: '2024-10',
        technologies: ['Node.js', 'NestJS', 'Next.js', '8base', 'Google API', 'HubSpot', 'Twilio'],
        logo: '/images/logos/route-inc.png',
    },
    {
        id: crypto.randomUUID(),
        company: 'Grupo Transoceánica',
        role: {
            es: 'Full Stack Developer',
            en: 'Full Stack Developer',
        },
        description: {
            es: 'Desarrollo de un sistema interno para la administración y gestión del traslado de contenedores vacíos.',
            en: 'Development of an internal system for the administration and management of empty container transfers.',
        },
        startDate: '2023-08',
        endDate: '2023-10',
        technologies: ['JavaScript', 'Node.js', 'React', 'PostgreSQL'],
        logo: '/images/logos/transoceanic.png',
    },
    {
        id: crypto.randomUUID(),
        company: 'Credimatic',
        role: {
            es: 'Desarrollador COBOL',
            en: 'COBOL Developer',
        },
        description: {
            es: 'Desarrollo de procesos automatizados en COBOL y scripting con Unix Shell para el procesamiento de transacciones y movimientos financieros.',
            en: 'Development of automated processes in COBOL and Unix Shell scripting for processing financial transactions and movements.',
        },
        startDate: '2022-07',
        endDate: '2023-08',
        technologies: ['COBOL', 'Unix Shell'],
        logo: '/images/logos/credimatic.png',
    },
];