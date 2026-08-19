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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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

        {/* Life Journey Centered Vertical Spine Timeline */}
        <div className="relative">
          {/* Middle Vertical Timeline Spine Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-cyan-400 via-indigo-500 to-teal-400 light:from-indigo-500 light:via-blue-500 light:to-cyan-500 -translate-x-1/2 hidden sm:block rounded-full shadow-sm" />

          <div className="space-y-12">
            {DEVELOPMENT_JOURNEY.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const stepNumber = String(idx + 1).padStart(2, '0');

              return (
                <motion.div
                  key={item.id || idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center justify-between gap-6 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Center Node Badge Icon (Exact Center Spine) */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-11 h-11 rounded-2xl bg-slate-900 light:bg-white border-2 border-cyan-400 light:border-indigo-600 text-cyan-400 light:text-indigo-600 flex items-center justify-center font-mono font-bold text-sm shadow-xl light:shadow-md z-20 hidden sm:flex hover:scale-110 transition-transform">
                    {getTimelineIcon(idx)}
                  </div>

                  {/* Timeline Card Container (Alternating Left & Right) */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)]">
                    <div className="p-6 rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800/90 light:border-slate-200/90 hover:border-cyan-500/50 light:hover:border-indigo-400/50 transition-all duration-300 shadow-xl light:shadow-md hover:shadow-2xl relative overflow-hidden group">
                      {/* Top Accent Gradient Bar */}
                      <div className="h-1 w-full absolute top-0 left-0 bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-400" />

                      {/* Header Row: Category Badge & Step # */}
                      <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-800/60 light:border-slate-200">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-extrabold text-cyan-400 light:text-indigo-600 bg-cyan-500/10 light:bg-indigo-50 px-3 py-0.5 rounded-full border border-cyan-500/20 light:border-indigo-200">
                          <Terminal className="w-3.5 h-3.5" />
                          {item.category}
                        </span>

                        <span className="text-xs font-mono font-extrabold text-indigo-400 light:text-indigo-600">
                          #{stepNumber}
                        </span>
                      </div>

                      {/* Main Title & Subtitle */}
                      <h3 className="font-heading font-extrabold text-xl text-slate-100 light:text-slate-900 mb-0.5 group-hover:text-cyan-400 light:group-hover:text-indigo-600 transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <div className="text-xs font-mono font-semibold text-indigo-400 light:text-indigo-600 mb-3">
                        {item.subtitle}
                      </div>

                      {/* Narrative Description */}
                      <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed font-sans mb-4">
                        {item.description}
                      </p>

                      {/* Key Technical Highlights */}
                      {item.highlights && item.highlights.length > 0 && (
                        <div className="space-y-1.5 mb-4">
                          {item.highlights.map((h, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 light:text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 light:text-emerald-600 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Technologies Tag Row */}
                      {item.technologies && item.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60 light:border-slate-200">
                          {item.technologies.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/80 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-200"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Empty Spacer Column on Opposite Side for Desktop Grid Alignment */}
                  <div className="hidden sm:block w-[calc(50%-2.5rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

