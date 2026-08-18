import React, { useState } from 'react';
import { PROFILE } from '../../config/profile';
import { Toast } from '../ui/Toast';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check, MapPin, User, AtSign, Phone } from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ message: '', type: 'success' });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const hasEmail = Boolean(PROFILE.email);
  const hasPhone = Boolean(PROFILE.phone);
  const hasLocation = Boolean(PROFILE.location);
  const hasGitHub = Boolean(PROFILE.socials?.github || PROFILE.githubUsername);
  const hasLinkedIn = Boolean(PROFILE.socials?.linkedin);
  const githubUrl = PROFILE.socials?.github || (PROFILE.githubUsername ? `https://github.com/${PROFILE.githubUsername}` : '');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) errs.message = 'Please enter your message.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    const recipientEmail = PROFILE.email || 'amanupadhyay2030@gmail.com';
    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nSender Email: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    )}`;

    // Trigger direct email sending via user's email client
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setToast({
        message: `Thank you, ${formData.name}! Your message has been directed to ${recipientEmail}.`,
        type: 'success',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const copyEmailToClipboard = () => {
    if (!PROFILE.email) return;
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setToast({ message: 'Email address copied to clipboard!', type: 'success' });
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 light:text-indigo-600 text-xs font-mono font-semibold mb-3 border border-cyan-500/20">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-100 light:text-slate-900 tracking-tight">
            Let's connect &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 light:from-indigo-600 light:to-cyan-600 bg-clip-text text-transparent">
              collaborate.
            </span>
          </h2>

          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg mt-4 font-sans">
            Have a question, software inquiry, or project opportunity? Send a message below.
          </p>
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 light:bg-white border border-slate-800 light:border-slate-200 shadow-2xl backdrop-blur-xl space-y-6">
              <h3 className="font-heading font-extrabold text-xl text-slate-100 light:text-slate-900">
                Contact Details
              </h3>

              {/* Email Card (Rendered if email is provided) */}
              {hasEmail && (
                <div className="p-4 rounded-2xl bg-slate-950/60 light:bg-slate-50 border border-slate-800 light:border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 light:text-indigo-600">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-mono block">Email Address</span>
                      <span className="text-sm font-semibold text-slate-200 light:text-slate-800">
                        {PROFILE.email}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={copyEmailToClipboard}
                    title="Copy Email"
                    className="p-2 rounded-xl bg-slate-800 light:bg-white hover:bg-slate-700 text-slate-300 light:text-slate-700 transition-colors border border-slate-700 light:border-slate-200"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              )}

              {/* LinkedIn Profile Card */}
              {hasLinkedIn && (
                <div className="p-4 rounded-2xl bg-slate-950/60 light:bg-slate-50 border border-slate-800 light:border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 light:text-indigo-600 shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs text-slate-400 font-mono block">LinkedIn ID</span>
                      <a
                        href={PROFILE.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 hover:underline truncate block font-mono"
                      >
                        amanupadhyay2030
                      </a>
                    </div>
                  </div>

                  <a
                    href={PROFILE.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visit LinkedIn Profile"
                    className="px-3 py-1.5 rounded-xl bg-slate-800 light:bg-white hover:bg-slate-700 text-cyan-400 text-xs font-mono font-medium transition-colors border border-slate-700 light:border-slate-200 shrink-0"
                  >
                    Open ↗
                  </a>
                </div>
              )}

              {/* Phone Card (Rendered if phone is provided) */}
              {hasPhone && (
                <div className="p-4 rounded-2xl bg-slate-950/60 light:bg-slate-50 border border-slate-800 light:border-slate-200 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">Phone</span>
                    <span className="text-sm font-semibold text-slate-200 light:text-slate-800">
                      {PROFILE.phone}
                    </span>
                  </div>
                </div>
              )}

              {/* Location Card */}
              {hasLocation && (
                <div className="p-4 rounded-2xl bg-slate-950/60 light:bg-slate-50 border border-slate-800 light:border-slate-200 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">Location</span>
                    <span className="text-sm font-semibold text-slate-200 light:text-slate-800">
                      {PROFILE.location}
                    </span>
                  </div>
                </div>
              )}

              {/* Social Channels (Rendered only if valid URLs exist) */}
              {(hasGitHub || hasLinkedIn) && (
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-3">
                    Professional Networks:
                  </span>

                  <div className="flex gap-3">
                    {hasGitHub && (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-950/80 light:bg-slate-100 hover:bg-slate-800 text-slate-200 light:text-slate-800 font-medium text-xs border border-slate-800 light:border-slate-200 transition-colors"
                      >
                        <Github className="w-4 h-4" /> GitHub
                      </a>
                    )}

                    {hasLinkedIn && (
                      <a
                        href={PROFILE.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-950/80 light:bg-slate-100 hover:bg-slate-800 text-slate-200 light:text-slate-800 font-medium text-xs border border-slate-800 light:border-slate-200 transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-cyan-400" /> LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Column: Direct Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 light:bg-white border border-slate-800 light:border-slate-200 shadow-2xl backdrop-blur-xl space-y-5"
            >
              <h3 className="font-heading font-extrabold text-xl text-slate-100 light:text-slate-900 mb-2">
                Send a Direct Message
              </h3>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-slate-300 light:text-slate-700 font-semibold mb-2">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 light:bg-slate-50 border text-sm text-slate-100 light:text-slate-900 placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.name ? 'border-red-500/80' : 'border-slate-800 light:border-slate-300 focus:border-cyan-500'
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-xs text-red-400 mt-1 font-mono">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 light:text-slate-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <AtSign className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 light:bg-slate-50 border text-sm text-slate-100 light:text-slate-900 placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500/80' : 'border-slate-800 light:border-slate-300 focus:border-cyan-500'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-400 mt-1 font-mono">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono text-slate-300 light:text-slate-700 font-semibold mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Software Inquiry / Project Discussion"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 light:bg-slate-50 border text-sm text-slate-100 light:text-slate-900 placeholder-slate-500 focus:outline-none transition-colors ${
                    errors.subject ? 'border-red-500/80' : 'border-slate-800 light:border-slate-300 focus:border-cyan-500'
                  }`}
                />
                {errors.subject && <p className="text-xs text-red-400 mt-1 font-mono">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono text-slate-300 light:text-slate-700 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Abhishek, I would like to get in touch regarding..."
                  className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 light:bg-slate-50 border text-sm text-slate-100 light:text-slate-900 placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                    errors.message ? 'border-red-500/80' : 'border-slate-800 light:border-slate-300 focus:border-cyan-500'
                  }`}
                />
                {errors.message && <p className="text-xs text-red-400 mt-1 font-mono">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

        {/* Toast Notification */}
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ message: '', type: 'success' })}
        />

      </div>
    </section>
  );
};
