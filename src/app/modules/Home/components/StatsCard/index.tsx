import { motion } from "framer-motion";
import { AnimatedNumber } from "./AnimatedNumber";

export const StatCard = ({ value, suffix, label, icon: Icon, delay }: { value: number; suffix?: string; label: string; icon: React.ElementType; delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="relative p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/5 backdrop-blur-sm overflow-hidden group"
        >
            <div className="absolute inset-0 bg-linear-to-br from-sky-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden dark:block" />

            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 hidden dark:block" />

            <div className="relative z-10">
                <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <Icon className="w-6 h-6 text-sky-500 dark:text-sky-400" />
                </motion.div>

                <div className="flex items-baseline gap-1">
                    <AnimatedNumber value={value} suffix={suffix} className="text-4xl font-bold text-neutral-900 dark:text-neutral-100" />
                </div>

                <div className="text-sm mt-1 text-neutral-500 dark:text-neutral-500">{label}</div>
            </div>

            <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-sky-500 to-violet-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.3, duration: 0.5 }}
            />
        </motion.div>
    );
}
