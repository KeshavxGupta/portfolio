import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import InteractiveTerminal from './InteractiveTerminal';

const Hero = ({ onOpenResume, onOpenCommandPalette }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6"
    >
      <div className="w-full max-w-4xl mx-auto text-center space-y-10">
        
        {/* Availability & Timezone Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 shadow-xl backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-emerald-400">{personalInfo.status}</span>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span className="text-zinc-400 hidden sm:inline">India (IST / UTC+5:30)</span>
          <span className="text-zinc-600 hidden md:inline">•</span>
          <button
            onClick={onOpenCommandPalette}
            className="hidden md:inline-flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <span className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700/80 font-mono text-[10px]">Ctrl+K</span>
            <span>Menu</span>
          </button>
        </motion.div>

        {/* Main Headline with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Engineering scalable systems <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600">
              and AI applications.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-400 leading-relaxed pt-2">
            Hi, I'm <span className="text-zinc-100 font-semibold">{personalInfo.name}</span>. 
            Full-stack engineer & AI/ML undergraduate at Chitkara University. Designing resilient web architectures, intelligent automation pipelines, and high-performance user interfaces.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-1"
        >
          {/* Explore Work */}
          <a
            href="#projects"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-950 font-semibold text-sm hover:bg-white transition-all shadow-lg hover:shadow-zinc-700/20 hover:scale-[1.02]"
          >
            <span>Explore Work</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>

          {/* View In-Browser Resume */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-700/80 text-zinc-100 font-medium text-sm hover:bg-zinc-800 hover:border-zinc-500 transition-all cursor-pointer shadow-md group"
          >
            <svg className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>View Resume</span>
          </button>

          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-200 font-medium text-sm hover:bg-zinc-800 hover:border-zinc-700 transition-all cursor-pointer shadow-md"
          >
            <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
          </button>

          {/* Direct Social Links */}
          <div className="flex items-center gap-2 pl-1">
            <a
              href="https://github.com/KeshavxGupta"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all shadow-sm"
              aria-label="GitHub Profile"
            >
              <SiGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/keshav-gupta-751925324"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <SiLinkedin className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Interactive Developer Terminal Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="pt-4"
        >
          <InteractiveTerminal onOpenResume={onOpenResume} />
        </motion.div>

        {/* Quick Highlights Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-6 border-t border-zinc-800/60 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/40 text-left">
            <div className="text-xl font-bold text-zinc-100">Live Client Work</div>
            <div className="text-xs text-zinc-500 font-medium">kanpurwatch.in E-Commerce</div>
          </div>
          <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/40 text-left">
            <div className="text-xl font-bold text-zinc-100">Hackmol 6.0</div>
            <div className="text-xs text-zinc-500 font-medium">AgriTech ML Solution</div>
          </div>
          <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/40 text-left">
            <div className="text-xl font-bold text-zinc-100">18+</div>
            <div className="text-xs text-zinc-500 font-medium">Cloud & AI Skill Badges</div>
          </div>
          <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/40 text-left">
            <div className="text-xl font-bold text-zinc-100">AI & ML Focus</div>
            <div className="text-xs text-zinc-500 font-medium">Chitkara University</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;