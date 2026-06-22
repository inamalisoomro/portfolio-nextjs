'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Layers, Sparkles, MessageSquare } from 'lucide-react';
import ThreeCanvas from '@/components/ThreeCanvas';

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(id);
    if (targetElement) {
      const topOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const textItemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as const }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#F8F8F7] dark:bg-[#0F0F0E] px-6 md:px-12 pt-20 transition-colors duration-300"
    >
      {/* Absolute background 3D scene (interactions captured globally) */}
      <div className="absolute inset-0 z-0">
        <ThreeCanvas />
      </div>

      {/* Decorative top badge / status indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="z-10 mb-8 inline-flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-zinc-900 border border-zinc-250/90 dark:border-zinc-800 rounded-none shadow-xs transition-colors duration-300"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full bg-zinc-900 dark:bg-white opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 bg-zinc-950 dark:bg-white"></span>
        </span>
        <span className="text-[10px] sm:text-xs font-mono text-zinc-600 dark:text-zinc-400 tracking-[0.15em] font-bold">
          AVAILABLE FOR WORLD-CLASS ENGAGEMENTS
        </span>
      </motion.div>

      {/* Hero Typography Group */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 text-center max-w-5xl flex flex-col items-center"
      >
        {/* Large Name */}
        <div className="overflow-hidden py-2 select-none">
          <motion.h1 
            variants={textItemVariants}
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[110px] font-display font-extrabold text-[#1A1A1A] dark:text-white tracking-tighter leading-[0.85]"
          >
            INAM ALI
          </motion.h1>
         </div>
         <div className="overflow-hidden py-2 select-none -mt-1 sm:-mt-2">
          <motion.h1 
            variants={textItemVariants}
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[110px] font-display font-extrabold text-zinc-400 dark:text-zinc-600 tracking-tighter leading-[0.85]"
          >
            SOOMRO
          </motion.h1>
         </div>

        {/* Subtitle / Role descriptor */}
        <motion.div 
          variants={textItemVariants}
          className="mt-6 md:mt-8 max-w-2xl text-center"
        >
          <p className="text-base sm:text-lg md:text-xl font-sans text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
            Full Stack Developer & Founder of <span className="text-[#1A1A1A] dark:text-white font-extrabold relative inline-block">
              Inbyo Tech
            </span>. Building high-performance digital architectures with a focus on immersive aesthetics.
          </p>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 dark:text-zinc-505 mt-3 tracking-widest font-bold uppercase">
            [ Interactive Mesh Module 01-A ]
          </p>
        </motion.div>

        {/* Action Button Controls */}
        <motion.div 
          variants={textItemVariants}
          className="mt-10 flex flex-wrap gap-4 justify-center items-center"
        >
          <button
            onClick={(e) => handleScrollTo(e, '#work')}
            className="group relative flex items-center gap-2.5 px-8 py-4 bg-zinc-900 hover:bg-black dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-mono tracking-widest font-bold uppercase transition-all duration-300 border-2 border-zinc-900 dark:border-white rounded-none shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-505 group-hover:text-white dark:group-hover:text-zinc-950 transition-colors" />
            View Work
            <span className="absolute inset-0 border border-white/10 dark:border-none rounded-none pointer-events-none" />
          </button>

          <button
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="group relative flex items-center gap-2 px-8 py-4 bg-white hover:bg-zinc-50 dark:bg-transparent dark:hover:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 text-xs text-zinc-900 dark:text-white font-mono tracking-widest font-bold uppercase transition-all duration-300 rounded-none shadow-xs active:scale-98 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
            Say Hello
          </button>
        </motion.div>
      </motion.div>

      {/* Floating features ticker background indicator */}
      <div className="absolute bottom-24 left-6 md:left-12 hidden lg:flex flex-col gap-1 font-mono text-[10px] text-zinc-400 dark:text-zinc-650">
        <div className="flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-zinc-500" /> GRAPHICAL SHELL: THREE.JS GL</div>
        <div>STEREOGRAPHY: MOUSE VECTOR MAP</div>
      </div>

      <div className="absolute bottom-24 right-6 md:right-12 hidden lg:flex flex-col gap-1 font-mono text-[10px] text-zinc-400 dark:text-zinc-650 text-right">
        <div>DESIGN STAGE: SWISS MINIMAL</div>
        <div>INTERACTION RATIO: 1:1 INTERACTIVE</div>
      </div>

      {/* Bottom Scroll mouse indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={(e) => {
          const el = document.querySelector('#about');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] font-mono tracking-[0.25em] text-zinc-400 dark:text-zinc-505 font-bold">SCROLL DOWN</span>
        <div className="w-6 h-10 border border-zinc-350 dark:border-zinc-850 rounded-none flex justify-center p-1.5 transition-colors">
          <motion.div 
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="w-1 h-2 bg-zinc-955 dark:bg-white rounded-none"
          />
        </div>
      </motion.div>
    </section>
  );
}
