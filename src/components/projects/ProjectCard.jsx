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
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
          </span>
        );
      case 'github':
        return (
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-1.5 shadow-md">
            <Github className="w-3 h-3" /> Public Repository
          </span>
        );
      case 'in-development':
        return (
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1.5 shadow-md">
            <Wrench className="w-3 h-3" /> In Development
          </span>
        );
      case 'archived':
        return (
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-800 text-slate-400 border border-slate-700 flex items-center gap-1.5 shadow-md">
            <Archive className="w-3 h-3" /> Archived
          </span>
        );
      case 'private':
      default:
        return (
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5 shadow-md">
            <Lock className="w-3 h-3" /> Private Source
          </span>
        );
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className={`rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
        project.isFlagship
          ? 'bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-950 light:from-white light:to-indigo-50/30 border-indigo-500/40 light:border-indigo-300 shadow-2xl lg:col-span-2'
          : 'bg-slate-900/60 light:bg-white border-slate-800/80 light:border-slate-200/80 hover:border-slate-700 light:hover:border-slate-300 shadow-xl'
      }`}
    >
      <div>
        {/* Visual Header Banner */}
        <div className="relative h-48 sm:h-56 bg-slate-950 light:bg-slate-900 overflow-hidden border-b border-slate-800/80 p-5 flex flex-col justify-between">
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />

          {/* Top Bar Status Badges */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-900/90 text-cyan-400 border border-cyan-500/30 shadow-md">
              {project.category}
            </span>

            <div className="flex items-center gap-2">
              {getStatusBadge()}
              {project.isFlagship && (
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 hidden sm:flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5" /> Flagship Platform
                </span>
              )}
            </div>
          </div>

          {/* Banner Graphic Title Area */}
          <div className="relative z-10 my-auto flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                {project.subCategory}
              </span>
              <h4 className="font-heading font-extrabold text-lg sm:text-xl text-slate-100 line-clamp-1">
                {project.title}
              </h4>
            </div>

            <div className="w-12 h-12 rounded-2xl bg-slate-900/90 border border-slate-700 flex items-center justify-center text-cyan-400 shadow-inner group-hover:scale-110 transition-transform">
              {project.category === 'IoT' ? (
                <Cpu className="w-6 h-6" />
              ) : (
                <Code2 className="w-6 h-6" />
              )}
            </div>
          </div>

          {/* Bottom Tech Pills */}
          <div className="relative z-10 flex flex-wrap gap-1.5 pt-2">
            {project.technologies.slice(0, 5).map((tech, idx) => (
              <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-300 border border-slate-800">
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-400 border border-slate-800">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-100 light:text-slate-900 mb-2 group-hover:text-cyan-400 light:group-hover:text-indigo-600 transition-colors">
              {project.title}
            </h3>

            <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed font-sans">
              {project.shortDescription}
            </p>
          </div>

          {/* Highlights List */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-slate-800/60 light:border-slate-200">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 light:text-slate-500 font-semibold block mb-2">
                Implemented Modules & Scope:
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
      </div>

      {/* Action Buttons */}
      <div className="px-6 pb-6 pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/40 light:border-slate-100">
        <button
          onClick={() => onOpenCaseStudy(project)}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-medium text-xs sm:text-sm shadow-md hover:shadow-indigo-500/20 hover:-translate-y-0.5 transition-all"
        >
          <BookOpen className="w-4 h-4" />
          <span>Case Study</span>
        </button>

        <div className="flex items-center gap-2">
          {/* GitHub button rendered ONLY if real repository URL exists */}
          {hasGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Source Code on GitHub"
              className="p-2.5 rounded-xl bg-slate-800/80 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:text-white light:hover:text-slate-900 border border-slate-700 light:border-slate-300 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}

          {/* Live Demo button rendered ONLY if real publicly accessible URL exists */}
          {hasLiveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Live Demo"
              className="p-2.5 rounded-xl bg-slate-800/80 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:text-cyan-400 light:hover:text-indigo-600 border border-slate-700 light:border-slate-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
