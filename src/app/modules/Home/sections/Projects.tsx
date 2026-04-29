import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {  ChevronLeft, ChevronRight, Layers, Maximize2 } from 'lucide-react';

import { projects } from '@/app/shared/data/projects';
import { useAppStore } from '@/app/shared/store/useAppStore';
import { ProjectCard } from '../components/ProjectCard';
import { CATEGORIES_PROJECTS } from '../constants';




export default function Projects() {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeIndex, setActiveIndex] = useState(0);
    const { theme } = useAppStore();
    const isDark = theme === 'dark';

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    const featuredProjects = filteredProjects.filter((p) => p.featured);
    const otherProjects = filteredProjects.filter((p) => !p.featured);
    const allProjects = [...featuredProjects, ...otherProjects];

    const totalCards = allProjects.length;

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % totalCards);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalCards]);

 

    const categoryLabel = (cat: string) => {
        const labels: Record<string, string> = {
            all: t('projects.all'),
            frontend: 'Frontend',
            fullstack: 'Fullstack',
            backend: 'Backend',
        };
        return labels[cat] || cat;
    };

    return (
        <section id="projects" className={'py-32 relative overflow-hidden dark:bg-neutral-950 bg-white'}>
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-sm font-medium uppercase tracking-wider text-sky-600 dark:text-sky-400">
                        {t('nav.projects')}
                    </span>
                    <h2 className={`text-4xl md:text-5xl font-bold mt-4 ${isDark ? 'text-neutral-100' : 'text-neutral-900'}`}>
                        {t('projects.title')}
                    </h2>
                </motion.div>

                <motion.div className="flex flex-wrap gap-3 mb-12">
                    {CATEGORIES_PROJECTS.map((cat) => (
                        <motion.button
                            key={cat.key}
                            onClick={() => {
                                setActiveCategory(cat.key);
                                setActiveIndex(0);
                            }}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                activeCategory === cat.key
                                    ? 'bg-sky-600 text-white'
                                    : isDark 
                                        ? 'bg-white/5 text-neutral-400 border border-white/10 hover:bg-white/10'
                                        : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {categoryLabel(cat.key)}
                        </motion.button>
                    ))}
                </motion.div>

                <div className="relative mb-12">
                    <div className="relative h-120 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            {allProjects.map((project, i) => (
                                i === activeIndex && (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                        isActive={true}
                                    />
                                )
                            ))}
                        </AnimatePresence>
                    </div>

                    {totalCards > 1 && (
                        <>
                            <motion.button
                                onClick={prevSlide}
                                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                                    isDark 
                                        ? 'bg-white/5 border border-white/10 text-neutral-400 hover:bg-white/10 hover:text-white'
                                        : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-100'
                                }`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </motion.button>

                            <motion.button
                                onClick={nextSlide}
                                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                                    isDark 
                                        ? 'bg-white/5 border border-white/10 text-neutral-400 hover:bg-white/10 hover:text-white'
                                        : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-100'
                                }`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ChevronRight className="w-5 h-5" />
                            </motion.button>

                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
                                {allProjects.map((project, i) => (
                                    <motion.button
                                        key={project.id}
                                        onClick={() => setActiveIndex(i)}
                                        className="w-2 h-2 rounded-full bg-white/20"
                                        animate={{
                                            backgroundColor: i === activeIndex 
                                                ? 'rgba(14, 165, 233, 1)' 
                                                : 'rgba(255, 255, 255, 0.2)',
                                            width: i === activeIndex ? 24 : 8,
                                        }}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <div className={`flex items-center justify-center gap-4 text-sm ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
                    <Layers className="w-4 h-4" />
                    <span>{activeIndex + 1} / {totalCards}</span>
                    <span className="hidden md:inline">• Usa las flechas ← → para navegar</span>
                    <Maximize2 className="w-4 h-4" />
                </div>
            </div>
        </section>
    );
}