import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export function useMousePosition() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [x, y]);

  return { rawX: x, rawY: y, x: springX, y: springY };
}

export function useMouseVelocity() {
  const { rawX, rawY, x, y } = useMousePosition();
  const velocityX = useTransform(rawX, [0, window.innerWidth], [0, 0]);
  const velocityY = useTransform(rawY, [0, window.innerHeight], [0, 0]);

  return { velocityX, velocityY, x, y };
}