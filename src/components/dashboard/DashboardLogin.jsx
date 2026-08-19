import React, { useState } from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { sendEmailOTP } from '../../services/dashboardStorage';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lock,
  ShieldAlert,
  ArrowRight,
  KeyRound,
  Sparkles,
  User,
  Mail,
  Briefcase,
  UserPlus,
  Key,
  Send,
  CheckCircle2,
  Award,
  BookOpen,
  Code2,
  Flame,
  ShieldCheck,
  Globe,
  Zap,
} from 'lucide-react';

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
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950 light:bg-slate-50 relative overflow-hidden font-sans">
      {/* Background Gradient Mesh Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-600/15 light:bg-indigo-300/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-600/15 light:bg-cyan-300/30 blur-[120px] pointer-events-none" />

      {/* Main Container Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-5xl rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200/80 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative z-10 backdrop-blur-xl"
      >
        {/* LEFT COLUMN: Feature Showcase (Visible on Large Screens) */}
        <div className="lg:col-span-5 p-8 lg:p-10 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/60 light:from-slate-900 light:to-indigo-950 text-white flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-800/80">
          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          {/* Top Brand Logo */}
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 text-cyan-300 text-xs font-mono font-bold border border-cyan-500/30 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>LEARNING OS • ABHISHEK UPADHYAY</span>
            </div>

            <h1 className="font-heading font-extrabold text-2xl lg:text-3xl tracking-tight leading-tight text-slate-100">
              Developer Mastery & Career Command Center
            </h1>

            <p className="text-xs lg:text-sm text-slate-300 leading-relaxed">
              Personal verified credentials, real-world course tracking (W3Schools, Udemy, freeCodeCamp), system telemetry notes, and active study heatmaps.
            </p>
          </div>

          {/* Middle Floating Feature Badges */}
          <div className="relative z-10 my-8 space-y-3">
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Flame className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-heading font-extrabold text-slate-200">14-Day Study Streak Matrix</div>
                <div className="text-[11px] font-mono text-slate-400">246 Total Hours • 142 Study Days</div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-heading font-extrabold text-slate-200">5 Verified Certificates</div>
                <div className="text-[11px] font-mono text-slate-400">W3Schools PHP, Udemy Web & Python 3</div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-heading font-extrabold text-slate-200">Real Production Projects</div>
                <div className="text-[11px] font-mono text-slate-400">HRMS Portal • PRAYAS Recruitment</div>
              </div>
            </div>
          </div>

          {/* Bottom Security Footer */}
          <div className="relative z-10 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>TLS 1.3 256-Bit SSL Encrypted</span>
            </span>
            <span className="text-indigo-400 font-bold">v2.4.0</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Login / Signup Form */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between bg-slate-900/40 light:bg-white">
          <div>
            {/* Top Navigation Bar / Mode Selector */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800 light:border-slate-200">
              <div>
                <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-100 light:text-slate-900 tracking-tight">
                  {mode === 'signup' ? 'Create Account' : mode === 'otp' ? 'Email OTP Access' : 'Sign In to Portal'}
                </h2>
                <p className="text-xs text-slate-400 light:text-slate-600 mt-0.5">
                  {mode === 'signup'
                    ? 'Register your profile. New accounts start with clean 0-stat workspace.'
                    : mode === 'otp'
                    ? 'Enter email to receive a 6-digit instant verification code.'
                    : 'Access your credentials, active courses & private notes.'}
                </p>
              </div>

              <a
                href="#home"
                className="px-3 py-1.5 rounded-xl bg-slate-800/60 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:text-cyan-400 light:hover:text-indigo-600 text-xs font-medium transition-colors hidden sm:flex items-center gap-1"
              >
                <span>Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="grid grid-cols-3 gap-1.5 p-1.5 mb-6 rounded-2xl bg-slate-950/80 light:bg-slate-100 border border-slate-800 light:border-slate-200/80 font-mono text-xs">
              <button
                type="button"
                onClick={() => { setMode('password'); setError(''); }}
                className={`py-2 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  mode === 'password'
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                    : 'text-slate-400 light:text-slate-700 hover:text-slate-200 light:hover:text-slate-900'
                }`}
              >
                <Key className="w-3.5 h-3.5" />
                <span>Password</span>
              </button>

              <button
                type="button"
                onClick={() => { setMode('otp'); setError(''); }}
                className={`py-2 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  mode === 'otp'
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                    : 'text-slate-400 light:text-slate-700 hover:text-slate-200 light:hover:text-slate-900'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email OTP</span>
              </button>

              <button
                type="button"
                onClick={() => { setMode('signup'); setError(''); }}
                className={`py-2 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  mode === 'signup'
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                    : 'text-slate-400 light:text-slate-700 hover:text-slate-200 light:hover:text-slate-900'
                }`}
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Sign Up</span>
              </button>
            </div>

            {/* Error Alert Box */}
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

            {/* 1. PASSWORD LOGIN FORM */}
            {mode === 'password' && (
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-200 light:text-slate-800 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 light:text-slate-500" />
                    <input
                      type="email"
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="abhishek@portfolio.dev"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400 light:focus:border-indigo-500 text-xs font-sans shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-200 light:text-slate-800 uppercase tracking-wider mb-1.5">
                    Security Password
                  </label>
                  <div className="relative">
                    <KeyRound className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 light:text-slate-500" />
                    <input
                      type="password"
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="Enter security password (default: abhishek123)"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400 light:focus:border-indigo-500 text-xs font-sans shadow-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 light:text-slate-600 pt-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded bg-slate-950 border-slate-800 text-indigo-600"
                    />
                    <span>Keep me signed in</span>
                  </label>

                  <button
                    type="button"
                    onClick={() => {
                      setLoginEmail('abhishek@portfolio.dev');
                      setLoginPassword('abhishek123');
                    }}
                    className="font-mono text-[11px] text-cyan-400 light:text-indigo-600 font-bold hover:underline cursor-pointer"
                  >
                    Auto-Fill Demo Credentials
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer mt-3"
                >
                  <span>{isLoading ? 'Authenticating Credentials...' : 'Unlock Dashboard OS'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* 2. EMAIL OTP LOGIN FORM */}
            {mode === 'otp' && (
              <form onSubmit={handleOTPSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-200 light:text-slate-800 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 light:text-slate-500" />
                      <input
                        type="email"
                        required
                        value={otpEmail}
                        onChange={(e) => setOtpEmail(e.target.value)}
                        placeholder="abhishek@portfolio.dev"
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400 text-xs font-sans shadow-sm"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleSendOTP}
                      className="px-4 py-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 light:bg-indigo-600 light:text-white border border-cyan-500/30 text-xs font-mono font-bold hover:bg-cyan-500/30 transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Code</span>
                    </button>
                  </div>
                </div>

                {/* Generated OTP Code Alert Banner */}
                {isOtpSent && generatedOtp && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 rounded-2xl bg-cyan-500/10 light:bg-indigo-50 border border-cyan-500/30 light:border-indigo-200 space-y-1.5 text-center shadow-md"
                  >
                    <div className="flex items-center justify-center gap-1.5 text-xs font-mono font-bold text-cyan-400 light:text-indigo-700">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Verification Code Sent to {otpEmail}:</span>
                    </div>
                    <div className="text-2xl font-mono font-extrabold text-cyan-300 light:text-indigo-900 tracking-widest bg-slate-950/90 light:bg-white py-1.5 rounded-xl border border-cyan-500/40 light:border-indigo-300">
                      {generatedOtp}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 light:text-slate-600">
                      Enter the 6-digit code above to complete login.
                    </div>
                  </motion.div>
                )}

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-200 light:text-slate-800 uppercase tracking-wider mb-1.5">
                    6-Digit Verification Code
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    required
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    placeholder="e.g. 849201"
                    className="w-full text-center tracking-widest font-mono text-xl font-bold py-3 rounded-xl bg-slate-950/80 light:bg-slate-50 text-cyan-400 light:text-indigo-600 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400 shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer mt-3"
                >
                  <span>{isLoading ? 'Verifying OTP...' : 'Verify OTP & Launch Dashboard'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* 3. SIGN UP FORM */}
            {mode === 'signup' && (
              <form onSubmit={handleSignupSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-200 light:text-slate-800 uppercase tracking-wider mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 light:text-slate-500" />
                    <input
                      type="text"
                      required
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                      placeholder="e.g. John Developer"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400 text-xs font-sans shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-200 light:text-slate-800 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 light:text-slate-500" />
                    <input
                      type="email"
                      required
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      placeholder="john@developer.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400 text-xs font-sans shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-200 light:text-slate-800 uppercase tracking-wider mb-1">
                    Developer Role / Title
                  </label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 light:text-slate-500" />
                    <input
                      type="text"
                      value={signupRole}
                      onChange={(e) => setSignupRole(e.target.value)}
                      placeholder="Full-Stack Software Developer"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400 text-xs font-sans shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-200 light:text-slate-800 uppercase tracking-wider mb-1">
                    Security Password
                  </label>
                  <div className="relative">
                    <KeyRound className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 light:text-slate-500" />
                    <input
                      type="password"
                      required
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      placeholder="Min 6 characters"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400 text-xs font-sans shadow-sm"
                    />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-indigo-500/10 light:bg-indigo-50 border border-indigo-500/20 light:border-indigo-200 text-[11px] font-mono text-indigo-300 light:text-indigo-800">
                  ⚡ <strong>Note:</strong> New account registrations initialize a clean 0-stat workspace ready for personal certificates, courses & notes.
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer mt-3"
                >
                  <span>{isLoading ? 'Registering Profile...' : 'Sign Up & Launch Clean Workspace'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Bottom Footer Back Link */}
          <div className="mt-8 pt-4 border-t border-slate-800 light:border-slate-200 flex items-center justify-between text-xs text-slate-400 light:text-slate-600">
            <span>Abhishek Upadhyay © 2026</span>
            <a
              href="#home"
              className="text-cyan-400 light:text-indigo-600 hover:underline font-medium flex items-center gap-1"
            >
              <span>Back to Portfolio</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
