'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Network, Globe, Blocks, CodeXml, ChevronRight, Activity, Cpu, ArrowUpRight } from 'lucide-react';

export default function InbyoTech() {
  const offerings = [
    {
      icon: <CodeXml className="w-6 h-6 text-indigo-600" />,
      title: 'Digital Product Engineering',
      description: 'We orchestrate end-to-end web architectures using highly polished React systems, Next.js, robust Node.js clusters, and secure serverless microservices.',
      tags: ['SaaS', 'Fintech Dev', 'React SPAs']
    },
    {
      icon: <Cpu className="w-6 h-6 text-sky-600" />,
      title: 'Cognitive AI Pipelines',
      description: 'Integrating industrial LLMs and agents (like Google Gemini) directly into production engines to automate manual workflows and supercharge products.',
      tags: ['LangChain', 'Gemini SDK', 'Neural Automation']
    },
    {
      icon: <Network className="w-6 h-6 text-emerald-600" />,
      title: 'Cloud Infrastructure & DevOps',
      description: 'Automated continuous integrations, load balancing, secure cloud hosting (Docker, Google Cloud, AWS), and zero-friction server orchestration.',
      tags: ['Docker', 'GCP / AWS', 'Tailored SLA']
    },
    {
      icon: <Blocks className="w-6 h-6 text-amber-600" />,
      title: 'Immersive Interface Design',
      description: 'Creating high-fidelity, highly polished, tactile interfaces with micro-interactions, 3D element rendering, and meticulous typographic rhythms.',
      tags: ['Framer Motion', 'WebGL / Three.js', 'Tailwind v4']
    },
  ];

  return (
    <section id="inbyo" className="relative py-28 md:py-36 bg-[#F8F8F7] dark:bg-[#0F0F0E] overflow-hidden border-t-2 border-zinc-900 dark:border-zinc-800 transition-colors duration-300">
      {/* Background visual accents */}
      <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-250/10 dark:bg-zinc-805/5 rounded-none filter blur-3xl pointer-events-none select-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-900 dark:bg-zinc-800 border border-zinc-950 dark:border-zinc-750 rounded-none mb-4">
              <Globe className="w-3.5 h-3.5 text-white" />
              <span className="text-[10px] sm:text-xs font-mono text-zinc-150 tracking-widest uppercase font-bold">THE VENTURE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-zinc-955 dark:text-white tracking-tighter leading-tight">
              Inbyo Tech — Building the future of digital software.
            </h2>
          </div>
          <div className="h-[2px] flex-1 bg-zinc-900 dark:bg-zinc-805 hidden md:block mx-12 mb-4" />
          <div className="text-right shrink-0">
            <span className="font-mono text-3xl font-extrabold text-zinc-900 dark:text-zinc-500">02 // INBYO TECH</span>
          </div>
        </div>

        {/* Corporate details + CEO quote block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 items-stretch">
          {/* Company pitch text */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-extrabold font-display uppercase tracking-tight text-zinc-955 dark:text-white transition-colors duration-300">
                A custom engineering studio serving forward-thinking enterprises.
              </h3>
              <p className="text-zinc-750 dark:text-zinc-300 text-sm md:text-base leading-relaxed font-sans font-medium transition-colors duration-300">
                Founded by Inam Ali Soomro, Inbyo Tech designs and develops bespoke tech ecosystems for global startups, corporations, and modern digital brands. We operate at the intersection of scalable software architecture and premium visual storytelling, helping our clients launch secure, reliable, and high-performance digital products that capture value.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-4 pt-6 border-t-2 border-zinc-900 dark:border-zinc-805 h-fit transition-colors duration-300">
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-bold">FOUNDED</div>
                  <div className="text-sm font-extrabold text-zinc-955 dark:text-white mt-1">Est. 2024</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-bold">HEADQUARTERS</div>
                  <div className="text-sm font-extrabold text-zinc-955 dark:text-white mt-1">Global Workflows</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-bold">TEAM DENSITY</div>
                  <div className="text-sm font-extrabold text-[#1A1A1A] dark:text-white mt-1">15+ Elite Developers</div>
                </div>
              </div>
            </div>
          </div>

          {/* CEO Quote / Brand Card */}
          <div className="lg:col-span-5">
            <div className="relative h-full flex flex-col justify-between p-8 bg-zinc-950 text-white rounded-none overflow-hidden shadow-none border-2 border-zinc-950 dark:border-zinc-800">
              {/* Outer lines decor */}
              <div className="absolute right-0 bottom-0 select-none opacity-5 translate-x-20 translate-y-20 font-display font-black text-9xl">
                IBY
              </div>
              <div className="absolute top-4 right-4 text-zinc-800 dark:text-zinc-700">
                <ChevronRight className="w-12 h-12 stroke-[0.5]" />
              </div>

              <div>
                <span className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase font-bold">CEO EXECUTIVE STATEMENT</span>
                <p className="text-zinc-350 text-sm italic font-medium leading-relaxed mt-6 relative z-10 font-sans">
                  "At Inbyo Tech, we do not build typical, commoditized templates. We engineering bespoke, scalable, secure, and blazing-fast applications. We aim for extreme performance — where every page loads instantly, every API is optimized for high concurrency, and every interaction feels fluid and satisfying."
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center justify-between">
                <div>
                  <div className="font-extrabold text-sm uppercase tracking-wide text-white">Inam Ali Soomro</div>
                  <div className="text-[10px] font-mono text-zinc-400 mt-1 uppercase tracking-widest font-medium">Founder & CEO, Inbyo Tech</div>
                </div>
                <div className="w-9 h-9 rounded-none border border-white/20 bg-zinc-900 flex items-center justify-center">
                  <Activity className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Offerings Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {offerings.map((offering, idx) => (
            <motion.div
              key={offering.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: 'easeOut' }}
              className="group p-8 bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-800 rounded-none transition-all duration-300 flex flex-col justify-between shadow-none relative"
            >
              <div>
                <div className="p-3.5 bg-zinc-900 dark:bg-zinc-800 border border-zinc-950 dark:border-zinc-755 text-white rounded-none w-fit group-hover:-translate-y-1 transition-transform duration-300">
                  {React.cloneElement(offering.icon, { className: 'w-6 h-6 text-white' })}
                </div>
                <h4 className="text-lg font-extrabold font-display uppercase tracking-widest text-[#1A1A1A] dark:text-white mt-6 group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1.5">
                  {offering.title}
                </h4>
                <p className="text-zinc-650 dark:text-zinc-400 text-xs sm:text-sm mt-3 leading-relaxed font-sans font-medium transition-colors duration-300">
                  {offering.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {offering.tags.map((tag) => (
                  <span key={tag} className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 border border-zinc-900 dark:border-zinc-700 px-2.5 py-1 rounded-none transition-colors duration-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-mono tracking-widest font-bold uppercase bg-zinc-900 hover:bg-black dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 border-2 border-zinc-955 dark:border-white transition-all duration-300 rounded-none shadow-none group"
          >
            Partner with Inbyo Tech
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
