import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, ChevronLeft, ChevronRight, Layers, Maximize2 } from 'lucide-react';
import { projects } from '../../../shared/data/projects';
import { useAppStore } from '@/app/shared/store/useAppStore';

const categories = [
    { key: 'all', label: 'Todos' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'fullstack', label: 'Fullstack' },
    { key: 'backend', label: 'Backend' },
];

function ProjectCard({ 
    project, 
    isActive 
}: { 
    project: typeof projects[0]; 
    isActive: boolean;
}) {
    const [isHovered, setIsHovered] = useState(false);
    const { theme } = useAppStore();
    const isDark = theme === 'dark';

    return (
        <motion.div
            className={`absolute left-1/2 top-0 transition-all duration-500 ${
                !isActive ? 'opacity-0 scale-75 pointer-events-none translate-x-full' : 'opacity-100'
            }`}
            style={{ x: isActive ? '-50%' : 0, zIndex: isActive ? 10 : 5 }}
            animate={{
                scale: isActive ? 1 : 0.85,
                opacity: isActive ? 1 : 0,
                x: isActive ? '-50%' : isActive ? 0 : '-50%',
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className={`w-[340px] md:w-[380px] rounded-2xl overflow-hidden ${
                    isDark ? 'bg-neutral-900 border border-white/10' : 'bg-white border border-neutral-200'
                } shadow-2xl`}
                animate={{ 
                    boxShadow: isHovered ? '0 0 60px rgba(14, 165, 233, 0.3), 0 25px 50px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.15)' 
                }}
            >
                <div className="relative aspect-video overflow-hidden">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-neutral-950/80' : 'from-black/60'} via-transparent to-transparent`} />
                    
                    <motion.div
                        className="absolute top-4 left-4 flex gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-sky-600/90 text-white backdrop-blur-sm">
                            {project.category}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-800/90 text-neutral-300 backdrop-blur-sm">
                            {project.year}
                        </span>
                    </motion.div>

                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute top-4 right-4 flex gap-2"
                            >
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2.5 rounded-full bg-neutral-800/90 text-white backdrop-blur-sm hover:bg-sky-600 transition-colors"
                                    >
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.628-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                    </a>
                                )}
                                {project.links.live && (
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2.5 rounded-full bg-sky-600/90 text-white backdrop-blur-sm hover:bg-sky-500 transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.div
                        className="absolute bottom-0 left-0 right-0 p-4"
                        animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? 0 : 10 }}
                    >
                        <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-neutral-900'}`}>{project.title}</h3>
                        <p className={`text-sm line-clamp-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                            {project.description.es}
                        </p>
                    </motion.div>
                </div>

                <div className={`p-4 border-t ${isDark ? 'border-white/5' : 'border-neutral-200'}`}>
                    <div className="flex flex-wrap gap-2">
                        {project.stack.slice(0, 4).map((tech) => (
                            <span 
                                key={tech} 
                                className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                                    isDark ? 'bg-white/5 text-neutral-400 border border-white/5' : 'bg-neutral-100 text-neutral-600 border border-neutral-200'
                                }`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <Link
                    to={`/projects/${project.slug}`}
                    className="absolute inset-0"
                >
                    <span className="sr-only">Ver proyecto {project.title}</span>
                </Link>
            </motion.div>
        </motion.div>
    );
}

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
    }, [totalCards]);

    useEffect(() => {
        setActiveIndex(0);
    }, [activeCategory]);

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
        <section id="projects" className={`py-32 relative overflow-hidden ${isDark ? 'bg-neutral-950' : 'bg-neutral-50'}`}>
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
                    {categories.map((cat) => (
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
                    <div className="relative h-[480px] flex items-center justify-center">
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