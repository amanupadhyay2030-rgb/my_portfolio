import React from 'react';
import { SKILLS_CATEGORIES } from '../../data/skills';
import { SkillCategoryCard } from './SkillCategoryCard';
import { motion } from 'framer-motion';

export const TechStack = () => {
  return (
    <section id="skills" className="py-20 lg:py-28 relative overflow-hidden bg-slate-950/40 light:bg-slate-50/50">
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
            <span>TECH STACK & TOOLS</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-100 light:text-slate-900 tracking-tight">
            Engineering capabilities &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 light:from-indigo-600 light:to-cyan-600 bg-clip-text text-transparent">
              proven toolkits.
            </span>
          </h2>

          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg mt-4">
            Production-tested languages, backend PDO data layers, LMS engines, automation scripts, and hardware protocols.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SKILLS_CATEGORIES.map((category, idx) => (
            <SkillCategoryCard key={category.id} category={category} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};
