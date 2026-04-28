import { useTranslation } from 'react-i18next';
import { Heart } from 'lucide-react';

export default function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 bg-white dark:bg-neutral-950 dark:border-neutral-800">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <span style={{ fontFamily: 'var(--font-display)' }} className="text-neutral-900 dark:text-neutral-50">
                            dev
                        </span>
                        <span className="text-sky-600 dark:text-sky-400">.</span>
                        <span className="text-neutral-500 dark:text-neutral-500">
                          Copywriting © {currentYear}. All rights reserved
                        </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-500">
                        <span>{t('footer.madeWith')}</span>
                        <Heart className="w-4 h-4 text-red-600 dark:text-red-800" />
                        <span>&</span>
                        <span>☕</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}