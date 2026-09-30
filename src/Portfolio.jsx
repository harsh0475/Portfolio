import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  personalInfo,
  stats,
  navItems,
  experience,
  education,
  skillsData,
  projects,
} from "./data/portfolioData";

import LeetCodeWidget from "./components/LeetCodeWidget";

import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaDownload,
  FaBars,
  FaXmark,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGraduationCap,
  FaBriefcase,
  FaCheck,
  FaCopy,
  FaArrowUpRightFromSquare,
  FaArrowUp,
  FaLayerGroup,
  FaCodeBranch,
  FaShieldHalved,
  FaServer,
  FaCircleCheck,
} from "react-icons/fa6";

import { SiLeetcode } from "react-icons/si";

// Section Heading Component with Eyebrow, Title and Description
function SectionHeading({ eyebrow, title, description, id, align = "left" }) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}>
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-blue-500/20 bg-blue-500/10 text-blue-400 mb-3 ${align === "center" ? "mx-auto" : ""}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse"></span>
        {eyebrow}
      </div>
      <h2 id={id} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base sm:text-lg text-zinc-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedSkillCategory, setSelectedSkillCategory] = useState("All");
  const [activeSection, setActiveSection] = useState("top");
  const [showBackToTop, setShowBackToTop] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  // Scroll listener for active navigation and back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const sections = ["top", "about", "leetcode", "experience", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2400);
  };

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  const displayedSkills =
    selectedSkillCategory === "All"
      ? skillsData
      : skillsData.filter((group) => group.category === selectedSkillCategory);

  return (
    <div id="top" className="relative min-h-screen bg-[#030712] text-zinc-100 selection:bg-blue-600 selection:text-white font-sans antialiased">
      {/* Background Decorative Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-blue-600/15 via-indigo-600/10 to-transparent blur-[120px] rounded-full opacity-70" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-bl from-cyan-600/10 via-blue-900/10 to-transparent blur-[140px] rounded-full opacity-60" />
        <div className="absolute top-[75%] left-[-10%] w-[650px] h-[650px] bg-gradient-to-tr from-indigo-700/10 via-purple-900/10 to-transparent blur-[140px] rounded-full opacity-50" />
        {/* Subtle grid pattern overlay with radial mask */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]" />
      </div>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 transition-all duration-300 backdrop-blur-xl bg-[#030712]/80 border-b border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo / Monogram */}
          <a
            href="#top"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-xl"
            aria-label="Harshit Kumar Singh portfolio home"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 font-extrabold text-white text-base shadow-lg shadow-blue-500/25 ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105">
              <span>HS</span>
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                Harshit Kumar Singh
              </span>
              <span className="text-xs text-zinc-400 font-mono hidden sm:block">
                Full-Stack Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.08] bg-zinc-900/60 p-1.5 backdrop-blur-md" aria-label="Desktop navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white bg-blue-600 shadow-md shadow-blue-600/30"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Quick Actions & Status */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Hire</span>
            </div>

            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-2 text-xs font-semibold text-zinc-200 transition-all duration-200 hover:border-blue-500/50 hover:bg-zinc-800 hover:text-white hover:shadow-lg hover:shadow-blue-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <FaDownload className="text-xs text-blue-400" aria-hidden="true" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="flex md:hidden rounded-xl border border-white/10 bg-zinc-900/80 p-2.5 text-zinc-300 transition hover:bg-zinc-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <FaXmark className="text-lg" /> : <FaBars className="text-lg" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <Motion.div
              id="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="border-b border-white/[0.08] bg-zinc-950/95 backdrop-blur-2xl px-6 py-6 md:hidden overflow-hidden"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-medium w-fit mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for opportunities</span>
              </div>

              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.06] hover:text-white"
                    >
                      <span>{item.label}</span>
                      <FaArrowRight className="text-xs text-zinc-500" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-white/[0.08] flex flex-col gap-3">
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
                >
                  <FaDownload />
                  <span>Download Resume (PDF)</span>
                </a>
                <div className="flex justify-center gap-4 pt-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub className="text-lg" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin className="text-lg" />
                  </a>
                  <a
                    href={personalInfo.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition"
                    aria-label="LeetCode Profile"
                  >
                    <SiLeetcode className="text-lg" />
                  </a>
                </div>
              </div>
            </Motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10">
        {/* HERO SECTION */}
        <section aria-labelledby="hero-title" className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <Motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-500/30 bg-blue-950/40 px-4 py-1.5 text-xs sm:text-sm font-medium text-blue-300 shadow-inner backdrop-blur-md mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span>Available for Software Engineering Roles &amp; Internships</span>
            </div>

            {/* Profile Avatar with Ambient Glow & Badging */}
            <div className="relative mb-8 group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 opacity-75 blur-md transition duration-500 group-hover:opacity-100 group-hover:blur-lg" />
              <div className="relative h-36 w-36 sm:h-44 sm:w-44 rounded-full p-1 bg-zinc-950">
                <img
                  src="/profile.jpg"
                  alt="Harshit Kumar Singh"
                  width="176"
                  height="176"
                  fetchPriority="high"
                  className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 rounded-full border-2 border-[#030712] bg-blue-600 px-3 py-1 text-[11px] font-mono font-semibold text-white shadow-lg">
                &lt;Engineer /&gt;
              </div>
            </div>

            {/* Main Headline */}
            <h1 id="hero-title" className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white max-w-4xl">
              Harshit Kumar Singh
            </h1>

            {/* Sub-headline */}
            <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight gradient-text-blue">
              Full-Stack Software Engineer
            </p>

            {/* Bio */}
            <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-normal">
              Specialized in building high-throughput backend services, secure REST APIs, and scalable distributed systems. Combining strong algorithmic problem-solving with modern web engineering in{" "}
              <span className="text-white font-semibold">FastAPI</span>,{" "}
              <span className="text-white font-semibold">React</span>,{" "}
              <span className="text-white font-semibold">Spring Boot</span>, and{" "}
              <span className="text-white font-semibold">PostgreSQL</span>.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:from-blue-500 hover:to-blue-600 hover:scale-[1.02] hover:shadow-blue-600/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>View Selected Projects</span>
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-zinc-900/80 px-6 py-3.5 text-sm font-semibold text-zinc-200 backdrop-blur-md transition-all duration-300 hover:border-blue-500/50 hover:bg-zinc-800 hover:text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <FaDownload className="text-xs text-blue-400" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="relative inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-zinc-900/80 px-6 py-3.5 text-sm font-semibold text-zinc-200 backdrop-blur-md transition-all duration-300 hover:border-blue-500/50 hover:bg-zinc-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                {copiedEmail ? (
                  <>
                    <FaCheck className="text-emerald-400 text-xs" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <FaCopy className="text-xs text-zinc-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Proof & Quick Links */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-white group"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-base text-zinc-400 group-hover:text-white transition" />
                <span className="font-medium">GitHub</span>
              </a>
              <span className="h-1 w-1 rounded-full bg-zinc-700" />
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-[#0a66c2] group"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-base text-zinc-400 group-hover:text-[#0a66c2] transition" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <span className="h-1 w-1 rounded-full bg-zinc-700" />
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-[#ffa116] group"
                aria-label="LeetCode Profile"
              >
                <SiLeetcode className="text-base text-zinc-400 group-hover:text-[#ffa116] transition" />
                <span className="font-medium">LeetCode</span>
              </a>
              <span className="h-1 w-1 rounded-full bg-zinc-700 hidden sm:inline" />
              <div className="hidden sm:inline-flex items-center gap-1.5 text-zinc-500 text-xs font-mono">
                <FaLocationDot className="text-zinc-500" />
                <span>Bhopal, India (IST)</span>
              </div>
            </div>

            {/* Quick Metrics Ribbon (Bento Strip) */}
            <div className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900/40 p-5 text-left backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:bg-zinc-900/70 hover:shadow-xl hover:shadow-blue-500/5 group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">
                        {stat.value}
                      </span>
                      <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                        <Icon className="text-sm" />
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-zinc-200">{stat.label}</p>
                    <p className="mt-1 text-xs text-zinc-400 line-clamp-1">{stat.subtext}</p>
                  </div>
                );
              })}
            </div>
          </Motion.div>
        </section>

        {/* ABOUT & BENTO HIGHLIGHTS SECTION */}
        <section id="about" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-20" aria-labelledby="about-heading">
          <SectionHeading
            eyebrow="Profile &amp; Philosophy"
            title="Engineered for Scalability &amp; Impact"
            description="A holistic software engineer bridging robust backend architectures with clean, responsive user interfaces."
            id="about-heading"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {/* Bento Card 1: Core Philosophy */}
            <div className="md:col-span-2 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-zinc-900/70 via-zinc-900/40 to-zinc-950 p-8 backdrop-blur-xl relative overflow-hidden group hover:border-blue-500/40 transition-all duration-300">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <FaServer className="text-9xl text-blue-500" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <FaCodeBranch className="text-base" />
                </div>
                <h3 className="text-xl font-bold text-white">Scalable Architecture &amp; Clean Code</h3>
              </div>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                I build services centered on strong software engineering foundations—emphasizing the <strong className="text-white">Repository Pattern</strong>, decoupled service layers, and schema-first API contracts. Whether handling transaction workflows in food ordering platforms or structuring multi-role recruiting systems, my focus is on reliability, performance, and long-term maintainability.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Repository Pattern", "Service Layer", "RBAC Security", "Relational Schemas", "JWT Auth", "REST Contracts"].map((tag) => (
                  <span key={tag} className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-xs font-mono text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bento Card 2: Academic Excellence */}
            <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-zinc-900/70 via-zinc-900/40 to-zinc-950 p-8 backdrop-blur-xl relative overflow-hidden group hover:border-blue-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <FaGraduationCap className="text-base" />
                </div>
                <h3 className="text-xl font-bold text-white">Academic Track</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-base">{education.institution}</span>
                    <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-mono font-bold text-blue-400">8.7 CGPA</span>
                  </div>
                  <p className="text-xs text-blue-400 mt-0.5 font-medium">{education.degree}</p>
                  <p className="text-xs text-zinc-400">{education.specialization} • Expected 2027</p>
                </div>

                <div className="pt-3 border-t border-white/[0.08]">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-zinc-200 text-sm">{education.school.name}</span>
                    <span className="text-xs font-mono text-zinc-400">{education.school.score}</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-0.5">{education.school.stream} • {education.school.year}</p>
                </div>

                <div className="pt-3 border-t border-white/[0.08]">
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Certifications</p>
                  <div className="flex flex-wrap gap-1.5">
                    {education.certifications.map((c) => (
                      <span key={c} className="rounded-md border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-0.5 text-xs text-indigo-300">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Card 3: Backend Systems & Performance */}
            <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-zinc-900/70 via-zinc-900/40 to-zinc-950 p-8 backdrop-blur-xl group hover:border-blue-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <FaShieldHalved className="text-base" />
                </div>
                <h3 className="text-xl font-bold text-white">Robust Backend Systems</h3>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Skilled in designing high-throughput REST APIs, relational database schemas in PostgreSQL, database indexing, and authentication flows using JWT and role-based access control.
              </p>
              <div className="mt-5 flex items-center gap-2 text-xs font-mono text-cyan-400">
                <FaCircleCheck />
                <span>Production APIs &amp; schema architecture</span>
              </div>
            </div>

            {/* Bento Card 4: Problem Solving & DSA */}
            <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-zinc-900/70 via-zinc-900/40 to-zinc-950 p-8 backdrop-blur-xl group hover:border-blue-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <SiLeetcode className="text-base" />
                </div>
                <h3 className="text-xl font-bold text-white">Algorithmic Problem Solving</h3>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Rigorous focus on Data Structures, Algorithms, Object-Oriented Design, and relational data modeling. Consistently sharpening problem-solving skills in Java and Python to write optimal, low-complexity solutions.
              </p>
              <div className="mt-5">
                <a
                  href="#leetcode"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition"
                >
                  <span>View Exact LeetCode Widget Below</span>
                  <FaArrowRight className="text-[10px]" />
                </a>
              </div>
            </div>

            {/* Bento Card 5: Modern Web Stack */}
            <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-zinc-900/70 via-zinc-900/40 to-zinc-950 p-8 backdrop-blur-xl group hover:border-blue-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <FaLayerGroup className="text-base" />
                </div>
                <h3 className="text-xl font-bold text-white">Full-Stack Cohesion</h3>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Bridging elegant frontends built with React and Tailwind CSS with resilient backends powered by FastAPI and Spring Boot. Seamless API contracts, state management with Redux, and type-safe workflows.
              </p>
              <div className="mt-5 flex items-center gap-2 text-xs font-mono text-blue-400">
                <FaCircleCheck />
                <span>End-to-end full-stack lifecycle</span>
              </div>
            </div>
          </div>
        </section>

        {/* EXACT LEETCODE DASHBOARD & HEATMAP SECTION */}
        <section id="leetcode" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-20" aria-labelledby="leetcode-heading">
          <SectionHeading
            eyebrow="Continuous Practice"
            title="LeetCode Activity &amp; Heatmap"
            description="Live, real-time synchronized activity from LeetCode with the exact native dashboard layout, circular gauge, difficulty tiers, and 52-week activity calendar."
            id="leetcode-heading"
            align="center"
          />

          <LeetCodeWidget />
        </section>

        {/* WORK EXPERIENCE SECTION */}
        <section id="experience" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-20" aria-labelledby="experience-heading">
          <SectionHeading
            eyebrow="Career Timeline"
            title="Work Experience"
            description="Professional enterprise engineering experience delivering scalable software solutions."
            id="experience-heading"
          />

          <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Glowing Node Dot on Timeline */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#030712] border-2 border-blue-500 shadow-md shadow-blue-500/30">
                  <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                </div>

                <article className="rounded-3xl border border-white/[0.08] bg-zinc-900/50 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:bg-zinc-900/80 hover:shadow-2xl hover:shadow-blue-500/5">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div>
                      <span className="inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-mono font-medium text-blue-300 mb-2">
                        {exp.badge}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {exp.role} <span className="text-blue-400 font-normal">at</span> {exp.company}
                      </h3>
                      <p className="text-sm text-zinc-400 mt-1">
                        {exp.orgType} • {exp.location}
                      </p>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between text-xs font-mono text-zinc-400 bg-white/[0.04] sm:bg-transparent px-3 py-1.5 rounded-lg border border-white/[0.06] sm:border-0">
                      <span className="font-semibold text-zinc-300">{exp.period}</span>
                      <span className="text-blue-400 sm:mt-1">{exp.type}</span>
                    </div>
                  </div>

                  <p className="mt-5 text-sm sm:text-base text-zinc-300 leading-relaxed font-medium">
                    {exp.summary}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-[10px]">
                          ✓
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-zinc-500 mr-2">Technologies:</span>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-xs font-mono text-zinc-300 transition hover:border-blue-400/40 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SHOWCASE SECTION */}
        <section id="projects" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-20" aria-labelledby="projects-heading">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              eyebrow="Selected Portfolio"
              title="Featured Engineering Projects"
              description="Production full-stack applications solving authentic challenges."
              id="projects-heading"
            />

            {/* Project Filter Tabs */}
            <div className="flex items-center rounded-xl border border-white/[0.08] bg-zinc-900/60 p-1.5 backdrop-blur-md self-start md:self-auto">
              {[
                { label: "All Projects", value: "all" },
                { label: "Full-Stack", value: "fullstack" },
                { label: "Machine Learning", value: "ml" },
              ].map((tab) => (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setSelectedFilter(tab.value)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    selectedFilter === tab.value
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.08] bg-zinc-900/50 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 hover:bg-zinc-900/80 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Visual Header / Mockup Frame */}
                <div className="relative border-b border-white/[0.08] overflow-hidden bg-zinc-950">
                  {/* Browser Chrome Header */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-950/90 border-b border-white/[0.06] text-xs font-mono text-zinc-500">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="truncate max-w-[220px] text-[11px] text-zinc-400 font-mono">
                      {project.id === "hireflow"
                        ? "hireflow.internal/portal"
                        : project.live
                        ? project.live.replace("https://", "")
                        : "github.com/harsh0475"}
                    </span>
                    <span className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">
                      {project.category === "ml" ? "AI / ML" : "Web App"}
                    </span>
                  </div>

                  {project.image ? (
                    <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-950">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60" />
                    </div>
                  ) : (
                    /* Custom Interactive Dashboard Mockup for HireFlow */
                    <div className="relative h-64 sm:h-72 w-full bg-gradient-to-br from-slate-950 via-blue-950/40 to-zinc-950 p-6 flex flex-col justify-between overflow-hidden">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-black text-white text-xs">
                            HF
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white">HireFlow Talent OS</p>
                            <p className="text-[10px] text-blue-400 font-mono">Role: Recruiter &amp; Admin</p>
                          </div>
                        </div>
                        <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-mono text-emerald-400">
                          ● JWT Active
                        </span>
                      </div>

                      {/* Mock Kanban / Pipeline Stages */}
                      <div className="grid grid-cols-3 gap-2 my-2">
                        <div className="rounded-xl border border-white/[0.08] bg-zinc-900/60 p-2.5">
                          <p className="text-[10px] font-mono text-zinc-400 uppercase">Screening</p>
                          <p className="text-lg font-black text-white mt-1">24</p>
                          <div className="h-1 w-full bg-blue-500/40 rounded-full mt-2" />
                        </div>
                        <div className="rounded-xl border border-blue-500/20 bg-blue-950/30 p-2.5">
                          <p className="text-[10px] font-mono text-blue-300 uppercase">Technical</p>
                          <p className="text-lg font-black text-blue-300 mt-1">12</p>
                          <div className="h-1 w-full bg-blue-500 rounded-full mt-2" />
                        </div>
                        <div className="rounded-xl border border-white/[0.08] bg-zinc-900/60 p-2.5">
                          <p className="text-[10px] font-mono text-emerald-400 uppercase">Offered</p>
                          <p className="text-lg font-black text-white mt-1">5</p>
                          <div className="h-1 w-full bg-emerald-500/40 rounded-full mt-2" />
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-2 border-t border-white/[0.06]">
                        <span>Spring Boot REST API</span>
                        <span>PostgreSQL Relational DB</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Details Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      {project.live && (
                        <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                          Live Demo
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-blue-400 mt-1">{project.subtitle}</p>

                    <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <ul className="mt-4 space-y-2 border-t border-white/[0.06] pt-4">
                      {project.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-zinc-400 leading-relaxed">
                          <span className="text-blue-400 font-bold mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/[0.08]">
                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/[0.08] bg-zinc-800/60 px-2.5 py-1 text-xs font-mono font-medium text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-800/80 px-4 py-2.5 text-xs font-semibold text-zinc-200 transition hover:border-blue-500/50 hover:bg-zinc-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                      >
                        <FaGithub />
                        <span>Source Code</span>
                      </a>

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                        >
                          <span>Live Deployment</span>
                          <FaArrowUpRightFromSquare className="text-[10px]" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* TECHNICAL TOOLKIT & SKILLS SECTION */}
        <section id="skills" className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-20" aria-labelledby="skills-heading">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              eyebrow="Technical Stack"
              title="Skills &amp; Technologies"
              description="Tools, languages, and frameworks I use to engineer robust and scalable software solutions."
              id="skills-heading"
            />

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center rounded-xl border border-white/[0.08] bg-zinc-900/60 p-1.5 backdrop-blur-md self-start md:self-auto gap-1">
              {["All", ...skillsData.map((s) => s.category)].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedSkillCategory(cat)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    selectedSkillCategory === cat
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {displayedSkills.map((group) => {
              const CategoryIcon = group.icon;
              return (
                <div
                  key={group.category}
                  className="rounded-3xl border border-white/[0.08] bg-zinc-900/40 p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:bg-zinc-900/70 hover:shadow-xl hover:shadow-blue-500/5"
                >
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      <CategoryIcon className="text-base" />
                    </div>
                    <h3 className="font-bold text-white text-lg tracking-tight">{group.category}</h3>
                  </div>

                  <div className="space-y-3">
                    {group.skills.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between rounded-xl border border-white/[0.05] bg-white/[0.02] p-2.5 transition hover:border-blue-500/30 hover:bg-white/[0.05] group"
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="text-lg text-zinc-400 group-hover:text-blue-400 transition-colors" />
                            <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[11px] font-mono font-medium text-zinc-400 bg-white/[0.04] px-2 py-0.5 rounded-md">
                            {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CONTACT & CONNECT SECTION */}
        <section id="contact" className="relative mx-auto max-w-5xl scroll-mt-24 px-6 py-20" aria-labelledby="contact-heading">
          <div className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-b from-zinc-900/80 via-zinc-900/40 to-zinc-950 p-8 sm:p-12 md:p-16 backdrop-blur-2xl overflow-hidden text-center">
            {/* Ambient Spotlight inside Card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/15 blur-[100px] rounded-full pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Let's Connect
            </div>

            <h2 id="contact-heading" className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-2xl mx-auto">
              Ready to collaborate on high-impact systems?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg text-zinc-400 leading-relaxed">
              I am actively seeking software engineering roles, internships, and ambitious engineering projects. Feel free to reach out directly.
            </p>

            {/* Quick Contact Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2.5 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/30 transition hover:bg-blue-500 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                {copiedEmail ? (
                  <>
                    <FaCheck className="text-emerald-300" />
                    <span>Email Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <FaEnvelope />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${personalInfo.email}?subject=Software%20Engineering%20Opportunity%20-%20Inquiry`}
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-zinc-800/80 px-6 py-3.5 text-sm font-semibold text-zinc-200 transition hover:border-blue-500/50 hover:bg-zinc-700 hover:text-white hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Send Direct Mail</span>
                <FaArrowRight className="text-xs" />
              </a>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-zinc-800/80 px-6 py-3.5 text-sm font-semibold text-zinc-200 transition hover:border-blue-500/50 hover:bg-zinc-700 hover:text-white hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                {copiedPhone ? (
                  <>
                    <FaCheck className="text-emerald-300" />
                    <span>Phone Copied!</span>
                  </>
                ) : (
                  <>
                    <FaPhone className="text-xs" />
                    <span>{personalInfo.phone}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Grid Cards */}
            <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                <FaGithub className="text-xl" />
                <span className="text-sm font-medium">github.com/harsh0475</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-zinc-300 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <FaLinkedin className="text-xl" />
                <span className="text-sm font-medium">in/harshit-kumar-singh04</span>
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-zinc-300 transition hover:border-amber-500/30 hover:bg-amber-500/10 hover:text-amber-400"
              >
                <SiLeetcode className="text-xl" />
                <span className="text-sm font-medium">leetcode/harsh_0470</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative border-t border-white/[0.08] bg-zinc-950 py-12 px-6">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-extrabold text-white text-xs">
              HS
            </div>
            <div>
              <p className="text-sm font-bold text-white">Harshit Kumar Singh</p>
              <p className="text-xs text-zinc-400">Full-Stack Software Engineer</p>
            </div>
          </div>

          <p className="text-xs text-zinc-400 text-center sm:text-left">
            © {new Date().getFullYear()} Harshit Kumar Singh. Designed with precision in Dark Mode.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-zinc-400 hover:text-white hover:border-white/20 transition"
              aria-label="Back to top of page"
            >
              <FaArrowUp className="text-xs" />
              <span>Back to top</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <a
          href="#top"
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-zinc-900/90 text-zinc-300 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-sm" />
        </a>
      )}
    </div>
  );
}
