import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaJava, FaPython } from "react-icons/fa";
import { SiReact, SiFastapi, SiPostgresql, SiTailwindcss, SiRedux, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { title: "Frontend", items: ["React","Redux Toolkit","Tailwind CSS","React Router","Axios"] },
  { title: "Backend", items: ["FastAPI","REST APIs","JWT","SQLAlchemy","Repository Pattern"] },
  { title: "Languages", items: ["Java","Python","C++","JavaScript","SQL"] },
  { title: "Tools", items: ["Git","GitHub","Postman","VS Code","Linux"] },
];

const projects = [
  {
    title:"Bake N Bite",
    tech:"React • FastAPI • PostgreSQL • JWT • Redux Toolkit",
    desc:"Full-stack food ordering platform with authentication, RBAC, reviews and admin dashboard.",
    github:"https://github.com/harsh0475",
    live:"#"
  },
  {
    title:"Crowd Prediction & Staff Allocation",
    tech:"React • FastAPI • XGBoost • PostgreSQL",
    desc:"Metro crowd prediction dashboard with ML-powered staffing recommendations.",
    github:"https://github.com/harsh0475",
    live:"#"
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050505] via-[#0d1117] to-black text-white">
      <nav className="sticky top-0 backdrop-blur bg-black/40 border-b border-zinc-800 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <h1 className="text-xl font-bold">HS</h1>
          <div className="space-x-6 hidden md:block">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <motion.section initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="max-w-6xl mx-auto px-6 py-24 text-center">
        <img src="/profile.jpg" alt="Profile" className="w-40 h-40 rounded-full mx-auto border-4 border-blue-500 object-cover mb-8"/>
        <h1 className="text-6xl font-black">Harshit Kumar Singh</h1>
        <p className="text-2xl text-blue-400 mt-4">Software Engineer</p>
        <p className="text-zinc-400 max-w-3xl mx-auto mt-6">
          Building scalable backend systems, REST APIs and AI-powered applications using React, FastAPI and PostgreSQL.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a href="/resume.pdf" className="bg-blue-600 px-6 py-3 rounded-xl flex items-center gap-2"><FaDownload/>Resume</a>
          <a href="https://github.com/harsh0475" className="border px-6 py-3 rounded-xl flex items-center gap-2"><FaGithub/>GitHub</a>
          <a href="https://linkedin.com/in/harshit-kumar-singh04" className="border px-6 py-3 rounded-xl flex items-center gap-2"><FaLinkedin/>LinkedIn</a>
        </div>
      </motion.section>

      <section id="about" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-zinc-400 leading-8">
          Software developer passionate about backend engineering, scalable architectures, clean APIs and machine learning.
          I enjoy solving algorithmic problems and building production-ready applications.
        </p>
      </section>

      <section id="experience" className="bg-zinc-950 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-xl font-semibold">Machine Learning Intern • CRIS</h3>
            <p className="text-zinc-500">May 2026 – Jul 2026</p>
            <ul className="list-disc pl-5 mt-4 text-zinc-400 space-y-2">
              <li>Developed prediction pipelines using Python.</li>
              <li>Automated preprocessing and feature engineering.</li>
              <li>Evaluated multiple ML models.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s)=>(
            <div key={s.title} className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
              <h3 className="font-bold mb-4">{s.title}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map(i=><span key={i} className="bg-zinc-800 px-3 py-1 rounded-full text-sm">{i}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="bg-zinc-950 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p)=>(
              <div key={p.title} className="border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-900">
                <div className="h-52 bg-zinc-800 flex items-center justify-center text-zinc-500">
                  Add Project Screenshot Here
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="text-blue-400 text-sm mt-2">{p.tech}</p>
                  <p className="text-zinc-400 mt-4">{p.desc}</p>
                  <div className="flex gap-4 mt-6">
                    <a href={p.github} className="text-blue-400">GitHub</a>
                    <a href={p.live} className="text-blue-400">Live Demo</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-5xl mx-auto px-6 py-20 text-center">

        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-zinc-400">harshksingh2004@gmail.com</p>
        <p className="text-zinc-400">+91 8420029221</p>
      </section>

      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500">
        © {new Date().getFullYear()} Harshit Kumar Singh • Built with React & Tailwind CSS
      </footer>
    </div>
  );
}
