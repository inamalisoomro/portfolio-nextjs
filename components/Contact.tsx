'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Mail, Github, Linkedin, MessageSquareCode, CheckCircle, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    // Simulate database write / trigger callback in 1.4 seconds
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1400);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-[#F8F8F7] dark:bg-[#0F0F0E] overflow-hidden border-t-2 border-zinc-900 dark:border-zinc-800 transition-colors duration-300">
      {/* Background Ornament */}
      <div className="absolute left-0 bottom-0 select-none pointer-events-none opacity-[0.02] dark:opacity-[0.01] font-display font-black text-[220px] leading-none text-zinc-955 dark:text-white">
        CONTACT
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-900 dark:bg-zinc-800 border border-zinc-950 dark:border-zinc-750 rounded-none mb-4">
              <MessageSquareCode className="w-3.5 h-3.5 text-white" />
              <span className="text-[10px] sm:text-xs font-mono text-zinc-150 tracking-widest uppercase font-bold">GET IN TOUCH</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-zinc-955 dark:text-white tracking-tighter leading-tight">
              Let's build something iconic.
            </h2>
          </div>
          <div className="h-[2px] flex-1 bg-zinc-900 dark:bg-zinc-800 hidden md:block mx-12 mb-4" />
          <div className="text-right shrink-0">
            <span className="font-mono text-3xl font-extrabold text-zinc-900 dark:text-zinc-500">05 // ENGAGEMENTS</span>
          </div>
        </div>

        {/* content grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Details / Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-12">
            <div>
              <p className="text-base sm:text-lg font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans max-w-sm transition-colors duration-300">
                Have a challenging SaaS architecture, full-stack build, or interactive product you want to bring to life? I am open to discussing new opportunities, strategic consulting, and bespoke development under Inbyo Tech.
              </p>

              {/* Direct email display */}
              <div className="mt-8 p-6 bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-800 rounded-none max-w-sm shadow-none flex items-center gap-4 transition-colors duration-300">
                <div className="p-3 bg-zinc-900 dark:bg-zinc-805 text-white rounded-none border border-zinc-950 dark:border-zinc-750">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest leading-none font-bold">DIRECT INQUIRIES</div>
                  <a href="mailto:inamalisoomro90@gmail.com" className="text-sm font-extrabold text-zinc-955 dark:text-white hover:underline mt-1.5 block">
                  inamalisoomro90@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div>
              <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-4 font-bold">FOUNDER NETWORKS</div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/inamalisoomro"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-800 text-xs text-zinc-950 dark:text-white hover:bg-zinc-950 dark:hover:bg-white hover:text-white dark:hover:text-zinc-950 font-mono font-extrabold uppercase transition-all duration-300 rounded-none shadow-none"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/inamalisoomro/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-800 text-xs text-zinc-955 dark:text-white hover:bg-zinc-955 dark:hover:bg-white hover:text-white dark:hover:text-zinc-950 font-mono font-extrabold uppercase transition-all duration-300 rounded-none shadow-none"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Form / Right Column */}
          <div className="lg:col-span-7">
            <div className="relative p-8 md:p-10 bg-white border-2 border-zinc-900 rounded-none shadow-none">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-widest mb-2.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Inam Ali Soomro"
                        className="w-full px-4 py-3.5 bg-zinc-50 dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-700 focus:bg-white dark:focus:bg-zinc-750 rounded-none text-sm text-[#1A1A1A] dark:text-white outline-none transition-all duration-300 font-medium"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-widest mb-2.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="inamalisoomro90@gmail.com"
                        className="w-full px-4 py-3.5 bg-zinc-50 dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-700 focus:bg-white dark:focus:bg-zinc-750 rounded-none text-sm text-[#1A1A1A] dark:text-white outline-none transition-all duration-300 font-medium"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-mono text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-widest mb-2.5">
                        Project Brief
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Describe your goals, timeline, and scope..."
                        className="w-full px-4 py-3.5 bg-zinc-50 dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-700 focus:bg-white dark:focus:bg-zinc-750 rounded-none text-sm text-[#1A1A1A] dark:text-white outline-none transition-all duration-300 resize-none font-medium"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-4.5 bg-zinc-900 hover:bg-black dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 font-mono text-xs font-bold uppercase tracking-widest rounded-none border-2 border-zinc-955 dark:border-white transition-all select-none active:scale-98 shadow-none disabled:opacity-75 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/20 dark:border-zinc-950/25 border-t-white dark:border-t-zinc-950 rounded-none animate-spin" />
                          TRANSMITTING SECURELY...
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          TRANSMIT MESSAGE
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-form"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', damping: 25 }}
                    className="flex flex-col items-center justify-center text-center py-16"
                  >
                    <CheckCircle className="w-16 h-16 text-zinc-900 dark:text-white mb-6" />
                    <h3 className="text-2xl font-extrabold font-display uppercase tracking-wider text-zinc-955 dark:text-white">Transmission successful.</h3>
                    <p className="text-zinc-650 dark:text-zinc-400 text-sm max-w-sm mt-3 leading-relaxed font-sans font-medium transition-colors duration-300">
                      Thank you for reaching out. Your secure brief has been transmitted directly. Inam Ali Soomro will review and respond within 24 business hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-xs font-mono tracking-widest font-bold uppercase border-2 border-zinc-900 dark:border-white hover:bg-zinc-950 dark:hover:bg-zinc-200 hover:text-white dark:hover:text-zinc-950 transition-all rounded-none bg-white dark:bg-zinc-900 dark:text-white"
                    >
                      <Sparkles className="w-3 h-3 text-zinc-550 dark:text-zinc-400" />
                      Send Another Client Brief
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
