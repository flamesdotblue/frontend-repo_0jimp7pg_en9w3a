import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ExperienceAndContact from './components/ExperienceAndContact';

const MIDNIGHT = '#0a0f1f';
const SILVER = '#c0c0c0';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: MIDNIGHT }}>
      {/* Simple top nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 border-b border-slate-800/50">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <a href="#home" className="text-sm font-semibold tracking-wide text-white">Flames<span style={{ color: '#00d3ff' }}>.</span>Blue</a>
          <nav className="hidden md:flex items-center gap-6 text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" download className="rounded-md px-3 py-1.5 text-slate-900" style={{ backgroundColor: '#00d3ff' }}>CV</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <ExperienceAndContact />
      </main>

      <footer className="py-10 border-t border-slate-800/60">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>
            © {new Date().getFullYear()} Muhammad Irshad Cholakkal. Crafted with care.
          </p>
          <p>
            Palette: Midnight Navy · Electric Blue · Metallic Silver
          </p>
        </div>
      </footer>
    </div>
  );
}
