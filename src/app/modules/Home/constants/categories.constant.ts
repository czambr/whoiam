import { Code2, Server, Sparkles, Wrench } from "lucide-react";

export const CATEGORIES_PROJECTS = [
    { key: 'all', label: 'Todos' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'fullstack', label: 'Fullstack' },
    { key: 'backend', label: 'Backend' },
];


export const CATEGORIES_STACK = [
    { key: 'frontend', label: 'Frontend', icon: Code2 },
    { key: 'backend', label: 'Backend', icon: Server },
    { key: 'devops', label: 'DevOps', icon: Sparkles },
    { key: 'tools', label: 'Tools', icon: Wrench },
];