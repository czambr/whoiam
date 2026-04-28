import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../../../lib/animations';
import { Mail, Copy, Check, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Contact() {
    const { t } = useTranslation();
    const [copied, setCopied] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const email = 'hello@developer.com';

    const handleCopy = async () => {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-32 relative bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
            <div className="absolute inset-0 hidden dark:block">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                    <motion.div variants={fadeInUp} className="mb-16 text-center">
                        <span className="text-sm font-medium uppercase tracking-wider text-sky-600 dark:text-sky-400">
                            {t('contact.title')}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-neutral-900 dark:text-neutral-100" style={{ fontFamily: 'var(--font-display)' }}>
                            {t('contact.title')}
                        </h2>
                        <p className="text-lg mt-4 text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">
                            {t('contact.subtitle')}
                        </p>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="flex flex-col items-center gap-8">
                        <motion.a
                            href={`mailto:${email}`}
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                            className="group relative px-8 py-5 rounded-full font-semibold text-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 overflow-hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-sky-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isHovering ? 1 : 0 }}
                            />

                            <div className="relative z-10 flex items-center gap-3">
                                <Mail className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-white transition-colors" />
                                <span className="text-neutral-800 dark:text-neutral-200 group-hover:text-white transition-colors">{email}</span>
                                <ArrowUpRight className="w-5 h-5 text-neutral-500 dark:text-neutral-500 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                            </div>
                        </motion.a>

                        <motion.button
                            onClick={handleCopy}
                            className="relative px-6 py-3 rounded-full font-medium transition-all bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-white/10"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex items-center gap-2">
                                <AnimatePresence mode="wait">
                                    {copied ? (
                                        <motion.div key="check" initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0, rotate: 180 }}>
                                            <Check className="w-4 h-4 text-emerald-500" />
                                        </motion.div>
                                    ) : (
                                        <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                            <Copy className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <span className="text-neutral-700 dark:text-neutral-300">{copied ? t('contact.copied') : t('contact.copy')}</span>
                            </div>
                        </motion.button>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="mt-16 flex flex-wrap gap-4 justify-center">
                        {[
                            { label: 'GitHub', href: 'https://github.com' },
                            { label: 'LinkedIn', href: 'https://linkedin.com' },
                            { label: 'Twitter', href: 'https://twitter.com' },
                        ].map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:border-neutral-300 dark:hover:border-white/20 transition-colors"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Sparkles className="w-4 h-4" />
                                {social.label}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}