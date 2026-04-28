import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { stack } from '../data/stack';
import type { IconType } from '@/types';

const categories = [
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'devops', label: 'DevOps' },
    { key: 'tools', label: 'Tools' },
];

const IconWrapper = ({
    icon: Icon,
    colorClass,
    bgClass,
}: {
    icon: IconType;
    colorClass: string;
    bgClass: string;
}) => (
    <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${bgClass}`}>
        <Icon className={`h-6 w-6 ${colorClass}`} />
    </span>
);

export default function Stack() {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState('frontend');

    const filteredStack = stack.filter((item) => item.category === activeCategory);

    return (
        <section id="stack" className="py-24 relative bg-neutral-50 dark:bg-neutral-950">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div className="mb-16">
                        <span className="text-sm font-medium uppercase tracking-wider text-sky-600 dark:text-sky-400">
                            {t('nav.stack')}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-neutral-900 dark:text-neutral-50">
                            {t('stack.title')}
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
                                        : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </motion.div>

                    <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <AnimatePresence mode="popLayout">
                            {filteredStack.map((item) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.2 }}
                                    whileHover={{ scale: 1.03 }}
                                    className="p-6 rounded-xl cursor-pointer transition-all duration-300 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
                                >
                                    <IconWrapper
                                        icon={item.Icon}
                                        colorClass={item.colorClass}
                                        bgClass={item.bgClass}
                                    />
                                    <div className="font-medium text-neutral-900 dark:text-neutral-50">
                                        {item.name}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}