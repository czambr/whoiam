import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { stack } from '../data/stack';
import type { IconType } from '@/types';
import { Sparkles, Code2, Server, Wrench } from 'lucide-react';

const categories = [
    { key: 'frontend', label: 'Frontend', icon: Code2 },
    { key: 'backend', label: 'Backend', icon: Server },
    { key: 'devops', label: 'DevOps', icon: Sparkles },
    { key: 'tools', label: 'Tools', icon: Wrench },
];

function TechIcon({ item }: { item: typeof stack[0] }) {
    const Icon = item.Icon;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative p-6 rounded-2xl cursor-pointer bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/5 backdrop-blur-sm overflow-hidden"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-violet-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute top-0 right-0 w-20 h-20 bg-sky-500/10 rounded-full blur-2xl" />

            <div className="relative z-10 flex flex-col items-center gap-4">
                <motion.div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.bgClass}`}
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 0.2 }}
                >
                    <Icon className={`h-7 w-7 ${item.colorClass}`} />
                </motion.div>

                <div className="text-center">
                    <span className="block font-semibold text-neutral-900 dark:text-neutral-200">
                        {item.name}
                    </span>
                    {item.category === 'frontend' && (
                        <span className="text-xs text-neutral-500 dark:text-neutral-500 mt-1 block">UI Library</span>
                    )}
                </div>
            </div>

            <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-violet-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
}

export default function Stack() {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState('frontend');
    const [isAnimating, setIsAnimating] = useState(false);

    const filteredStack = stack.filter((item) => item.category === activeCategory);

    const handleCategoryChange = (key: string) => {
        if (key !== activeCategory) {
            setIsAnimating(true);
            setActiveCategory(key);
            setTimeout(() => setIsAnimating(false), 400);
        }
    };

    return (
        <section id="stack" className="py-32 relative overflow-hidden bg-white dark:bg-neutral-950">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="text-sm font-medium uppercase tracking-wider text-sky-600 dark:text-sky-400">
                        {t('nav.stack')}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 text-neutral-900 dark:text-neutral-100">
                        {t('stack.title')}
                    </h2>
                    <p className="mt-4 text-neutral-500 dark:text-neutral-500 max-w-xl mx-auto">
                        Tecnologías que domino y con las que construyo soluciones
                    </p>
                </motion.div>

                <motion.div className="flex flex-wrap gap-3 mb-12 justify-center">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <motion.button
                                key={cat.key}
                                onClick={() => handleCategoryChange(cat.key)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                    activeCategory === cat.key
                                        ? 'bg-sky-600 text-white'
                                        : 'bg-white text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-white/10'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Icon className="w-4 h-4" />
                                {cat.label}
                            </motion.button>
                        );
                    })}
                </motion.div>

                <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <AnimatePresence mode="popLayout">
                        {filteredStack.map((item, i) => (
                            <motion.div
                                key={item.name}
                                layout
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <TechIcon item={item} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}