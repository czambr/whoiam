import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

import { useAppStore } from '@/store/useAppStore';
import { cn } from '@/lib/utils';

const navLinks = [
    { key: 'about', href: '#about' },
    { key: 'stack', href: '#stack' },
    { key: 'projects', href: '#projects' },
    { key: 'experience', href: '#experience' },
    { key: 'contact', href: '#contact' },
];

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const { theme, toggleTheme, lang, setLang } = useAppStore();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        let ticking = false;

        const updateScrollState = () => {
            setScrolled(window.scrollY > 50);

            const scrollPos = window.scrollY + 200;
            for (const link of navLinks) {
                const id = link.href.slice(1);
                const el = document.getElementById(id);
                if (el && scrollPos >= el.offsetTop) {
                    setActiveSection(id);
                }
            }

            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollState);
                ticking = true;
            }
        };

        updateScrollState();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLangToggle = () => {
        const newLang = lang === 'es' ? 'en' : 'es';
        setLang(newLang);
        i18n.changeLanguage(newLang);
    };

    const handleNavClick = (href: string) => {
        const id = href.slice(1);
        const element = document.getElementById(id);

        setMobileMenuOpen(false);

        if (!element) {
            return;
        }

        const isMobile = window.innerWidth < 768;
        const offset = isMobile ? 60 : 80;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                window.scrollTo({
                    top: element.offsetTop - offset,
                    behavior: 'smooth',
                });
            });
        });
    };

    const isDark = theme === 'dark';

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled 
                    ? 'bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800' 
                    : 'bg-transparent'
            )}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <Link to="/" className="text-xl font-bold text-neutral-900 dark:text-neutral-50" style={{ fontFamily: 'var(--font-display)' }}>
                        dev<span className="text-sky-600 dark:text-sky-400">.</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <button
                                key={link.key}
                                onClick={() => handleNavClick(link.href)}
                                className={cn(
                                    'cursor-pointer text-sm font-medium transition-all duration-200 relative',
                                    activeSection === link.key
                                        ? 'text-sky-600 dark:text-sky-400'
                                        : 'text-neutral-600 dark:text-neutral-400 hover:text-sky-600 dark:hover:text-sky-400',
                                )}
                            >
                                {t(`nav.${link.key}`)}
                                {activeSection === link.key && (
                                    <motion.span
                                        layoutId="activeIndicator"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sky-600 dark:bg-sky-400 rounded-full"
                                    />
                                )}
                            </button>
                        ))}

                        <button
                            onClick={handleLangToggle}
                            className="cursor-pointer text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                        >
                            {lang.toUpperCase()}
                        </button>

                        <button
                            onClick={toggleTheme}
                            className="cursor-pointer p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                    </div>

                    <button
                        className="md:hidden p-2 cursor-pointer"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6 text-neutral-900 dark:text-neutral-50" />
                        ) : (
                            <Menu className="w-6 h-6 text-neutral-900 dark:text-neutral-50" />
                        )}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800"
                    >
                        <div className="px-6 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.key}
                                    onClick={() => handleNavClick(link.href)}
                                    className={cn(
                                        'block w-full text-left py-2 px-3 rounded-lg transition-colors',
                                        activeSection === link.key
                                            ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/30'
                                            : 'text-neutral-900 dark:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800',
                                    )}
                                >
                                    {t(`nav.${link.key}`)}
                                </button>
                            ))}
                            <div className="flex items-center gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                                <button
                                    onClick={handleLangToggle}
                                    className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                                >
                                    {lang.toUpperCase()}
                                </button>
                                <button
                                    onClick={toggleTheme}
                                    className="p-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                                >
                                    {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}