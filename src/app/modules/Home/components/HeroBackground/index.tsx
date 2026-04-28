import { FloatingShape } from "./FloatingShape";

export const HeroBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-white dark:bg-neutral-950 transition-colors duration-500" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-neutral-200 via-neutral-50 to-neutral-50 dark:from-neutral-800 dark:via-neutral-950 dark:to-neutral-950 transition-colors duration-500 opacity-60" />
            <FloatingShape delay={0} className="w-72 h-72 bg-neutral-300 dark:bg-neutral-800 top-1/8 -left-15 blur-3xl mix-blend-multiply dark:mix-blend-screen opacity-50" />
            <FloatingShape delay={1} className="w-96 h-96 bg-neutral-200 dark:bg-neutral-900 bottom-0 -right-24 blur-3xl mix-blend-multiply dark:mix-blend-screen opacity-50" />
            <FloatingShape delay={2} className="w-48 h-48 bg-neutral-300 dark:bg-neutral-800 top-1/2 left-1/3 blur-2xl mix-blend-multiply dark:mix-blend-screen opacity-50" />
        </div>
    );
}