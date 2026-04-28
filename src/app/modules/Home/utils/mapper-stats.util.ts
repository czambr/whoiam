import type { TFunction } from "i18next";
import { Sparkles, Users, Code } from "lucide-react";
import { FaIndustry } from "react-icons/fa";

export const mapperStatsLabels = ({ t, yearsOfExperience }: { t: TFunction; yearsOfExperience: number }) => {
    return [
        { value: yearsOfExperience, suffix: '+', label: t('about.stats.years'), icon: Sparkles },
        { value: 30, suffix: '+', label: t('about.stats.industries'), icon: FaIndustry },
        { value: 2, suffix: '+', label: t('about.stats.clients'), icon: Users },
        { value: 10, suffix: '+', label: t('about.stats.stack'), icon: Code },]

}