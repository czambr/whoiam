import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '../shared/data/projects';
import Navbar from '../shared/components/layout/Navbar';
import Footer from '../shared/components/layout/Footer';
import { fadeInUp } from '../../lib/animations';

export default function ProjectDetail() {
    const { slug } = useParams();
    const { t } = useTranslation();

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950">
                <Navbar />
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-50">404</h1>
                    <Link to="/" className="text-sky-600 dark:text-sky-400">Volver al inicio</Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950">
            <Navbar />
            <motion.main
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="pt-24 pb-12"
            >
                <div className="max-w-4xl mx-auto px-6">
                    <Link
                        to="/#projects"
                        className="inline-flex items-center gap-2 mb-8 text-sm text-neutral-500 dark:text-neutral-500"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {t('projects.viewAll')}
                    </Link>

                    <div className="aspect-video rounded-2xl overflow-hidden mb-8 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300">
                            {project.category}
                        </span>
                        <span className="text-sm text-neutral-500 dark:text-neutral-500">
                            {project.year}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-neutral-50" style={{ fontFamily: 'var(--font-display)' }}>
                        {project.title}
                    </h1>

                    <p className="text-lg mb-8 text-neutral-600 dark:text-neutral-400">
                        {project.longDescription?.es || project.description.es}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                        {project.stack.map((tech) => (
                            <span key={tech} className="px-4 py-2 rounded-full text-sm bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        {project.links.github && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800"
                            >
                                {t('projects.viewCode')}
                            </a>
                        )}
                        {project.links.live && (
                            <a
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium bg-sky-600 text-white"
                            >
                                <ExternalLink className="w-5 h-5" />
                                {t('projects.viewLive')}
                            </a>
                        )}
                    </div>
                </div>
            </motion.main>
            <Footer />
        </div>
    );
}