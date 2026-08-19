// LocalStorage keys
const STORAGE_KEYS = {
  AUTH: 'abhishek_dashboard_auth',
  CERTIFICATES: 'abhishek_dashboard_certificates',
  COURSES: 'abhishek_dashboard_courses',
  NOTES: 'abhishek_dashboard_notes',
  SKILLS: 'abhishek_dashboard_skills',
  GOALS: 'abhishek_dashboard_goals',
  PROJECTS: 'abhishek_dashboard_projects',
  RESOURCES: 'abhishek_dashboard_resources',
  ACTIVITIES: 'abhishek_dashboard_activities',
  SETTINGS: 'abhishek_dashboard_settings',
};

// Initial Sample Data for Abhishek's Personal Learning OS
const INITIAL_DATA = {
  auth: {
    isAuthenticated: false,
    user: {
      name: 'Abhishek Upadhyay',
      role: 'Full-Stack Software Developer',
      email: 'abhishek@portfolio.dev',
    },
    rememberMe: true,
  },

  certificates: [
    {
      id: 'cert-1',
      title: 'Enterprise Core PHP & PDO Database Architecture',
      issuer: 'Udemy / Web Engineering Institute',
      certId: 'UC-PHP-982341',
      issueDate: '2025-11-15',
      expiryDate: 'Never',
      category: 'Web Development',
      skills: ['PHP', 'PDO', 'MySQL', 'Database Security'],
      certUrl: 'https://example.com/cert/uc-php-982341',
      verifyUrl: 'https://example.com/verify/uc-php-982341',
      description: 'Comprehensive certification covering secure PDO prepared statements, OOP PHP design patterns, session management, and MySQL database optimization.',
      status: 'Verified',
      fileType: 'PDF',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'cert-2',
      title: 'Python Automation & System Telemetry Specialist',
      issuer: 'Coursera / Tech Automation Academy',
      certId: 'PY-AUTO-77821',
      issueDate: '2026-01-20',
      expiryDate: 'Never',
      category: 'Python',
      skills: ['Python 3', 'Automation', 'REST APIs', 'IoT Telemetry'],
      certUrl: 'https://example.com/cert/py-auto-77821',
      verifyUrl: 'https://example.com/verify/py-auto-77821',
      description: 'Advanced Python certification focusing on background process daemons, CSV/JSON data parsing, microcontrollers, and hardware telemetry logging.',
      status: 'Verified',
      fileType: 'PNG',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'cert-3',
      title: 'AWS Certified Cloud Practitioner (Study)',
      issuer: 'Amazon Web Services',
      certId: 'AWS-CP-DRAFT',
      issueDate: '2026-03-01',
      expiryDate: '2029-03-01',
      category: 'Cloud',
      skills: ['AWS EC2', 'AWS S3', 'Cloud Security', 'IAM'],
      certUrl: 'https://aws.amazon.com/certification/',
      verifyUrl: 'https://aws.amazon.com/verification/',
      description: 'Fundamental cloud architecture certification covering EC2 deployment, S3 storage buckets, IAM policies, and cloud cost management.',
      status: 'In Progress',
      fileType: 'PDF',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
    },
  ],

  courses: [
    {
      id: 'course-1',
      title: 'Advanced PHP 8.x & Secure PDO Database Architecture',
      platform: 'Udemy',
      instructor: 'Brad Traversy',
      courseUrl: 'https://udemy.com',
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
      startDate: '2025-10-01',
      targetCompletionDate: '2025-11-10',
      status: 'Completed',
      progress: 100,
      totalLessons: 6,
      completedLessons: 6,
      duration: '18.5 Hours',
      skills: ['PHP 8', 'PDO', 'MySQL', 'Security'],
      description: 'Mastering OOP PHP, PDO prepared statements, custom MVC routing, and role-based access control.',
      notes: 'Implemented in the HRMS enterprise system project.',
      priority: 'High',
      lessons: [
        { id: 'l1', title: 'PHP 8 Basics & Syntax', completed: true },
        { id: 'l2', title: 'OOP Principles & Inheritance', completed: true },
        { id: 'l3', title: 'Connecting MySQL with PDO', completed: true },
        { id: 'l4', title: 'Prepared Statements & SQL Injection Prevention', completed: true },
        { id: 'l5', title: 'Session Authentication & Password Hashing', completed: true },
        { id: 'l6', title: 'Building Dynamic HRMS Backend Modules', completed: true },
      ],
    },
    {
      id: 'course-2',
      title: 'Python for Automation, Hardware Telemetry & Data Logging',
      platform: 'Coursera',
      instructor: 'Dr. Angela Yu',
      courseUrl: 'https://coursera.org',
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
      startDate: '2026-01-10',
      targetCompletionDate: '2026-03-30',
      status: 'Currently Learning',
      progress: 67,
      totalLessons: 6,
      completedLessons: 4,
      duration: '24 Hours',
      skills: ['Python 3', 'Automation', 'Multithreading', 'Hardware Telemetry'],
      description: 'Comprehensive course on writing Python automation scripts, parsing JSON logs, communicating with microcontrollers via Serial/USB, and background daemons.',
      notes: 'Currently building Python hardware telemetry monitoring scripts.',
      priority: 'High',
      lessons: [
        { id: 'pl1', title: 'Python Fundamentals & Data Structures', completed: true },
        { id: 'pl2', title: 'File I/O & CSV/JSON Data Parsing', completed: true },
        { id: 'pl3', title: 'Subprocess & Background Daemons', completed: true },
        { id: 'pl4', title: 'Serial Communication & Sensor Reading', completed: true },
        { id: 'pl5', title: 'Multithreading & Async Tasks', completed: false },
        { id: 'pl6', title: 'Building a Live Telemetry Dashboard', completed: false },
      ],
    },
    {
      id: 'course-3',
      title: 'AWS Certified Cloud Practitioner - Ultimate Hands-On',
      platform: 'A Cloud Guru',
      instructor: 'Stephane Maarek',
      courseUrl: 'https://acloudguru.com',
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
      startDate: '2026-02-15',
      targetCompletionDate: '2026-04-15',
      status: 'Currently Learning',
      progress: 67,
      totalLessons: 6,
      completedLessons: 4,
      duration: '14 Hours',
      skills: ['AWS EC2', 'S3', 'IAM', 'VPC'],
      description: 'Hands-on AWS cloud infrastructure training for deploying web apps, managing IAM security, and configuring CloudFront CDN.',
      notes: 'Preparing for AWS Certified Cloud Practitioner exam.',
      priority: 'Medium',
      lessons: [
        { id: 'al1', title: 'Introduction to Cloud Computing & AWS', completed: true },
        { id: 'al2', title: 'IAM Roles, Users & Security Policies', completed: true },
        { id: 'al3', title: 'EC2 Virtual Machines & Security Groups', completed: true },
        { id: 'al4', title: 'S3 Buckets & Static Hosting', completed: true },
        { id: 'al5', title: 'RDS & DynamoDB Database Setup', completed: false },
        { id: 'al6', title: 'VPC Networking & CloudWatch Monitoring', completed: false },
      ],
    },
  ],

  notes: [
    {
      id: 'note-1',
      title: 'PDO Prepared Statements vs SQL Injection',
      content: `# PDO Prepared Statements & Security Best Practices

When building database applications in **PHP**, never concatenate user input directly into SQL strings.

## Bad Pattern (Vulnerable to SQLi):
\`\`\`php
// NEVER DO THIS
$query = "SELECT * FROM users WHERE email = '" . $_POST['email'] . "'";
\`\`\`

## Recommended Pattern (PDO Prepared Statement):
\`\`\`php
$stmt = $pdo->prepare('SELECT id, name, password_hash, role FROM users WHERE email = :email');
$stmt->execute(['email' => $email]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user && password_verify($password, $user['password_hash'])) {
    // Session authenticated securely
}
\`\`\`

### Key Advantages:
1. SQL query structure is compiled first by MySQL.
2. User parameters are sent separately as safe data bounds.
3. Completely neutralizes SQL Injection vulnerabilities.`,
      category: 'PHP',
      tags: ['Security', 'PDO', 'MySQL', 'Best Practices'],
      relatedCourse: 'Advanced PHP 8.x & Secure PDO Database Architecture',
      relatedProject: 'HRMS – Human Resource Management System',
      pinned: true,
      favorite: true,
      createdDate: '2025-10-25',
      updatedDate: '2025-11-02',
    },
    {
      id: 'note-2',
      title: 'Python Subprocess & Background Task Daemons',
      content: `# Running Background Scripts in Python

Use \`subprocess.Popen\` to launch background worker processes without blocking the main event loop.

\`\`\`python
import subprocess
import time

def start_telemetry_daemon():
    print("[+] Launching background telemetry daemon...")
    process = subprocess.Popen(
        ['python3', 'telemetry_worker.py'],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True
    )
    return process

if __name__ == "__main__":
    daemon = start_telemetry_daemon()
    time.sleep(2)
    print(f"[+] Daemon active with PID: {daemon.pid}")
\`\`\`

### Notes:
- Always handle graceful process shutdown using \`daemon.terminate()\`.
- Capture stdout for background logging.`,
      category: 'Python',
      tags: ['Automation', 'Subprocess', 'Daemons', 'Python 3'],
      relatedCourse: 'Python for Automation, Hardware Telemetry & Data Logging',
      relatedProject: 'Python Automation & Hardware Telemetry',
      pinned: true,
      favorite: false,
      createdDate: '2026-01-18',
      updatedDate: '2026-02-05',
    },
    {
      id: 'note-3',
      title: 'AWS S3 Static Web Hosting & CloudFront SSL Integration',
      content: `# Deploying Vite/React Frontend on AWS S3 & CloudFront

### Steps:
1. Build production bundle: \`npm run build\`
2. Upload \`dist/\` contents to AWS S3 Bucket configured for static website hosting.
3. Configure AWS CloudFront distribution pointing to S3 origin.
4. Attach AWS Certificate Manager (ACM) free SSL TLS certificate for HTTPS security.

### S3 Bucket Policy snippet:
\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-portfolio-bucket/*"
    }
  ]
}
\`\`\``,
      category: 'AWS',
      tags: ['Cloud', 'AWS S3', 'CloudFront', 'Deployment'],
      relatedCourse: 'AWS Certified Cloud Practitioner',
      relatedProject: 'Developer Portfolio',
      pinned: false,
      favorite: true,
      createdDate: '2026-02-20',
      updatedDate: '2026-02-20',
    },
  ],

  skills: [
    {
      id: 'skill-1',
      name: 'Core PHP & PDO Security',
      category: 'Backend Development',
      level: 'Advanced',
      progress: 90,
      experience: '2+ Years',
      relatedCourses: 2,
      relatedCerts: 1,
      relatedProjects: 3,
    },
    {
      id: 'skill-2',
      name: 'MySQL & Relational Database Design',
      category: 'Database Management',
      level: 'Advanced',
      progress: 88,
      experience: '2+ Years',
      relatedCourses: 2,
      relatedCerts: 1,
      relatedProjects: 3,
    },
    {
      id: 'skill-3',
      name: 'Python Automation & Telemetry',
      category: 'Automation & Scripting',
      level: 'Advanced',
      progress: 82,
      experience: '1.5 Years',
      relatedCourses: 1,
      relatedCerts: 1,
      relatedProjects: 2,
    },
    {
      id: 'skill-4',
      name: 'Modern JavaScript (ES6+ / React / Vite)',
      category: 'Frontend Development',
      level: 'Advanced',
      progress: 85,
      experience: '2+ Years',
      relatedCourses: 3,
      relatedCerts: 0,
      relatedProjects: 4,
    },
    {
      id: 'skill-5',
      name: 'AWS Cloud Infrastructure (EC2 / S3 / IAM)',
      category: 'Cloud & DevOps',
      level: 'Intermediate',
      progress: 65,
      experience: '1 Year',
      relatedCourses: 1,
      relatedCerts: 1,
      relatedProjects: 1,
    },
    {
      id: 'skill-6',
      name: 'IoT Hardware & Serial Microcontrollers',
      category: 'Embedded Systems',
      level: 'Intermediate',
      progress: 75,
      experience: '1 Year',
      relatedCourses: 1,
      relatedCerts: 1,
      relatedProjects: 1,
    },
  ],

  goals: [
    {
      id: 'goal-1',
      title: 'Complete AWS Cloud Practitioner Certification Exam',
      description: 'Finish all hands-on labs and pass the official AWS Cloud Practitioner certification exam.',
      deadline: '2026-04-15',
      priority: 'High',
      progress: 65,
      status: 'In Progress',
      relatedCourse: 'AWS Certified Cloud Practitioner',
      relatedSkill: 'AWS Cloud Infrastructure',
    },
    {
      id: 'goal-2',
      title: 'Master Advanced Python Asyncio & Microservices',
      description: 'Build a high-concurrency event-driven microservice using Python Asyncio and WebSockets.',
      deadline: '2026-05-30',
      priority: 'Medium',
      progress: 40,
      status: 'In Progress',
      relatedCourse: 'Python for Automation',
      relatedSkill: 'Python Automation & Telemetry',
    },
    {
      id: 'goal-3',
      title: 'Publish Enterprise HRMS Open-Source Boilerplate',
      description: 'Refine clean folder structure, write comprehensive documentation, and publish on GitHub.',
      deadline: '2026-03-31',
      priority: 'High',
      progress: 90,
      status: 'In Progress',
      relatedCourse: 'Advanced PHP 8.x',
      relatedSkill: 'Core PHP & PDO Security',
    },
  ],

  projects: [
    {
      id: 'proj-1',
      title: 'HRMS – Human Resource Management System',
      description: 'Enterprise web-based employee management, attendance logging, leave approval workflows, and PDO role-based access control.',
      technologies: ['PHP', 'MySQL', 'PDO', 'HTML5', 'CSS3', 'Bootstrap'],
      githubUrl: 'https://github.com/amanupadhyay2030-rgb/hrms-system',
      liveUrl: 'https://amanupadhyay2030-rgb.github.io/my_portfolio/#projects',
      startDate: '2025-09-01',
      endDate: '2025-11-20',
      status: 'Completed',
      relatedCourse: 'Advanced PHP 8.x & Secure PDO',
      relatedSkills: ['Core PHP & PDO Security', 'MySQL Database Design'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'proj-2',
      title: 'PRAYAS Student Recruitment Portal',
      description: 'Full-stack student recruitment portal managing candidate registration, login authentication, photo capture & resume processing.',
      technologies: ['Core PHP', 'MySQL', 'PDO', 'HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/amanupadhyay2030-rgb/prayas-portal',
      liveUrl: 'https://amanupadhyay2030-rgb.github.io/my_portfolio/#projects',
      startDate: '2025-06-10',
      endDate: '2025-08-30',
      status: 'Completed',
      relatedCourse: 'Advanced PHP 8.x',
      relatedSkills: ['Core PHP & PDO Security', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'proj-3',
      title: 'Python Hardware Telemetry & Background Logger',
      description: 'Background automation daemon parsing sensor data, microcontrollers serial telemetry, and logging execution metrics.',
      technologies: ['Python 3', 'IoT', 'MySQL', 'Automation', 'Git'],
      githubUrl: 'https://github.com/amanupadhyay2030-rgb/python-telemetry',
      liveUrl: 'https://github.com/amanupadhyay2030-rgb/python-telemetry',
      startDate: '2026-01-15',
      endDate: '2026-02-28',
      status: 'In Development',
      relatedCourse: 'Python for Automation',
      relatedSkills: ['Python Automation', 'IoT Hardware'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    },
  ],

  resources: [
    {
      id: 'res-1',
      title: 'PHP PDO Official Documentation & Prepared Statements',
      url: 'https://www.php.net/manual/en/book.pdo.php',
      type: 'Documentation',
      description: 'Official PHP manual for PDO drivers, database connections, and secure prepared statements.',
      tags: ['PHP', 'PDO', 'Database', 'Official'],
      relatedCourse: 'Advanced PHP 8.x',
      favorite: true,
    },
    {
      id: 'res-2',
      title: 'AWS Certified Cloud Practitioner Exam Guide & Practice',
      url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
      type: 'Reference',
      description: 'Official AWS exam guide, whitepapers, and sample questions for Cloud Practitioner.',
      tags: ['AWS', 'Cloud', 'Certification'],
      relatedCourse: 'AWS Certified Cloud Practitioner',
      favorite: true,
    },
    {
      id: 'res-3',
      title: 'Python Subprocess & Multiprocessing Architecture Guide',
      url: 'https://docs.python.org/3/library/subprocess.html',
      type: 'Documentation',
      description: 'Comprehensive Python 3 documentation on managing background worker processes and IPC pipelines.',
      tags: ['Python', 'Automation', 'Daemons'],
      relatedCourse: 'Python for Automation',
      favorite: false,
    },
    {
      id: 'res-4',
      title: 'Modern Tailwind CSS v4 & Glassmorphism Design System',
      url: 'https://tailwindcss.com/docs',
      type: 'Documentation',
      description: 'Tailwind CSS v4 reference for CSS-first imports, custom variants, and backdrop blur utilities.',
      tags: ['Tailwind', 'CSS', 'Design', 'Frontend'],
      relatedCourse: 'React & Frontend Mastery',
      favorite: true,
    },
  ],

  activities: [
    { id: 'act-1', action: 'Completed Course', title: 'Advanced PHP 8.x & Secure PDO Database Architecture', timestamp: '2025-11-10 14:30', icon: 'CheckCircle' },
    { id: 'act-2', action: 'Earned Certificate', title: 'Enterprise Core PHP & PDO Database Architecture', timestamp: '2025-11-15 10:15', icon: 'Award' },
    { id: 'act-3', action: 'Started Course', title: 'Python for Automation, Hardware Telemetry & Data Logging', timestamp: '2026-01-10 09:00', icon: 'BookOpen' },
    { id: 'act-4', action: 'Created Note', title: 'PDO Prepared Statements vs SQL Injection', timestamp: '2026-01-18 16:45', icon: 'FileText' },
    { id: 'act-5', action: 'Earned Certificate', title: 'Python Automation & System Telemetry Specialist', timestamp: '2026-01-20 11:20', icon: 'Award' },
    { id: 'act-6', action: 'Updated Goal', title: 'HRMS Open-Source Boilerplate to 90%', timestamp: '2026-02-12 18:00', icon: 'Target' },
    { id: 'act-7', action: 'Started Course', title: 'AWS Certified Cloud Practitioner - Ultimate Hands-On', timestamp: '2026-02-15 13:00', icon: 'Cloud' },
  ],

  streak: {
    currentStreak: 14,
    longestStreak: 28,
    totalDays: 142,
    totalHours: 246,
    weeklyHours: 18,
  },

  settings: {
    passwordHash: 'abhishek123', // Default simple password for Abhishek's private login
    theme: 'dark',
    notificationsEnabled: true,
    autoBackup: true,
  },
};

// Initialize LocalStorage with default data if missing
export const initDashboardStorage = () => {
  try {
    Object.keys(INITIAL_DATA).forEach((key) => {
      const storageKey = STORAGE_KEYS[key.toUpperCase()];
      if (!localStorage.getItem(storageKey)) {
        localStorage.setItem(storageKey, JSON.stringify(INITIAL_DATA[key]));
      }
    });
  } catch (err) {
    console.error('Error initializing dashboard storage:', err);
  }
};

// Get Data for key
export const getDashboardData = (key) => {
  try {
    const storageKey = STORAGE_KEYS[key.toUpperCase()];
    const data = localStorage.getItem(storageKey);
    return data ? JSON.parse(data) : INITIAL_DATA[key];
  } catch (err) {
    console.error(`Error reading ${key} from storage:`, err);
    return INITIAL_DATA[key];
  }
};

// Save Data for key
export const saveDashboardData = (key, data) => {
  try {
    const storageKey = STORAGE_KEYS[key.toUpperCase()];
    localStorage.setItem(storageKey, JSON.stringify(data));
  } catch (err) {
    console.error(`Error saving ${key} to storage:`, err);
  }
};

// Add item to array entity
export const addDashboardItem = (key, item) => {
  const list = getDashboardData(key) || [];
  const newItem = { id: `${key.slice(0, 4)}-${Date.now()}`, ...item };
  const updatedList = [newItem, ...list];
  saveDashboardData(key, updatedList);

  // Add activity log automatically
  addActivityLog(`Added ${key.slice(0, -1)}`, item.title || item.name || 'New Item');

  return newItem;
};

// Update item in array entity
export const updateDashboardItem = (key, id, updatedFields) => {
  const list = getDashboardData(key) || [];
  const updatedList = list.map((item) => (item.id === id ? { ...item, ...updatedFields } : item));
  saveDashboardData(key, updatedList);

  // Add activity log
  const target = updatedList.find((i) => i.id === id);
  if (target) {
    addActivityLog(`Updated ${key.slice(0, -1)}`, target.title || target.name || 'Item');
  }

  return updatedList;
};

// Delete item from array entity
export const deleteDashboardItem = (key, id) => {
  const list = getDashboardData(key) || [];
  const target = list.find((i) => i.id === id);
  const updatedList = list.filter((item) => item.id !== id);
  saveDashboardData(key, updatedList);

  if (target) {
    addActivityLog(`Deleted ${key.slice(0, -1)}`, target.title || target.name || 'Item');
  }

  return updatedList;
};

// Helper: Add activity log entry
export const addActivityLog = (action, title) => {
  const activities = getDashboardData('activities') || [];
  const now = new Date();
  const timestamp = `${now.toISOString().split('T')[0]} ${now.toTimeString().slice(0, 5)}`;
  const newLog = {
    id: `act-${Date.now()}`,
    action,
    title,
    timestamp,
    icon: 'Activity',
  };
  saveDashboardData('activities', [newLog, ...activities.slice(0, 49)]);
};

// Export all dashboard data as JSON string
export const exportDashboardJSON = () => {
  const exportObject = {};
  Object.keys(STORAGE_KEYS).forEach((key) => {
    exportObject[key.toLowerCase()] = getDashboardData(key.toLowerCase());
  });
  return JSON.stringify(exportObject, null, 2);
};

// Import dashboard data from JSON object
export const importDashboardJSON = (jsonObject) => {
  try {
    Object.keys(jsonObject).forEach((key) => {
      const storageKey = STORAGE_KEYS[key.toUpperCase()];
      if (storageKey) {
        localStorage.setItem(storageKey, JSON.stringify(jsonObject[key]));
      }
    });
    return true;
  } catch (err) {
    console.error('Failed to import dashboard JSON:', err);
    return false;
  }
};

// Reset to default sample data
export const resetDashboardToDefault = () => {
  Object.keys(INITIAL_DATA).forEach((key) => {
    const storageKey = STORAGE_KEYS[key.toUpperCase()];
    localStorage.setItem(storageKey, JSON.stringify(INITIAL_DATA[key]));
  });
};
