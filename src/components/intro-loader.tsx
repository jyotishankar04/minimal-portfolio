// src/components/IntroLoader.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const languages: string[] = [
  "Hello", // English
  "नमस्ते", // Hindi
  "ନମସ୍କାର", // Odia
  "வணக்கம்", // Tamil
  "హలో", // Telugu
  "ഹലോ", // Malayalam
  "नमस्कार", // Marathi
];

interface IntroLoaderProps {
  onComplete: () => void;
}

const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguageIndex((prevIndex) =>
        prevIndex === languages.length - 1 ? 0 : prevIndex + 1
      );
    }, 500); // Change language every 0.5 seconds

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setIsVisible(false); // Trigger exit animation
      setTimeout(() => onComplete(), 500); // Delay the onComplete callback until the animation finishes
    }, 500); // Total duration of the loader

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 5 }} // Add scale to create a zoom-in effect
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center text-4xl font-bold z-50"
        >
          <motion.div
            key={languages[currentLanguageIndex]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {languages[currentLanguageIndex]}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
