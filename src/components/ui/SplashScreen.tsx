import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AFLogo from '../../assets/AF.png';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Keep the splash screen visible for a bit to show off the animation
    const timer = setTimeout(() => {
      onComplete();
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-theme-black overflow-hidden"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }} // Slides up like a curtain to reveal the site
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // Cinematic smooth easing
    >
      {/* Cinematic Glowing Background Pulse */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-theme-yellow/20 blur-[100px] rounded-full"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-12"
      >
        {/* Logo with slight hover float effect */}
        <motion.img 
          src={AFLogo} 
          alt="Ignite Nova Technologies" 
          className="h-28 md:h-40 object-contain drop-shadow-2xl"
          animate={{ 
            y: [-5, 5, -5],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Tech-style Loading Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="text-theme-yellow tracking-[0.4em] text-xs font-bold uppercase">
            Initializing
          </div>
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 bg-theme-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                animate={{ y: ["0%", "-150%", "0%"] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
