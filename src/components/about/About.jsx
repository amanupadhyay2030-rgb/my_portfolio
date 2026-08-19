import React from 'react';
import { PROFILE } from '../../config/profile';
import { ProfileCard } from './ProfileCard';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden bg-dot-pattern">
      {/* Background Ambient Glow Orb */}
      <div className="absolute top-1/2 -right-40 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-500/10 light:bg-indigo-200/40 blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 light:text-indigo-600 text-xs font-mono font-semibold mb-3 border border-indigo-500/20">
            <span>ABOUT ABHISHEK</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-100 light:text-slate-900 tracking-tight">
            Building software that{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 light:from-indigo-600 light:to-cyan-600 bg-clip-text text-transparent">
              solves real problems.
            </span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative & Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="prose prose-invert max-w-none text-slate-300 light:text-slate-600 text-base sm:text-lg leading-relaxed space-y-4 font-sans">
              <p>{PROFILE.aboutNarrative}</p>
            </div>

            {/* Core Technical Focus Areas */}
            {PROFILE.focusAreas && PROFILE.focusAreas.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 light:text-slate-500 font-semibold mb-4">
                  Development Focus Areas:
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROFILE.focusAreas.map((area, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 light:bg-white border border-slate-800 light:border-slate-200 hover:border-cyan-500/40 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 light:text-indigo-600 shrink-0" />
                      <span className="text-sm font-medium text-slate-200 light:text-slate-800">
                        {area}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column: Developer Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <ProfileCard />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
