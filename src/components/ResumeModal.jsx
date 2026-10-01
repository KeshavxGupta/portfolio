import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo, skillCategories, featuredProjects, experienceTimeline } from '../data/portfolioData';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-title"
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-900/90 border-b border-zinc-800/80 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <h3 id="resume-title" className="text-sm font-semibold text-zinc-100 leading-tight">
                    {personalInfo.name} — Resume
                  </h3>
                  <p className="text-xs text-zinc-400">Software Engineer & AI Builder</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 bg-zinc-800 hover:bg-zinc-700 hover:text-white rounded-lg transition-colors cursor-pointer"
                  title="Print or Save as PDF"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  <span>Print / PDF</span>
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 bg-zinc-800 hover:bg-zinc-700 hover:text-white rounded-lg transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="hidden sm:inline">Email</span>
                </a>

                <button
                  onClick={onClose}
                  className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors ml-1 cursor-pointer"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Scrollable Document Content */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-zinc-300 bg-[#09090b] font-sans printable-resume">
              {/* Header */}
              <div className="border-b border-zinc-800/80 pb-6 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {personalInfo.name}
                  </h1>
                  <span className="text-xs sm:text-sm text-emerald-400 font-medium bg-emerald-950/40 border border-emerald-800/50 px-2.5 py-0.5 rounded-full w-fit">
                    {personalInfo.status}
                  </span>
                </div>
                
                <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
                  {personalInfo.bio}
                </p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-xs text-zinc-400">
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                    {personalInfo.email}
                  </a>
                  <span>•</span>
                  <span>{personalInfo.location}</span>
                  <span>•</span>
                  <a href="https://github.com/KeshavxGupta" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white">
                    <SiGithub className="w-3 h-3" /> github.com/KeshavxGupta
                  </a>
                  <span>•</span>
                  <a href="https://www.linkedin.com/in/keshav-gupta-751925324" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white">
                    <SiLinkedin className="w-3 h-3" /> linkedin.com/in/keshav-gupta
                  </a>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Education
                </h2>
                <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="font-semibold text-white text-sm">
                      {personalInfo.education.institution}
                    </div>
                    <div className="text-xs text-zinc-400">
                      {personalInfo.education.degree} — Specialization in {personalInfo.education.specialization}
                    </div>
                  </div>
                  <div className="text-xs text-zinc-500 font-medium">
                    {personalInfo.education.period}
                  </div>
                </div>
              </div>

              {/* Technical Capabilities */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Technical Capabilities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {skillCategories.map((cat, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 space-y-1.5">
                      <div className="font-semibold text-zinc-200">{cat.category}</div>
                      <div className="text-zinc-400 leading-relaxed">
                        {cat.skills.join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Engineering Projects */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Featured Engineering Projects
                </h2>
                <div className="space-y-4">
                  {featuredProjects.map((proj) => (
                    <div key={proj.id} className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-sm">{proj.title}</span>
                          {proj.liveDemo && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-800/50">
                              Live Production
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-zinc-400">
                          {proj.technologies.slice(0, 4).join(' • ')}
                        </div>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {proj.description}
                      </p>
                      <ul className="list-disc list-inside text-xs text-zinc-400 space-y-1 pl-1">
                        {proj.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hackathons & Experience */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Hackathons, Milestones & Credentials
                </h2>
                <div className="space-y-2.5">
                  {experienceTimeline.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 flex flex-col sm:flex-row sm:items-start justify-between gap-2 text-xs">
                      <div>
                        <div className="font-semibold text-zinc-200">{item.role} — <span className="text-zinc-400">{item.organization}</span></div>
                        <div className="text-zinc-400 mt-1">{item.details}</div>
                      </div>
                      <span className="text-zinc-500 whitespace-nowrap text-[11px] font-mono">{item.period}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Footer Bar */}
            <div className="px-5 py-3 bg-zinc-900/80 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500">
              <span>Press <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono text-[10px]">Esc</kbd> to exit</span>
              <a
                href={`mailto:${personalInfo.email}?subject=Interview%20Inquiry%20-%20Keshav%20Gupta`}
                className="text-zinc-300 hover:text-white font-medium transition-colors"
              >
                Schedule an Interview →
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
