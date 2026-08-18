import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, GraduationCap, Wrench, Cpu } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Database: Database,
  GraduationCap: GraduationCap,
  Wrench: Wrench,
  Cpu: Cpu,
};

export const SkillCategoryCard = ({ category, index }) => {
  const IconComponent = iconMap[category.icon] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-3xl bg-slate-900/60 light:bg-white border border-slate-800 light:border-slate-200 hover:border-slate-700 light:hover:border-slate-300 transition-all duration-300 shadow-xl flex flex-col justify-between group"
    >
      <div>
        {/* Category Header */}
        <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-800/80 light:border-slate-200">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 p-[1px] shadow-lg group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-950 light:bg-slate-50 rounded-[15px] flex items-center justify-center text-cyan-400 light:text-indigo-600">
              <IconComponent className="w-6 h-6" />
            </div>
          </div>

          <div>
            <h3 className="font-heading font-extrabold text-xl text-slate-100 light:text-slate-900">
              {category.title}
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              {category.skills.length} {category.skills.length === 1 ? 'Technology' : 'Technologies'}
            </span>
          </div>
        </div>

        {/* Skill Items */}
        <div className="space-y-3.5">
          {category.skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-slate-950/60 light:bg-slate-50 border border-slate-800/60 light:border-slate-200/80 hover:border-cyan-500/30 transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-sm text-slate-200 light:text-slate-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 light:bg-indigo-600" />
                  {skill.name}
                </span>
              </div>

              {skill.desc && (
                <p className="text-xs text-slate-400 light:text-slate-500 leading-normal pl-4">
                  {skill.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
