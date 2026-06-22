'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Inbyo Tech', href: '#inbyo' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolledScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();

  // Handle scroll effect & active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setScrolledScrolled(window.scrollY > 20);

      // Simple active link calculation
      const sections = ['about', 'inbyo', 'work', 'skills', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Section is active if its top is near top of viewport or it dominates the view
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
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

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled 
            ? 'py-4 bg-[#F8F8F7]/95 dark:bg-[#0F0F0E]/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 shadow-sm' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 group font-display font-extrabold text-[#1A1A1A] dark:text-white text-lg uppercase tracking-[0.1em] relative overflow-hidden"
          >
            <span className="w-3 h-3 bg-zinc-900 dark:bg-white group-hover:rotate-45 transition-transform duration-300" />
            <span className="relative">
              INAM ALI SOOMRO
              <motion.span 
                className="absolute left-0 bottom-0 w-full h-[2px] bg-zinc-900 dark:bg-white origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300"
              />
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6 text-[11px] font-bold tracking-widest uppercase">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`relative py-1.5 px-1 transition-all duration-300 ${
                      isActive ? 'text-zinc-950 dark:text-white font-extrabold' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-955 dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div 
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[3px] bg-zinc-950 dark:bg-white"
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 active:scale-95 transition-all duration-300 flex items-center justify-center rounded-none bg-transparent cursor-pointer ml-2"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>

            {/* Premium CTA */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-[10px] font-mono tracking-widest font-extrabold uppercase border-2 border-zinc-900 dark:border-white hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 transition-all duration-300 rounded-none bg-transparent text-zinc-900 dark:text-white"
            >
              Contact
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Theme Toggle & Menu Button Group */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white hover:bg-zinc-955 hover:text-white dark:hover:bg-white dark:hover:text-zinc-955 active:scale-95 transition-all duration-300 rounded-none bg-transparent cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 active:scale-95 transition-all duration-300 rounded-none bg-transparent cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md z-30 flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            {/* Nav List */}
            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.div
                    key={link.label}
                    initial={{ x: -25, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`block font-display text-3xl font-medium tracking-tight ${
                        isActive ? 'text-zinc-955 dark:text-white font-semibold' : 'text-zinc-400 dark:text-zinc-600'
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.div>
                );
              })}
            </div>

            {/* Drawer Bottom Info */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="border-t border-zinc-100 dark:border-zinc-800 pt-8"
            >
              <div className="text-xs font-mono text-zinc-400 dark:text-zinc-505 uppercase tracking-widest mb-4">Founder @ Inbyo Tech</div>
              <a 
                href="mailto:inamalisoomro90@gmail.com" 
                className="text-lg font-medium text-zinc-900 dark:text-zinc-100 hover:underline"
              >
                inamalisoomro90@gmail.com
              </a>
              <div className="flex gap-4 mt-4 text-xs font-mono text-zinc-505 dark:text-zinc-400">
                <a href="https://github.com/inamalisoomro" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white">GitHub</a>
                <a href="https://www.linkedin.com/in/inamalisoomro/" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-white">LinkedIn</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
