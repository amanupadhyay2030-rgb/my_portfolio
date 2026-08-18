import React from 'react';
import { PROFILE } from '../../config/profile';
import { Code2, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';

export const Footer = () => {
  const hasGitHub = Boolean(PROFILE.socials?.github || PROFILE.githubUsername);
  const hasLinkedIn = Boolean(PROFILE.socials?.linkedin);
  const githubUrl = PROFILE.socials?.github || (PROFILE.githubUsername ? `https://github.com/${PROFILE.githubUsername}` : '');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 light:bg-slate-900 border-t border-slate-800 text-slate-400 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-8 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center text-cyan-400">
                  <Code2 className="w-4 h-4" />
                </div>
              </div>
              <span className="font-heading font-extrabold text-lg text-slate-100 tracking-wider">
                {PROFILE.name}
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm font-sans">
              {PROFILE.subheading}
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-5 flex flex-wrap items-center gap-4 text-xs font-medium">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Journey</a>
            <a href="#resume" className="hover:text-cyan-400 transition-colors">Resume</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-2 flex items-center justify-start md:justify-end gap-3">
            {hasGitHub && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            {hasLinkedIn && (
              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 hover:text-cyan-300 transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-2">
          <div>
            © 2026 {PROFILE.name}. All rights reserved.
          </div>

          <div>
            Engineered with React • Vite • Tailwind CSS • Framer Motion
          </div>
        </div>

      </div>
    </footer>
  );
};
