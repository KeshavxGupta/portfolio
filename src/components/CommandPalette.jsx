import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo, featuredProjects } from '../data/portfolioData';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const CommandPalette = ({ isOpen, onClose, onOpenResume, onCopyEmail }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  // Command items list
  const commands = [
    // Navigation
    {
      id: 'nav-about',
      category: 'Navigation',
      label: 'Jump to About Me',
      subtext: 'Education, background & competencies',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-projects',
      category: 'Navigation',
      label: 'Jump to Featured Projects',
      subtext: 'Kanpur Watch, TaskMaster, AgriTech',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-skills',
      category: 'Navigation',
      label: 'Jump to Tech Stack & Skills',
      subtext: 'Languages, React, Node, Python, GCP',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-experience',
      category: 'Navigation',
      label: 'Jump to Experience & Hackathons',
      subtext: 'Hackmol 6.0, Build with India, GCP Badges',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-contact',
      category: 'Navigation',
      label: 'Jump to Contact',
      subtext: 'Get in touch & direct channels',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },

    // Actions
    {
      id: 'action-resume',
      category: 'Quick Actions',
      label: 'View In-Browser Resume',
      subtext: 'Recruiter preview & print version',
      icon: (
        <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      action: () => {
        onClose();
        onOpenResume();
      }
    },
    {
      id: 'action-copy-email',
      category: 'Quick Actions',
      label: 'Copy Email Address',
      subtext: personalInfo.email,
      icon: (
        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      action: () => {
        onCopyEmail();
        onClose();
      }
    },
    {
      id: 'action-github',
      category: 'Quick Actions',
      label: 'Open GitHub Profile',
      subtext: 'github.com/KeshavxGupta',
      icon: <SiGithub className="w-4 h-4" />,
      action: () => {
        window.open('https://github.com/KeshavxGupta', '_blank');
        onClose();
      }
    },
    {
      id: 'action-linkedin',
      category: 'Quick Actions',
      label: 'Open LinkedIn Profile',
      subtext: 'linkedin.com/in/keshav-gupta',
      icon: <SiLinkedin className="w-4 h-4" />,
      action: () => {
        window.open('https://www.linkedin.com/in/keshav-gupta-751925324', '_blank');
        onClose();
      }
    },

    // Individual Projects
    ...featuredProjects.map((p) => ({
      id: `proj-${p.id}`,
      category: 'Featured Projects',
      label: p.title,
      subtext: p.technologies.slice(0, 3).join(', '),
      icon: (
        <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    }))
  ];

  // Filter commands
  const filteredCommands = commands.filter((cmd) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      cmd.label.toLowerCase().includes(q) ||
      cmd.subtext.toLowerCase().includes(q) ||
      cmd.category.toLowerCase().includes(q)
    );
  });

  // Focus input and reset selection when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Arrow navigation & Enter key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Palette Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-xl bg-zinc-950/95 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-10 backdrop-blur-xl"
          >
            {/* Search Input Box */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-800/80">
              <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a command or search sections, projects, resume..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
              />
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filteredCommands.length === 0 ? (
                <div className="py-8 text-center text-xs text-zinc-500">
                  No matching commands found for "{query}"
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={cmd.id}
                      onClick={cmd.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-zinc-800/90 text-white shadow-sm'
                          : 'text-zinc-300 hover:bg-zinc-900/60'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-zinc-700/80 text-white' : 'bg-zinc-900 text-zinc-400'}`}>
                          {cmd.icon}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-medium truncate">{cmd.label}</div>
                          <div className="text-[11px] text-zinc-500 truncate">{cmd.subtext}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 pl-2 flex-shrink-0">
                        <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900/80 border border-zinc-800 px-2 py-0.5 rounded">
                          {cmd.category}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] text-zinc-400 font-mono">↵</span>
                        )}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Navigation Hints */}
            <div className="px-4 py-2 bg-zinc-900/60 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-500">
              <div className="flex items-center gap-2">
                <span>Navigate</span>
                <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 font-mono text-[10px]">↑</kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 font-mono text-[10px]">↓</kbd>
                <span>Select</span>
                <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 font-mono text-[10px]">↵</kbd>
              </div>
              <div>Quick Command Menu</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
