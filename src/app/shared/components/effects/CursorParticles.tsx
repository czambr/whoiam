import { useEffect, useState } from 'react';

const CURSOR_HIDE = -9999;
const CURSOR_VAR_X = '--cursor-x';
const CURSOR_VAR_Y = '--cursor-y';

let activeTrackers = 0;
let rafId: number | null = null;
let latestPoint = { x: CURSOR_HIDE, y: CURSOR_HIDE };
let isListening = false;
let pointerListener: ((event: PointerEvent) => void) | null = null;

function setCursorVars(point: { x: number; y: number }) {
    const root = document.documentElement;
    root.style.setProperty(CURSOR_VAR_X, `${point.x}px`);
    root.style.setProperty(CURSOR_VAR_Y, `${point.y}px`);
}

function startCursorTracking() {
    if (isListening) return;
    if (typeof window === 'undefined') return;
    setCursorVars(latestPoint);

    pointerListener = (event: PointerEvent) => {
        latestPoint = { x: event.clientX, y: event.clientY };
        if (rafId !== null) return;
        rafId = window.requestAnimationFrame(() => {
            rafId = null;
            setCursorVars(latestPoint);
        });
    };

    window.addEventListener('pointermove', pointerListener, { passive: true });
    isListening = true;
}

function stopCursorTracking() {
    if (!isListening) return;
    if (pointerListener) {
        window.removeEventListener('pointermove', pointerListener);
    }
    if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
        rafId = null;
    }
    latestPoint = { x: CURSOR_HIDE, y: CURSOR_HIDE };
    setCursorVars(latestPoint);
    pointerListener = null;
    isListening = false;
}

function useIsDarkMode() {
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

    return isDark;
}

function useCursorVars(isActive: boolean) {
    useEffect(() => {
        if (!isActive) return;
        activeTrackers += 1;
        if (activeTrackers === 1) {
            startCursorTracking();
        }
        return () => {
            activeTrackers = Math.max(0, activeTrackers - 1);
            if (activeTrackers === 0) {
                stopCursorTracking();
            }
        };
    }, [isActive]);
}

export function CursorGlow() {
    const isDark = useIsDarkMode();
    useCursorVars(isDark);

    if (!isDark) return null;

    return <div className="cursor-glow" aria-hidden="true" />;
}

export function CursorTrail() {
    const isDark = useIsDarkMode();
    useCursorVars(isDark);

    if (!isDark) return null;

    return <div className="cursor-trail" aria-hidden="true" />;
}