import React from 'react';
import { DEVELOPMENT_JOURNEY } from '../../data/experience';
import { motion } from 'framer-motion';
import { Code2, CheckCircle2, Terminal, Cpu, Database, Server, GitBranch } from 'lucide-react';

export const ExperienceTimeline = () => {
  const getTimelineIcon = (idx) => {
    switch (idx % 4) {
      case 0: return <Server className="w-4 h-4" />;
      case 1: return <Code2 className="w-4 h-4" />;
      case 2: return <Database className="w-4 h-4" />;
      case 3: default: return <Cpu className="w-4 h-4" />;
    }
  };

  return (
    <section id="experience" className="py-14 lg:py-20 relative overflow-hidden bg-slate-950/40 light:bg-slate-50/80 bg-dot-pattern">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-indigo-500/10 light:bg-indigo-200/50 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-cyan-500/10 light:bg-blue-200/40 blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 light:bg-indigo-50 light:text-indigo-600 text-xs font-mono font-semibold mb-2.5 border border-cyan-500/20 light:border-indigo-200 shadow-xs">
            <GitBranch className="w-3.5 h-3.5" />
            <span>VERIFIED PROJECTS & ENGINEERING</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-100 light:text-slate-900 tracking-tight">
            Development{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 light:from-indigo-600 light:to-cyan-600 bg-clip-text text-transparent">
              Journey.
            </span>
          </h2>

          <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base mt-2 font-sans">
            Progression from building core backend systems to enterprise HR portals, LMS platforms, and Python automation.
          </p>
        </motion.div>

        {/* Compact 3-Column Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {DEVELOPMENT_JOURNEY.map((item, idx) => {
            const stepNumber = String(idx + 1).padStart(2, '0');

            return (
              <motion.div
                key={item.id || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800/90 light:border-slate-200/90 hover:border-cyan-500/50 light:hover:border-indigo-400/50 transition-all duration-300 shadow-xl light:shadow-md hover:shadow-2xl overflow-hidden flex flex-col justify-between"
              >
                {/* Top Accent Gradient Bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-400 group-hover:from-cyan-400 group-hover:to-indigo-500 transition-all duration-500" />

                <div className="p-5 sm:p-6 flex flex-col justify-between h-full space-y-4">
                  <div>
                    {/* Top Step & Category Header */}
                    <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-800/60 light:border-slate-200">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-xl bg-cyan-500/10 text-cyan-400 light:bg-indigo-50 light:text-indigo-600 flex items-center justify-center font-mono font-bold text-xs">
                          {getTimelineIcon(idx)}
                        </div>
                        <span className="text-xs font-mono font-bold text-cyan-400 light:text-indigo-600">
                          {item.category}
                        </span>
                      </div>

                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-extrabold bg-slate-950/80 light:bg-slate-100 text-indigo-400 light:text-indigo-600 border border-slate-800 light:border-slate-200">
                        #{stepNumber}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="font-heading font-extrabold text-lg text-slate-100 light:text-slate-900 mb-0.5 group-hover:text-cyan-400 light:group-hover:text-indigo-600 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono font-semibold text-indigo-400 light:text-indigo-600 mb-3">
                      {item.subtitle}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed font-sans mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Implemented Scope Highlights */}
                    {item.highlights && item.highlights.length > 0 && (
                      <div className="space-y-1.5 pt-3 border-t border-slate-800/60 light:border-slate-200">
                        {item.highlights.slice(0, 3).map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 light:text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 light:text-emerald-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tech Stack Pills Footer */}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-3 border-t border-slate-800/60 light:border-slate-200">
                      {item.technologies.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/80 light:bg-slate-100 text-slate-400 light:text-slate-700 border border-slate-800 light:border-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

