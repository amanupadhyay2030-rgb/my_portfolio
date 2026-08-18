import React from 'react';
import { PROJECT_LIFECYCLE } from '../../data/projects';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, Code, TestTube, Rocket } from 'lucide-react';

const stepIcons = [Compass, ShieldCheck, Code, TestTube, Rocket];

export const ProjectLifecycle = () => {
  return (
    <div className="mt-24 pt-16 border-t border-slate-800/80 light:border-slate-200">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 light:text-indigo-600 text-xs font-mono font-semibold mb-3 border border-cyan-500/20">
          <span>ENGINEERING LIFECYCLE</span>
        </div>

        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-100 light:text-slate-900 tracking-tight">
          How I turn complex problems into{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 light:from-indigo-600 light:to-cyan-600 bg-clip-text text-transparent">
            production-ready systems.
          </span>
        </h3>
        
        <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base mt-2">
          From problem discovery and PDO database design to rigorous anti-cheat proctoring tests and AWS deployment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {PROJECT_LIFECYCLE.map((item, idx) => {
          const IconComp = stepIcons[idx] || Compass;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-5 rounded-2xl bg-slate-900/60 light:bg-white border border-slate-800 light:border-slate-200 hover:border-cyan-500/30 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-extrabold text-cyan-400 light:text-indigo-600">
                    {item.step}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-800/80 light:bg-slate-100 text-slate-300 light:text-slate-700 group-hover:scale-110 transition-transform">
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-400 light:text-slate-500 uppercase tracking-wider mb-1">
                  {item.phase}
                </div>
                
                <h4 className="font-heading font-bold text-sm text-slate-100 light:text-slate-900 mb-2">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
