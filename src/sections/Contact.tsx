import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../lib/animations';

export default function Contact() {
    const { t } = useTranslation();
    const [copied, setCopied] = useState(false);
    const email = 'hello@developer.com';

    const handleCopy = async () => {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-24 relative bg-white dark:bg-neutral-950">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div 
                    variants={staggerContainer} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div variants={fadeInUp} className="mb-16 text-center">
                        <span className="text-sm font-medium uppercase tracking-wider text-sky-600 dark:text-sky-400">
                            {t('contact.title')}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-neutral-900 dark:text-neutral-50" style={{ fontFamily: 'var(--font-display)' }}>
                            {t('contact.title')}
                        </h2>
                        <p className="text-lg mt-4 text-neutral-600 dark:text-neutral-400">
                            {t('contact.subtitle')}
                        </p>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="flex flex-col items-center gap-6">
                        <a
                            href={`mailto:${email}`}
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-xl transition-all duration-300 hover:scale-105 bg-sky-600 text-white"
                        >
                            {email}
                        </a>

                        <button
                            onClick={handleCopy}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 border border-neutral-200 dark:border-neutral-800"
                        >
                            {copied ? '✓' : '📋'}
                            {copied ? t('contact.copied') : t('contact.copy')}
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}