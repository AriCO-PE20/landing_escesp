import { Languages } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, type: "spring" }}
      onClick={() => setLanguage(language === "ru" ? "es" : "ru")}
      className="fixed top-24 right-6 z-50 w-14 h-14 bg-gradient-to-br from-[#D64545] to-[#E87461] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group"
      whileHover={{ rotate: 180 }}
      whileTap={{ scale: 0.9 }}
    >
      <Languages className="w-6 h-6" />
      <motion.div 
        className="absolute -bottom-8 bg-[#2C1810] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        {language === "ru" ? "ES" : "RU"}
      </motion.div>
    </motion.button>
  );
}
