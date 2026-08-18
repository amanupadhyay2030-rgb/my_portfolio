import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Sparkles, CheckCircle2, Terminal, Code2, Cpu, Lock, Wrench, Archive } from 'lucide-react';
import { Github } from '../ui/Icons';

export const ProjectCard = ({ project, onOpenCaseStudy }) => {
  const hasGithub = Boolean(project.github);
  const hasLiveDemo = Boolean(project.liveDemo);

  const getStatusBadge = () => {
    switch (project.status) {
      case 'live':
        return (
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live System
          </span>
        );
      case 'github':
        return (
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-1.5 shadow-md">
            <Github className="w-3.5 h-3.5" /> Public Repo
          </span>
        );
      case 'in-development':
        return (
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1.5 shadow-md">
            <Wrench className="w-3.5 h-3.5" /> In Development
          </span>
        );
      case 'private':
      default:
        return (
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5 shadow-md">
            <Lock className="w-3 h-3 text-indigo-400" /> Private Source
          </span>
        );
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-3xl bg-slate-900/80 light:bg-white border border-slate-800/80 light:border-slate-200/90 hover:border-cyan-500/40 light:hover:border-indigo-400/50 transition-all duration-300 shadow-2xl overflow-hidden flex flex-col justify-between h-full"
    >
      {/* Top Subtle Gradient Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-400" />

      <div className="p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
        <div>
          {/* Card Top Header: Category & Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800/60 light:border-slate-200">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                {project.subCategory}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {getStatusBadge()}
              {project.isFlagship && (
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3 h-3 text-indigo-300" /> Flagship
                </span>
              )}
            </div>
          </div>

          {/* Project Title (Single clean title, no duplicates!) */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-100 light:text-slate-900 group-hover:text-cyan-400 light:group-hover:text-indigo-600 transition-colors">
              {project.title}
            </h3>

            <div className="w-10 h-10 rounded-2xl bg-slate-950/80 light:bg-slate-100 border border-slate-800 light:border-slate-200 flex items-center justify-center text-cyan-400 light:text-indigo-600 shrink-0 group-hover:scale-110 transition-transform">
              {project.category === 'IoT' ? (
                <Cpu className="w-5 h-5" />
              ) : (
                <Code2 className="w-5 h-5" />
              )}
            </div>
          </div>

          {/* Project Description */}
          <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed font-sans mb-5">
            {project.shortDescription}
          </p>

          {/* Technologies Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2.5 py-1 rounded-xl bg-slate-950/80 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Implemented Modules & Scope */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="pt-4 border-t border-slate-800/60 light:border-slate-200 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 light:text-slate-500 font-semibold block mb-2">
                Implemented Scope & Features:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 light:text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 light:text-indigo-600 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-slate-800/60 light:border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
          >
            <BookOpen className="w-4 h-4" />
            <span>Explore Case Study</span>
          </button>

          {hasGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              title="View GitHub Repository"
              className="p-3 rounded-xl bg-slate-950/80 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:text-white border border-slate-800 light:border-slate-200 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}

          {hasLiveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              title="View Live Demo"
              className="p-3 rounded-xl bg-slate-950/80 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:text-cyan-400 border border-slate-800 light:border-slate-200 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
