import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experience } from '../data/experience';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../lib/animations';

export default function Timeline() {
    const { t } = useTranslation();

    return (
        <section id="experience" className="py-32 relative overflow-hidden bg-white dark:bg-neutral-950">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                    <motion.div variants={fadeInUp} className="mb-16 text-center">
                        <span className="text-sm font-medium uppercase tracking-wider text-sky-600 dark:text-sky-400">
                            {t('nav.experience')}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-neutral-900 dark:text-neutral-100">
                            {t('experience.title')}
                        </h2>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sky-500/30 to-transparent md:hidden" />
                        <div className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-sky-500/30 to-transparent md:block" />

                        {experience.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                                viewport={{ once: true }}
                                className={`relative mb-12 flex items-center pl-20 md:justify-between md:pl-0 ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                            >
                                <div className="absolute left-4 top-6 flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/20 md:hidden">
                                    <div className="h-2.5 w-2.5 rounded-full bg-sky-500 dark:bg-sky-400" />
                                </div>
                                <div className="w-full md:w-5/12">
                                    <div className="p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-neutral-100 dark:bg-neutral-800">
                                                <Briefcase className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-neutral-900 dark:text-neutral-100">
                                                    {exp.company}
                                                </div>
                                                <div className="text-sm text-neutral-500 dark:text-neutral-500">
                                                    {exp.startDate} — {exp.endDate === 'present' ? t('experience.present') : exp.endDate}
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="font-semibold mb-2 text-sky-600 dark:text-sky-400">
                                            {exp.role.es}
                                        </h4>
                                        <p className="text-sm mb-3 text-neutral-600 dark:text-neutral-400">
                                            {exp.description.es}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech) => (
                                                <span key={tech} className="text-xs px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden md:flex w-10 h-10 rounded-full items-center justify-center ml-4 mr-4 z-10 bg-sky-500">
                                    <div className="w-3 h-3 rounded-full bg-white dark:bg-neutral-950" />
                                </div>

                                <div className="hidden md:block w-5/12" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}