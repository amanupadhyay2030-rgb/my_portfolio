import React, { useState } from 'react';
import { PROJECT_LIFECYCLE } from '../../data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Database, Code, TestTube, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

const stepIcons = [Compass, Database, Code, TestTube, Rocket];

export const ProjectLifecycle = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="mt-20 pt-16 border-t border-slate-800/80 light:border-slate-200/80">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 light:bg-indigo-50 light:text-indigo-600 text-xs font-mono font-semibold mb-3 border border-cyan-500/20 light:border-indigo-200 shadow-xs">
          <span>ENGINEERING PIPELINE</span>
        </div>

        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-100 light:text-slate-900 tracking-tight">
          How I turn complex problems into{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 light:from-indigo-600 light:to-cyan-600 bg-clip-text text-transparent">
            production-ready systems.
          </span>
        </h3>
        
        <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base mt-2 font-sans">
          From requirement analysis and PDO database design to security testing and deployment.
        </p>
      </motion.div>

      {/* 5-Step Process Pipeline Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative">
        {PROJECT_LIFECYCLE.map((item, idx) => {
          const IconComp = stepIcons[idx] || Compass;
          const isActive = activeStep === idx;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setActiveStep(idx)}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className={`group relative p-6 rounded-3xl bg-slate-900/90 light:bg-white border transition-all duration-300 shadow-xl cursor-pointer flex flex-col justify-between overflow-hidden ${
                isActive
                  ? 'border-cyan-400 light:border-indigo-600 ring-2 ring-cyan-500/20 light:ring-indigo-500/20'
                  : 'border-slate-800/90 light:border-slate-200/90 hover:border-cyan-500/50 light:hover:border-indigo-400'
              }`}
            >
              {/* Animated Top Accent Line */}
              <div className="h-1.5 w-full absolute top-0 left-0 bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-400 group-hover:from-cyan-400 group-hover:via-indigo-500 transition-all duration-500" />

              <div>
                {/* Header Row: Step # + Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-3xl font-black bg-gradient-to-br from-cyan-400 via-teal-300 to-indigo-400 light:from-indigo-600 light:to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    {item.step}
                  </span>

                  <div className={`p-2.5 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40 light:bg-indigo-100 light:text-indigo-600'
                      : 'bg-cyan-500/10 text-cyan-400 light:bg-indigo-50 light:text-indigo-600 border-cyan-500/20 light:border-indigo-200 group-hover:scale-110 group-hover:rotate-12'
                  }`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                {/* Phase Badge */}
                <div className="text-[10px] font-mono font-extrabold text-cyan-400 light:text-indigo-600 uppercase tracking-widest mb-1">
                  {item.phase}
                </div>
                
                {/* Title */}
                <h4 className="font-heading font-extrabold text-base text-slate-100 light:text-slate-900 mb-2 group-hover:text-cyan-400 light:group-hover:text-indigo-600 transition-colors leading-snug">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-xs text-slate-300 light:text-slate-600 leading-relaxed font-sans mb-3">
                  {item.desc}
                </p>
              </div>

              {/* Tech Focus Tag & Step Indicator */}
              <div>
                {item.focus && (
                  <div className="mb-3 pt-2 border-t border-slate-800/50 light:border-slate-200 text-[10px] font-mono text-cyan-300/90 light:text-indigo-600 font-semibold truncate">
                    {item.focus}
                  </div>
                )}

                <div className="pt-2 border-t border-slate-800/60 light:border-slate-200 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 light:text-slate-500 font-bold uppercase">
                    Step {idx + 1} of {PROJECT_LIFECYCLE.length}
                  </span>
                  <span className={`w-2 h-2 rounded-full transition-all ${
                    isActive ? 'bg-cyan-400 light:bg-indigo-600 scale-125 animate-pulse' : 'bg-slate-700 light:bg-slate-300'
                  }`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
