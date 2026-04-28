import { AnimatePresence,  motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const roles = ['role', 'roleAlt', 'roleAlt2'];
export const RoleRotator = () => {
    const { t } = useTranslation();
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence mode="wait">
            <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.4 }}
                className="bg-linear-to-r from-sky-600 via-cyan-500 to-violet-500 bg-clip-text text-transparent"
            >
                {t(`hero.${roles[currentRole]}`)}
            </motion.span>
        </AnimatePresence>
    );
}