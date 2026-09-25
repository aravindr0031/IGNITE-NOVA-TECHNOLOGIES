import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AFLogo from '../../assets/AF.png';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Keep the splash screen visible for 2.5 seconds before fading out
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-theme-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center gap-8"
      >
        {/* Logo */}
        <img src={AFLogo} alt="Ignite Nova Technologies" className="h-24 md:h-32 object-contain" />
        
        {/* Loading Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="overflow-hidden h-[3px] w-48 bg-theme-white/10 rounded-full"
        >
          <motion.div 
            className="h-full bg-theme-yellow rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
