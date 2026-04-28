import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function NotFound() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950">
            <Navbar />
            <div className="text-center">
                <h1 className="text-9xl font-bold text-sky-600 dark:text-sky-400" style={{ fontFamily: 'var(--font-display)' }}>404</h1>
                <p className="text-xl mt-4 mb-8 text-neutral-600 dark:text-neutral-400">
                    Page not found
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium bg-sky-600 text-white"
                >
                    <ArrowLeft className="w-5 h-5" />
                    {t('hero.cta_projects')}
                </Link>
            </div>
            <Footer />
        </div>
    );
}