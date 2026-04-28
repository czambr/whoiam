import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';

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

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLangToggle = () => {
        const newLang = lang === 'es' ? 'en' : 'es';
        setLang(newLang);
        i18n.changeLanguage(newLang);
    };

    const isDark = theme === 'dark';

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800' 
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <Link to="/" className="text-xl font-bold text-neutral-900 dark:text-neutral-50" style={{ fontFamily: 'var(--font-display)' }}>
                        dev<span className="text-sky-600 dark:text-sky-400">.</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.key}
                                to={link.href}
                                className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                            >
                                {t(`nav.${link.key}`)}
                            </Link>
                        ))}

                        <button
                            onClick={handleLangToggle}
                            className="px-3 py-1 rounded text-sm font-medium bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800"
                        >
                            {lang.toUpperCase()}
                        </button>

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                    </div>

                    <button
                        className="md:hidden p-2"
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
                        <div className="px-6 py-4 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.key}
                                    to={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-2 text-neutral-900 dark:text-neutral-50"
                                >
                                    {t(`nav.${link.key}`)}
                                </Link>
                            ))}
                            <div className="flex items-center gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                                <button
                                    onClick={handleLangToggle}
                                    className="px-3 py-1 rounded text-sm bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300"
                                >
                                    {lang.toUpperCase()}
                                </button>
                                <button
                                    onClick={toggleTheme}
                                    className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300"
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