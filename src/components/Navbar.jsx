import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ onOpenResume, onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pb-2 transition-all duration-300">
      <nav
        className={`w-full max-w-5xl flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full border transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-950/80 backdrop-blur-md border-zinc-800/80 shadow-2xl shadow-black/50'
            : 'bg-zinc-900/40 backdrop-blur-sm border-zinc-800/40'
        }`}
      >
        {/* Brand & Status Pill */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 text-zinc-100 hover:text-white transition-colors group"
        >
          <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-xs tracking-wider text-zinc-200 group-hover:border-zinc-500 transition-colors">
            KG
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight leading-tight">
              {personalInfo.name}
            </span>
            <span className="flex items-center gap-1.5 text-[11px] text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {personalInfo.status}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 bg-zinc-900/50 p-1 rounded-full border border-zinc-800/60">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-zinc-800 text-zinc-100 shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Action Button: Command Palette & Resume */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-zinc-400 hover:text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors cursor-pointer"
            title="Open Command Menu (Ctrl+K)"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="font-mono text-[10px]">Ctrl+K</span>
          </button>

          <a
            href={`mailto:${personalInfo.email}`}
            className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
          >
            Contact
          </a>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-zinc-950 bg-zinc-100 hover:bg-white rounded-full transition-all duration-200 shadow-sm hover:scale-[1.02] cursor-pointer"
          >
            <span>Resume</span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-200 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4 bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 rounded-2xl p-4 shadow-2xl space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="text-xs text-zinc-400 hover:text-zinc-200 flex items-center gap-1.5 cursor-pointer"
            >
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800">Ctrl+K</span>
              <span>Search</span>
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenResume();
              }}
              className="px-3.5 py-1.5 text-xs font-medium text-zinc-950 bg-zinc-100 rounded-full cursor-pointer"
            >
              Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;