import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, Code, Users } from 'lucide-react';

import { fadeInUp, staggerContainer } from '@/lib/animations';
import { StatCard } from '../components/StatsCard';



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
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute top-1/2 left-1/4 w-px h-1/2 bg-linear-to-b from-transparent via-white/5 to-transparent" />
                <div className="absolute top-1/2 right-1/4 w-px h-1/2 bg-linear-to-b from-transparent via-white/5 to-transparent" />
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