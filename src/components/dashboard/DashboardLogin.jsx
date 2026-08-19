import React, { useState } from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { sendEmailOTP, verifyEmailOTP } from '../../services/dashboardStorage';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ShieldAlert, ArrowRight, KeyRound, Sparkles, User, Mail, Briefcase, UserPlus, LogIn, Key, Send, CheckCircle2 } from 'lucide-react';

export const DashboardLogin = () => {
  const { login, signup, loginWithOTP } = useDashboard();
  const [mode, setMode] = useState('password'); // 'password', 'otp', 'signup'

  // Form states
  const [loginEmail, setLoginEmail] = useState('abhishek@portfolio.dev');
  const [loginPassword, setLoginPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  // OTP state
  const [otpEmail, setOtpEmail] = useState('abhishek@portfolio.dev');
  const [otpCode, setOtpCode] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  // Signup form state
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupRole, setSignupRole] = useState('Full-Stack Software Developer');

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Password Submit
  const handlePasswordSubmit = (e) => {
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

  // Send OTP handler
  const handleSendOTP = () => {
    setError('');
    if (!otpEmail.trim() || !otpEmail.includes('@')) {
      setError('Please enter a valid email address to receive OTP');
      return;
    }
    const code = sendEmailOTP(otpEmail);
    setGeneratedOtp(code);
    setIsOtpSent(true);
  };

  // OTP Submit
  const handleOTPSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!otpCode.trim() || otpCode.length < 6) {
      setError('Please enter the 6-digit OTP code');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const res = loginWithOTP(otpEmail, otpCode);
      if (!res.success) {
        setError(res.error || 'Invalid or expired OTP code');
      }
      setIsLoading(false);
    }, 400);
  };

  // Signup Submit
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
          {mode === 'signup' ? <UserPlus className="w-6 h-6" /> : mode === 'otp' ? <Mail className="w-6 h-6" /> : <Lock className="w-6 h-6" />}
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 light:text-indigo-600 text-xs font-mono font-semibold mb-2 border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LEARNING OS PORTAL</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-100 light:text-slate-900 tracking-tight">
            {mode === 'signup' ? 'Create Account' : mode === 'otp' ? 'Email OTP Login' : 'Password Login'}
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 mt-1">
            {mode === 'signup'
              ? 'Register your profile. New accounts start with clean 0-stat workspace.'
              : mode === 'otp'
              ? 'Receive a 6-digit verification code directly to your email.'
              : 'Unlock personal learning certificates, courses & developer notes.'}
          </p>
        </div>

        {/* Mode Switcher Tabs (Password vs Email OTP vs Sign Up) */}
        <div className="grid grid-cols-3 gap-1 p-1 mb-6 rounded-2xl bg-slate-950/80 light:bg-slate-100 border border-slate-800 light:border-slate-200 font-mono text-[11px]">
          <button
            type="button"
            onClick={() => { setMode('password'); setError(''); }}
            className={`py-2 rounded-xl font-bold flex items-center justify-center gap-1 transition-all cursor-pointer ${
              mode === 'password'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                : 'text-slate-400 light:text-slate-600 hover:text-slate-200'
            }`}
          >
            <Key className="w-3 h-3" />
            <span>Password</span>
          </button>

          <button
            type="button"
            onClick={() => { setMode('otp'); setError(''); }}
            className={`py-2 rounded-xl font-bold flex items-center justify-center gap-1 transition-all cursor-pointer ${
              mode === 'otp'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                : 'text-slate-400 light:text-slate-600 hover:text-slate-200'
            }`}
          >
            <Mail className="w-3 h-3" />
            <span>Email OTP</span>
          </button>

          <button
            type="button"
            onClick={() => { setMode('signup'); setError(''); }}
            className={`py-2 rounded-xl font-bold flex items-center justify-center gap-1 transition-all cursor-pointer ${
              mode === 'signup'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                : 'text-slate-400 light:text-slate-600 hover:text-slate-200'
            }`}
          >
            <UserPlus className="w-3 h-3" />
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

        {/* PASSWORD LOGIN FORM */}
        {mode === 'password' && (
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
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
        )}

        {/* EMAIL OTP LOGIN FORM */}
        {mode === 'otp' && (
          <form onSubmit={handleOTPSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono font-semibold text-slate-300 light:text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="email"
                    required
                    value={otpEmail}
                    onChange={(e) => setOtpEmail(e.target.value)}
                    placeholder="abhishek@portfolio.dev"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400 text-xs font-sans"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSendOTP}
                  className="px-3.5 py-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-bold hover:bg-cyan-500/30 transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send OTP</span>
                </button>
              </div>
            </div>

            {/* Generated OTP Banner Alert */}
            {isOtpSent && generatedOtp && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 space-y-1 text-center"
              >
                <div className="flex items-center justify-center gap-1.5 text-xs font-mono font-bold text-cyan-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>OTP Code Generated for {otpEmail}:</span>
                </div>
                <div className="text-2xl font-mono font-extrabold text-cyan-300 tracking-widest bg-slate-950/80 py-1.5 rounded-xl border border-cyan-500/40">
                  {generatedOtp}
                </div>
                <div className="text-[10px] font-mono text-slate-400">
                  Enter the 6-digit code above to complete login.
                </div>
              </motion.div>
            )}

            <div>
              <label className="block text-xs font-mono font-semibold text-slate-300 light:text-slate-700 uppercase tracking-wider mb-1.5">
                6-Digit Verification OTP
              </label>
              <input
                type="text"
                maxLength={6}
                required
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
                placeholder="e.g. 849201"
                className="w-full text-center tracking-widest font-mono text-lg font-bold py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 text-cyan-400 light:text-indigo-600 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer mt-2"
            >
              <span>{isLoading ? 'Verifying OTP...' : 'Verify OTP & Unlock Dashboard'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* SIGN UP FORM (NEW USERS START AT 0) */}
        {mode === 'signup' && (
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
                  placeholder="e.g. Developer Name"
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

            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-[11px] font-mono text-indigo-300">
              ⚡ Note: New accounts start with clean 0-stat workspace ready for your personal entries.
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer mt-2"
            >
              <span>{isLoading ? 'Creating Account...' : 'Sign Up & Launch Clean Workspace'}</span>
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
