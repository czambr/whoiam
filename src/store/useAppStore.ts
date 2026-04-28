import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
    theme: 'light' | 'dark';
    lang: 'es' | 'en';
    toggleTheme: () => void;
    setLang: (lang: 'es' | 'en') => void;
}

export const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            theme: 'dark',
            lang: 'es',
            toggleTheme: () => set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),
            setLang: (lang) => set({ lang }),
        }),
        { name: 'portfolio-store' },
    ),
);