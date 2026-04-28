import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
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
            className={`inline-block cursor-default ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={isHovered ? { x: [0, -2, 2, -1, 1, 0] } : {}}
            transition={{ duration: 0.3 }}
        >
            {displayText}
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
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-violet-50 dark:from-sky-950 dark:via-neutral-950 dark:to-violet-950" />
            <FloatingShape delay={0} className="w-72 h-72 bg-sky-500 top-1/4 -left-24 blur-3xl hidden dark:block" />
            <FloatingShape delay={1} className="w-96 h-96 bg-violet-600 bottom-0 -right-24 blur-3xl hidden dark:block" />
            <FloatingShape delay={2} className="w-48 h-48 bg-cyan-500 top-1/2 left-1/3 blur-2xl hidden dark:block" />

            <motion.div
                className="absolute inset-0 hidden dark:block"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }}
                animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
        </div>
    );
}

export default function Hero() {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section id="hero" ref={containerRef} className="min-h-screen relative overflow-hidden flex items-center justify-center bg-white dark:bg-neutral-950">
            <HeroBackground />

            <motion.div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8">
                    <motion.span
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-sky-600 dark:text-sky-400 backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                    >
                        <CircleDot className="w-3 h-3 animate-pulse text-emerald-500" />
                        {t('about.availability')}
                        <Sparkles className="w-3 h-3 text-amber-500" />
                    </motion.span>
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight">
                    <div className="overflow-hidden">
                        <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
                            <span className="block text-neutral-900 dark:text-neutral-100">
                                <GlitchText text={t('hero.greeting')} className="text-neutral-900 dark:text-neutral-100" />
                            </span>
                        </motion.div>
                    </div>
                    <div className="overflow-hidden">
                        <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                            <span className="block bg-gradient-to-r from-sky-600 via-cyan-500 to-violet-500 bg-clip-text text-transparent">
                                Developer
                            </span>
                        </motion.div>
                    </div>
                </motion.h1>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-2xl md:text-3xl mb-6">
                    <RoleRotator />
                </motion.div>

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-neutral-600 dark:text-neutral-400">
                    {t('hero.tagline')}
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex flex-wrap gap-4 justify-center">
                    <motion.a href="#projects" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-sky-600 text-white" whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(14, 165, 233, 0.4)' }} whileTap={{ scale: 0.98 }}>
                        {t('hero.cta_projects')}
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>
                    <motion.a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-neutral-300 dark:border-white/20 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-white/5" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                        {t('hero.cta_contact')}
                    </motion.a>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-16 flex flex-wrap gap-4 justify-center">
                    {['React', 'TypeScript', 'Node.js', 'PostgreSQL'].map((tech, i) => (
                        <motion.span
                            key={tech}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 + i * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="px-5 py-2.5 rounded-full text-sm font-medium bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-400 backdrop-blur-sm"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-6 h-10 rounded-full flex justify-center border border-neutral-300 dark:border-white/20 backdrop-blur-sm">
                    <motion.div animate={{ opacity: [1, 0.3, 1], y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1.5 h-1.5 rounded-full mt-2 bg-sky-500" />
                </motion.div>
            </motion.div>
        </section>
    );
}