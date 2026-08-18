/**
 * REAL PROJECTS ONLY
 * 
 * CORE RULE — NO FAKE INFORMATION:
 * Only display projects and features actually implemented.
 * Do not invent fake URLs, fake performance numbers, or fake client reviews.
 * 
 * Project Status System:
 * - 'live': Real publicly accessible URL exists in liveDemo
 * - 'github': Real public GitHub repo URL exists in github
 * - 'private': Project exists but source code/system is private
 * - 'in-development': Active ongoing project
 * - 'archived': Completed legacy project
 */

export const PROJECTS_DATA = [
  {
    id: "prayas-recruitment-portal",
    featured: true,
    isFlagship: true,
    title: "PRAYAS Student Recruitment Portal",
    status: "private",
    category: "Web",
    subCategory: "Core PHP & MySQL Recruitment System",
    shortDescription: "A full-stack recruitment portal managing candidate registration, profiles, resume uploads, interactive resume building, webcam photo capture, video intros, timed aptitude examinations, auto-graded exam results, candidate management, notifications, and PDF resume generation.",
    technologies: [
      "Core PHP",
      "MySQL",
      "PDO",
      "HTML",
      "CSS",
      "JavaScript",
      "XAMPP"
    ],
    highlights: [
      "Candidate Registration & Login Authentication",
      "Candidate Profile & Interactive Resume Builder",
      "Webcam Photo Capture & Video Introduction Upload",
      "Timed Aptitude Examination Engine with Instant Results",
      "Admin Dashboard for Candidate Roster & Evaluation",
      "System Notifications & Resume PDF Generation"
    ],
    github: "", // Empty string hides GitHub button automatically
    liveDemo: "", // Empty string hides Live Demo button automatically
    screenshots: [
      // Add real screenshot objects here when available:
      // { url: "/assets/projects/prayas_dashboard.png", caption: "Candidate Dashboard Interface", type: "desktop" }
    ],
    caseStudy: {
      overview: "The PRAYAS Student Recruitment Portal is an end-to-end recruitment platform designed to handle applicant registration, candidate profile management, identity verification, structured aptitude testing, and administrative candidate tracking.",
      problem: "Student recruitment workflows often rely on disjointed paper submissions, unstandardized resumes, unverified applicant identity, and manual aptitude exam grading.",
      solution: "Engineered a consolidated web portal built on Core PHP and secure PDO MySQL database operations. The platform digitizes applicant registration, offers a built-in resume builder with PDF rendering, captures applicant photo/video credentials, and automates timed exam proctoring with instant evaluation.",
      technologies: ["Core PHP", "MySQL", "PDO", "HTML", "CSS", "JavaScript", "XAMPP"],
      features: [
        { name: "Candidate Registration & Login", desc: "Account creation and authentication for candidates." },
        { name: "Candidate Profile Management", desc: "Structured profile forms for candidate details and contact info." },
        { name: "Resume Upload & Resume Builder", desc: "Support for uploading existing resumes or building standardized resumes interactively." },
        { name: "Webcam Photo Capture & Video Intro", desc: "Browser Media API integration for live photo capture and video introduction uploads." },
        { name: "Aptitude Examination System", desc: "Structured testing module with timed question sets and countdown logic." },
        { name: "Instant Exam Results & Grading", desc: "Automated scoring of aptitude exams upon test completion or timer expiry." },
        { name: "Candidate & Admin Dashboards", desc: "Dedicated portals for candidate self-service and administrative management." },
        { name: "Candidate Roster Management", desc: "Admin control tools to review candidate profiles, test scores, and application status." },
        { name: "System Notifications & PDF Export", desc: "Candidate status updates and automated PDF resume generation." }
      ],
      development: "Built from scratch using Core PHP with PDO prepared statements for database operations against MySQL in a XAMPP environment. Module architecture separates candidate workflows from administrative assessment controls.",
      challenges: [
        "Implementing reliable timed exam state persistence across browser reloads.",
        "Ensuring secure file handling for uploaded video introductions and PDF resume renders."
      ]
    }
  },
  {
    id: "prayas-automation-academy",
    featured: true,
    isFlagship: true,
    title: "PRAYAS – The Automation Academy",
    status: "private",
    category: "LMS",
    subCategory: "WordPress & Tutor LMS E-Learning Portal",
    shortDescription: "An industrial automation e-learning platform delivering structured course content, Tutor LMS lesson navigation, interactive video learning, progress tracking, and student quiz assessments.",
    technologies: [
      "WordPress",
      "PHP",
      "Tutor LMS",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    highlights: [
      "WordPress & Tutor LMS E-Learning Integration",
      "Industrial Automation Course Catalog & Lesson Delivery",
      "Student Progress Tracking & Course Navigation",
      "Interactive Quiz Assessments & Evaluation",
      "Responsive Layout for Desktop & Mobile Learning"
    ],
    github: "",
    liveDemo: "",
    screenshots: [],
    caseStudy: {
      overview: "PRAYAS – The Automation Academy is a specialized online learning platform focused on delivering industrial automation technical courses and workforce training.",
      problem: "Engineering students and automation technicians needed a centralized portal to access structured course modules, video lectures, and self-assessment quizzes.",
      solution: "Configured and customized a WordPress platform powered by Tutor LMS, implementing custom PHP styling, structured course taxonomies, lesson progress indicators, and automated quiz evaluation.",
      technologies: ["WordPress", "PHP", "Tutor LMS", "HTML", "CSS", "JavaScript"],
      features: [
        { name: "Course Curriculum Management", desc: "Organized module hierarchies for industrial automation topics." },
        { name: "Tutor LMS Lesson Delivery", desc: "Video and text lesson player with course completion markers." },
        { name: "Quiz Assessment Engine", desc: "Interactive student self-evaluations and test tracking." },
        { name: "Student Progress Dashboard", desc: "Personalized dashboard tracking enrolled courses and progress percentage." }
      ],
      development: "Developed by customizing WordPress theme templates and extending Tutor LMS hooks using PHP and responsive CSS.",
      challenges: [
        "Structuring course navigation for complex multi-part technical training modules while maintaining fast page performance."
      ]
    }
  }
];

export const PROJECT_LIFECYCLE = [
  {
    step: "01",
    phase: "Requirement Analysis",
    title: "Defining Core Functional Scope",
    desc: "Collaborate to clarify exact operational needs — such as candidate registration, timed exams, video uploads, or LMS course structures."
  },
  {
    step: "02",
    phase: "Database & Architecture",
    title: "Designing PDO MySQL & Backend Schemas",
    desc: "Structure normalized database tables, PDO query logic, and clean folder architecture for reliable performance."
  },
  {
    step: "03",
    phase: "Core Development",
    title: "Building Clean, Modular Code",
    desc: "Implement backend logic in PHP/Python, craft responsive frontend UIs, integrate LMS tools or IoT hardware daemons."
  },
  {
    step: "04",
    phase: "Testing & Validation",
    title: "Functional & Anti-Cheat Validation",
    desc: "Verify form security, timed examination rules, file uploads, PDF rendering, and mobile responsiveness."
  },
  {
    step: "05",
    phase: "Deployment & Delivery",
    title: "Environment Setup & Launch",
    desc: "Deploy on Apache/XAMPP or Linux/AWS hosting, configure security headers, and verify system integrity."
  }
];
