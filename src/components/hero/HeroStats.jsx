import React from 'react';
import { PROFILE } from '../../config/profile';
import { motion } from 'framer-motion';

export const HeroStats = () => {
  if (!PROFILE.stats || PROFILE.stats.length === 0) {
    return null;
  }

  return (
    <div className="w-full mt-16 sm:mt-24 pt-8 border-t border-slate-800/80 light:border-slate-200">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {PROFILE.stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`p-5 rounded-2xl border transition-all duration-300 ${
              stat.highlight
                ? 'bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900/90 light:from-indigo-50 light:to-white border-indigo-500/30 light:border-indigo-200 shadow-xl'
                : 'bg-slate-900/40 light:bg-white border-slate-800/80 light:border-slate-200/80 hover:border-slate-700'
            }`}
          >
            <div className="flex items-baseline gap-1">
              <span className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 light:from-indigo-600 light:to-cyan-600 bg-clip-text text-transparent">
                {stat.value}
              </span>
            </div>
            <div className="font-heading font-bold text-slate-100 light:text-slate-900 mt-1 text-sm sm:text-base">
              {stat.label}
            </div>
            {stat.suffix && (
              <div className="text-xs text-slate-400 light:text-slate-500 mt-0.5 font-mono">
                {stat.suffix}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
