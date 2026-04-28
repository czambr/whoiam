import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { MapPin, Sparkles, Code, Users } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/animations';

const AnimatedNumber = ({ value, suffix, className }: { value: number; suffix?: string; className?: string }) => {
    const ref = useRef<HTMLSpanElement | null>(null);
    const isInView = useInView(ref, { once: true, amount: 0.6 });
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        if (!isInView || !ref.current) return;

        if (shouldReduceMotion) {
            ref.current.textContent = `${value}${suffix ?? ''}`;
            return;
        }

        const controls = animate(0, value, {
            type: 'spring',
            stiffness: 100,
            damping: 15,
            mass: 0.8,
            onUpdate: latest => {
                if (ref.current) {
                    ref.current.textContent = `${Math.round(latest)}${suffix ?? ''}`;
                }
            },
        });

        return () => controls.stop();
    }, [isInView, shouldReduceMotion, suffix, value]);

    return (
        <span ref={ref} className={className}>
            {shouldReduceMotion ? `${value}${suffix ?? ''}` : `0${suffix ?? ''}`}
        </span>
    );
};

function StatCard({ value, suffix, label, icon: Icon, delay }: { value: number; suffix?: string; label: string; icon: React.ElementType; delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="relative p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/5 backdrop-blur-sm overflow-hidden group"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden dark:block" />

            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 hidden dark:block" />

            <div className="relative z-10">
                <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <Icon className="w-6 h-6 text-sky-500 dark:text-sky-400" />
                </motion.div>

                <div className="flex items-baseline gap-1">
                    <AnimatedNumber value={value} suffix={suffix} className="text-4xl font-bold text-neutral-900 dark:text-neutral-100" />
                </div>

                <div className="text-sm mt-1 text-neutral-500 dark:text-neutral-500">{label}</div>
            </div>

            <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-violet-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.3, duration: 0.5 }}
            />
        </motion.div>
    );
}

export default function About() {
    const { t } = useTranslation();

    const stats = [
        { value: 5, suffix: '+', label: 'Años', icon: Sparkles },
        { value: 20, suffix: '+', label: 'Proyectos', icon: Code },
        { value: 10, suffix: '+', label: 'Clientes', icon: Users },
    ];

    return (
        <section id="about" className="py-32 relative bg-white dark:bg-neutral-950 overflow-hidden">
            <div className="absolute inset-0 hidden dark:block">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute top-1/2 left-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
                <div className="absolute top-1/2 right-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                    <motion.div variants={fadeInUp} className="mb-16">
                        <span className="text-sm font-medium uppercase tracking-wider text-sky-600 dark:text-sky-400">
                            {t('nav.about')}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-neutral-900 dark:text-neutral-100" style={{ fontFamily: 'var(--font-display)' }}>
                            {t('about.title')}
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div variants={fadeInUp}>
                            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 mb-8">
                                {t('about.body')}
                            </p>

                            <motion.div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-500" whileHover={{ x: 4 }}>
                                <MapPin className="w-5 h-5 text-sky-500 dark:text-sky-400" />
                                <span className="text-neutral-600 dark:text-neutral-400">{t('about.location')}</span>
                            </motion.div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4">
                            {stats.map((stat, i) => (
                                <StatCard key={i} value={stat.value} suffix={stat.suffix} label={stat.label} icon={stat.icon} delay={i * 0.1} />
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}