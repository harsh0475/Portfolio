import React from "react";
import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const skills = [
  { title: "Frontend", items: ["React", "Redux Toolkit", "Tailwind CSS", "React Router", "Axios"] },
  { title: "Backend", items: ["FastAPI", "REST APIs", "JWT", "SQLAlchemy", "Repository Pattern"] },
  { title: "Languages", items: ["Java", "Python", "C++", "JavaScript", "SQL"] },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "VS Code", "Linux"] },
];

const projects = [
  {
    title: "HireFlow",
    tech: "Next.js • TypeScript • Spring Boot • PostgreSQL • JWT",
    desc: "Full-stack recruitment management system with role-based workflows for candidates, recruiters and administrators.",
    github: "https://github.com/harsh0475/HireFlow",
    image: null,
  },
  {
    title: "Bake N Bite",
    tech: "React • FastAPI • PostgreSQL • JWT • Redux Toolkit",
    desc: "Full-stack food ordering platform with authentication, RBAC, wishlist, reviews and admin dashboard.",
    github: "https://github.com/harsh0475/Bake-N-Bite.git",
    live: "https://bake-n-bite-app.vercel.app/",
    image: "/bake-n-bite.png",
  },
  {
    title: "Crowd Prediction & Staff Allocation",
    tech: "React • FastAPI • Python • XGBoost",
    desc: "Metro crowd prediction dashboard with ML-powered staffing recommendations.",
    github: "https://github.com/harsh0475/Metro-Crowd-Prediction-and-Staff-Allocation-Model.git",
    live: "https://metro-crowd-prediction-and-staff-allocation-model.vercel.app/",
    image: "/metro-crowd-prediction.png",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050505] via-[#0d1117] to-black text-white">
      <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <h1 className="text-xl font-bold">HS</h1>
          <div className="hidden md:flex gap-6">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <Motion.section initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="max-w-6xl mx-auto px-6 py-24 text-center">
        <img
          src="/profile.jpg"
          alt="Harshit Kumar Singh"
          className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-blue-500 shadow-lg"
        />

        <h1 className="text-5xl md:text-7xl font-black mt-8">Harshit Kumar Singh</h1>

        <h2 className="text-2xl text-blue-400 mt-4">
          Software Engineer | Full Stack Developer
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-zinc-400 leading-8">
          Building scalable backend systems, secure REST APIs and AI-powered applications
          using React, FastAPI and PostgreSQL.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a href="/resume.pdf" download className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl flex items-center gap-2 transition">
            <FaDownload /> Resume
          </a>

          <a href="https://github.com/harsh0475" target="_blank" rel="noopener noreferrer"
            className="border border-zinc-700 hover:border-blue-500 px-6 py-3 rounded-xl flex items-center gap-2 transition">
            <FaGithub /> GitHub
          </a>

          <a href="https://linkedin.com/in/harshit-kumar-singh04" target="_blank" rel="noopener noreferrer"
            className="border border-zinc-700 hover:border-blue-500 px-6 py-3 rounded-xl flex items-center gap-2 transition">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </Motion.section>

      <section id="about" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-zinc-400 leading-8">
          Software developer passionate about backend engineering, scalable architectures,
          clean APIs and machine learning. I enjoy solving algorithmic problems and building
          production-ready applications.
        </p>
      </section>

      <section id="experience" className="bg-zinc-950 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-xl font-semibold">Machine Learning Intern • CRIS</h3>
            <p className="text-zinc-500">May 2026 – Jul 2026</p>
            <ul className="list-disc pl-5 mt-4 text-zinc-400 space-y-2">
              <li>Developed Python-based prediction pipelines.</li>
              <li>Automated preprocessing and feature engineering.</li>
              <li>Evaluated multiple machine learning models.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s) => (
            <div key={s.title} className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
              <h3 className="font-bold mb-4">{s.title}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span key={item} className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="bg-zinc-950 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p) => (
              <div key={p.title} className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 hover:border-blue-500 transition">
                {p.image ? (
                  <img src={p.image} alt={p.title} className="w-full h-56 object-cover" />
                ) : (
                  <div className="w-full h-56 bg-gradient-to-br from-blue-950 via-indigo-950 to-zinc-950 flex items-center justify-center">
                    <span className="text-3xl font-black tracking-tight text-blue-200">HireFlow</span>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="text-blue-400 text-sm mt-2">{p.tech}</p>
                  <p className="text-zinc-400 mt-4">{p.desc}</p>

                  <div className="flex gap-5 mt-6">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Live Demo</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-zinc-400">📧 harshksingh2004@gmail.com</p>
        <p className="text-zinc-400">📱 +91 8420029221</p>
      </section>

      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500">
        © {new Date().getFullYear()} Harshit Kumar Singh • Built with React & Tailwind CSS
      </footer>
    </div>
  );
}
