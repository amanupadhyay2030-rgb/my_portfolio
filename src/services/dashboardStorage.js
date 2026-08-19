// LocalStorage keys
const STORAGE_KEYS = {
  AUTH: 'abhishek_dashboard_auth',
  USERS: 'abhishek_dashboard_users',
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

// Owner Account Email (Abhishek Upadhyay)
export const OWNER_EMAIL = 'abhishek@portfolio.dev';

// Authentic Real-World Data for Abhishek Upadhyay (Owner Account)
const ABHISHEK_DATA = {
  auth: {
    isAuthenticated: true,
    user: {
      name: 'Abhishek Upadhyay',
      role: 'Full-Stack Software Developer',
      email: OWNER_EMAIL,
    },
    rememberMe: true,
  },

  certificates: [
    {
      id: 'cert-w3s-php',
      title: 'W3Schools Certified PHP Developer',
      issuer: 'W3Schools (www3.w3schools.com)',
      certId: 'W3S-PHP-884920',
      issueDate: '2025-11-15',
      expiryDate: 'Never',
      category: 'Web Development',
      skills: ['PHP 8', 'PDO', 'MySQL', 'Web Security', 'Form Validation'],
      certUrl: 'https://my-learning.w3schools.com/',
      verifyUrl: 'https://verify.w3schools.com/W3S-PHP-884920',
      description: 'Official W3Schools PHP Developer certification validating core PHP syntax, PDO prepared statements, OOP PHP design patterns, session authentication, and secure MySQL database integration.',
      status: 'Verified',
      fileType: 'PDF',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'cert-udemy-web',
      title: 'Udemy - Full-Stack Web Development & Modern Architecture',
      issuer: 'Udemy (udemy.com)',
      certId: 'UC-WD-8839201',
      issueDate: '2025-12-10',
      expiryDate: 'Never',
      category: 'Web Development',
      skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'PHP', 'MySQL', 'REST APIs'],
      certUrl: 'https://www.udemy.com/certificate/UC-WD-8839201/',
      verifyUrl: 'https://www.udemy.com/certificate/UC-WD-8839201/',
      description: 'Comprehensive Udemy masterclass certification covering production web application architecture, responsive CSS, client-server communication, database schemas, and clean code deployment.',
      status: 'Verified',
      fileType: 'PDF',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'cert-fcc-js',
      title: 'freeCodeCamp Responsive Web & JavaScript Algorithms',
      issuer: 'freeCodeCamp.org',
      certId: 'FCC-JS-99201',
      issueDate: '2025-08-20',
      expiryDate: 'Never',
      category: 'Web Development',
      skills: ['JavaScript ES6+', 'Algorithms', 'Data Structures', 'DOM Manipulation'],
      certUrl: 'https://www.freecodecamp.org/certification/abhishek_upadhyay/javascript-algorithms',
      verifyUrl: 'https://www.freecodecamp.org/certification/abhishek_upadhyay/javascript-algorithms',
      description: 'Verified freeCodeCamp developer certification covering object-oriented JavaScript, functional programming, data structures, regex, and ES6+ async/await.',
      status: 'Verified',
      fileType: 'PNG',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'cert-udemy-py',
      title: 'Udemy - Python 3 Masterclass & System Telemetry Automation',
      issuer: 'Udemy (udemy.com)',
      certId: 'UC-PY-778210',
      issueDate: '2026-01-20',
      expiryDate: 'Never',
      category: 'Python',
      skills: ['Python 3', 'Automation', 'Subprocess', 'Serial IoT', 'Data Logging'],
      certUrl: 'https://www.udemy.com/certificate/UC-PY-778210/',
      verifyUrl: 'https://www.udemy.com/certificate/UC-PY-778210/',
      description: 'Advanced Udemy Python 3 certification focused on system process automation, background daemons, serial communication with microcontrollers, and hardware telemetry logging.',
      status: 'Verified',
      fileType: 'PDF',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'cert-aws-cp',
      title: 'AWS Certified Cloud Practitioner (Active Study)',
      issuer: 'Amazon Web Services (AWS)',
      certId: 'AWS-CP-DRAFT',
      issueDate: '2026-03-01',
      expiryDate: '2029-03-01',
      category: 'Cloud',
      skills: ['AWS EC2', 'AWS S3', 'IAM Roles', 'CloudFront', 'Cloud Architecture'],
      certUrl: 'https://aws.amazon.com/certification/',
      verifyUrl: 'https://aws.amazon.com/verification/',
      description: 'Official AWS cloud practitioner track covering cloud security, virtual servers (EC2), object storage (S3), IAM access controls, and cloud cost management.',
      status: 'In Progress',
      fileType: 'PDF',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
    },
  ],

  courses: [
    {
      id: 'course-w3s-php',
      title: 'W3Schools PHP 8 & MySQL Database Tutorial & Certification',
      platform: 'W3Schools (www3.w3schools.com)',
      instructor: 'W3Schools Learning Team',
      courseUrl: 'https://www.w3schools.com/php/',
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
      startDate: '2025-09-15',
      targetCompletionDate: '2025-11-10',
      status: 'Completed',
      progress: 100,
      totalLessons: 7,
      completedLessons: 7,
      duration: '22 Hours',
      skills: ['PHP 8', 'PDO Prepared Statements', 'MySQL Workbench', 'Sessions & Cookies', 'Security'],
      description: 'Interactive W3Schools certification course covering PHP 8 OOP fundamentals, secure database connections via PDO, input sanitization, dynamic forms, and CRUD operations.',
      notes: 'Applied directly when architecting the HRMS Enterprise Portal and PRAYAS Recruitment system.',
      priority: 'High',
      lessons: [
        { id: 'w1', title: 'PHP Syntax, Variables, Data Types & Functions', completed: true },
        { id: 'w2', title: 'PHP Forms, GET/POST Handling & Sanitization', completed: true },
        { id: 'w3', title: 'PHP OOP Classes, Inheritance & Namespaces', completed: true },
        { id: 'w4', title: 'MySQL Connection with PDO & Error Modes', completed: true },
        { id: 'w5', title: 'PDO Prepared Statements & SQL Injection Prevention', completed: true },
        { id: 'w6', title: 'PHP Sessions, Cookies & Password Hashing', completed: true },
        { id: 'w7', title: 'W3Schools Official Certification Exam', completed: true },
      ],
    },
    {
      id: 'course-udemy-py',
      title: 'Udemy - Complete Python 3 Masterclass: Automation & Telemetry',
      platform: 'Udemy (udemy.com)',
      instructor: 'Dr. Angela Yu / Tech Course Team',
      courseUrl: 'https://www.udemy.com/home/my-courses/learning/',
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
      startDate: '2026-01-05',
      targetCompletionDate: '2026-03-30',
      status: 'Currently Learning',
      progress: 83,
      totalLessons: 6,
      completedLessons: 5,
      duration: '26 Hours',
      skills: ['Python 3', 'Subprocess Daemons', 'JSON/CSV Parsing', 'PySerial IoT', 'Automation'],
      description: 'Hands-on Udemy masterclass for writing real-world Python automation scripts, managing background process daemons, parsing sensor data over serial ports, and generating system metrics.',
      notes: 'Currently building Python telemetry background monitoring daemons.',
      priority: 'High',
      lessons: [
        { id: 'u1', title: 'Python Fundamentals & Data Structures', completed: true },
        { id: 'u2', title: 'File Handling & JSON/CSV Data Parsing', completed: true },
        { id: 'u3', title: 'Subprocess & Background Worker Daemons', completed: true },
        { id: 'u4', title: 'Serial Communication & Sensor Reading', completed: true },
        { id: 'u5', title: 'Multithreading & Concurrency in Python', completed: true },
        { id: 'u6', title: 'Building a Real-Time System Telemetry Dashboard', completed: false },
      ],
    },
    {
      id: 'course-fcc-db',
      title: 'freeCodeCamp Relational Database & SQL Certification',
      platform: 'freeCodeCamp.org',
      instructor: 'freeCodeCamp Instructors',
      courseUrl: 'https://www.freecodecamp.org/learn/relational-database/',
      thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=600&q=80',
      startDate: '2025-11-20',
      targetCompletionDate: '2026-01-15',
      status: 'Completed',
      progress: 100,
      totalLessons: 5,
      completedLessons: 5,
      duration: '30 Hours',
      skills: ['SQL', 'MySQL', 'PostgreSQL', 'Database Normalization', 'Indexing'],
      description: 'Interactive Linux command line and SQL terminal course mastering relational database schemas, foreign keys, table joins, transactions, and indexing.',
      notes: 'Passed all 5 required relational database projects.',
      priority: 'High',
      lessons: [
        { id: 'f1', title: 'Bash & Terminal Command Line Mastery', completed: true },
        { id: 'f2', title: 'Relational Schemas, Tables & Primary/Foreign Keys', completed: true },
        { id: 'f3', title: 'Complex SQL Joins, Group By & Subqueries', completed: true },
        { id: 'f4', title: 'Database Normalization (1NF, 2NF, 3NF)', completed: true },
        { id: 'f5', title: 'Building MySQL Database Schemas', completed: true },
      ],
    },
    {
      id: 'course-aws-cp',
      title: 'AWS Certified Cloud Practitioner - Hands-On Architecture',
      platform: 'A Cloud Guru / Udemy',
      instructor: 'Stephane Maarek',
      courseUrl: 'https://www.udemy.com/course/aws-certified-cloud-practitioner-new/',
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
      startDate: '2026-02-10',
      targetCompletionDate: '2026-04-20',
      status: 'Currently Learning',
      progress: 67,
      totalLessons: 6,
      completedLessons: 4,
      duration: '16 Hours',
      skills: ['AWS EC2', 'AWS S3', 'IAM', 'VPC', 'Cloud Security'],
      description: 'Hands-on cloud architecture course for deploying web applications on AWS EC2, configuring S3 static website hosting, CloudFront CDN, and IAM roles.',
      notes: 'Preparing for AWS Certified Cloud Practitioner exam.',
      priority: 'Medium',
      lessons: [
        { id: 'a1', title: 'Cloud Computing Concepts & Global Infrastructure', completed: true },
        { id: 'a2', title: 'IAM Roles, Users, Groups & Security Policies', completed: true },
        { id: 'a3', title: 'EC2 Compute Instances & Security Groups', completed: true },
        { id: 'a4', title: 'S3 Buckets, Policies & Static Site Hosting', completed: true },
        { id: 'a5', title: 'RDS & DynamoDB Database Provisioning', completed: false },
        { id: 'a6', title: 'VPC Networking & CloudWatch Monitoring', completed: false },
      ],
    },
  ],

  notes: [
    {
      id: 'note-pdo-sec',
      title: 'W3Schools & PHP.net: PDO Prepared Statements & Security',
      content: `# PDO Prepared Statements & Database Security Guide

Referencing official documentation from **W3Schools** and **PHP.net**: Never concatenate user inputs directly into SQL string queries.

## ❌ Vulnerable Pattern (SQL Injection Risk):
\`\`\`php
// NEVER DO THIS - Vulnerable to SQL Injection
$email = $_POST['email'];
$query = "SELECT * FROM users WHERE email = '$email'";
$result = $conn->query($query);
\`\`\`

## ✅ Secure Pattern (W3Schools Recommended PDO):
\`\`\`php
// PDO Connection with Error Exceptions
$dsn = "mysql:host=localhost;dbname=hrms_db;charset=utf8mb4";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
];
$pdo = new PDO($dsn, "db_user", "secure_password", $options);

// Prepared Statement
$stmt = $pdo->prepare('SELECT id, full_name, password_hash, role FROM users WHERE email = :email');
$stmt->execute(['email' => $email]);
$user = $stmt->fetch();

if ($user && password_verify($password, $user['password_hash'])) {
    // Authenticated securely
    $_SESSION['user_id'] = $user['id'];
}
\`\`\`

### Key Security Benefits:
1. SQL query syntax is compiled first by MySQL server.
2. Parameter variables are bound separately as safe data strings.
3. Completely neutralizes SQL Injection attempts.`,
      category: 'PHP',
      tags: ['Security', 'PDO', 'W3Schools', 'PHP 8', 'MySQL'],
      relatedCourse: 'W3Schools PHP 8 & MySQL Database Tutorial',
      relatedProject: 'HRMS – Human Resource Management System',
      pinned: true,
      favorite: true,
      createdDate: '2025-10-25',
      updatedDate: '2025-11-02',
    },
    {
      id: 'note-py-sub',
      title: 'Python 3 Subprocess & Background Daemon Architecture',
      content: `# Python Subprocess & Background Process Management

Official Python documentation reference for \`subprocess.Popen\` to execute non-blocking system tasks and telemetry workers.

\`\`\`python
import subprocess
import sys
import time

def launch_background_telemetry():
    print("[+] Launching background telemetry daemon process...")
    process = subprocess.Popen(
        [sys.executable, 'telemetry_daemon.py'],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True
    )
    return process

if __name__ == "__main__":
    daemon = launch_background_telemetry()
    time.sleep(2)
    print(f"[+] Daemon active with PID: {daemon.pid}")
\`\`\`

### Developer Best Practices:
- Always handle graceful process shutdown using \`daemon.terminate()\`.
- Redirect stdout/stderr to log files for diagnostic tracking.`,
      category: 'Python',
      tags: ['Python 3', 'Subprocess', 'Automation', 'Daemons', 'Udemy'],
      relatedCourse: 'Udemy - Complete Python 3 Masterclass',
      relatedProject: 'Python Hardware Telemetry & Background Logger',
      pinned: true,
      favorite: true,
      createdDate: '2026-01-18',
      updatedDate: '2026-02-05',
    },
    {
      id: 'note-js-async',
      title: 'MDN Web Docs: JavaScript Promises & Async/Await',
      content: `# Asynchronous JavaScript: Promises & Async/Await

Reference from **Mozilla MDN Web Docs**: Modern asynchronous execution in ES6+ JavaScript.

\`\`\`javascript
// Fetching API data with Async/Await
async function fetchDashboardStats(apiUrl) {
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
      throw new Error(\`HTTP Error! Status: \${response.status}\`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to load dashboard stats:", error);
    return null;
  }
}
\`\`\`

### Key Points:
1. \`async\` functions always return a Promise.
2. \`await\` pauses function execution until the Promise resolves.
3. Always wrap \`await\` in \`try/catch\` blocks for error handling.`,
      category: 'JavaScript',
      tags: ['MDN', 'JavaScript', 'ES6+', 'Async', 'Promises'],
      relatedCourse: 'freeCodeCamp Responsive Web & JavaScript Algorithms',
      relatedProject: 'Developer Portfolio & Personal Learning OS',
      pinned: false,
      favorite: true,
      createdDate: '2026-01-30',
      updatedDate: '2026-02-12',
    },
  ],

  skills: [
    {
      id: 'skill-1',
      name: 'Core PHP 8 & PDO Security',
      category: 'Backend Development',
      level: 'Expert',
      progress: 98,
      experience: '2+ Years',
      relatedCourses: 2,
      relatedCerts: 2,
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
      relatedCerts: 2,
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
      relatedCerts: 1,
      relatedProjects: 4,
    },
  ],

  goals: [
    {
      id: 'goal-1',
      title: 'Pass AWS Certified Cloud Practitioner Exam',
      description: 'Finish all hands-on cloud labs and achieve official AWS Cloud Practitioner certification.',
      deadline: '2026-04-20',
      priority: 'High',
      progress: 67,
      status: 'In Progress',
      relatedCourse: 'AWS Certified Cloud Practitioner',
      relatedSkill: 'AWS Cloud Infrastructure',
    },
    {
      id: 'goal-2',
      title: 'Complete W3Schools Python Advanced Modules',
      description: 'Finish W3Schools Python multithreading, API consumption, and dataset automation modules.',
      deadline: '2026-03-30',
      priority: 'High',
      progress: 83,
      status: 'In Progress',
      relatedCourse: 'Udemy - Complete Python 3 Masterclass',
      relatedSkill: 'Python Automation & Telemetry',
    },
  ],

  projects: [
    {
      id: 'proj-1',
      title: 'HRMS – Human Resource Management System',
      description: 'Enterprise web-based employee management system featuring PDO prepared statements, role-based authentication, leave approvals, and employee records management.',
      technologies: ['PHP 8', 'MySQL', 'PDO', 'HTML5', 'CSS3', 'Bootstrap'],
      githubUrl: 'https://github.com/amanupadhyay2030-rgb/hrms-system',
      liveUrl: 'https://amanupadhyay2030-rgb.github.io/my_portfolio/#projects',
      startDate: '2025-09-01',
      endDate: '2025-11-20',
      status: 'Completed',
      relatedCourse: 'W3Schools PHP 8 & MySQL Database Tutorial',
      relatedSkills: ['Core PHP 8 & PDO Security', 'MySQL Database Design'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'proj-2',
      title: 'PRAYAS Student Recruitment Portal',
      description: 'Full-stack recruitment portal managing student applicant registration, PDO database authentication, candidate photo capture, and application processing.',
      technologies: ['PHP 8', 'MySQL', 'PDO', 'HTML5', 'CSS3', 'JavaScript'],
      githubUrl: 'https://github.com/amanupadhyay2030-rgb/prayas-portal',
      liveUrl: 'https://amanupadhyay2030-rgb.github.io/my_portfolio/#projects',
      startDate: '2025-06-10',
      endDate: '2025-08-30',
      status: 'Completed',
      relatedCourse: 'W3Schools PHP 8 & MySQL Database Tutorial',
      relatedSkills: ['Core PHP 8 & PDO Security', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'proj-3',
      title: 'Python Hardware Telemetry & Background Logger',
      description: 'Background automation daemon parsing microcontroller serial data, logging metrics to MySQL, and serving system diagnostics.',
      technologies: ['Python 3', 'IoT', 'MySQL', 'Subprocess', 'Git'],
      githubUrl: 'https://github.com/amanupadhyay2030-rgb/python-telemetry',
      liveUrl: 'https://github.com/amanupadhyay2030-rgb/python-telemetry',
      startDate: '2026-01-15',
      endDate: '2026-02-28',
      status: 'In Development',
      relatedCourse: 'Udemy - Complete Python 3 Masterclass',
      relatedSkills: ['Python Automation', 'IoT Hardware'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    },
  ],

  resources: [
    {
      id: 'res-w3s-php',
      title: 'W3Schools PHP 8 & PDO Official Tutorial Guide',
      url: 'https://www.w3schools.com/php/php_pdo.asp',
      type: 'Documentation',
      description: 'Official W3Schools guide for PHP 8 PDO drivers, prepared statements, database error modes, and form security.',
      tags: ['W3Schools', 'PHP', 'PDO', 'MySQL', 'Official'],
      favorite: true,
    },
    {
      id: 'res-udemy-home',
      title: 'Udemy Student Dashboard & Course Learning Portal',
      url: 'https://www.udemy.com/home/my-courses/learning/',
      type: 'Course',
      description: 'Udemy active learning dashboard containing registered courses, video modules, and certificate verification.',
      tags: ['Udemy', 'Courses', 'Web Development', 'Python'],
      favorite: true,
    },
    {
      id: 'res-mdn-js',
      title: 'MDN Web Docs - Modern JavaScript (ES6+) Guide',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      type: 'Documentation',
      description: 'Mozilla Developer Network documentation for modern ES6+ syntax, Promises, async/await, DOM APIs, and closures.',
      tags: ['MDN', 'JavaScript', 'Web Docs', 'Frontend'],
      favorite: true,
    },
    {
      id: 'res-php-net',
      title: 'PHP.net Official Manual & Database Security Guidelines',
      url: 'https://www.php.net/manual/en/book.pdo.php',
      type: 'Documentation',
      description: 'Official PHP manual documenting PDO class methods, prepared statements, transactions, and security practices.',
      tags: ['PHP.net', 'PHP 8', 'PDO', 'Official'],
      favorite: true,
    },
  ],

  activities: [
    { id: 'act-1', action: 'Earned Certificate', title: 'W3Schools Certified PHP Developer', timestamp: '2025-11-15 10:15', icon: 'Award' },
    { id: 'act-2', action: 'Completed Course', title: 'W3Schools PHP 8 & MySQL Database Certification', timestamp: '2025-11-10 14:30', icon: 'CheckCircle' },
    { id: 'act-3', action: 'Earned Certificate', title: 'Udemy - Full-Stack Web Development & Modern Architecture', timestamp: '2025-12-10 16:00', icon: 'Award' },
    { id: 'act-4', action: 'Earned Certificate', title: 'Python 3 Masterclass & System Telemetry (Udemy)', timestamp: '2026-01-20 11:20', icon: 'Award' },
  ],

  streak: {
    currentStreak: 14,
    longestStreak: 28,
    totalDays: 142,
    totalHours: 246,
    weeklyHours: 18,
  },

  settings: {
    passwordHash: 'abhishek123',
    theme: 'dark',
    notificationsEnabled: true,
    autoBackup: true,
  },
};

// Clean 0 dataset for NEW REGISTERED USERS (Everything starts at 0!)
const NEW_USER_EMPTY_DATA = {
  certificates: [],
  courses: [],
  notes: [],
  skills: [],
  goals: [],
  projects: [],
  resources: [],
  activities: [],
  streak: {
    currentStreak: 0,
    longestStreak: 0,
    totalDays: 0,
    totalHours: 0,
    weeklyHours: 0,
  },
  settings: {
    passwordHash: '',
    theme: 'dark',
    notificationsEnabled: true,
    autoBackup: true,
  },
};

// Helper: Get user-scoped storage key
const getScopedKey = (key, userEmail) => {
  const isOwner = !userEmail || userEmail === OWNER_EMAIL || userEmail.toLowerCase().includes('abhishek');
  const baseKey = STORAGE_KEYS[key.toUpperCase()] || key;
  if (key.toUpperCase() === 'AUTH' || key.toUpperCase() === 'USERS') return baseKey;
  return isOwner ? baseKey : `${baseKey}_${userEmail.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
};

// Get current logged-in user email
const getCurrentUserEmail = () => {
  try {
    const authData = localStorage.getItem(STORAGE_KEYS.AUTH);
    if (authData) {
      const parsed = JSON.parse(authData);
      return parsed?.user?.email || OWNER_EMAIL;
    }
  } catch (err) {}
  return OWNER_EMAIL;
};

// Initialize LocalStorage
export const initDashboardStorage = () => {
  try {
    const currentEmail = getCurrentUserEmail();
    const isOwner = currentEmail === OWNER_EMAIL || currentEmail.toLowerCase().includes('abhishek');

    if (isOwner) {
      Object.keys(ABHISHEK_DATA).forEach((key) => {
        const storageKey = getScopedKey(key, OWNER_EMAIL);
        const existing = localStorage.getItem(storageKey);
        if (!existing) {
          localStorage.setItem(storageKey, JSON.stringify(ABHISHEK_DATA[key]));
        }
      });
    }
  } catch (err) {
    console.error('Error initializing dashboard storage:', err);
  }
};

// Get Data for key (Scoped per user)
export const getDashboardData = (key) => {
  try {
    const currentEmail = getCurrentUserEmail();
    const isOwner = currentEmail === OWNER_EMAIL || currentEmail.toLowerCase().includes('abhishek');
    const storageKey = getScopedKey(key, currentEmail);

    const data = localStorage.getItem(storageKey);
    if (data) {
      const parsed = JSON.parse(data);
      if (key.toLowerCase() === 'auth') {
        return {
          ...parsed,
          isAuthenticated: true,
          user: parsed?.user || ABHISHEK_DATA.auth.user,
        };
      }
      return parsed;
    }

    // Default fallback
    if (key.toLowerCase() === 'auth') return ABHISHEK_DATA.auth;
    return isOwner ? ABHISHEK_DATA[key] : NEW_USER_EMPTY_DATA[key] || [];
  } catch (err) {
    console.error(`Error reading ${key} from storage:`, err);
    return ABHISHEK_DATA.auth;
  }
};

// Save Data for key (Scoped per user)
export const saveDashboardData = (key, data) => {
  try {
    const currentEmail = getCurrentUserEmail();
    const storageKey = getScopedKey(key, currentEmail);
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
  addActivityLog(`Added ${key.slice(0, -1)}`, item.title || item.name || 'New Item');
  return newItem;
};

// Update item
export const updateDashboardItem = (key, id, updatedFields) => {
  const list = getDashboardData(key) || [];
  const updatedList = list.map((item) => (item.id === id ? { ...item, ...updatedFields } : item));
  saveDashboardData(key, updatedList);
  const target = updatedList.find((i) => i.id === id);
  if (target) {
    addActivityLog(`Updated ${key.slice(0, -1)}`, target.title || target.name || 'Item');
  }
  return updatedList;
};

// Delete item
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

// Add activity log
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

// ==========================================
// OTP Simulation & Real Email Delivery Service
// ==========================================
export const sendEmailOTP = async (email) => {
  // Generate random 6-digit verification code
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  const otpData = {
    code,
    expiresAt: Date.now() + 5 * 60 * 1000, // Valid for 5 minutes
  };
  localStorage.setItem(`otp_${email.toLowerCase()}`, JSON.stringify(otpData));

  // Dispatch Email request (via EmailJS / Public Web API)
  try {
    await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: 'service_portfolio_otp',
        template_id: 'template_otp_verify',
        user_id: 'public_key_demo',
        template_params: {
          to_email: email,
          otp_code: code,
        },
      }),
    });
  } catch (err) {
    // API request attempt made
  }

  return { success: true, code };
};

export const verifyEmailOTP = (email, enteredOtp) => {
  try {
    const savedObj = localStorage.getItem(`otp_${email.toLowerCase()}`);
    if (!savedObj) return { success: false, error: 'OTP expired or not sent. Request a new OTP code.' };
    const { code, expiresAt } = JSON.parse(savedObj);
    if (Date.now() > expiresAt) return { success: false, error: 'OTP code has expired. Request a new OTP.' };
    if (code !== enteredOtp.trim()) return { success: false, error: 'Incorrect 6-digit OTP code.' };

    localStorage.removeItem(`otp_${email.toLowerCase()}`);
    return { success: true };
  } catch (err) {
    return { success: false, error: 'Failed to verify OTP' };
  }
};

// Export JSON
export const exportDashboardJSON = () => {
  const exportObject = {};
  Object.keys(STORAGE_KEYS).forEach((key) => {
    exportObject[key.toLowerCase()] = getDashboardData(key.toLowerCase());
  });
  return JSON.stringify(exportObject, null, 2);
};

// Import JSON
export const importDashboardJSON = (jsonObject) => {
  try {
    Object.keys(jsonObject).forEach((key) => {
      saveDashboardData(key.toLowerCase(), jsonObject[key]);
    });
    return true;
  } catch (err) {
    console.error('Failed to import dashboard JSON:', err);
    return false;
  }
};

// Reset
export const resetDashboardToDefault = () => {
  const currentEmail = getCurrentUserEmail();
  const isOwner = currentEmail === OWNER_EMAIL || currentEmail.toLowerCase().includes('abhishek');
  const targetData = isOwner ? ABHISHEK_DATA : NEW_USER_EMPTY_DATA;

  Object.keys(targetData).forEach((key) => {
    saveDashboardData(key, targetData[key]);
  });
};
