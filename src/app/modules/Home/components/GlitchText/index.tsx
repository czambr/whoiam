import  { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const GlitchText = ({ text, className = '' }: { text: string; className?: string }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [glitchChars, setGlitchChars] = useState<string[]>([]);

    useEffect(() => {
        if (!isHovered) return;
        
        const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        const interval = setInterval(() => {
            setGlitchChars(
                text.split('').map(() => chars[Math.floor(Math.random() * chars.length)]),
            );
        }, 50);
        
        const timeout = setTimeout(() => {
            clearInterval(interval);
            setGlitchChars([]);
        }, 300);
        
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [isHovered, text]);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
        setIsHovered(false);
        setGlitchChars([]);
    };

    const displayText = glitchChars.length > 0 ? glitchChars.join('') : text;

    return (
        <motion.span
            className={`relative inline-block cursor-default ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            animate={isHovered ? { x: [0, -2, 2, -1, 1, 0] } : {}}
            transition={{ duration: 0.3 }}
        >
            <span className='invisible'>{text}</span>
            <span className='absolute inset-0 whitespace-nowrap overflow-visible flex justify-center'>
                {displayText}
            </span>
        </motion.span>
    );
}