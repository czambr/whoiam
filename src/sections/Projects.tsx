import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const categories = [
    { key: 'all', label: 'Todos' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'fullstack', label: 'Fullstack' },
    { key: 'backend', label: 'Backend' },
];

export default function Projects() {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    const featuredProjects = filteredProjects.filter((p) => p.featured);
    const otherProjects = filteredProjects.filter((p) => !p.featured);

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
        <section id="projects" className="py-24 relative bg-white dark:bg-neutral-950">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div className="mb-16">
                        <span className="text-sm font-medium uppercase tracking-wider text-sky-600 dark:text-sky-400">
                            {t('nav.projects')}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-neutral-900 dark:text-neutral-50">
                            {t('projects.title')}
                        </h2>
                    </motion.div>

                    <motion.div className="flex flex-wrap gap-3 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat.key}
                                onClick={() => setActiveCategory(cat.key)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                    activeCategory === cat.key
                                        ? 'bg-sky-600 text-white dark:bg-sky-500 dark:text-neutral-950'
                                        : 'text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800'
                                }`}
                            >
                                {categoryLabel(cat.key)}
                            </button>
                        ))}
                    </motion.div>

                    <motion.div className="space-y-8">
                        {featuredProjects.length > 0 && (
                            <div className="grid md:grid-cols-2 gap-6">
                                {featuredProjects.map((project) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        whileHover={{ y: -4 }}
                                        className="group relative rounded-2xl overflow-hidden bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
                                    >
                                        <Link to={`/projects/${project.slug}`}>
                                            <div className="aspect-video overflow-hidden">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-xs px-2 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300">
                                                        {project.category}
                                                    </span>
                                                    <span className="text-xs text-neutral-500">
                                                        {project.year}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-50">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                                    {project.description.es}
                                                </p>
                                                <div className="flex flex-wrap gap-2 mt-4">
                                                    {project.stack.slice(0, 4).map((tech) => (
                                                        <span key={tech} className="text-xs px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            {project.links.github && (
                                                <a
                                                    href={project.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 rounded-full bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    GH
                                                </a>
                                            )}
                                            {project.links.live && (
                                                <a
                                                    href={project.links.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 rounded-full bg-sky-600 text-white"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {otherProjects.length > 0 && (
                            <div className="grid md:grid-cols-3 gap-4">
                                {otherProjects.map((project) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        whileHover={{ y: -4 }}
                                        className="group relative rounded-xl overflow-hidden bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
                                    >
                                        <Link to={`/projects/${project.slug}`}>
                                            <div className="aspect-4/3 overflow-hidden">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                            <div className="p-4">
                                                <h3 className="font-bold mb-1 text-neutral-900 dark:text-neutral-50">
                                                    {project.title}
                                                </h3>
                                                <p className="text-xs line-clamp-2 text-neutral-600 dark:text-neutral-400">
                                                    {project.description.es}
                                                </p>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}