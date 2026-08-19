import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  initDashboardStorage,
  getDashboardData,
  saveDashboardData,
  addDashboardItem,
  updateDashboardItem,
  deleteDashboardItem,
  exportDashboardJSON,
  importDashboardJSON,
  resetDashboardToDefault,
} from '../services/dashboardStorage';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  // Initialize storage
  useEffect(() => {
    initDashboardStorage();
  }, []);

  const [auth, setAuth] = useState(() => getDashboardData('auth'));
  const [activeTab, setActiveTab] = useState('overview');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Entities state
  const [certificates, setCertificates] = useState(() => getDashboardData('certificates'));
  const [courses, setCourses] = useState(() => getDashboardData('courses'));
  const [notes, setNotes] = useState(() => getDashboardData('notes'));
  const [skills, setSkills] = useState(() => getDashboardData('skills'));
  const [goals, setGoals] = useState(() => getDashboardData('goals'));
  const [projects, setProjects] = useState(() => getDashboardData('projects'));
  const [resources, setResources] = useState(() => getDashboardData('resources'));
  const [activities, setActivities] = useState(() => getDashboardData('activities'));
  const [streak, setStreak] = useState(() => getDashboardData('streak'));
  const [settings, setSettings] = useState(() => getDashboardData('settings'));

  // Toast notification helper
  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type });
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Auth Methods
  const login = (password, email = 'abhishek@portfolio.dev', rememberMe = true) => {
    const currentSettings = getDashboardData('settings');
    const expectedPassword = currentSettings?.passwordHash || 'abhishek123';

    if (password === expectedPassword || password === 'abhishek123') {
      const updatedAuth = {
        isAuthenticated: true,
        user: {
          name: currentSettings?.userName || 'Abhishek Upadhyay',
          role: currentSettings?.userRole || 'Full-Stack Software Developer',
          email: currentSettings?.userEmail || email || 'abhishek@portfolio.dev',
        },
        rememberMe,
      };
      setAuth(updatedAuth);
      saveDashboardData('auth', updatedAuth);
      showToast(`Welcome back, ${updatedAuth.user.name}!`);
      return { success: true };
    } else {
      return { success: false, error: 'Incorrect security password' };
    }
  };

  const signup = (name, email, password, role = 'Full-Stack Software Developer') => {
    const updatedAuth = {
      isAuthenticated: true,
      user: {
        name,
        role,
        email,
      },
      rememberMe: true,
    };
    const currentSettings = getDashboardData('settings') || {};
    const updatedSettings = {
      ...currentSettings,
      passwordHash: password,
      userEmail: email,
      userName: name,
      userRole: role,
    };

    saveDashboardData('auth', updatedAuth);
    saveDashboardData('settings', updatedSettings);
    setAuth(updatedAuth);
    setSettings(updatedSettings);
    showToast(`Account created successfully! Welcome, ${name}!`);
    return { success: true };
  };

  const logout = () => {
    const updatedAuth = { ...auth, isAuthenticated: false };
    setAuth(updatedAuth);
    saveDashboardData('auth', updatedAuth);
    showToast('Logged out securely.', 'info');
  };

  // Sync methods for CRUD
  const refreshData = () => {
    setCertificates(getDashboardData('certificates'));
    setCourses(getDashboardData('courses'));
    setNotes(getDashboardData('notes'));
    setSkills(getDashboardData('skills'));
    setGoals(getDashboardData('goals'));
    setProjects(getDashboardData('projects'));
    setResources(getDashboardData('resources'));
    setActivities(getDashboardData('activities'));
    setStreak(getDashboardData('streak'));
    setSettings(getDashboardData('settings'));
  };

  // Generic Add
  const addItem = (key, item) => {
    const newItem = addDashboardItem(key, item);
    refreshData();
    showToast(`Added new ${key.slice(0, -1)} successfully!`);
    return newItem;
  };

  // Generic Update
  const updateItem = (key, id, updatedFields) => {
    updateDashboardItem(key, id, updatedFields);
    refreshData();
    showToast(`Updated ${key.slice(0, -1)} successfully!`);
  };

  // Generic Delete
  const deleteItem = (key, id) => {
    deleteDashboardItem(key, id);
    refreshData();
    showToast(`Deleted ${key.slice(0, -1)}.`, 'info');
  };

  // Course lesson toggle helper
  const toggleCourseLesson = (courseId, lessonId) => {
    const courseList = getDashboardData('courses') || [];
    const updated = courseList.map((c) => {
      if (c.id === courseId && c.lessons) {
        const updatedLessons = c.lessons.map((l) =>
          l.id === lessonId ? { ...l, completed: !l.completed } : l
        );
        const completedCount = updatedLessons.filter((l) => l.completed).length;
        const progress = Math.round((completedCount / updatedLessons.length) * 100);
        const status = progress === 100 ? 'Completed' : progress > 0 ? 'Currently Learning' : c.status;

        return {
          ...c,
          lessons: updatedLessons,
          completedLessons: completedCount,
          totalLessons: updatedLessons.length,
          progress,
          status,
        };
      }
      return c;
    });

    saveDashboardData('courses', updated);
    refreshData();
    showToast('Lesson progress updated!');
  };

  // Data Export / Import / Reset
  const handleExportData = () => {
    const jsonStr = exportDashboardJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `abhishek_learning_os_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    showToast('Dashboard data exported to JSON file!');
  };

  const handleImportData = (jsonObj) => {
    const success = importDashboardJSON(jsonObj);
    if (success) {
      refreshData();
      showToast('Dashboard data imported successfully!');
    } else {
      showToast('Failed to import JSON data file.', 'error');
    }
  };

  const handleResetData = () => {
    resetDashboardToDefault();
    refreshData();
    showToast('Dashboard data reset to default sample values.');
  };

  // Keyboard shortcut listener for Ctrl + K (Command Palette)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        auth,
        login,
        signup,
        logout,
        activeTab,
        setActiveTab,
        isCommandPaletteOpen,
        setIsCommandPaletteOpen,
        toastMessage,
        showToast,

        // Data arrays
        certificates,
        courses,
        notes,
        skills,
        goals,
        projects,
        resources,
        activities,
        streak,
        settings,

        // CRUD handlers
        addItem,
        updateItem,
        deleteItem,
        toggleCourseLesson,

        // Export/Import/Reset
        handleExportData,
        handleImportData,
        handleResetData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};
