'use client';

import { motion } from 'motion/react';
import { Network, Terminal, Code, Cpu } from 'lucide-react';
import { SkillCategory } from '@/types';

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Client-Side Engineering',
      skills: [
        { name: 'React 18 / 19', level: 95 },
        { name: 'Next.js 14 / 15', level: 92 },
        { name: 'TypeScript', level: 94 },
        { name: 'Tailwind CSS (v4)', level: 96 },
        { name: 'Framer Motion / GSAP', level: 88 },
      ]
    },
    {
      title: 'Server-Side & Databases',
      skills: [
        { name: 'Node.js / Express', level: 92 },
        { name: 'PostgreSQL / SQL', level: 86 },
        { name: 'Firestore / Firebase', level: 90 },
        { name: 'Drizzle ORM / Prisma', level: 88 },
        { name: 'REST & GraphQL APIs', level: 91 },
      ]
    },
    {
      title: 'DevOps & Tooling',
      skills: [
        { name: 'Docker / Containers', level: 84 },
        { name: 'GCP (Cloud Run / GKE)', level: 85 },
        { name: 'AWS (S3 / Lambda)', level: 80 },
        { name: 'Git & CI/CD Pipelines', level: 90 },
        { name: 'Vite / Webpack / Esbuild', level: 87 },
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-28 md:py-36 bg-[#F8F8F7] dark:bg-[#0F0F0E] overflow-hidden border-t-2 border-zinc-900 dark:border-zinc-800 transition-colors duration-300">
      {/* Background Visual Ornament */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-zinc-200/10 dark:bg-zinc-805/5 rounded-none filter blur-3xl pointer-events-none select-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-900 dark:bg-zinc-800 border border-zinc-950 dark:border-zinc-750 rounded-none mb-4">
              <Terminal className="w-3.5 h-3.5 text-white" />
              <span className="text-[10px] sm:text-xs font-mono text-zinc-150 tracking-widest uppercase font-bold">MATRIX SCHEMATIC</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-zinc-955 dark:text-white tracking-tighter leading-tight">
              A comprehensive stack of core competencies.
            </h2>
          </div>
          <div className="h-[2px] flex-1 bg-zinc-900 dark:bg-zinc-805 hidden md:block mx-12 mb-4" />
          <div className="text-right shrink-0">
            <span className="font-mono text-3xl font-extrabold text-zinc-900 dark:text-zinc-500">04 // COMPETENCIES</span>
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {skillCategories.map((meta, categoryIdx) => (
            <motion.div
              key={meta.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ delay: categoryIdx * 0.1, duration: 0.6 }}
              className="p-8 bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-800 rounded-none flex flex-col relative transition-colors duration-300"
            >
              <div className="flex items-center gap-2.5 mb-8">
                <span className="w-2.5 h-6 bg-zinc-900 dark:bg-zinc-700 rounded-none" />
                <h3 className="font-display font-extrabold text-lg text-[#1A1A1A] dark:text-white uppercase tracking-wider">
                  {meta.title}
                </h3>
              </div>

              {/* Skills Items list inside Category */}
              <div className="space-y-6 flex-1">
                {meta.skills.map((skill, skillIdx) => (
                  <div key={skill.name} className="flex flex-col gap-2 group">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-extrabold text-zinc-955 dark:text-zinc-200 font-sans group-hover:text-zinc-650 dark:group-hover:text-zinc-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-zinc-400 dark:text-zinc-505 font-bold tabular-nums">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="w-full h-[6px] bg-zinc-100 dark:bg-zinc-800 rounded-none overflow-hidden border border-zinc-900/10 dark:border-white/10">
                      <motion.div
                        className="h-full bg-zinc-955 dark:bg-white rounded-none origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: skill.level / 100 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: (categoryIdx * 0.1) + (skillIdx * 0.08), 
                          duration: 1.2, 
                          ease: [0.16, 1, 0.3, 1] as const 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Little detail badge */}
              <div className="mt-8 pt-6 border-t-2 border-zinc-900 dark:border-zinc-800 flex items-center justify-between text-[10px] font-mono text-zinc-505 dark:text-zinc-400 font-bold">
                <span>COMPILED AUTOMATICALLY</span>
                <span>STATUS: STABLE</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlighted Stack Feature Grid */}
        <div className="mt-16 p-8 bg-zinc-950 text-white rounded-none grid grid-cols-1 md:grid-cols-3 gap-8 border-2 border-zinc-950 dark:border-zinc-800 relative overflow-hidden">
          {/* Subtle line background details */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e1b4b_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

          <div className="flex gap-4 items-start relative z-10">
            <div className="p-3 bg-zinc-900 rounded-none shrink-0 border border-white/20">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold font-display uppercase tracking-wider text-white">Modular Architectures</h4>
              <p className="text-xs text-zinc-400 mt-1.5 max-w-[240px] leading-relaxed font-sans font-medium">
                Focused on scalable modular designs adhering strictly to SOLID, functional code paradigms, and seamless orchestration.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start relative z-10">
            <div className="p-3 bg-zinc-900 rounded-none shrink-0 border border-white/20">
              <Network className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold font-display uppercase tracking-wider text-white">Zero Idle Footprint</h4>
              <p className="text-xs text-zinc-400 mt-1.5 max-w-[240px] leading-relaxed font-sans font-medium">
                Deploying serverless or edge assets that scale to zero, yielding minimal maintenance costs and maximum peak request capability.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start relative z-10">
            <div className="p-3 bg-zinc-900 rounded-none shrink-0 border border-white/30">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold font-display uppercase tracking-wider text-white">Type Safety Level</h4>
              <p className="text-xs text-zinc-400 mt-1.5 max-w-[240px] leading-relaxed font-sans font-medium">
                Enforcing strict compilation checking, custom guard functions, utility mapping, and integrated schema-level validation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
