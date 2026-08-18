import React from 'react';
import { DEVELOPMENT_JOURNEY } from '../../data/experience';
import { motion } from 'framer-motion';
import { Code2, CheckCircle2, Terminal } from 'lucide-react';

export const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative overflow-hidden bg-slate-950/40 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 light:text-indigo-600 text-xs font-mono font-semibold mb-3 border border-cyan-500/20">
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
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-slate-800 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {DEVELOPMENT_JOURNEY.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.id || idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Icon Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-2xl bg-slate-900 light:bg-white border-2 border-cyan-400 light:border-indigo-600 flex items-center justify-center text-cyan-400 light:text-indigo-600 shadow-xl z-20 hidden sm:flex">
                    <Code2 className="w-4 h-4" />
                  </div>

                  {/* Timeline Content Card */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)]">
                    <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 light:bg-white border border-slate-800 light:border-slate-200 hover:border-cyan-500/40 transition-all duration-300 shadow-xl">
                      {/* Top Category Tag */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 light:text-indigo-600 bg-cyan-500/10 light:bg-indigo-50 px-3 py-1 rounded-full border border-cyan-500/20">
                          <Terminal className="w-3.5 h-3.5" />
                          {item.category}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="font-heading font-extrabold text-xl text-slate-100 light:text-slate-900 mb-1">
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
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
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
                              className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-950/80 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
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
