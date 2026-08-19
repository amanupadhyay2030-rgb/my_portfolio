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
    <section id="experience" className="py-20 lg:py-28 relative overflow-hidden bg-slate-950/40 light:bg-slate-50/80 bg-dot-pattern">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-indigo-500/10 light:bg-indigo-200/50 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-cyan-500/10 light:bg-blue-200/40 blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 light:bg-indigo-50 light:text-indigo-600 text-xs font-mono font-semibold mb-3 border border-cyan-500/20 light:border-indigo-200 shadow-xs">
            <GitBranch className="w-3.5 h-3.5" />
            <span>VERIFIED PROJECTS & ENGINEERING</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-100 light:text-slate-900 tracking-tight">
            Development{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 light:from-indigo-600 light:to-cyan-600 bg-clip-text text-transparent">
              Journey.
            </span>
          </h2>

          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg mt-4 font-sans">
            Hands-on technical engineering across recruitment portals, LMS platforms, Core PHP & MySQL database structures, and Python automation.
          </p>
        </motion.div>

        {/* Vertical Journey Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-400 to-indigo-600 light:from-indigo-400 light:via-blue-500 light:to-cyan-500 -translate-x-1/2 hidden sm:block shadow-sm" />

          <div className="space-y-16">
            {DEVELOPMENT_JOURNEY.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const stepNumber = String(idx + 1).padStart(2, '0');

              return (
                <motion.div
                  key={item.id || idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center justify-between gap-6 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Icon Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-11 h-11 rounded-2xl bg-slate-900 light:bg-white border-2 border-cyan-400 light:border-indigo-600 flex items-center justify-center text-cyan-400 light:text-indigo-600 shadow-xl light:shadow-md z-20 hidden sm:flex hover:scale-110 transition-transform">
                    {getTimelineIcon(idx)}
                  </div>

                  {/* Timeline Content Card */}
                  <div className="w-full sm:w-[calc(50%-3rem)]">
                    <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800/90 light:border-slate-200/90 hover:border-cyan-500/50 light:hover:border-indigo-400/50 transition-all duration-300 shadow-xl light:shadow-md hover:shadow-2xl light:hover:shadow-xl relative overflow-hidden group">
                      {/* Accent Top Bar */}
                      <div className="h-1 w-full absolute top-0 left-0 bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-400" />

                      {/* Top Category Tag */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 light:text-indigo-600 bg-cyan-500/10 light:bg-indigo-50 px-3 py-1 rounded-full border border-cyan-500/20 light:border-indigo-200">
                          <Terminal className="w-3.5 h-3.5" />
                          {item.category}
                        </span>

                        <span className="text-xs font-mono text-slate-500 light:text-slate-400 font-extrabold">
                          #{stepNumber}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="font-heading font-extrabold text-xl text-slate-100 light:text-slate-900 mb-1 group-hover:text-cyan-400 light:group-hover:text-indigo-600 transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-xs font-mono font-semibold text-indigo-400 light:text-indigo-600 mb-4">
                        {item.subtitle}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed font-sans mb-5">
                        {item.description}
                      </p>

                      {/* Implemented Highlights */}
                      {item.highlights && item.highlights.length > 0 && (
                        <div className="space-y-2 mb-5">
                          {item.highlights.map((h, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 light:text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 light:text-emerald-600 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Tags */}
                      {item.technologies && item.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60 light:border-slate-200">
                          {item.technologies.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-950/80 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-200"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Opposite Side Architecture Watermark (Fills Empty Space in Timeline) */}
                  <div className="hidden sm:flex w-[calc(50%-3rem)] items-center justify-center p-6">
                    <div className="p-6 rounded-3xl border border-dashed border-slate-800/80 light:border-slate-300/80 bg-slate-900/30 light:bg-white/60 backdrop-blur-xs text-center space-y-2 shadow-xs group/meta hover:border-indigo-400/50 transition-colors w-full">
                      <div className="text-3xl font-heading font-extrabold text-slate-800 light:text-slate-300 group-hover/meta:text-cyan-400 light:group-hover/meta:text-indigo-600 transition-colors font-mono">
                        0{idx + 1}
                      </div>
                      <div className="text-xs font-mono font-semibold text-slate-400 light:text-slate-600">
                        {item.category}
                      </div>
                      <div className="flex flex-wrap gap-1.5 justify-center pt-2">
                        {item.technologies && item.technologies.slice(0, 3).map((t, tIdx) => (
                          <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/40 light:bg-slate-100 text-slate-400 light:text-slate-600 border border-slate-800/40 light:border-slate-200">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
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

