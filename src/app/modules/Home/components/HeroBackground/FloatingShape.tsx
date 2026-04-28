import { motion } from 'framer-motion';

export const FloatingShape = ({ delay, className }: { delay: number; className: string }) => {
    return (
        <motion.div
            className={`absolute rounded-full opacity-20 ${className}`}
            animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 4 + delay, delay: delay, repeat: Infinity, ease: 'easeInOut' }}
        />
    );
}