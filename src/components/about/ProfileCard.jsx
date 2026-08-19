import React from 'react';
import { PROFILE } from '../../config/profile';
import { Briefcase, Target, MapPin, Sparkles, Code2 } from 'lucide-react';

export const ProfileCard = () => {
  const card = PROFILE.profileCard;
  const avatarUrl = PROFILE.avatar;

  return (
    <div className="relative group">
      {/* Background Neon Border Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-cyan-500 to-teal-400 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />

      <div className="relative bg-slate-900/90 light:bg-white rounded-3xl border border-slate-800 light:border-slate-200 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
        {/* Header Avatar & Clickable Link to Dashboard */}
        <div className="flex items-center gap-5 pb-6 border-b border-slate-800/80 light:border-slate-200">
          <a
            href="#/dashboard"
            className="relative group/avatar cursor-pointer block shrink-0"
            title="Click to Open Developer Dashboard"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-0.5 shadow-lg group-hover/avatar:scale-105 transition-transform">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={PROFILE.name}
                  className="w-full h-full object-cover rounded-[14px]"
                />
              ) : (
                <div className="w-full h-full bg-slate-950 light:bg-slate-100 rounded-[14px] flex flex-col items-center justify-center text-center p-2 relative overflow-hidden">
                  <Code2 className="w-8 h-8 text-cyan-400 light:text-indigo-600 mb-0.5" />
                  <span className="text-[10px] font-mono text-slate-400 font-bold">AU.DEV</span>
                </div>
              )}
            </div>
            <div className="absolute inset-0 rounded-2xl bg-black/65 opacity-0 group-hover/avatar:opacity-100 flex items-center justify-center transition-opacity text-white text-[10px] font-mono font-bold">
              Dashboard
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-900 light:border-white z-10" title="Active Developer" />
          </a>

          <div>
            <a
              href="#/dashboard"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 light:text-indigo-600 font-semibold mb-1 hover:underline"
              title="Click to Open Developer Dashboard"
            >
              <Sparkles className="w-3.5 h-3.5" /> Verified Profile ➔
            </a>
            <h3 className="font-heading font-extrabold text-xl text-slate-100 light:text-slate-900">
              <a href="#/dashboard" className="hover:text-cyan-400 light:hover:text-indigo-600 transition-colors">
                {PROFILE.name}
              </a>
            </h3>
            <p className="text-xs text-slate-400 light:text-slate-500 font-medium">
              {PROFILE.role}
            </p>
          </div>
        </div>

        {/* Detailed Profile Attributes */}
        <div className="space-y-4 pt-6 text-sm">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-slate-800/80 light:bg-slate-100 text-cyan-400 light:text-indigo-600">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs text-slate-400 light:text-slate-500 font-mono block">Role</span>
              <span className="font-semibold text-slate-200 light:text-slate-800">{card.role}</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-slate-800/80 light:bg-slate-100 text-indigo-400 light:text-indigo-600">
              <Target className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs text-slate-400 light:text-slate-500 font-mono block">Focus</span>
              <span className="font-semibold text-slate-200 light:text-slate-800">{card.focus}</span>
            </div>
          </div>

          {card.interests && card.interests.length > 0 && (
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-slate-800/80 light:bg-slate-100 text-teal-400 light:text-teal-600">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-slate-400 light:text-slate-500 font-mono block">Areas</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {card.interests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800/80 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-700/50 light:border-slate-300"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {card.location && (
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-slate-800/80 light:bg-slate-100 text-amber-400 light:text-amber-600">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-slate-400 light:text-slate-500 font-mono block">Location</span>
                <span className="font-semibold text-slate-200 light:text-slate-800">{card.location}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
