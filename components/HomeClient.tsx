'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import InbyoTech from '@/components/InbyoTech';
import SelectedWorks from '@/components/SelectedWorks';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomeClient() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-full min-h-screen bg-[#F8F8F7] dark:bg-[#0F0F0E] ...">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: 'easeOut' }} className="flex flex-col w-full min-h-screen">
            <Navbar />
            <main className="w-full flex-grow">
              <Hero />
              <About />
              <InbyoTech />
              <SelectedWorks />
              <Skills />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}