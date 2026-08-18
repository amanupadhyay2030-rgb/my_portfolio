/**
 * SKILLS DATA
 * 
 * CORE RULE — NO FAKE INFORMATION:
 * Only show technologies explicitly provided by Abhishek.
 * No fake skill percentages (e.g. Python - 95%).
 * Presented as simple skill cards and badges.
 */

export const SKILLS_CATEGORIES = [
  {
    id: "programming",
    title: "Programming",
    icon: "Code2",
    skills: [
      { name: "Python", desc: "Automation scripts, data parsing, and IoT hardware daemons" },
      { name: "PHP", desc: "Core PHP web development, PDO security, and backend logic" },
      { name: "JavaScript", desc: "Interactive DOM scripting, frontend logic, and web APIs" }
    ]
  },
  {
    id: "web",
    title: "Web Development",
    icon: "Layout",
    skills: [
      { name: "HTML", desc: "Semantic page structure and accessible web markup" },
      { name: "CSS", desc: "Responsive styling, modern layouts, and dark/light UI design" },
      { name: "WordPress", desc: "CMS deployment, custom theme styling, and plugin integration" }
    ]
  },
  {
    id: "database",
    title: "Database",
    icon: "Database",
    skills: [
      { name: "MySQL", desc: "Relational table schemas, PDO prepared statements, and data management" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Environment",
    icon: "Wrench",
    skills: [
      { name: "Git", desc: "Version control and code repository history" },
      { name: "GitHub", desc: "Remote repositories, code hosting, and open-source management" },
      { name: "XAMPP", desc: "Local Apache, MySQL, and PHP development environment setup" }
    ]
  },
  {
    id: "lms",
    title: "LMS Platforms",
    icon: "GraduationCap",
    skills: [
      { name: "Tutor LMS", desc: "Course creation, lesson delivery, and quiz evaluation" },
      { name: "Moodle", desc: "E-learning platform setup and course configuration" },
      { name: "Chamilo", desc: "Open-source LMS customization and user management" }
    ]
  },
  {
    id: "cloud-other",
    title: "Cloud, IoT & Automation",
    icon: "Cpu",
    skills: [
      { name: "AWS", desc: "Cloud deployment and basic server hosting" },
      { name: "IoT", desc: "Microcontroller telemetry and hardware integration" },
      { name: "Automation", desc: "Background scripts and workflow automation" }
    ]
  }
];
