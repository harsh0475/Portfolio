import React from "react";

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-zinc-800">
        <h1 className="text-xl font-bold">HS</h1>
        <div className="space-x-8 hidden md:block">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center text-center px-6 py-28">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-wide">
          HARSHIT KUMAR SINGH
        </h1>
        <h2 className="text-xl md:text-2xl text-zinc-400 mb-6">
          AI & ML | Backend Enthusiast
        </h2>
        <p className="max-w-2xl text-zinc-500 mb-10">
          I build scalable backend systems, AI-powered applications, and solve
          complex algorithmic problems with efficient data structures.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
          >
            Download Resume
          </a>
          <a
            href="https://github.com/harsh0475"
            target="_blank"
            rel="noopener noreferrer"
             className="border border-zinc-700 hover:border-blue-500 hover:text-blue-500 px-6 py-3 rounded-xl transition duration-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/harshit-kumar-singh~/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-700 hover:border-blue-500 hover:text-blue-500 px-6 py-3 rounded-xl transition duration-300"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-20 bg-zinc-950">
        <h2 className="text-3xl font-semibold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Programming", items: "C++, Python, SQL" },
            { title: "Core CS", items: "DSA, DBMS, OS, CN" },
            { title: "AI/ML", items: "Machine Learning, OpenCV" },
            { title: "Tools", items: "Git, GitHub, Linux" },
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
              <p className="text-zinc-400">{skill.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "AI Facial Recognition System",
              desc: "Real-time face detection & recognition using OpenCV and Python.",
            },
            {
              title: "DSA Tracker",
              desc: "Track and analyze solved problems with topic-wise performance.",
            },
            {
              title: "Full Stack Web App",
              desc: "Authentication, database integration, and responsive UI.",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-zinc-400 mb-4">{project.desc}</p>
              <a
                href="#"
                className="text-blue-500 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-zinc-950 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="text-zinc-400">harshksingh2004@gmail.com</p>
        <p className="text-zinc-400">+91 8420029221</p>
      </section>

      <footer className="text-center py-6 text-zinc-600 text-sm">
        © {new Date().getFullYear()} Harshit Kumar Singh
      </footer>
    </div>
  );
}
