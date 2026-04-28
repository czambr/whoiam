import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CircleDollarSign, Code, Users, MapPin } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/animations';
import { Card, CardContent } from '../shadcn/card';

export default function About() {
    const { t } = useTranslation();

    const stats = [
        { value: '5+', label: t('experience.present').replace('Actual', 'Years'), icon: CircleDollarSign },
        { value: '20+', label: 'Projects', icon: Code },
        { value: '10+', label: 'Clients', icon: Users },
    ];

    return (
        <section id="about" className="py-24 relative bg-white dark:bg-neutral-950">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div 
                    variants={staggerContainer} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div variants={fadeInUp} className="mb-16">
                        <span className="text-sm font-medium uppercase tracking-wider text-sky-600 dark:text-sky-400">
                            {t('nav.about')}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-neutral-900 dark:text-neutral-50" style={{ fontFamily: 'var(--font-display)' }}>
                            {t('about.title')}
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div variants={fadeInUp}>
                            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                                {t('about.body')}
                            </p>
                            <div className="mt-8 flex items-center gap-4 text-neutral-500 dark:text-neutral-500">
                                <MapPin className="w-5 h-5 text-sky-500" />
                                <span>{t('about.location')}</span>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-6">
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-sky-600 dark:text-sky-400" />
                                    <div className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">{stat.value}</div>
                                    <div className="text-sm mt-1 text-neutral-500 dark:text-neutral-500">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}