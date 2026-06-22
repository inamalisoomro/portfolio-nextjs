'use client';

import React from 'react';
import { motion } from 'motion/react';
import { User, Award, Flame, MapPin, Briefcase } from 'lucide-react';
import { StatItem } from '@/types';

export default function About() {
  const stats: StatItem[] = [
    { value: '8+', label: 'Years of Experience' },
    { value: '60+', label: 'Projects Completed' },
    { value: '30+', label: 'Global Clients Served' },
    { value: '99.9%', label: 'SLA Deployment Rate' },
  ];

  const bioItems = [
    {
      icon: <Briefcase className="w-5 h-5 text-zinc-950" />,
      title: 'Current Focus',
      description: 'Building next-generation SaaS architectures and visual tools as CEO & Principal Architect @ Inbyo Tech.'
    },
    {
      icon: <MapPin className="w-5 h-5 text-zinc-950" />,
      title: 'Location',
      description: 'Operating globally, leveraging cloud workflows to serve clients across North America, Europe, and Asia.'
    },
    {
      icon: <Award className="w-5 h-5 text-zinc-950" />,
      title: 'Philosophy',
      description: 'Striving for architectural perfection, bulletproof typescript structures, and fluid user experiences.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] as const },
    },
  };

  return (
    <section id="about" className="relative py-28 md:py-36 bg-[#F8F8F7] dark:bg-[#0F0F0E] overflow-hidden border-t-2 border-zinc-900 dark:border-zinc-800 transition-colors duration-300">
      {/* Soft background text */}
      <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 select-none pointer-events-none opacity-[0.02] dark:opacity-[0.01] font-display font-black text-[220px] leading-none text-zinc-950 dark:text-white">
        PROFILE
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-900 dark:bg-zinc-800 border border-zinc-950 dark:border-zinc-750 rounded-none mb-4">
              <User className="w-3.5 h-3.5 text-white" />
              <span className="text-[10px] sm:text-xs font-mono text-zinc-150 tracking-widest uppercase font-bold">ABOUT THE FOUNDER</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-zinc-950 dark:text-white tracking-tighter leading-tight">
              ENGINEERING ELEVATED FOR DIGITAL SENSATIONS.
            </h2>
          </div>
          <div className="h-[2px] flex-1 bg-zinc-900 dark:bg-zinc-800 hidden md:block mx-12 mb-4" />
          <div className="text-right shrink-0">
            <span className="font-mono text-3xl font-extrabold text-zinc-900 dark:text-zinc-500">01 // IDENTITY</span>
          </div>
        </div>

        {/* content split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="col-span-1 lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative w-full max-w-[420px] aspect-square rounded-none overflow-hidden glass-panel p-3 border-2 border-zinc-900 dark:border-zinc-800 shadow-none bg-white dark:bg-zinc-900 transition-colors duration-300"
            >
              {/* Outer boundary lines */}
              <div className="absolute inset-4 border border-zinc-900/10 dark:border-white/10 rounded-none pointer-events-none z-10" />
              
              {/* Profile Image with no-referrer as required in image-generation guidelines */}
              <img
                src="/images/logo.png"
                alt="Inam Ali Soomro - Abstract Geometry Avatar"
                className="w-full h-full object-cover rounded-none select-none"
                referrerPolicy="no-referrer"
              />

              {/* Float-badge representing technology stack */}
              <div className="absolute bottom-6 left-6 z-20 bg-[#1A1A1A] dark:bg-zinc-900 border border-white/20 dark:border-zinc-700 rounded-none px-4 py-2 flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-zinc-400 uppercase leading-none font-bold">CORE ENGINE</span>
                  <span className="text-xs font-bold text-white leading-tight">TypeScript & Next.js</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Text/Details Column */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-10% 0px' }}
              className="space-y-8"
            >
              {/* Bio blurb paragraph */}
              <motion.div variants={itemVariants} className="space-y-4">
                <p className="text-lg md:text-xl font-medium text-zinc-800 dark:text-zinc-300 leading-relaxed font-sans transition-colors duration-300">
                  Hello, I'm <strong className="font-extrabold text-zinc-950 dark:text-white underline decoration-2 decoration-zinc-900 dark:decoration-white underline-offset-4">Inam Ali Soomro</strong>. Over the past eight years, I have architected, deployed, and scaled highly sophisticated digital solutions. As the founder of <strong className="font-extrabold text-zinc-950 dark:text-white">Inbyo Tech</strong>, my mission is to merge structural excellence with exceptional interface aesthetics.
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed transition-colors duration-300">
                  I specialize in full-stack architectures involving TypeScript, high-concurrency Node.js APIs, serverless structures, and real-time interactive frontends. I treat coding as an art of precision — emphasizing crystal-clear state flows, robust schemas, and high performance at every layer of deployment.
                </p>
              </motion.div>

              {/* Bullet details */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 pt-6 border-t-2 border-zinc-900 dark:border-zinc-800">
                {bioItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="p-3 bg-zinc-900 dark:bg-zinc-800 border border-zinc-950 dark:border-zinc-750 text-white rounded-none shrink-0">
                      {React.cloneElement(item.icon, { className: 'w-5 h-5 text-white' })}
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-zinc-950 dark:text-white font-display uppercase tracking-widest">{item.title}</h4>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed font-sans font-medium">{item.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Numerical stats grid */}
              <motion.div 
                variants={itemVariants} 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t-2 border-zinc-900 dark:border-zinc-800 text-center md:text-left"
              >
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col border-l-4 border-zinc-900 dark:border-zinc-700 pl-4">
                    <span className="text-4xl md:text-5xl font-display font-extrabold text-[#1A1A1A] dark:text-white tracking-tighter leading-none">
                      {stat.value}
                    </span>
                    <span className="text-[10px] md:text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-2 uppercase tracking-widest font-bold">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
