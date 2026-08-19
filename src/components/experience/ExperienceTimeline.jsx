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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-12"
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
            Chronological progression from core backend structures to enterprise HR platforms & Python automation.
          </p>
        </motion.div>

        {/* Life Journey Continuous Vertical Roadmap Stepper */}
        <div className="relative pl-6 sm:pl-10">
          {/* Continuous Glowing Roadmap Spine Track */}
          <div className="absolute left-6 sm:left-10 top-5 bottom-5 w-1 bg-gradient-to-b from-cyan-400 via-indigo-500 to-purple-500 light:from-indigo-600 light:via-blue-500 light:to-cyan-600 rounded-full -translate-x-1/2 shadow-sm opacity-80" />

          <div className="space-y-10">
            {DEVELOPMENT_JOURNEY.map((item, idx) => {
              const stepNumber = String(idx + 1).padStart(2, '0');

              return (
                <motion.div
                  key={item.id || idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative flex items-start gap-5 sm:gap-8 group"
                >
                  {/* Glowing Node Badge Icon */}
                  <div className="absolute -left-6 sm:-left-10 top-0 -translate-x-1/2 w-11 h-11 rounded-2xl bg-slate-900 light:bg-white border-2 border-cyan-400 light:border-indigo-600 text-cyan-400 light:text-indigo-600 flex items-center justify-center font-mono font-bold text-sm shadow-lg light:shadow-md z-20 group-hover:scale-110 group-hover:border-cyan-300 transition-all">
                    {getTimelineIcon(idx)}
                  </div>

                  {/* Open Journey Story Block */}
                  <div className="pl-6 sm:pl-8 w-full pt-0.5">
                    {/* Header Row: Category Badge & Step # */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-extrabold text-cyan-400 light:text-indigo-600 bg-cyan-500/10 light:bg-indigo-50 px-3 py-0.5 rounded-full border border-cyan-500/20 light:border-indigo-200">
                        <Terminal className="w-3.5 h-3.5" />
                        {item.category}
                      </span>

                      <span className="text-xs font-mono font-bold text-slate-500 light:text-slate-400">
                        #{stepNumber}
                      </span>
                    </div>

                    {/* Main Title & Subtitle */}
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-100 light:text-slate-900 group-hover:text-cyan-400 light:group-hover:text-indigo-600 transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono font-semibold text-indigo-400 light:text-indigo-600 mb-3">
                      {item.subtitle}
                    </div>

                    {/* Narrative Description */}
                    <p className="text-sm sm:text-base text-slate-300 light:text-slate-600 leading-relaxed font-sans mb-4 max-w-3xl">
                      {item.description}
                    </p>

                    {/* Key Technical Achievements List */}
                    {item.highlights && item.highlights.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 max-w-3xl">
                        {item.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 light:text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 light:text-emerald-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Technologies Tag Row */}
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/40 light:border-slate-200/60 max-w-3xl">
                        {item.technologies.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-900/80 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-200"
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

      </div>
    </section>
  );
};

