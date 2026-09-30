import {
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiSpringboot,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiRedux,
  SiGit,
  SiGithub,
  SiPostman,
  SiLinux,
  SiLeetcode,
} from "react-icons/si";

import {
  FaJava,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGraduationCap,
  FaBriefcase,
  FaArrowRight,
  FaDownload,
  FaBars,
  FaXmark,
  FaCheck,
  FaCopy,
  FaArrowUpRightFromSquare,
  FaChartLine,
  FaDatabase,
  FaServer,
  FaBrain,
  FaLaptopCode,
} from "react-icons/fa6";

export const personalInfo = {
  name: "Harshit Kumar Singh",
  title: "Full-Stack Software Engineer",
  tagline: "Building high-performance backend systems, secure APIs & applied machine learning applications.",
  location: "Bhopal, Madhya Pradesh, India",
  email: "harshksingh2004@gmail.com",
  phone: "+91 8420029221",
  status: "Available for Software Engineering Roles & Internships",
  bio: "Software developer with deep interest in backend architecture, scalable microservices, clean APIs, and machine learning. I combine strong algorithmic foundations with modern full-stack frameworks like React, FastAPI, Spring Boot, and PostgreSQL to deliver resilient, production-ready software.",
  github: "https://github.com/harsh0475",
  linkedin: "https://www.linkedin.com/in/harshit-kumar-singh04",
  leetcode: "https://leetcode.com/u/harsh_0470/",
  resumeUrl: "/resume.pdf",
};

export const stats = [
  {
    value: "8.7 / 10",
    label: "B.Tech CGPA",
    subtext: "VIT Bhopal University (AI & ML)",
    icon: FaGraduationCap,
  },
  {
    value: "CRIS",
    label: "ML Engineering Intern",
    subtext: "Ministry of Railways enterprise",
    icon: FaBriefcase,
  },
  {
    value: "3+ Systems",
    label: "Production & ML Projects",
    subtext: "Full-stack & forecasting apps",
    icon: FaLaptopCode,
  },
  {
    value: "Active",
    label: "LeetCode & Algorithms",
    subtext: "DSA & OOP problem solving",
    icon: SiLeetcode,
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "LeetCode", href: "#leetcode" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const experience = [
  {
    role: "Summer Intern",
    company: "Center for Railway Information Systems (CRIS)",
    orgType: "Ministry of Railways, Govt. of India",
    period: "May 2026 – Jul 2026",
    location: "Kolkata, India (Hybrid)",
    badge: "Enterprise ML Systems",
    summary:
      "Developed high-throughput data processing and predictive modeling pipelines for railway operational forecasting datasets.",
    highlights: [
      "Engineered Python-based data processing and prediction pipelines tailored for railway operational datasets.",
      "Automated data preprocessing, feature engineering, and cross-validation workflows to ensure repeatable and reproducible experimentation.",
      "Authored modular, maintainable, and well-structured Python codebases adhering to clean software engineering practices and Git collaboration.",
      "Evaluated, compared, and documented empirical benchmark metrics across multiple machine learning models.",
    ],
    skills: ["Python", "Machine Learning", "Pandas", "Feature Engineering", "Data Pipelines", "Git"],
  },
];

export const education = {
  degree: "B.Tech in Computer Science & Engineering",
  specialization: "Artificial Intelligence & Machine Learning",
  institution: "VIT Bhopal University",
  period: "2023 – 2027 (Expected)",
  cgpa: "8.7 / 10",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Object-Oriented Programming (OOP)",
    "Operating Systems",
    "Applied Machine Learning",
    "Computer Networks",
  ],
  school: {
    name: "Kendriya Vidyalaya Cossipore",
    year: "2022",
    stream: "Class XII (PCM)",
    score: "88%",
  },
  certifications: [
    "Cloud Computing",
    "Applied Machine Learning",
  ],
};

export const skillsData = [
  {
    category: "Languages",
    icon: FaLaptopCode,
    skills: [
      { name: "Java", icon: FaJava, level: "Advanced" },
      { name: "Python", icon: SiPython, level: "Advanced" },
      { name: "C++", icon: SiCplusplus, level: "Proficient" },
      { name: "JavaScript", icon: SiJavascript, level: "Proficient" },
      { name: "TypeScript", icon: SiTypescript, level: "Proficient" },
      { name: "SQL", icon: FaDatabase, level: "Advanced" },
    ],
  },
  {
    category: "Backend & APIs",
    icon: FaServer,
    skills: [
      { name: "FastAPI", icon: SiFastapi, level: "Advanced" },
      { name: "Spring Boot", icon: SiSpringboot, level: "Proficient" },
      { name: "REST APIs", icon: FaServer, level: "Advanced" },
      { name: "PostgreSQL", icon: SiPostgresql, level: "Advanced" },
      { name: "MySQL", icon: SiMysql, level: "Proficient" },
      { name: "SQLAlchemy", icon: FaDatabase, level: "Advanced" },
      { name: "JWT Auth", icon: FaServer, level: "Advanced" },
    ],
  },
  {
    category: "Frontend",
    icon: SiReact,
    skills: [
      { name: "React.js", icon: SiReact, level: "Advanced" },
      { name: "Next.js", icon: SiNextdotjs, level: "Proficient" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced" },
      { name: "Redux Toolkit", icon: SiRedux, level: "Proficient" },
      { name: "Vite", icon: SiReact, level: "Advanced" },
    ],
  },
  {
    category: "Tools & Core CS",
    icon: FaBrain,
    skills: [
      { name: "Git & GitHub", icon: SiGithub, level: "Advanced" },
      { name: "Postman", icon: SiPostman, level: "Advanced" },
      { name: "Linux / CLI", icon: SiLinux, level: "Proficient" },
      { name: "Data Structures", icon: FaBrain, level: "Strong" },
      { name: "Repository Pattern", icon: FaServer, level: "Advanced" },
      { name: "RBAC & Security", icon: FaLaptopCode, level: "Proficient" },
    ],
  },
];

export const projects = [
  {
    id: "hireflow",
    title: "HireFlow",
    subtitle: "Enterprise Recruitment & Candidate Workflow System",
    category: "fullstack",
    featured: true,
    techStack: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL", "JWT"],
    description:
      "Full-stack recruitment and talent management platform architected with strict role-based access workflows for candidates, recruiters, and corporate administrators. Streamlines interview pipelines, candidate evaluations, and role approvals.",
    highlights: [
      "Role-Based Access Control (RBAC) securely segregating candidate, recruiter, and administrator access.",
      "Robust Spring Boot backend with clean layered services, RESTful contracts, and PostgreSQL relational schemas.",
      "Dynamic candidate tracking pipeline with responsive modern user interface built in Next.js and TypeScript.",
    ],
    github: "https://github.com/harsh0475/HireFlow",
    live: null,
    image: null,
  },
  {
    id: "bake-n-bite",
    title: "Bake N Bite",
    subtitle: "Full-Stack Food Ordering Platform & Store Manager",
    category: "fullstack",
    featured: true,
    techStack: ["React", "FastAPI", "PostgreSQL", "JWT", "Redux Toolkit", "Tailwind CSS"],
    description:
      "Comprehensive food ordering ecosystem featuring authentication, granular RBAC, customer wishlists, verified item reviews, cart synchronization, and an administrative control panel for real-time inventory and order management.",
    highlights: [
      "Built resilient backend architecture applying the Repository Pattern and Service Layer principles.",
      "Implemented secure JWT authentication and role authorization for customer vs. admin dashboards.",
      "Optimized relational PostgreSQL queries for instant search, filtering, and order lifecycle transitions.",
    ],
    github: "https://github.com/harsh0475/Bake-N-Bite",
    live: "https://bake-n-bite-app.vercel.app/",
    image: "/bake-n-bite.png",
  },
  {
    id: "crowd-prediction",
    title: "Crowd Prediction & Staff Allocation",
    subtitle: "ML Transit Density Forecasting & Staffing System",
    category: "ml",
    featured: true,
    techStack: ["React", "FastAPI", "Python", "PostgreSQL", "XGBoost", "LightGBM"],
    description:
      "Data-driven metro crowd density prediction system coupled with an automated staffing allocation engine. Delivers real-time passenger influx forecasting and actionable workforce scheduling to mitigate transit congestion.",
    highlights: [
      "Trained and fine-tuned XGBoost and LightGBM regression models on operational transit datasets.",
      "Developed high-throughput FastAPI inference endpoints consumed by an interactive React analytics dashboard.",
      "Engineered automated staffing heuristics that calculate optimal counter and platform personnel requirements.",
    ],
    github: "https://github.com/harsh0475/Metro-Crowd-Prediction-and-Staff-Allocation-Model",
    live: "https://metro-crowd-prediction-and-staff-allocation-model.vercel.app/",
    image: "/metro-crowd-prediction.png",
  },
];

