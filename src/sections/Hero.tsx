import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, } from 'framer-motion';
import { ArrowRight, CircleDot, Sparkles } from 'lucide-react';

const roles = ['role', 'roleAlt', 'roleAlt2'];

function GlitchText({ text, className = '' }: { text: string; className?: string }) {
    const [isHovered, setIsHovered] = useState(false);
    const [glitchChars, setGlitchChars] = useState<string[]>([]);

    useEffect(() => {
        if (!isHovered) {
            setGlitchChars([]);
            return;
        }
        const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        const interval = setInterval(() => {
            setGlitchChars(text.split('').map(() => chars[Math.floor(Math.random() * chars.length)]));
        }, 50);
        const timeout = setTimeout(() => {
            clearInterval(interval);
            setGlitchChars([]);
        }, 300);
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [isHovered, text]);

    const displayText = glitchChars.length > 0 ? glitchChars.join('') : text;

    return (
        <motion.span
            className={`relative inline-block cursor-default ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={isHovered ? { x: [0, -2, 2, -1, 1, 0] } : {}}
            transition={{ duration: 0.3 }}
        >
            {/* Texto original invisible para asegurar que el tamaño del contenedor nunca cambie */}
            <span className="invisible">{text}</span>
            {/* Texto glitcheado posicionado encima flotando */}
            <span className="absolute inset-0 whitespace-nowrap overflow-visible flex justify-center">
                {displayText}
            </span>
        </motion.span>
    );
}

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
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-r from-sky-600 via-cyan-500 to-violet-500 bg-clip-text text-transparent"
            >
                {t(`hero.${roles[currentRole]}`)}
            </motion.span>
        </AnimatePresence>
    );
}

function FloatingShape({ delay, className }: { delay: number; className: string }) {
    return (
        <motion.div
            className={`absolute rounded-full opacity-20 ${className}`}
            animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 4 + delay, delay: delay, repeat: Infinity, ease: 'easeInOut' }}
        />
    );
}

function HeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-500" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-200 via-neutral-50 to-neutral-50 dark:from-neutral-800 dark:via-neutral-950 dark:to-neutral-950 transition-colors duration-500 opacity-60" />
            <FloatingShape delay={0} className="w-72 h-72 bg-neutral-300 dark:bg-neutral-800 top-1/4 -left-24 blur-3xl mix-blend-multiply dark:mix-blend-screen opacity-50" />
            <FloatingShape delay={1} className="w-96 h-96 bg-neutral-200 dark:bg-neutral-900 bottom-0 -right-24 blur-3xl mix-blend-multiply dark:mix-blend-screen opacity-50" />
            <FloatingShape delay={2} className="w-48 h-48 bg-neutral-300 dark:bg-neutral-800 top-1/2 left-1/3 blur-2xl mix-blend-multiply dark:mix-blend-screen opacity-50" />
        </div>
    );
}

export default function Hero() {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section id="hero" ref={containerRef} className="min-h-screen relative overflow-hidden flex items-center justify-center bg-neutral-50 dark:bg-neutral-950">
            <HeroBackground />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-32 lg:pt-20">
                <motion.div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8">
                        <motion.span
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-neutral-200/50 dark:bg-neutral-800/50 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 backdrop-blur-sm"
                            whileHover={{ scale: 1.05 }}
                        >
                            <CircleDot className="w-3 h-3 animate-pulse text-emerald-500" />
                            {t('about.availability')}
                            <Sparkles className="w-3 h-3 text-amber-500" />
                        </motion.span>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-6xl md:text-8xl lg:text-8xl xl:text-9xl font-bold mb-6 tracking-tight">
                        <div className="overflow-hidden">
                            <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
                                <span className="block text-neutral-800 dark:text-neutral-200">
                                    <GlitchText text={t('hero.greeting')} className="text-neutral-800 dark:text-neutral-200" />
                                </span>
                            </motion.div>
                        </div>
                        <div className="overflow-hidden">
                            <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                                <span className="block text-neutral-900 dark:text-white drop-shadow-sm">
                                    Developer
                                </span>
                            </motion.div>
                        </div>
                    </motion.h1>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-2xl md:text-3xl mb-6 font-light text-neutral-600 dark:text-neutral-400">
                        <RoleRotator />
                    </motion.div>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-12 text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        {t('hero.tagline')}
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <motion.a href="#projects" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-neutral-900 dark:bg-white text-white dark:text-neutral-900" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                            {t('hero.cta_projects')}
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>
                        <motion.a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                            {t('hero.cta_contact')}
                        </motion.a>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-16 flex flex-wrap gap-4 justify-center lg:justify-start">
                        {['React', 'TypeScript', 'Node.js', 'PostgreSQL'].map((tech, i) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 + i * 0.1 }}
                                whileHover={{ y: -4 }}
                                className="px-5 py-2.5 rounded-full text-sm font-medium bg-white/60 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 backdrop-blur-sm shadow-sm"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                    className="flex-1 w-full flex justify-center lg:justify-end relative"
                >
                    <div 
                        className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px]"
                        style={{
                            maskImage: 'radial-gradient(circle, black 40%, transparent 70%)',
                            WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)'
                        }}
                    >
                        <img 
                            src="https://github.com/czambr.png" 
                            alt="Carlos Zambrano" 
                            className="w-full h-full object-cover grayscale opacity-90 dark:opacity-70 mix-blend-multiply dark:mix-blend-screen"
                        />
                    </div>
                </motion.div>
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-6 h-10 rounded-full flex justify-center border border-neutral-400 dark:border-neutral-600 backdrop-blur-sm">
                    <motion.div animate={{ opacity: [1, 0.3, 1], y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1.5 h-1.5 rounded-full mt-2 bg-neutral-600 dark:bg-neutral-400" />
                </motion.div>
            </motion.div>
        </section>
    );
}