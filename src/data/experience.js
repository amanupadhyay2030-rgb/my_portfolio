/**
 * DEVELOPMENT JOURNEY DATA
 * 
 * CORE RULE — NO FAKE INFORMATION:
 * No fake employment history, fake job titles, or fake years of experience.
 * Describes only verified projects and technical engineering work.
 */

export const DEVELOPMENT_JOURNEY = [
  {
    id: "hrms-project-dev",
    category: "Enterprise Web Development",
    title: "HRMS – Human Resource Management System",
    subtitle: "Real-World Business Application",
    description: "Engineered a centralized web-based HR system designed to simplify and digitize core employee operations and administrative workflows. Built database-driven modules for employee profiles, department hierarchies, attendance logging, leave approval workflows, and role-based access control — marking key progression in developing practical business-oriented applications.",
    technologies: ["PHP", "MySQL", "PDO", "HTML", "CSS", "JavaScript", "Bootstrap"],
    highlights: [
      "Built employee profile & personal information records management",
      "Designed department & designation hierarchy management",
      "Implemented role-based access control & secure session authentication",
      "Developed attendance tracking & leave approval workflow engine",
      "Created HR admin dashboard with dynamic multi-field search & filtering"
    ]
  },
  {
    id: "prayas-recruitment-dev",
    category: "Full-Stack Development",
    title: "PRAYAS Student Recruitment Portal",
    subtitle: "Core PHP & MySQL Web Application",
    description: "Engineered a full-stack student recruitment portal managing candidate registration, login authentication, candidate profiles, resume builder, webcam photo capture, video intro uploads, timed aptitude exams with auto-grading, admin management dashboards, notifications, and PDF resume generation.",
    technologies: ["Core PHP", "MySQL", "PDO", "HTML", "CSS", "JavaScript", "XAMPP"],
    highlights: [
      "Built registration and secure candidate login module",
      "Created candidate profile management & interactive resume builder",
      "Integrated browser webcam photo capture & video introduction upload",
      "Developed timed examination engine with automated score calculation",
      "Designed admin dashboard for candidate management and PDF resume export"
    ]
  },
  {
    id: "prayas-lms-dev",
    category: "LMS Platform Development",
    title: "PRAYAS – The Automation Academy",
    subtitle: "WordPress & Tutor LMS Integration",
    description: "Developed and customized an industrial automation e-learning platform using WordPress and Tutor LMS. Built responsive course layouts, structured lesson delivery channels, student progress indicators, and self-assessment quizzes.",
    technologies: ["WordPress", "PHP", "Tutor LMS", "HTML", "CSS", "JavaScript"],
    highlights: [
      "Configured WordPress and Tutor LMS for technical course delivery",
      "Structured industrial automation course modules and lesson tracks",
      "Implemented student progress tracking and quiz assessment engine"
    ]
  },
  {
    id: "iot-automation-dev",
    category: "IoT & Automation Projects",
    title: "Python Automation & Hardware Telemetry",
    subtitle: "Automation Scripts & Hardware Projects",
    description: "Developed Python automation scripts for data parsing and background task execution, along with IoT hardware telemetry projects integrating microcontrollers and data logging.",
    technologies: ["Python", "IoT", "MySQL", "Automation", "Git"],
    highlights: [
      "Created Python automation scripts for task execution and data handling",
      "Explored IoT hardware integration and telemetry logging",
      "Maintained version control with Git and GitHub"
    ]
  }
];

// Backwards-compatible export for experience components
export const EXPERIENCE_DATA = DEVELOPMENT_JOURNEY;
