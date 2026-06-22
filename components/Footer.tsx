'use client';

import { Globe } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#F8F8F7] dark:bg-[#0F0F0E] border-t-2 border-zinc-900 dark:border-zinc-805 py-12 px-6 md:px-12 select-none transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <button 
            onClick={handleScrollToTop}
            className="flex items-center gap-2.5 group font-display font-extrabold text-[#1A1A1A] dark:text-white text-sm uppercase tracking-widest relative overflow-hidden bg-transparent border-0 cursor-pointer ease-out duration-300 transition-colors"
          >
            <span className="w-2.5 h-2.5 bg-zinc-950 dark:bg-white group-hover:rotate-45 transition-transform duration-300" />
            INAM ALI SOOMRO
          </button>
          <p className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 mt-2 font-mono font-bold tracking-wider">
            &copy; 2026 INAM ALI SOOMRO. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Right Side: Simple Links & Attribution */}
        <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
          <div className="flex flex-wrap gap-4 text-[10px] font-mono font-extrabold text-zinc-500 dark:text-zinc-400 justify-center tracking-widest">
            <a href="#about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">ABOUT</a>
            <span>·</span>
            <a href="#inbyo" className="hover:text-zinc-900 dark:hover:text-white transition-colors">INBYO TECH</a>
            <span>·</span>
            <a href="#work" className="hover:text-zinc-900 dark:hover:text-white transition-colors">WORK</a>
            <span>·</span>
            <a href="#skills" className="hover:text-zinc-900 dark:hover:text-white transition-colors">SKILLS</a>
            <span>·</span>
            <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">CONTACT</a>
          </div>
          <p className="text-[9px] text-zinc-500 dark:text-zinc-400 font-mono mt-1 flex items-center gap-1 font-bold uppercase tracking-wider">
            <Globe className="w-3 h-3 text-zinc-500 dark:text-zinc-400" />
            DESIGNED &amp; ENGINEERED IN PARTNERSHIP WITH INBYO TECH.
          </p>
        </div>

      </div>
    </footer>
  );
}
