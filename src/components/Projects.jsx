import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { featuredProjects } from '../data/portfolioData';
import { SiGithub } from 'react-icons/si';

const ProjectCard = ({ project, isFeatured }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${
        isFeatured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Radiant Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.12), transparent 70%)`,
        }}
      />

      <div>
        {/* Project Header Image */}
        <div
          className={`relative w-full overflow-hidden bg-zinc-950 border-b border-zinc-800/80 ${
            isFeatured ? 'h-64 sm:h-80' : 'h-52'
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/30 to-transparent" />

          {/* Tagline Pill */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-950/90 backdrop-blur-md border border-zinc-800 text-zinc-300 shadow-md">
              {project.tagline}
            </span>
          </div>

          <div className="absolute top-4 right-4 flex items-center gap-2">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full bg-zinc-950/90 backdrop-blur-md border border-emerald-500/30 text-emerald-400 hover:border-emerald-500/60 text-xs font-medium transition-all shadow-md flex items-center gap-1.5"
                aria-label={`Live site for ${project.title}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Demo</span>
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-zinc-950/90 backdrop-blur-md border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-all shadow-md flex items-center justify-center"
              aria-label={`GitHub source for ${project.title}`}
            >
              <SiGithub className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Interactive Architecture Tabs */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-950/80 border border-zinc-800/80 w-fit">
              <button
                type="button"
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-zinc-800 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Key Highlights
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('architecture')}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  activeTab === 'architecture'
                    ? 'bg-zinc-800 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Architecture & Stack
              </button>
            </div>

            {/* Tab Panels */}
            <div className="min-h-[90px]">
              <AnimatePresence mode="wait">
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2"
                  >
                    {project.highlights && (
                      <ul className="space-y-2">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                )}

                {activeTab === 'architecture' && (
                  <motion.div
                    key="architecture"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2"
                  >
                    <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/60 text-xs text-zinc-300 leading-relaxed">
                      Engineered with decoupled client and server modules, utilizing RESTful endpoints for state transitions, parameterized database queries, and responsive client-side UI hydration.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info & Actions */}
      <div className="p-6 sm:p-8 pt-0 border-t border-zinc-800/80 mt-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5 pt-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-950/80 border border-zinc-800 text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs shadow-md transition-all hover:scale-105"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Visit Live Platform</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white group transition-colors"
          >
            <span>Source Code</span>
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-wider font-semibold text-zinc-500">
              Architecture & Production Code
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Interactive system breakdowns of full-stack platforms, hackathon AI MVPs, and zero-dependency web solutions.
          </p>
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              isFeatured={idx === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;