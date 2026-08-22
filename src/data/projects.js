/**
 * PROJECTS DATA
 * Exact specification: 5 Real-World Projects
 */

export const PROJECTS_DATA = [
  {
    id: "hrms",
    featured: true,
    isFlagship: true,
    title: "HRMS",
    status: "private",
    category: "Web",
    subCategory: "Practical HR Management System",
    shortDescription: "A practical HR management system for handling employees, leave, attendance, and HR operations.",
    technologies: ["PHP", "MySQL", "JavaScript"],
    highlights: [
      "Employee records & profile administration",
      "Attendance management & log tracking",
      "Leave request filing & approval workflows",
      "HR admin control panel"
    ],
    github: "",
    liveDemo: "",
    screenshots: [],
    caseStudy: {
      overview: "A practical HR management system for handling employees, leave, attendance, and HR operations.",
      problem: "Organizations need a centralized system to manage workforce data, attendance records, and leave requests efficiently.",
      solution: "Engineered a streamlined HR software platform using PHP and MySQL for employee record management, leave workflows, and administrative tracking.",
      technologies: ["PHP", "MySQL", "JavaScript"],
      features: [
        { name: "Employee Management", desc: "Handling complete workforce records and profiles." },
        { name: "Attendance Tracking", desc: "Daily attendance logging and record administration." },
        { name: "Leave Management", desc: "Leave applications and multi-tier approval workflows." },
        { name: "HR Operations", desc: "Centralized administrative controls for HR functions." }
      ],
      development: "Developed using PHP backend controllers with PDO queries against MySQL relational tables.",
      challenges: ["Designing intuitive approval workflows for leave and attendance handling."]
    }
  },
  {
    id: "prayas-recruitment-portal",
    featured: true,
    isFlagship: true,
    title: "PRAYAS Student Recruitment Portal",
    status: "private",
    category: "Web",
    subCategory: "Complete Candidate Recruitment Platform",
    shortDescription: "A recruitment platform built for the complete candidate journey — registration, profiles, aptitude tests, video introduction, resumes, and admin management.",
    technologies: ["PHP", "MySQL", "JavaScript"],
    highlights: [
      "Candidate registration & profile creation",
      "Timed aptitude examination module",
      "Webcam photo capture & video introduction upload",
      "Interactive resume builder & admin candidate evaluation"
    ],
    github: "",
    liveDemo: "",
    screenshots: [],
    caseStudy: {
      overview: "A recruitment platform built for the complete candidate journey — registration, profiles, aptitude tests, video introduction, resumes, and admin management.",
      problem: "Managing applicant registration, video introductions, timed exams, and resume evaluations across separate manual platforms.",
      solution: "Engineered a unified PHP & MySQL recruitment portal digitizing candidate profiles, video intros, proctored aptitude exams, and admin rosters.",
      technologies: ["PHP", "MySQL", "JavaScript"],
      features: [
        { name: "Registration & Profiles", desc: "Candidate account creation and personal profile management." },
        { name: "Aptitude Tests", desc: "Timed online examinations with instant scoring." },
        { name: "Video Introduction", desc: "Candidate webcam photo and video introduction uploads." },
        { name: "Admin Management", desc: "Comprehensive candidate review roster and evaluation dashboard." }
      ],
      development: "Built with Core PHP, secure PDO queries, and custom JavaScript media integration.",
      challenges: ["Persisting exam state accurately during timed candidate sessions."]
    }
  },
  {
    id: "prayas-automation-academy",
    featured: true,
    isFlagship: true,
    title: "PRAYAS – The Automation Academy",
    status: "private",
    category: "LMS",
    subCategory: "Industrial Automation Learning Platform",
    shortDescription: "A learning platform focused on industrial automation and workforce training. Courses, learning content, certificates, and student management in one place.",
    technologies: ["WordPress", "Tutor LMS", "Elementor"],
    highlights: [
      "Industrial automation course catalog",
      "Structured video & text lesson player",
      "Student progress tracking & certificates",
      "Quiz evaluation & student management"
    ],
    github: "",
    liveDemo: "",
    screenshots: [],
    caseStudy: {
      overview: "A learning platform focused on industrial automation and workforce training. Courses, learning content, certificates, and student management in one place.",
      problem: "Providing students and automation engineers structured course delivery, certificate issuing, and progress tracking.",
      solution: "Customized a WordPress and Tutor LMS platform with Elementor layout designs, course taxonomies, and certificate delivery.",
      technologies: ["WordPress", "Tutor LMS", "Elementor"],
      features: [
        { name: "Courses & Content", desc: "Structured training modules for industrial automation topics." },
        { name: "Student Management", desc: "Enrollment tracking, student dashboards, and progress indicators." },
        { name: "Certificates", desc: "Automated certificate issuance upon course completion." }
      ],
      development: "Built using WordPress core, Tutor LMS engine, and custom Elementor components.",
      challenges: ["Structuring complex multi-module industrial automation curricula clearly."]
    }
  },
  {
    id: "iot-automation-systems",
    featured: true,
    isFlagship: false,
    title: "IoT & Automation Systems",
    status: "private",
    category: "IoT",
    subCategory: "Hardware Telemetry & Software Workflows",
    shortDescription: "Software connected with real-world hardware and automation workflows. Built around data, control, monitoring, and practical use cases.",
    technologies: ["Python", "IoT", "APIs", "Automation"],
    highlights: [
      "Hardware telemetry & sensor data monitoring",
      "Background Python automation scripts",
      "REST API & messaging integration",
      "Practical real-world control workflows"
    ],
    github: "",
    liveDemo: "",
    screenshots: [],
    caseStudy: {
      overview: "Software connected with real-world hardware and automation workflows. Built around data, control, monitoring, and practical use cases.",
      problem: "Connecting physical hardware sensors and automation workflows to software monitoring platforms.",
      solution: "Developed Python automation routines and IoT API daemons for data capture, telemetry monitoring, and task execution.",
      technologies: ["Python", "IoT", "APIs", "Automation"],
      features: [
        { name: "Hardware Connection", desc: "Linking physical hardware and sensors to software." },
        { name: "Data Monitoring", desc: "Capturing, processing, and displaying telemetry data." },
        { name: "Automation Workflows", desc: "Automating repetitive data handling tasks and triggers." }
      ],
      development: "Built with Python scripts, API integration layers, and IoT hardware protocols.",
      challenges: ["Ensuring reliable data communication between hardware devices and software servers."]
    }
  },
  {
    id: "personal-portfolio",
    featured: true,
    isFlagship: false,
    title: "Personal Portfolio",
    status: "live",
    category: "Web",
    subCategory: "Developer Showcase Site",
    shortDescription: "This website. Built to showcase what I actually work on — not a list of buzzwords.",
    technologies: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Clean, modern UI layout & dark theme styling",
      "Developer dashboard & interactive portfolio sections",
      "Fast static rendering & GitHub Pages deployment",
      "Responsive design across all devices"
    ],
    github: "https://github.com/abhishekcodee/my_portfolio",
    liveDemo: "https://abhishekcodee.github.io/my_portfolio/",
    screenshots: [],
    caseStudy: {
      overview: "This website. Built to showcase what I actually work on — not a list of buzzwords.",
      problem: "Creating a clean, authentic developer portfolio showcasing real projects and skills without fluff.",
      solution: "Designed and engineered a responsive, high-performance portfolio featuring interactive project cards, technical stack breakdowns, and live developer dashboard.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        { name: "Authentic Project Showcase", desc: "Focusing on real engineering work and practical solutions." },
        { name: "Responsive Layout", desc: "Tailored experience across desktop, tablet, and mobile screens." },
        { name: "Interactive Dashboard", desc: "Built-in developer control hub and live preview controls." }
      ],
      development: "Engineered with React, Vite, Tailwind CSS, and Framer Motion.",
      challenges: ["Building a fast, responsive site with seamless deployment on GitHub Pages."]
    }
  }
];

export const PROJECT_LIFECYCLE = [
  {
    step: "01",
    phase: "DISCOVERY",
    title: "Understand & Scope",
    desc: "Analyze operational bottlenecks, map user workflows, and define clear database & system requirements.",
    focus: "Workflow Mapping · Scope Definition"
  },
  {
    step: "02",
    phase: "ARCHITECTURE",
    title: "Database & Backend Design",
    desc: "Structure normalized MySQL tables, PDO query layers, API controllers, and secure data access patterns.",
    focus: "MySQL Schema · PDO Prepared Queries"
  },
  {
    step: "03",
    phase: "DEVELOPMENT",
    title: "Clean & Modular Build",
    desc: "Develop responsive UIs, core PHP/Python backend endpoints, LMS plugins, and IoT telemetry daemons.",
    focus: "PHP · Python · JS · IoT Daemons"
  },
  {
    step: "04",
    phase: "TESTING & AUDIT",
    title: "Quality & Security Audit",
    desc: "Test timed exam rules, form security, media uploads, multi-role authentication, and mobile responsiveness.",
    focus: "Role Auth · Exam Logic · Anti-Cheat"
  },
  {
    step: "05",
    phase: "DEPLOYMENT",
    title: "Production Launch",
    desc: "Deploy to server environments, configure security headers, verify database backups, and monitor live performance.",
    focus: "Vite · GitHub Pages · XAMPP / AWS"
  }
];
