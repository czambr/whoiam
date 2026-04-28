import { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';

export function useTheme() {
    const { theme, toggleTheme } = useAppStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            document.documentElement.classList.toggle('dark', theme === 'dark');
        }
    }, [theme, mounted]);

    return { theme, toggleTheme, mounted };
}