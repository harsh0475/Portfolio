import { useState } from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import {
  FaArrowRight,
  FaBars,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  { title: "Frontend", items: ["React", "Redux Toolkit", "Tailwind CSS", "React Router", "Axios"] },
  { title: "Backend", items: ["FastAPI", "REST APIs", "JWT", "SQLAlchemy", "Repository Pattern"] },
  { title: "Languages", items: ["Java", "Python", "C++", "JavaScript", "SQL"] },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "VS Code", "Linux"] },
];

const projects = [
  {
    title: "HireFlow",
    tech: "Next.js | TypeScript | Spring Boot | PostgreSQL | JWT",
    desc: "Full-stack recruitment management system with role-based workflows for candidates, recruiters and administrators.",
    github: "https://github.com/harsh0475/HireFlow",
    image: null,
  },
  {
    title: "Bake N Bite",
    tech: "React | FastAPI | PostgreSQL | JWT | Redux Toolkit",
    desc: "Full-stack food ordering platform with authentication, RBAC, wishlist, reviews and an admin dashboard.",
    github: "https://github.com/harsh0475/Bake-N-Bite",
    live: "https://bake-n-bite-app.vercel.app/",
    image: "/bake-n-bite.png",
  },
  {
    title: "Crowd Prediction & Staff Allocation",
    tech: "React | FastAPI | Python | XGBoost",
    desc: "Metro crowd prediction dashboard with machine-learning-powered staffing recommendations.",
    github: "https://github.com/harsh0475/Metro-Crowd-Prediction-and-Staff-Allocation-Model",
    live: "https://metro-crowd-prediction-and-staff-allocation-model.vercel.app/",
    image: "/metro-crowd-prediction.png",
  },
];

function SectionHeading({ eyebrow, title, id }) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-400">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div id="top" className="min-h-screen bg-gradient-to-b from-[#050505] via-[#0d1117] to-black text-white">
      <nav className="sticky top-0 z-50 border-b border-zinc-800/80 bg-black/70 backdrop-blur-xl" aria-label="Primary navigation">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3" onClick={closeMenu}>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 font-black shadow-lg shadow-blue-950/40">HS</span>
            <span className="hidden text-sm font-semibold text-zinc-200 sm:inline">Harshit Kumar Singh</span>
          </a>

          <button
            type="button"
            className="rounded-lg p-2 text-zinc-300 transition hover:bg-zinc-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>

          <ul className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="transition hover:text-blue-400" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {isMenuOpen && (
          <div id="mobile-navigation" className="border-t border-zinc-800 bg-zinc-950 px-6 py-4 md:hidden">
            <ul className="mx-auto max-w-7xl space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a className="block rounded-lg px-3 py-3 text-zinc-300 transition hover:bg-zinc-900 hover:text-blue-400" href={item.href} onClick={closeMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <Motion.section
        aria-labelledby="hero-title"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28"
      >
        <img
          src="/profile.jpg"
          alt="Harshit Kumar Singh"
          width="160"
          height="160"
          fetchPriority="high"
          className="mx-auto h-40 w-40 rounded-full border-4 border-blue-500 object-cover shadow-xl shadow-blue-950/30"
        />

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-blue-400">Full-stack engineer </p>
        <h1 id="hero-title" className="mt-5 text-4xl font-black tracking-tight md:text-7xl">Harshit Kumar Singh</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
          I build secure APIs, scalable backend systems and data-driven products with React, Java, Python and PostgreSQL.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300">
            View projects <FaArrowRight aria-hidden="true" />
          </a>
          <a href="#contact" className="rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-zinc-200 transition hover:border-blue-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300">
            Contact me
          </a>
          <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-zinc-200 transition hover:border-blue-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300">
            <FaDownload aria-hidden="true" /> Resume
          </a>
        </div>

        <div className="mt-8 flex justify-center gap-5 text-sm text-zinc-500">
          <a href="https://github.com/harsh0475" target="_blank" rel="noopener noreferrer" aria-label="Visit Harshit on GitHub" className="inline-flex items-center gap-2 transition hover:text-blue-400">
            <FaGithub aria-hidden="true" /> GitHub
          </a>
          <a href="https://linkedin.com/in/harshit-kumar-singh04" target="_blank" rel="noopener noreferrer" aria-label="Visit Harshit on LinkedIn" className="inline-flex items-center gap-2 transition hover:text-blue-400">
            <FaLinkedin aria-hidden="true" /> LinkedIn
          </a>
        </div>
      </Motion.section>

      <section id="about" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16" aria-labelledby="about-heading">
        <SectionHeading eyebrow="Profile" title="About me" id="about-heading" />
        <div className="grid gap-8 md:grid-cols-[1fr_0.75fr] md:items-start">
          <p className="text-lg leading-8 text-zinc-400">
            Software developer focused on backend engineering, scalable architectures, clean APIs and applied machine learning. I enjoy turning complex requirements into reliable, production-ready applications.
          </p>
          <div className="rounded-2xl border border-blue-900/60 bg-blue-950/20 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">What I focus on</p>
            <p className="mt-3 leading-7 text-zinc-300">Reliable services, thoughtful data models and interfaces that make complex workflows easier to use.</p>
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 bg-zinc-950 py-20" aria-labelledby="experience-heading">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="Experience" title="Building with purpose" id="experience-heading" />
          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 md:p-8">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
              <div>
                <h3 className="text-xl font-semibold">Summer Intern | CRIS</h3>
                <p className="mt-1 text-zinc-500">May 2026 - Jul 2026</p>
              </div>
              <span className="w-fit rounded-full border border-blue-900/70 bg-blue-950/30 px-3 py-1 text-xs font-medium text-blue-300">Machine Learning</span>
            </div>
            <ul className="mt-6 list-disc space-y-3 pl-5 leading-7 text-zinc-400">
              <li>Developed Python-based prediction pipelines for operational forecasting use cases.</li>
              <li>Automated data preprocessing and feature engineering to create repeatable experiments.</li>
              <li>Evaluated multiple machine learning models and compared their performance.</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20" aria-labelledby="skills-heading">
        <SectionHeading eyebrow="Toolkit" title="Skills I use to ship" id="skills-heading" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <article key={skill.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 transition hover:-translate-y-1 hover:border-blue-900">
              <h3 className="font-bold text-white">{skill.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 bg-zinc-950 py-20" aria-labelledby="projects-heading">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Selected work" title="Projects that solve real problems" id="projects-heading" />
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition hover:border-blue-500/70 hover:shadow-xl hover:shadow-blue-950/10">
                {project.image ? (
                  <img src={project.image} alt={`${project.title} project preview`} loading="lazy" decoding="async" className="h-56 w-full object-cover" />
                ) : (
                  <div aria-hidden="true" className="flex h-56 w-full items-center justify-center bg-gradient-to-br from-blue-950 via-indigo-950 to-zinc-950">
                    <span className="text-3xl font-black tracking-tight text-blue-200">{project.title}</span>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-blue-400">{project.tech}</p>
                  <p className="mt-4 leading-7 text-zinc-400">{project.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-blue-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300">View code</a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300">Live demo</a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20 text-center" aria-labelledby="contact-heading">
        <SectionHeading eyebrow="Get in touch" title="Have a project in mind?" id="contact-heading" />
        <p className="mx-auto max-w-2xl leading-7 text-zinc-400">I am open to conversations about software engineering opportunities, backend systems and interesting product ideas.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-zinc-300">
          <a href="mailto:harshksingh2004@gmail.com" className="rounded-xl border border-zinc-700 px-5 py-3 transition hover:border-blue-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300">harshksingh2004@gmail.com</a>
          <a href="tel:+918420029221" className="rounded-xl border border-zinc-700 px-5 py-3 transition hover:border-blue-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300">+91 8420029221</a>
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-8 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Harshit Kumar Singh</p>
        <p className="mt-2">Built with React and Tailwind CSS</p>
      </footer>
    </div>
  );
}
