import { useInView, useReducedMotion, animate } from "framer-motion";
import { useRef, useEffect } from "react";

export const AnimatedNumber = ({ value, suffix, className }: { value: number; suffix?: string; className?: string }) => {
    const ref = useRef<HTMLSpanElement | null>(null);
    const isInView = useInView(ref, { once: true, amount: 0.6 });
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        if (!isInView || !ref.current) return;

        if (shouldReduceMotion) {
            ref.current.textContent = `${value}${suffix ?? ''}`;
            return;
        }

        const controls = animate(0, value, {
            type: 'spring',
            stiffness: 100,
            damping: 15,
            mass: 0.8,
            onUpdate: latest => {
                if (ref.current) {
                    ref.current.textContent = `${Math.round(latest)}${suffix ?? ''}`;
                }
            },
        });

        return () => controls.stop();
    }, [isInView, shouldReduceMotion, suffix, value]);

    return (
        <span ref={ref} className={className}>
            {shouldReduceMotion ? `${value}${suffix ?? ''}` : `0${suffix ?? ''}`}
        </span>
    );
};