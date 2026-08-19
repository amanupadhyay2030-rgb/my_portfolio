import React, { useState } from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { motion } from 'framer-motion';
import { Lock, ShieldAlert, ArrowRight, KeyRound, Sparkles } from 'lucide-react';

export const DashboardLogin = () => {
  const { login } = useDashboard();
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      const res = login(password, rememberMe);
      if (!res.success) {
        setError(res.error || 'Invalid password. Try "abhishek123"');
      }
      setIsLoading(false);
    }, 400);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-950 light:bg-slate-100 relative overflow-hidden bg-dot-pattern">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-indigo-500/10 light:bg-indigo-200/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-cyan-500/10 light:bg-blue-200/40 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md p-8 sm:p-10 rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 shadow-2xl backdrop-blur-xl relative z-10"
      >
        {/* Header Icon */}
        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-400 light:bg-indigo-50 light:text-indigo-600 border border-cyan-500/20 light:border-indigo-200 flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Lock className="w-6 h-6" />
        </div>

        {/* Title & Subtitle */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 light:text-indigo-600 text-xs font-mono font-semibold mb-2 border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRIVATE ACCESS</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-100 light:text-slate-900 tracking-tight">
            Abhishek's Learning OS
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 mt-2">
            Protected personal learning, certificates & career dashboard.
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 light:text-rose-600 text-xs flex items-center gap-2.5 font-medium"
          >
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </motion.div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-mono font-semibold text-slate-300 light:text-slate-700 uppercase tracking-wider mb-2">
              Security Password
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password (default: abhishek123)"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400 light:focus:border-indigo-600 text-sm font-sans placeholder:text-slate-600 light:placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 light:text-slate-600">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded bg-slate-950 border-slate-800 text-indigo-600 focus:ring-0"
              />
              <span>Remember session</span>
            </label>

            <span className="font-mono text-[11px] text-cyan-400 light:text-indigo-600 font-semibold">
              Default: abhishek123
            </span>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-medium text-sm shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>{isLoading ? 'Authenticating...' : 'Unlock Dashboard'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-800/80 light:border-slate-200 text-center">
          <a
            href="#home"
            className="text-xs text-slate-400 light:text-slate-600 hover:text-cyan-400 light:hover:text-indigo-600 font-medium transition-colors"
          >
            ← Back to Portfolio Website
          </a>
        </div>
      </motion.div>
    </div>
  );
};
