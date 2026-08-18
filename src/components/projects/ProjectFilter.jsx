import React from 'react';
import { motion } from 'framer-motion';

export const ProjectFilter = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 light:bg-slate-100 border border-slate-800/80 light:border-slate-200 max-w-fit mx-auto mb-12 shadow-md">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none ${
              isActive
                ? 'text-cyan-400 light:text-indigo-600 font-semibold'
                : 'text-slate-400 light:text-slate-600 hover:text-slate-200 light:hover:text-slate-900'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeProjectFilter"
                className="absolute inset-0 bg-slate-800 light:bg-white rounded-xl shadow-sm border border-slate-700/60 light:border-slate-300"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        );
      })}
    </div>
  );
};
