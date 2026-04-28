import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CircleDot } from 'lucide-react';

const roles = ['role', 'roleAlt', 'roleAlt2'];

function RoleRotator() {
    const { t } = useTranslation();
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence mode="wait">
            <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="inline-block"
            >
                {t(`hero.${roles[currentRole]}`)}
            </motion.span>
        </AnimatePresence>
    );
}

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section id="hero" className="min-h-screen relative overflow-hidden flex items-center justify-center bg-white dark:bg-neutral-950">
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-20 dark:opacity-30"
                    style={{
                        background: `
                            radial-gradient(circle at 20% 50%, #0ea5e9 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #7c3aed 0%, transparent 40%),
                            radial-gradient(circle at 40% 80%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)
                        `,
                    }}
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6 }} 
                    className="mb-6"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-neutral-100 dark:bg-neutral-900 text-sky-600 dark:text-sky-400 border border-neutral-200 dark:border-neutral-800">
                        <CircleDot className="w-3 h-3 animate-pulse" />
                        {t('about.availability')}
                    </span>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6, delay: 0.1 }} 
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
                >
                    <span className="block text-neutral-900 dark:text-neutral-50">
                        {t('hero.greeting')}
                    </span>
                    <span className="block text-sky-600 dark:text-sky-400">
                        Developer
                    </span>
                </motion.h1>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6, delay: 0.2 }} 
                    className="text-xl md:text-2xl mb-4 text-neutral-600 dark:text-neutral-400"
                >
                    <RoleRotator />
                </motion.div>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6, delay: 0.3 }} 
                    className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-neutral-600 dark:text-neutral-400"
                >
                    {t('hero.tagline')}
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6, delay: 0.4 }} 
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <a 
                        href="#projects" 
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 bg-sky-600 text-white"
                    >
                        {t('hero.cta_projects')}
                        <ArrowRight className="w-5 h-5" />
                    </a>
                    <a 
                        href="#contact" 
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-neutral-900 dark:text-neutral-50 border-2 border-neutral-200 dark:border-neutral-800"
                    >
                        {t('hero.cta_contact')}
                    </a>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6, delay: 0.5 }} 
                    className="mt-16 flex flex-wrap gap-6 justify-center"
                >
                    {['React', 'TypeScript', 'Node.js', 'PostgreSQL'].map((tech) => (
                        <span 
                            key={tech} 
                            className="px-4 py-2 rounded-full text-sm font-medium bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800"
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-6 h-10 rounded-full flex justify-center border-2 border-neutral-300 dark:border-neutral-700"
                >
                    <div className="w-1.5 h-1.5 rounded-full mt-2 bg-sky-500" />
                </motion.div>
            </motion.div>
        </section>
    );
}