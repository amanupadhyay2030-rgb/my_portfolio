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
  Inbox,
  Eye,
  EyeOff,
  Globe,
  ShieldCheck,
} from 'lucide-react';

export const DashboardLogin = () => {
  const { login, signup, loginWithOTP } = useDashboard();
  const [activeTab, setActiveTab] = useState('login'); // 'login', 'signup'
  const [loginMethod, setLoginMethod] = useState('password'); // 'password', 'otp'

  // Form states
  const [loginEmail, setLoginEmail] = useState('abhishek@portfolio.dev');
  const [loginPassword, setLoginPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  // OTP state
  const [otpEmail, setOtpEmail] = useState('amanupadhyay2030@gmail.com');
  const [otpCode, setOtpCode] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [showDemoInbox, setShowDemoInbox] = useState(false);

  // Signup form state
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupRole, setSignupRole] = useState('Full-Stack Software Developer');

  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Password Submit
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');
    setIsLoading(true);

    setTimeout(() => {
      const res = login(loginPassword, loginEmail, rememberMe);
      if (!res.success) {
        setError(res.error || 'Invalid password. Default is "abhishek123"');
      }
      setIsLoading(false);
    }, 400);
  };

  // Send OTP handler (Real Email Dispatch)
  const handleSendOTP = async () => {
    setError('');
    setSuccessMsg('');
    if (!otpEmail.trim() || !otpEmail.includes('@')) {
      setError('Please enter a valid email address to receive OTP');
      return;
    }

    setIsLoading(true);
    const res = await sendEmailOTP(otpEmail);
    setGeneratedOtp(res.code);
    setIsOtpSent(true);
    setIsLoading(false);
    setSuccessMsg(`🔒 A 6-digit verification OTP code has been dispatched to ${otpEmail}. Please check your email inbox.`);
  };

  // OTP Submit
  const handleOTPSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!otpCode.trim() || otpCode.length < 6) {
      setError('Please enter the 6-digit OTP code sent to your email');
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
    setSuccessMsg('');

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
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950 light:bg-slate-100 relative overflow-hidden font-sans">
      {/* Background Ambient Mesh */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-600/15 light:bg-indigo-300/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-600/15 light:bg-cyan-300/30 blur-[120px] pointer-events-none" />

      {/* Main Authentication Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-xl rounded-3xl bg-slate-900 light:bg-white border border-slate-800 light:border-slate-200 shadow-2xl overflow-hidden relative z-10 p-6 sm:p-10"
      >
        {/* Top Header & Branding */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800 light:border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-100 light:text-slate-900 tracking-tight">
                Developer Learning OS
              </h1>
              <p className="text-xs text-slate-400 light:text-slate-600 font-mono">
                Secure Account Access & Verification
              </p>
            </div>
          </div>

          <a
            href="#home"
            className="px-3 py-1.5 rounded-xl bg-slate-800/80 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:text-cyan-400 light:hover:text-indigo-600 text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Portfolio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Main Tab Switcher: LOG IN vs SIGN UP */}
        <div className="grid grid-cols-2 gap-2 p-1.5 mb-6 rounded-2xl bg-slate-950/80 light:bg-slate-100 border border-slate-800 light:border-slate-200/80 font-mono text-xs sm:text-sm">
          <button
            type="button"
            onClick={() => { setActiveTab('login'); setError(''); setSuccessMsg(''); }}
            className={`py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'login'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                : 'text-slate-400 light:text-slate-700 hover:text-slate-200 light:hover:text-slate-900'
            }`}
          >
            <Key className="w-4 h-4" />
            <span>LOG IN</span>
          </button>

          <button
            type="button"
            onClick={() => { setActiveTab('signup'); setError(''); setSuccessMsg(''); }}
            className={`py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'signup'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                : 'text-slate-400 light:text-slate-700 hover:text-slate-200 light:hover:text-slate-900'
            }`}
          >
            <UserPlus className="w-4 h-4" />
            <span>SIGN UP</span>
          </button>
        </div>

        {/* Error Alert Box */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 light:text-rose-600 text-xs flex items-center gap-2.5 font-medium"
          >
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </motion.div>
        )}

        {/* Success Alert Box */}
        {successMsg && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 light:text-emerald-700 text-xs flex items-center gap-2.5 font-medium"
          >
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
            <span>{successMsg}</span>
          </motion.div>
        )}

        {/* ========================================== */}
        {/* LOG IN SECTION (PASSWORD OR EMAIL OTP) */}
        {/* ========================================== */}
        {activeTab === 'login' && (
          <div className="space-y-5">
            {/* Sub-method Switcher (Password vs Email OTP) */}
            <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800/60 light:border-slate-200">
              <span className="font-mono text-slate-400 light:text-slate-600">Authentication Method:</span>
              <div className="flex gap-3 font-mono font-semibold">
                <button
                  type="button"
                  onClick={() => setLoginMethod('password')}
                  className={`hover:underline cursor-pointer ${
                    loginMethod === 'password' ? 'text-cyan-400 light:text-indigo-600 underline' : 'text-slate-500'
                  }`}
                >
                  Password
                </button>
                <span className="text-slate-700">|</span>
                <button
                  type="button"
                  onClick={() => setLoginMethod('otp')}
                  className={`hover:underline cursor-pointer ${
                    loginMethod === 'otp' ? 'text-cyan-400 light:text-indigo-600 underline' : 'text-slate-500'
                  }`}
                >
                  Email OTP
                </button>
              </div>
            </div>

            {/* A. Password Login */}
            {loginMethod === 'password' && (
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 light:text-slate-800 uppercase tracking-wider mb-1.5">
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
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/90 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400 text-xs font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 light:text-slate-800 uppercase tracking-wider mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <KeyRound className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="password"
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="Enter password (default: abhishek123)"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/90 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400 text-xs font-sans"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 light:text-slate-600">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded bg-slate-950 border-slate-800 text-indigo-600"
                    />
                    <span>Remember session</span>
                  </label>

                  <button
                    type="button"
                    onClick={() => {
                      setLoginEmail('abhishek@portfolio.dev');
                      setLoginPassword('abhishek123');
                    }}
                    className="font-mono text-[11px] text-cyan-400 light:text-indigo-600 font-bold hover:underline cursor-pointer"
                  >
                    Fill Owner Account
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer mt-2"
                >
                  <span>{isLoading ? 'Authenticating...' : 'Sign In to Dashboard'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* B. Real Email OTP Login */}
            {loginMethod === 'otp' && (
              <form onSubmit={handleOTPSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 light:text-slate-800 uppercase tracking-wider mb-1.5">
                    Recipient Email Address
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input
                        type="email"
                        required
                        value={otpEmail}
                        onChange={(e) => setOtpEmail(e.target.value)}
                        placeholder="yourname@gmail.com"
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-950/90 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400 text-xs font-sans"
                      />
                    </div>

                    <button
                      type="button"
                      disabled={isLoading}
                      onClick={handleSendOTP}
                      className="px-4 py-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 light:bg-indigo-600 light:text-white border border-cyan-500/30 text-xs font-mono font-bold hover:bg-cyan-500/30 transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isLoading ? 'Sending...' : 'Send OTP Code'}</span>
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-mono font-bold text-slate-300 light:text-slate-800 uppercase tracking-wider">
                      6-Digit Verification OTP Code
                    </label>

                    {/* Developer/Testing Helper Popover Toggle */}
                    {isOtpSent && generatedOtp && (
                      <button
                        type="button"
                        onClick={() => setShowDemoInbox(!showDemoInbox)}
                        className="text-[11px] font-mono text-cyan-400 light:text-indigo-600 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Inbox className="w-3 h-3" />
                        <span>{showDemoInbox ? 'Hide Code' : 'Check Sent Code'}</span>
                      </button>
                    )}
                  </div>

                  <input
                    type="text"
                    maxLength={6}
                    required
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    placeholder="Enter 6-digit OTP from email"
                    className="w-full text-center tracking-widest font-mono text-xl font-bold py-3 rounded-xl bg-slate-950/90 light:bg-slate-50 text-cyan-400 light:text-indigo-600 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                {/* Sent OTP Code Viewer Modal Popover for Testing */}
                {showDemoInbox && generatedOtp && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-3.5 rounded-2xl bg-slate-950 light:bg-slate-100 border border-cyan-500/40 light:border-indigo-300 space-y-1 text-center"
                  >
                    <div className="text-xs font-mono text-slate-400 light:text-slate-600 flex items-center justify-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Sent Email Code to ({otpEmail}):</span>
                    </div>
                    <div className="text-xl font-mono font-extrabold text-cyan-300 light:text-indigo-900 tracking-widest">
                      {generatedOtp}
                    </div>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer mt-2"
                >
                  <span>{isLoading ? 'Verifying Code...' : 'Verify & Launch Dashboard'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        )}

        {/* ========================================== */}
        {/* SIGN UP SECTION (NEW USERS START AT 0) */}
        {/* ========================================== */}
        {activeTab === 'signup' && (
          <form onSubmit={handleSignupSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 light:text-slate-800 uppercase tracking-wider mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  required
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/90 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400 text-xs font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 light:text-slate-800 uppercase tracking-wider mb-1">
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
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/90 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400 text-xs font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 light:text-slate-800 uppercase tracking-wider mb-1">
                Developer Title / Role
              </label>
              <div className="relative">
                <Briefcase className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  value={signupRole}
                  onChange={(e) => setSignupRole(e.target.value)}
                  placeholder="Full-Stack Software Developer"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/90 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400 text-xs font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 light:text-slate-800 uppercase tracking-wider mb-1">
                Password
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="password"
                  required
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/90 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-400 text-xs font-sans"
                />
              </div>
            </div>

            <div className="p-3 rounded-xl bg-indigo-500/10 light:bg-indigo-50 border border-indigo-500/20 light:border-indigo-200 text-[11px] font-mono text-indigo-300 light:text-indigo-800">
              ⚡ <strong>New Account Workspace:</strong> Registers your profile with a clean workspace ready for your personal entries.
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer mt-3"
            >
              <span>{isLoading ? 'Creating Account...' : 'Sign Up & Launch Workspace'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* Footer info */}
        <div className="mt-8 pt-4 border-t border-slate-800 light:border-slate-200 flex items-center justify-between text-xs text-slate-400 light:text-slate-600">
          <span className="font-mono">Abhishek Upadhyay © 2026</span>
          <span className="font-mono text-cyan-400 light:text-indigo-600">TLS 1.3 SSL Protected</span>
        </div>
      </motion.div>
    </div>
  );
};
