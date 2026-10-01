import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { SiGithub, SiLinkedin, SiMedium } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <div className="text-xs uppercase tracking-wider font-semibold text-zinc-500">
            Background & Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl p-6 sm:p-8 space-y-6 hover:border-zinc-700/80 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <img
                src={new URL('../assets/photos/profile-photo.jpg', import.meta.url).href}
                alt="Keshav Gupta"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border border-zinc-700 shadow-xl"
              />
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
                <p className="text-sm text-zinc-400 font-medium">{personalInfo.role}</p>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Chitkara University (2024 - Present)</span>
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Core Competencies */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                <div className="text-xs font-semibold text-zinc-200">Full-Stack Systems</div>
                <div className="text-[11px] text-zinc-400 mt-1 leading-snug">
                  REST APIs, database design, and modular backend architecture.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                <div className="text-xs font-semibold text-zinc-200">Applied AI & ML</div>
                <div className="text-[11px] text-zinc-400 mt-1 leading-snug">
                  Predictive modeling, GenAI workflows, and intelligent applications.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                <div className="text-xs font-semibold text-zinc-200">Hackathon Driven</div>
                <div className="text-[11px] text-zinc-400 mt-1 leading-snug">
                  Rapid development, agile teamwork, and practical execution.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side Card: Education & Social Links */}
          <div className="flex flex-col gap-6">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl p-6 space-y-3 hover:border-zinc-700/80 transition-all duration-300"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Academic Background
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-100">
                  {personalInfo.education.degree}
                </h4>
                <div className="text-xs text-zinc-400 mt-0.5">
                  Specialization: {personalInfo.education.specialization}
                </div>
                <div className="text-xs text-zinc-500 mt-2 flex items-center justify-between">
                  <span>{personalInfo.education.institution}</span>
                  <span>{personalInfo.education.period}</span>
                </div>
              </div>
            </motion.div>

            {/* Connect Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl p-6 space-y-3 flex-1 flex flex-col justify-between hover:border-zinc-700/80 transition-all duration-300"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Professional Network
                </div>
                <div className="text-xs text-zinc-400 mt-1">
                  Connect across developer and writing platforms.
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href="https://github.com/KeshavxGupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 text-xs text-zinc-300 hover:text-white transition-colors"
                >
                  <SiGithub className="w-4 h-4 text-zinc-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/keshav-gupta-751925324"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 text-xs text-zinc-300 hover:text-white transition-colors"
                >
                  <SiLinkedin className="w-4 h-4 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com/Keshav463387401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 text-xs text-zinc-300 hover:text-white transition-colors"
                >
                  <FaXTwitter className="w-4 h-4 text-zinc-400" />
                  <span>X / Twitter</span>
                </a>
                <a
                  href="https://medium.com/@keshavg60353"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 text-xs text-zinc-300 hover:text-white transition-colors"
                >
                  <SiMedium className="w-4 h-4 text-zinc-400" />
                  <span>Medium</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;