import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, GraduationCap, Wrench, Cpu, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Database: Database,
  GraduationCap: GraduationCap,
  Wrench: Wrench,
  Cpu: Cpu,
};

const categoryColorMap = {
  programming: 'from-cyan-500 to-indigo-500 text-cyan-400 border-cyan-500/30',
  web: 'from-indigo-500 to-violet-500 text-indigo-400 border-indigo-500/30',
  database: 'from-blue-500 to-cyan-500 text-blue-400 border-blue-500/30',
  tools: 'from-amber-500 to-orange-500 text-amber-400 border-amber-500/30',
  lms: 'from-emerald-500 to-teal-500 text-emerald-400 border-emerald-500/30',
  'cloud-other': 'from-teal-500 to-cyan-400 text-teal-300 border-teal-500/30',
};

export const SkillCategoryCard = ({ category, index, isCarousel = false }) => {
  const IconComponent = iconMap[category.icon] || Code2;
  const accentGradient = categoryColorMap[category.id] || 'from-cyan-500 to-indigo-500 text-cyan-400 border-cyan-500/30';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`group relative rounded-3xl bg-slate-900/80 light:bg-white border border-slate-800/80 light:border-slate-200/90 hover:border-cyan-500/40 light:hover:border-indigo-400/50 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between ${
        isCarousel
          ? 'w-[85vw] sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] shrink-0 snap-start h-full'
          : 'w-full h-full'
      }`}
    >
      {/* Top Gradient Accent Indicator Line */}
      <div className={`h-1 w-full bg-gradient-to-r ${accentGradient}`} />

      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          {/* Category Header */}
          <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-800/60 light:border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600/30 to-cyan-500/30 light:from-indigo-100 light:to-cyan-100 p-[1px]">
                <div className="w-full h-full bg-slate-950/90 light:bg-white rounded-[15px] flex items-center justify-center text-cyan-400 light:text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-base text-slate-100 light:text-slate-900 group-hover:text-cyan-400 light:group-hover:text-indigo-600 transition-colors">
                  {category.title}
                </h3>
                {category.tagline && (
                  <span className="text-[11px] text-cyan-400/90 light:text-indigo-600 font-mono font-medium block">
                    {category.tagline}
                  </span>
                )}
              </div>
            </div>

            <span className="px-2.5 py-1 rounded-full bg-slate-950/80 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-[10px] text-slate-400 font-mono font-semibold shrink-0">
              {category.skills.length} {category.skills.length === 1 ? 'Tech' : 'Techs'}
            </span>
          </div>

          {/* Skill Items (Sleek Borderless List with Cyan Accent Indicators) */}
          <div className="space-y-3">
            {category.skills.map((skill, idx) => (
              <div
                key={idx}
                className="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-800/40 light:hover:bg-slate-100/70 transition-all duration-200"
              >
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 light:bg-indigo-600 shrink-0 group-hover/item:scale-125 transition-transform" />
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-xs sm:text-sm text-slate-200 light:text-slate-800 group-hover/item:text-cyan-300 light:group-hover/item:text-indigo-600 transition-colors">
                      {skill.name}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-600 light:text-slate-400 group-hover/item:text-cyan-400 light:group-hover/item:text-indigo-600 transition-colors opacity-0 group-hover/item:opacity-100 shrink-0" />
                  </div>

                  {skill.desc && (
                    <p className="text-[11px] sm:text-xs text-slate-400 light:text-slate-600 leading-relaxed font-sans mt-0.5">
                      {skill.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Pill */}
        <div className="mt-4 pt-3 border-t border-slate-800/50 light:border-slate-200/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
          <span>Verified Production Stack</span>
          <span className="text-cyan-400/80 font-bold">100% Core</span>
        </div>
      </div>
    </motion.div>
  );
};

