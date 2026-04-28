import {
    SiClaude,
    SiDocker,
    SiExpress,
    SiFramer,
    SiGit,
    SiGithubactions,
    SiGithubcopilot,
    SiMongodb,
    SiMui,
    SiMysql,
    SiNestjs,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPrisma,
    SiReact,
    SiReactquery,
    SiRedis,
    SiTailwindcss,
    SiTurborepo,
    SiTypescript,
} from 'react-icons/si';

import { FaAws } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

import type { StackItem } from '../types';

const frontendStack: StackItem[] = [
    {
        name: 'React',
        Icon: SiReact,
        category: 'frontend',
        colorClass: 'text-[#61DAFB]',
        bgClass: 'bg-[#61DAFB]/10 dark:bg-[#61DAFB]/15',
    },
    {
        name: 'TypeScript',
        Icon: SiTypescript,
        category: 'frontend',
        colorClass: 'text-[#3178C6]',
        bgClass: 'bg-[#3178C6]/10 dark:bg-[#3178C6]/15',
    },
    {
        name: 'Next.js',
        Icon: SiNextdotjs,
        category: 'frontend',
        colorClass: 'text-neutral-900 dark:text-neutral-100',
        bgClass: 'bg-neutral-200/70 dark:bg-neutral-800/60',
    },
    {
        name: 'Tailwind CSS',
        Icon: SiTailwindcss,
        category: 'frontend',
        colorClass: 'text-[#06B6D4]',
        bgClass: 'bg-[#06B6D4]/10 dark:bg-[#06B6D4]/15',
    },
    {
        name: 'Framer Motion',
        Icon: SiFramer,
        category: 'frontend',
        colorClass: 'text-[#4C6FFF] dark:text-[#7E95FF]',
        bgClass: 'bg-[#4C6FFF]/10 dark:bg-[#4C6FFF]/15',
    },
    {
        name: 'Node.js',
        Icon: SiNodedotjs,
        category: 'backend',
        colorClass: 'text-[#339933]',
        bgClass: 'bg-[#339933]/10 dark:bg-[#339933]/15',
    },
    {
        name: 'Material-UI',
        Icon: SiMui,
        category: 'frontend',
        colorClass: 'text-[#007FFF]',
        bgClass: 'bg-[#007FFF]/10 dark:bg-[#007FFF]/15',
    },
    {
        name: 'TansTack Query',
        Icon: SiReactquery,
        category: 'frontend',
        colorClass: 'text-[#E94E1B]',
        bgClass: 'bg-[#E94E1B]/10 dark:bg-[#E94E1B]/15',
    }
];

const backendStack: StackItem[] = [
    {
        name: 'Express',
        Icon: SiExpress,
        category: 'backend',
        colorClass: 'text-neutral-900 dark:text-neutral-100',
        bgClass: 'bg-neutral-200/70 dark:bg-neutral-800/60',
    },
    {
        name: 'NestJS',
        Icon: SiNestjs,
        category: 'backend',
        colorClass: 'text-[#E0234E]',
        bgClass: 'bg-[#E0234E]/10 dark:bg-[#E0234E]/15',
    },
    {
        name: 'PostgreSQL',
        Icon: SiPostgresql,
        category: 'backend',
        colorClass: 'text-[#336791]',
        bgClass: 'bg-[#336791]/10 dark:bg-[#336791]/15',
    },
    {
        name: 'MongoDB',
        Icon: SiMongodb,
        category: 'backend',
        colorClass: 'text-[#47A248]',
        bgClass: 'bg-[#47A248]/10 dark:bg-[#47A248]/15',
    },
    {
        name: 'MySQL',
        Icon: SiMysql,
        category: 'backend',
        colorClass: 'text-[#4479A1]',
        bgClass: 'bg-[#4479A1]/10 dark:bg-[#4479A1]/15',
    },

    {
        name: 'Redis',
        Icon: SiRedis,
        category: 'backend',
        colorClass: 'text-[#DC382D]',
        bgClass: 'bg-[#DC382D]/10 dark:bg-[#DC382D]/15',
    },
    {
        name: 'Prisma',
        Icon: SiPrisma,
        category: 'backend',
        colorClass: 'text-[#2D3748] dark:text-[#EBD4FF]',
        bgClass: 'bg-[#2D3748]/10 dark:bg-[#2D3748]/15',
    }
];

const devopsStack: StackItem[] = [
    {
        name: 'AWS',
        Icon: FaAws,
        category: 'devops',
        colorClass: 'text-[#FF9900]',
        bgClass: 'bg-[#FF9900]/10 dark:bg-[#FF9900]/15',
    },

    {
        name: 'Docker',
        Icon: SiDocker,
        category: 'devops',
        colorClass: 'text-[#2496ED]',
        bgClass: 'bg-[#2496ED]/10 dark:bg-[#2496ED]/15',
    },
    {
        name: 'Github Actions',
        Icon: SiGithubactions,
        category: 'devops',
        colorClass: 'text-[#007ACC]',
        bgClass: 'bg-[#007ACC]/10 dark:bg-[#007ACC]/15',
    }

];

const toolsStack: StackItem[] = [
    {
        name: 'Git',
        Icon: SiGit,
        category: 'tools',
        colorClass: 'text-[#F05032]',
        bgClass: 'bg-[#F05032]/10 dark:bg-[#F05032]/15',
    },
    {
        name: 'VS Code',
        Icon: VscVscode,
        category: 'tools',
        colorClass: 'text-[#007ACC]',
        bgClass: 'bg-[#007ACC]/10 dark:bg-[#007ACC]/15',
    },
    {
        name: 'TurboRepo',
        Icon: SiTurborepo,
        category: 'tools',
        colorClass: 'text-[#E94E1B]',
        bgClass: 'bg-[#E94E1B]/10 dark:bg-[#E94E1B]/15',
    },
    {
        name: 'Claude Code',
        Icon: SiClaude,
        category: 'tools',
        colorClass: 'text-[#F2B38A]',
        bgClass: 'bg-[#F2B38A]/10 dark:bg-[#F2B38A]/15',
    },
    {
        name: 'Copilot',
        Icon: SiGithubcopilot,
        category: 'tools',
        colorClass: 'text-[#007ACC]',
        bgClass: 'bg-[#007ACC]/10 dark:bg-[#007ACC]/15',
    },

];

export const stack: StackItem[] = [
    ...frontendStack,
    ...backendStack,
    ...devopsStack,
    ...toolsStack,
];