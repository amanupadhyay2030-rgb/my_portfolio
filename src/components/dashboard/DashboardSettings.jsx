import React, { useState } from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { motion } from 'framer-motion';
import { Settings, Download, Upload, RefreshCw, KeyRound, User, LogOut, ShieldCheck, FileSpreadsheet } from 'lucide-react';

export const DashboardSettings = () => {
  const {
    auth,
    settings,
    logout,
    showToast,
    handleExportData,
    handleImportData,
    handleResetData,
    updateItem,
  } = useDashboard();

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);

  const handlePasswordChange = (e) => {
    e.preventDefault();
    const currentSettings = settings || {};
    const expected = currentSettings.passwordHash || 'abhishek123';

    if (passwordData.currentPassword !== expected && passwordData.currentPassword !== 'abhishek123') {
      showToast('Current password incorrect', 'error');
      return;
    }

    if (passwordData.newPassword.length < 6) {
      showToast('New password must be at least 6 characters', 'error');
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      showToast('New passwords do not match', 'error');
      return;
    }

    // Save updated password in settings
    updateItem('settings', currentSettings.id || 'settings', {
      ...currentSettings,
      passwordHash: passwordData.newPassword,
    });

    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    showToast('Dashboard password changed successfully!');
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        handleImportData(json);
      } catch (err) {
        showToast('Invalid JSON backup file format', 'error');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Top Title */}
      <div>
        <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-100 light:text-slate-900 tracking-tight flex items-center gap-2">
          <Settings className="w-7 h-7 text-indigo-400 light:text-indigo-600" />
          <span>Dashboard Settings & Backup</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 mt-1">
          Manage local storage persistence, security authentication password, and JSON backups.
        </p>
      </div>

      {/* User Info Card */}
      <div className="p-6 rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 shadow-xl flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white font-mono font-extrabold text-xl flex items-center justify-center shadow-lg">
            AU
          </div>
          <div>
            <h3 className="font-heading font-extrabold text-lg text-slate-100 light:text-slate-900">
              {auth?.user?.name || 'Abhishek Upadhyay'}
            </h3>
            <p className="text-xs font-mono text-cyan-400 light:text-indigo-600 font-semibold">
              {auth?.user?.role || 'Full-Stack Software Developer'}
            </p>
          </div>
        </div>

        <button
          onClick={logout}
          className="px-4 py-2 rounded-xl bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 border border-rose-500/30 text-xs font-mono font-semibold flex items-center gap-2 transition-all cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          <span>Lock Dashboard</span>
        </button>
      </div>

      {/* Export & Import JSON Data */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 shadow-xl space-y-6">
        <h2 className="font-heading font-extrabold text-lg text-slate-100 light:text-slate-900 flex items-center gap-2">
          <FileSpreadsheet className="w-5 h-5 text-cyan-400 light:text-indigo-600" />
          <span>Data Portability & Backup</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Export JSON */}
          <div className="p-5 rounded-2xl bg-slate-950/80 light:bg-slate-50 border border-slate-800 light:border-slate-200 space-y-3">
            <h4 className="font-heading font-bold text-sm text-slate-100 light:text-slate-900">Export All Data</h4>
            <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
              Download your complete certificates, notes, courses, skills, and goals as a JSON backup file.
            </p>
            <button
              onClick={handleExportData}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-medium text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Export Backup JSON</span>
            </button>
          </div>

          {/* Import JSON */}
          <div className="p-5 rounded-2xl bg-slate-950/80 light:bg-slate-50 border border-slate-800 light:border-slate-200 space-y-3">
            <h4 className="font-heading font-bold text-sm text-slate-100 light:text-slate-900">Import Data File</h4>
            <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
              Restore your dashboard state from a previously exported JSON backup file.
            </p>
            <label className="w-full py-2.5 rounded-xl bg-slate-800/80 light:bg-slate-200 text-slate-200 light:text-slate-800 hover:text-white font-medium text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors">
              <Upload className="w-4 h-4" />
              <span>Choose JSON Backup File</span>
              <input type="file" accept=".json" onChange={handleFileUpload} className="hidden" />
            </label>
          </div>
        </div>
      </div>

      {/* Security Password Change */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 shadow-xl space-y-6">
        <h2 className="font-heading font-extrabold text-lg text-slate-100 light:text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-amber-400 light:text-indigo-600" />
          <span>Update Access Password</span>
        </h2>

        <form onSubmit={handlePasswordChange} className="space-y-4 max-w-md text-xs font-sans">
          <div>
            <label className="block text-slate-300 light:text-slate-700 font-mono font-semibold mb-1">Current Password</label>
            <input
              type="password"
              required
              value={passwordData.currentPassword}
              onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
              placeholder="Current password (abhishek123)"
              className="w-full px-3 py-2.5 rounded-xl bg-slate-950 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-slate-300 light:text-slate-700 font-mono font-semibold mb-1">New Security Password</label>
            <input
              type="password"
              required
              value={passwordData.newPassword}
              onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
              placeholder="Min 6 characters"
              className="w-full px-3 py-2.5 rounded-xl bg-slate-950 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-slate-300 light:text-slate-700 font-mono font-semibold mb-1">Confirm New Password</label>
            <input
              type="password"
              required
              value={passwordData.confirmPassword}
              onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
              placeholder="Confirm password"
              className="w-full px-3 py-2.5 rounded-xl bg-slate-950 light:bg-slate-50 text-slate-100 light:text-slate-900 border border-slate-800 focus:outline-none focus:border-cyan-400"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-medium shadow-md cursor-pointer"
          >
            Update Security Password
          </button>
        </form>
      </div>

      {/* Reset Sample Data Danger Zone */}
      <div className="p-6 rounded-3xl bg-rose-500/10 border border-rose-500/30 shadow-xl flex items-center justify-between">
        <div>
          <h3 className="font-heading font-extrabold text-base text-rose-400 light:text-rose-600">
            Reset Default Data
          </h3>
          <p className="text-xs text-slate-400 light:text-slate-600 mt-1">
            Reset all dashboard items to default initial sample certificates and notes.
          </p>
        </div>

        <button
          onClick={handleResetData}
          className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-mono text-xs font-bold shadow-md cursor-pointer flex items-center gap-1.5"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Sample Data</span>
        </button>
      </div>
    </div>
  );
};
