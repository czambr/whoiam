import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';

export default function App() {
    const { theme } = useTheme();

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    return <Outlet />;
}