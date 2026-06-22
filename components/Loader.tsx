'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
  key?: string;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [activeText, setActiveText] = useState('INITIALIZING ENGINE...');
  const [, setDimensions] = useState({ width: 0, height: 0 });

  const loadingPhrases = [
    'PARSING GEOMERTRIES...',
    'COMPILING NEXT-GEN STACK...',
    'CONNECTING INBYO CORE...',
    'ESTABLISHING PERSPECTIVE...',
    'DEPLOYING EXPERIENCE...',
    'WELCOME'
  ];

  useEffect(() => {
    // Record screen size
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const totalDuration = 2200; // 2.2 seconds total load
    const intervalTime = 30;
    const steps = totalDuration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(currentProgress);

      // Cycle phrases matching progress level
      const phraseIndex = Math.min(
        Math.floor((currentProgress / 100) * loadingPhrases.length),
        loadingPhrases.length - 1
      );
      setActiveText(loadingPhrases[phraseIndex]);

      if (currentProgress === 100) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 500); // Small pause for the "100%" to be read
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Letters of the main loading title
  const titleLetters = "INAM ALI SOOMRO".split("");

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col justify-between bg-white dark:bg-[#0F0F0E] p-8 md:p-16 select-none transition-colors duration-300"
      exit={{ 
        y: '-100%',
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as const } 
      }}
    >
      {/* Top Section */}
      <div className="flex justify-between items-start text-xs font-mono text-zinc-400 dark:text-zinc-505 tracking-widest uppercase">
        <div>PORTFOLIO // V4.0</div>
        <div>EST. 2026</div>
      </div>

      {/* Middle Typography Section */}
      <div className="flex flex-col items-center justify-center my-auto">
        <div className="overflow-hidden mb-4">
          <div className="flex gap-1 md:gap-3 text-4xl sm:text-6xl md:text-8xl font-display font-medium text-zinc-900 dark:text-white tracking-tighter">
            {titleLetters.map((letter, idx) => (
              <motion.span
                key={idx}
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: idx * 0.06,
                  duration: 0.8,
                  ease: [0.215, 0.61, 0.355, 1] as const,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Phase subtitle */}
        <div className="h-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeText}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-xs font-mono text-zinc-505 dark:text-zinc-400 tracking-[0.2em] font-medium"
            >
              {activeText}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Progress Counter */}
      <div className="flex flex-col gap-4">
        {/* Progress Bar Container */}
        <div className="w-full h-[2px] bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-zinc-950 dark:bg-white" 
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'linear' }}
          />
        </div>

        <div className="flex justify-between items-end">
          <div className="max-w-xs text-xs font-mono text-zinc-400 dark:text-zinc-505 leading-relaxed hidden sm:block">
            Architecting scalable systems, modern cloud infrastructure, and immersive visual storytelling.
          </div>
          <div className="text-7xl sm:text-8xl md:text-9xl font-display font-light text-zinc-955 dark:text-white leading-none tabular-nums flex items-baseline">
            <span>{progress}</span>
            <span className="text-xl sm:text-2xl ml-1 font-mono text-zinc-300 dark:text-zinc-600">%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
