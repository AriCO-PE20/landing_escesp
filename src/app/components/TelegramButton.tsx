import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function TelegramButton() {
  const handleTelegramClick = () => {
    // Reemplaza 'tu_bot_username' con el username real de tu bot de Telegram
    window.open("https://t.me/tu_bot_username", "_blank");
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7, type: "spring" }}
      onClick={handleTelegramClick}
      className="fixed bottom-8 right-6 z-50 w-16 h-16 bg-gradient-to-br from-[#0088cc] to-[#0077b5] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        boxShadow: [
          "0 10px 30px rgba(0, 136, 204, 0.3)",
          "0 10px 40px rgba(0, 136, 204, 0.5)",
          "0 10px 30px rgba(0, 136, 204, 0.3)",
        ],
      }}
      transition={{
        boxShadow: {
          duration: 2,
          repeat: Infinity,
        },
      }}
    >
      <MessageCircle className="w-8 h-8" fill="white" />
      <motion.div
        className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF5555] rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.button>
  );
}
