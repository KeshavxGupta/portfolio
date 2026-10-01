import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';
import { 
  SiPython, SiCplusplus, SiJavascript, SiHtml5, SiCss3, SiSqlite,
  SiReact, SiTailwindcss, SiVite, SiFramer,
  SiNodedotjs, SiExpress, SiFlask, SiDjango,
  SiGit, SiGithub, SiGooglecloud, SiPostman, SiLinux
} from 'react-icons/si';

const iconMap = {
  'Python': { icon: SiPython, color: '#38bdf8' },
  'C++': { icon: SiCplusplus, color: '#60a5fa' },
  'JavaScript (ES6+)': { icon: SiJavascript, color: '#facc15' },
  'HTML5': { icon: SiHtml5, color: '#f97316' },
  'CSS3': { icon: SiCss3, color: '#38bdf8' },
  'SQL': { icon: SiSqlite, color: '#93c5fd' },
  'React.js': { icon: SiReact, color: '#22d3ee' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06b6d4' },
  'Vite': { icon: SiVite, color: '#a855f7' },
  'Framer Motion': { icon: SiFramer, color: '#ec4899' },
  'Node.js': { icon: SiNodedotjs, color: '#4ade80' },
  'Express.js': { icon: SiExpress, color: '#e4e4e7' },
  'Flask': { icon: SiFlask, color: '#e4e4e7' },
  'Django': { icon: SiDjango, color: '#34d399' },
  'SQLite': { icon: SiSqlite, color: '#93c5fd' },
  'Git & GitHub': { icon: SiGithub, color: '#e4e4e7' },
  'Google Cloud Platform': { icon: SiGooglecloud, color: '#60a5fa' },
  'Postman': { icon: SiPostman, color: '#fb923c' },
  'Linux / Bash': { icon: SiLinux, color: '#fbbf24' }
};

const Skill = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-wider font-semibold text-zinc-500">
              Technical Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Skills & Architecture
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Click any technology badge to inspect role, usage, and system context across Keshav's stack.
          </p>
        </div>

        {/* 4-Card Bento Grid with Framer Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:border-zinc-700/80 transition-all duration-300"
            >
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-zinc-100 tracking-tight">
                  {category.category}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills Badges with Icons */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {category.skills.map((skillName) => {
                  const meta = iconMap[skillName];
                  const Icon = meta ? meta.icon : null;
                  const iconColor = meta ? meta.color : '#a1a1aa';
                  const isSelected = selectedSkill === skillName;

                  return (
                    <button
                      key={skillName}
                      type="button"
                      onClick={() => setSelectedSkill(isSelected ? null : skillName)}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-zinc-100 text-zinc-950 font-semibold border-white shadow-lg scale-105'
                          : 'bg-zinc-950/80 border-zinc-800 text-zinc-200 hover:border-zinc-600 hover:text-white'
                      }`}
                    >
                      {Icon && (
                        <Icon
                          className="w-3.5 h-3.5 flex-shrink-0"
                          style={{ color: isSelected ? '#18181b' : iconColor }}
                        />
                      )}
                      <span>{skillName}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Skill Detail Inspector Drawer */}
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-700/80 backdrop-blur-xl flex items-center justify-between gap-4"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Technology Inspector: {selectedSkill}
                </span>
              </div>
              <p className="text-xs text-zinc-300">
                Applied actively in production architecture, REST microservices, hackathons, and responsive full-stack applications.
              </p>
            </div>
            <button
              onClick={() => setSelectedSkill(null)}
              className="px-3 py-1 text-xs rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Dismiss
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skill;