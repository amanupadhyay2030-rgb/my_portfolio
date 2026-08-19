import React, { useState } from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { motion } from 'framer-motion';
import { Lock, ShieldAlert, ArrowRight, KeyRound, Sparkles, User, Mail, Briefcase, UserPlus, LogIn } from 'lucide-react';

export const DashboardLogin = () => {
  const { login, signup } = useDashboard();
  const [mode, setMode] = useState('login'); // 'login' or 'signup'

  // Login form state
  const [loginEmail, setLoginEmail] = useState('abhishek@portfolio.dev');
  const [loginPassword, setLoginPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  // Signup form state
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupRole, setSignupRole] = useState('Full-Stack Software Developer');

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      const res = login(loginPassword, loginEmail, rememberMe);
      if (!res.success) {
        setError(res.error || 'Invalid password. Default is "abhishek123"');
      }
      setIsLoading(false);
    }, 400);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!signupName.trim()) {
      setError('Please enter your full name');
      return;
    }
    if (!signupEmail.trim() || !signupEmail.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    if (signupPassword.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      signup(signupName, signupEmail, signupPassword, signupRole);
      setIsLoading(false);
    }, 400);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-950 light:bg-slate-100 relative overflow-hidden bg-dot-pattern">
      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-indigo-500/10 light:bg-indigo-200/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-cyan-500/10 light:bg-blue-200/40 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md p-8 sm:p-10 rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 shadow-2xl backdrop-blur-xl relative z-10"
      >
        {/* Header Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 text-cyan-400 light:text-indigo-600 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6 shadow-sm">
          {mode === 'login' ? <Lock className="w-6 h-6" /> : <UserPlus className="w-6 h-6" />}
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 light:text-indigo-600 text-xs font-mono font-semibold mb-2 border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LEARNING OS PORTAL</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-100 light:text-slate-900 tracking-tight">
            {mode === 'login' ? 'Welcome Back' : 'Create Account'}
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 mt-1">
            {mode === 'login'
              ? 'Access your personal learning certificates & developer notes.'
              : 'Register your developer profile to start tracking courses & notes.'}
          </p>
        </div>

        {/* Mode Switcher Tabs (Login vs Sign Up) */}
        <div className="grid grid-cols-2 gap-1 p-1 mb-6 rounded-2xl bg-slate-950/80 light:bg-slate-100 border border-slate-800 light:border-slate-200 font-mono text-xs">
          <button
            type="button"
            onClick={() => { setMode('login'); setError(''); }}
            className={`py-2 rounded-xl font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              mode === 'login'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                : 'text-slate-400 light:text-slate-600 hover:text-slate-200'
            }`}
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Log In</span>
          </button>

          <button
            type="button"
            onClick={() => { setMode('signup'); setError(''); }}
            className={`py-2 rounded-xl font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              mode === 'signup'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                : 'text-slate-400 light:text-slate-600 hover:text-slate-200'
            }`}
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Sign Up</span>
          </button>
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

        {/* LOGIN FORM */}
        {mode === 'login' ? (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono font-semibold text-slate-300 light:text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="abhishek@portfolio.dev"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400 text-xs font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-slate-300 light:text-slate-700 uppercase tracking-wider mb-1.5">
                Security Password
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Enter password (default: abhishek123)"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400 text-xs font-sans"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 light:text-slate-600">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded bg-slate-950 border-slate-800 text-indigo-600"
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
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer mt-2"
            >
              <span>{isLoading ? 'Authenticating...' : 'Unlock Dashboard'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          /* SIGN UP FORM */
          <form onSubmit={handleSignupSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-mono font-semibold text-slate-300 light:text-slate-700 uppercase tracking-wider mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  required
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  placeholder="e.g. Abhishek Upadhyay"
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950/80 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400 text-xs font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-slate-300 light:text-slate-700 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="email"
                  required
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  placeholder="name@developer.com"
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950/80 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400 text-xs font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-slate-300 light:text-slate-700 uppercase tracking-wider mb-1">
                Developer Title / Role
              </label>
              <div className="relative">
                <Briefcase className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  value={signupRole}
                  onChange={(e) => setSignupRole(e.target.value)}
                  placeholder="Full-Stack Software Developer"
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950/80 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400 text-xs font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-slate-300 light:text-slate-700 uppercase tracking-wider mb-1">
                Choose Security Password
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="password"
                  required
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  placeholder="Min 6 characters"
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950/80 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400 text-xs font-sans"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer mt-3"
            >
              <span>{isLoading ? 'Creating Account...' : 'Sign Up & Launch Dashboard'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="mt-6 pt-5 border-t border-slate-800/80 light:border-slate-200 text-center">
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
