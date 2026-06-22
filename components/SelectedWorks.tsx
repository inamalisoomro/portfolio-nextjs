'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderGit2, ArrowUpRight, Github, X } from 'lucide-react';
import { Project } from '@/types';
import { useTheme } from '@/context/ThemeContext';

export default function SelectedWorks() {
  const projects: Project[] = [
    {
      id: '01',
      title: 'Inorbits Engine',
      subtitle: 'Real-time workflow orchestrator',
      description: 'A robust, high-performance workspace helping teams sketch system workflows visually and compile them into automated, serverless actions via AI agents.',
      role: 'Founder & Tech Lead',
      tech: ['React 19', 'Express', 'WebSockets', 'Tailwind', 'Docker'],
      image: 'https://picsum.photos/seed/inorbits/800/600',
      github: 'https://github.com/inamalisoomro90/inorbits-engine',
      link: 'https://inorbits.inbyotech.com', // EDIT HERE to permanently modify live deployment link in code
      stats: [
        { label: 'CONCURRENCY', value: '10K/s' },
        { label: 'DEPLOY TIME', value: '<2s' }
      ]
    },
    {
      id: '02',
      title: 'OrbitAI Dashboard',
      subtitle: 'Model monitoring & Playground',
      description: 'An enterprise-grade platform crafted for debugging prompt pipelines, visualizing vector embeddings in 3D, and measuring actual inference latencies.',
      role: 'Principal Architect',
      tech: ['Next.js', 'Three.js', 'Node.js', 'Gemini SDK', 'GCP'],
      image: 'https://picsum.photos/seed/orbitai/800/600',
      github: 'https://github.com/inamalisoomro90/orbitai-dashboard',
      link: 'https://orbitai.inbyotech.com', // EDIT HERE to permanently modify live deployment link in code
      stats: [
        { label: 'ACCURACY', value: '98.8%' },
        { label: 'LLM SYNC', value: 'Instant' }
      ]
    },
    {
      id: '03',
      title: 'Preadly Ledger',
      subtitle: 'Minimal fintech wealth engine',
      description: 'A luxury glassmorphic financial transaction tracker with secure double-entry ledgers, offering custom charts, real-time alerts, and multi-currency support.',
      role: 'Core Backend Architect',
      tech: ['TypeScript', 'Express', 'PostgreSQL', 'D3.js', 'Redis'],
      image: 'https://picsum.photos/seed/preadly/800/600',
      github: 'https://github.com/inamalisoomro90/preadly-ledger',
      link: 'https://preadly.inbyotech.com', // EDIT HERE to permanently modify live deployment link in code
      stats: [
        { label: 'LEDGER SYNC', value: '0.8ms' },
        { label: 'COMPLIANCE', value: 'SOC-2' }
      ]
    }
  ];

  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="relative py-28 md:py-36 bg-[#F8F8F7] dark:bg-[#0F0F0E] overflow-hidden border-t-2 border-zinc-900 dark:border-zinc-800 transition-colors duration-300">
      {/* Background Section Mark */}
      <div className="absolute right-0 bottom-0 select-none pointer-events-none opacity-[0.02] dark:opacity-[0.01] font-display font-black text-[220px] leading-none text-zinc-955 dark:text-white">
        GALLERY
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-900 dark:bg-zinc-805 border border-zinc-950 dark:border-zinc-800 rounded-none mb-4">
              <FolderGit2 className="w-3.5 h-3.5 text-white" />
              <span className="text-[10px] sm:text-xs font-mono text-zinc-150 tracking-widest uppercase font-bold">WORKS PORTFOLIO</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-zinc-955 dark:text-white tracking-tighter leading-tight uppercase">
              Selected works defining structural excellence.
            </h2>
          </div>
          <div className="h-[2px] flex-1 bg-zinc-900 dark:bg-zinc-805 hidden md:block mx-12 mb-4" />
          <div className="text-right shrink-0">
            <span className="font-mono text-3xl font-extrabold text-zinc-900 dark:text-zinc-500">03 // SELECTED WORKS</span>
          </div>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-6">
          {projects.map((project, idx) => (
            <TiltCard 
              key={project.id} 
              project={project} 
              index={idx} 
              onSelect={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Detail Pop-up Animated Modal */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal 
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/* Sub-component for interactive 3D tilt card */
interface TiltCardProps {
  project: Project;
  index: number;
  onSelect: () => void;
  key?: string | number;
}

function TiltCard({ project, index, onSelect }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ rotateX: 0, rotateY: 0, shadowX: 0, shadowY: 0, scale: 1 });
  const { theme } = useTheme();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const width = rect.width;
    const height = rect.height;

    const percentX = x / width - 0.5;
    const percentY = y / height - 0.5;

    const maxRotation = 10;
    const rotY = percentX * maxRotation;
    const rotX = -percentY * maxRotation;

    const shX = -percentX * 25; 
    const shY = -percentY * 25;

    setCoords({
      rotateX: rotX,
      rotateY: rotY,
      shadowX: shX,
      shadowY: shY,
      scale: 1.015
    });
  };

  const handleMouseLeave = () => {
    setCoords({
      rotateX: 0,
      rotateY: 0,
      shadowX: 0,
      shadowY: 0,
      scale: 1
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onSelect}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ delay: index * 0.12, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as const }}
      style={{
        transform: `perspective(1000px) rotateX(${coords.rotateX}deg) rotateY(${coords.rotateY}deg) scale(${coords.scale})`,
        boxShadow: coords.scale > 1 
          ? (theme === 'dark' ? `12px 12px 0px #F8F8F7` : `12px 12px 0px #1A1A1A`)
          : `0px 0px 0px #1A1A1A`,
        transition: coords.scale === 1 ? 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)' : 'transform 0.08s ease-out, box-shadow 0.08s ease-out',
      }}
      className="group flex flex-col justify-between p-6 bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-800 rounded-none cursor-pointer select-none overflow-hidden h-full transform-gpu relative transition-colors duration-300"
    >
      {/* Absolute linear shine glow layer */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-zinc-950/5 to-zinc-950/10 dark:via-white/5 dark:to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Project Card Image Container */}
        <div className="relative w-full aspect-video rounded-none overflow-hidden bg-zinc-100 dark:bg-zinc-855 border border-zinc-900/10 dark:border-zinc-700 mb-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.98]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3 bg-zinc-900 dark:bg-zinc-800 text-white border border-zinc-950 dark:border-zinc-700 text-[10px] font-mono font-bold px-3 py-1 rounded-none">
            {project.role.toUpperCase()}
          </div>
        </div>

        {/* Title, Subtitle, Info */}
        <div className="flex justify-between items-start gap-4 mb-2">
          <span className="font-mono text-zinc-400 dark:text-zinc-500 text-xs font-bold">{project.id} // PROJECT</span>
          <div className="flex items-center gap-1">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="p-1.5 text-zinc-500 hover:text-white hover:bg-zinc-955 dark:text-zinc-400 dark:hover:text-zinc-900 dark:hover:bg-white border border-transparent hover:border-zinc-950 dark:hover:border-white rounded-none transition-all"
                onClick={(e) => e.stopPropagation()} // Stop bubbling
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="p-1.5 text-zinc-500 hover:text-white hover:bg-zinc-955 dark:text-zinc-400 dark:hover:text-zinc-900 dark:hover:bg-white border border-transparent hover:border-zinc-950 dark:hover:border-white rounded-none transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-extrabold font-display text-zinc-955 dark:text-white group-hover:text-zinc-650 dark:group-hover:text-zinc-300 transition-colors duration-350 uppercase tracking-wider">
          {project.title}
        </h3>
        <p className="text-zinc-500 dark:text-zinc-400 text-xs font-bold font-sans mt-0.5 mb-3 italic">
          {project.subtitle}
        </p>
        
        <p className="text-zinc-600 dark:text-zinc-300 text-xs leading-relaxed font-medium mt-3 block">
          {project.description}
        </p>
      </div>

      <div className="mt-8 border-t-2 border-zinc-900 dark:border-zinc-800 pt-6 transition-colors duration-300">
        {/* Quantitative Project Stats */}
        {project.stats && (
          <div className="grid grid-cols-2 gap-4 mb-5 text-left">
            {project.stats.map((st) => (
              <div key={st.label}>
                <div className="text-[9px] font-mono text-zinc-400 dark:text-zinc-505 uppercase tracking-widest leading-none font-bold">{st.label}</div>
                <div className="text-sm font-extrabold text-zinc-955 dark:text-zinc-100 mt-1.5 tabular-nums">{st.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tag) => (
            <span key={tag} className="text-[10px] font-mono font-bold text-zinc-900 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 border border-zinc-900 dark:border-zinc-700 px-2.5 py-1 rounded-none transition-colors duration-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* Modal Popup Component */
interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-zinc-955/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        className="bg-white dark:bg-[#121212] border-4 border-zinc-900 dark:border-white text-zinc-900 dark:text-white p-6 md:p-8 rounded-none max-w-2xl w-full relative z-10 shadow-none overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white hover:bg-zinc-955 hover:text-white dark:hover:bg-white dark:hover:text-zinc-955 transition-all cursor-pointer rounded-none bg-transparent"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header/Title info */}
        <div className="flex items-center gap-2 mb-4 font-mono text-[10px] sm:text-xs font-bold text-zinc-400 dark:text-zinc-505 uppercase tracking-widest">
          <span>{project.id} // SECURE SHELL</span>
          <span>·</span>
          <span>{project.role.toUpperCase()}</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-extrabold font-display leading-tight uppercase tracking-wide mb-2 text-zinc-955 dark:text-white">
          {project.title}
        </h3>
        <p className="text-zinc-500 dark:text-zinc-400 font-bold italic text-xs sm:text-sm mb-6">
          {project.subtitle}
        </p>

        {/* Image preview of project */}
        <div className="relative w-full aspect-video rounded-none bg-zinc-100 dark:bg-zinc-855 border-2 border-zinc-900 dark:border-zinc-800 mb-6 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Description */}
        <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed font-medium mb-6">
          {project.description}
        </p>

        {/* Actions bar with static links configured in code */}
        <div className="flex flex-wrap items-center gap-4 border-t-2 border-zinc-900 dark:border-zinc-800 pt-6">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white dark:bg-white dark:text-zinc-955 border-2 border-zinc-900 dark:border-white hover:bg-transparent hover:text-zinc-900 dark:hover:bg-transparent dark:hover:text-white font-mono text-xs font-bold uppercase tracking-widest transition-all rounded-none"
            >
              <span>VISIT LIVE DEMO</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
          
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-zinc-955 dark:text-white border-2 border-zinc-900 dark:border-white hover:bg-zinc-955 hover:text-white dark:hover:bg-white dark:hover:text-zinc-955 font-mono text-xs font-bold uppercase tracking-widest transition-all rounded-none"
            >
              <Github className="w-4 h-4" />
              <span>GITHUB SOURCE</span>
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
