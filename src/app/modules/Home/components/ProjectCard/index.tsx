import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

import type { projects } from "@/app/shared/data/projects";
import { useAppStore } from "@/app/shared/store/useAppStore";
import  { motion, AnimatePresence } from "framer-motion";

export const ProjectCard = ({ 
    project, 
    isActive 
}: { 
    project: typeof projects[0]; 
    isActive: boolean;
}) => {
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
                className={`w-85 md:w-95 rounded-2xl overflow-hidden ${
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
                    <div className={`absolute inset-0 bg-linear-to-t ${isDark ? 'from-neutral-950/80' : 'from-black/60'} via-transparent to-transparent`} />
                    
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
