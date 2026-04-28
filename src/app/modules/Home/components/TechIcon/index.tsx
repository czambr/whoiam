import { useState } from "react";
import  { motion } from "framer-motion";
import type { stack } from "@/app/shared/data/stack";

export const TechIcon = ({ item }: { item: typeof stack[0] }) => {
    const Icon = item.Icon;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative p-6 rounded-2xl cursor-pointer bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/5 backdrop-blur-sm overflow-hidden"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        >
            <div className="absolute inset-0 bg-linear-to-br from-sky-500/5 via-transparent to-violet-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-0 right-0 w-20 h-20 bg-sky-500/10 rounded-full blur-2xl" />
            <div className="relative z-10 flex flex-col items-center gap-4">
                <motion.div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.bgClass}`}
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 0.2 }}
                >
                    <Icon className={`h-7 w-7 ${item.colorClass}`} />
                </motion.div>

                <div className="text-center">
                    <span className="block font-semibold text-neutral-900 dark:text-neutral-200">
                        {item.name}
                    </span>
                </div>
            </div>

            <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-sky-500 to-violet-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
}
