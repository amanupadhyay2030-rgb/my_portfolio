import React from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { motion } from 'framer-motion';
import { Flame, Clock, Calendar, CheckCircle2, Award, BookOpen, FileText, Target, Activity } from 'lucide-react';

export const ActivityStreak = () => {
  const { streak, activities } = useDashboard();

  // Generate 52 weeks x 7 days heatmap grid sample simulation
  const generateHeatmapDays = () => {
    const days = [];
    for (let i = 0; i < 364; i++) {
      // Simulate learning activity intensity 0 to 4
      const level = Math.random() > 0.45 ? Math.floor(Math.random() * 4) + 1 : 0;
      days.push({ id: i, level });
    }
    return days;
  };

  const heatmap = generateHeatmapDays();

  const getHeatmapColor = (level) => {
    switch (level) {
      case 1: return 'bg-cyan-900/60 light:bg-indigo-100 border-cyan-800/40';
      case 2: return 'bg-cyan-700 light:bg-indigo-300 border-cyan-600';
      case 3: return 'bg-cyan-500 light:bg-indigo-500 border-cyan-400';
      case 4: return 'bg-cyan-300 light:bg-indigo-700 border-cyan-200 shadow-sm shadow-cyan-400/50';
      case 0: default: return 'bg-slate-950/80 light:bg-slate-100 border-slate-800/40 light:border-slate-200';
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div>
        <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-100 light:text-slate-900 tracking-tight flex items-center gap-2">
          <Flame className="w-7 h-7 text-amber-400 light:text-indigo-600" />
          <span>Learning Activity & Streak Matrix</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 mt-1">
          Daily contribution heatmap, study hours, active learning streak, and activity log.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 shadow-xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
            <Flame className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase font-bold">Current Streak</div>
            <div className="text-2xl font-mono font-extrabold text-slate-100 light:text-slate-900">
              {streak?.currentStreak || 14} Days 🔥
            </div>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 shadow-xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase font-bold">Longest Streak</div>
            <div className="text-2xl font-mono font-extrabold text-slate-100 light:text-slate-900">
              {streak?.longestStreak || 28} Days
            </div>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 shadow-xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase font-bold">Total Learning Hours</div>
            <div className="text-2xl font-mono font-extrabold text-slate-100 light:text-slate-900">
              {streak?.totalHours || 246} Hours
            </div>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 shadow-xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-400 border border-teal-500/20 flex items-center justify-center">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase font-bold">Total Learning Days</div>
            <div className="text-2xl font-mono font-extrabold text-slate-100 light:text-slate-900">
              {streak?.totalDays || 142} Days
            </div>
          </div>
        </div>
      </div>

      {/* GitHub-style Contribution Heatmap Matrix */}
      <div className="p-6 rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 shadow-xl space-y-4 overflow-hidden">
        <div className="flex items-center justify-between">
          <h2 className="font-heading font-extrabold text-lg text-slate-100 light:text-slate-900 flex items-center gap-2">
            <Activity className="w-5 h-5 text-cyan-400 light:text-indigo-600" />
            <span>52-Week Learning Activity Heatmap</span>
          </h2>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>Less</span>
            <span className="w-3 h-3 rounded-xs bg-slate-950 light:bg-slate-100 border border-slate-800" />
            <span className="w-3 h-3 rounded-xs bg-cyan-900" />
            <span className="w-3 h-3 rounded-xs bg-cyan-700" />
            <span className="w-3 h-3 rounded-xs bg-cyan-500" />
            <span className="w-3 h-3 rounded-xs bg-cyan-300" />
            <span>More</span>
          </div>
        </div>

        {/* Heatmap Grid */}
        <div className="overflow-x-auto pb-2">
          <div className="grid grid-rows-7 grid-flow-col gap-1.5 w-max">
            {heatmap.map((d) => (
              <div
                key={d.id}
                title={`Day ${d.id + 1}: Level ${d.level} activity`}
                className={`w-3.5 h-3.5 rounded-xs border transition-transform hover:scale-125 cursor-pointer ${getHeatmapColor(d.level)}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Complete Activity Event Log Timeline */}
      <div className="p-6 rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 shadow-xl space-y-4">
        <h2 className="font-heading font-extrabold text-lg text-slate-100 light:text-slate-900">
          Chronological Activity Log
        </h2>

        <div className="space-y-4 pl-4 border-l-2 border-slate-800 light:border-slate-200">
          {(activities || []).map((act) => (
            <div key={act.id} className="relative pl-6 space-y-1">
              <span className="absolute -left-[23px] top-1 w-3.5 h-3.5 rounded-full bg-cyan-400 light:bg-indigo-600 border-2 border-slate-900" />
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-extrabold text-cyan-400 light:text-indigo-600">{act.action}</span>
                <span className="text-slate-500">{act.timestamp}</span>
              </div>
              <div className="text-sm font-semibold text-slate-200 light:text-slate-800 font-sans">
                {act.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
