import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export function CursorGlow() {
    const containerRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springConfig = { damping: 15, stiffness: 150, mass: 0.8 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const checkTheme = () => {
            const theme = document.documentElement.classList.contains('dark');
            setIsDark(theme);
        };
        checkTheme();
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [x, y]);

    if (!isDark) return null;

    return (
        <motion.div
            ref={containerRef}
            className="fixed w-80 h-80 pointer-events-none z-50 mix-blend-screen"
            style={{
                x: springX,
                y: springY,
                translateX: '-50%',
                translateY: '-50%',
                background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(124, 58, 237, 0.08) 40%, transparent 70%)',
            }}
        />
    );
}

export function CursorTrail() {
    const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);
    const [isDark, setIsDark] = useState(true);
    const idRef = useRef(0);

    useEffect(() => {
        const checkTheme = () => {
            const theme = document.documentElement.classList.contains('dark');
            setIsDark(theme);
        };
        checkTheme();
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const newPoint = { x: e.clientX, y: e.clientY, id: idRef.current++ };
            setTrails((prev) => {
                const updated = [...prev, newPoint];
                if (updated.length > 8) return updated.slice(-8);
                return updated;
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    if (!isDark) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-40">
            {trails.map((trail, i) => (
                <motion.div
                    key={trail.id}
                    initial={{ opacity: 0.6, scale: 1 }}
                    animate={{ opacity: 0, scale: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="fixed w-2 h-2 rounded-full"
                    style={{
                        left: trail.x,
                        top: trail.y,
                        marginLeft: -4,
                        marginTop: -4,
                        background: i < 3 
                            ? 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)'
                            : 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
                    }}
                />
            ))}
        </div>
    );
}