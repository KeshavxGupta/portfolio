import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skill from './components/Skill';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CommandPalette from './components/CommandPalette';
import { personalInfo } from './data/portfolioData';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Global keyboard shortcut: Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 relative overflow-x-hidden">
      {/* Seamless Ambient Background Grid & Subtle Spotlight */}
      <div className="fixed inset-0 pointer-events-none bg-grid-zinc opacity-35 z-0" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-zinc-600/10 via-zinc-800/5 to-transparent blur-3xl pointer-events-none z-0" />

      <div className="relative z-10">
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />
        <main>
          <Hero
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
          />
          <About />
          <Projects />
          <Skill />
          <Certificates />
          <Contact />
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>

      {/* Global In-Browser Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Global Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onCopyEmail={handleCopyEmail}
      />
    </div>
  );
}

export default App;