import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTailwindcss, 
  SiBootstrap, 
  SiPython, 
  SiSqlite, 
  SiGit, 
  SiGithub,
  SiCplusplus,
  SiFlask,
  SiDjango,
  SiPostman,
  SiNodedotjs,
  SiExpress
} from 'react-icons/si';

const Skill = () => {
  const skills = [
    { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', icon: SiCss3, color: '#1572B6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#181717' },
    { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    { name: 'Flask', icon: SiFlask, color: '#000000' },
    { name: 'Django', icon: SiDjango, color: '#092E20' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express.js', icon: SiExpress, color: '#000000' }
  ];

  return (
    <section id='skills' className='relative flex flex-col items-center justify-center min-h-screen px-4 text-white bg-gradient-to-b from-[#121212] via-[#1a232a] to-[#121212] overflow-hidden py-16 md:py-24'>
      {/* Animated Background Elements */}
      <div className='absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden'>
        <div className='absolute animate-pulse top-[10%] left-[5%] w-24 h-24 bg-brightBlue rounded-full blur-3xl'></div>
        <div className='absolute animate-pulse top-[70%] right-[15%] w-32 h-32 bg-green rounded-full blur-3xl'></div>
        <div className='absolute animate-pulse bottom-[20%] left-[30%] w-16 h-16 bg-cyan-500 rounded-full blur-3xl'></div>
      </div>
      <div className='relative z-10 w-full max-w-6xl px-4 mx-auto'>
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-4xl md:text-6xl font-extrabold tracking-normal text-white bg-clip-text bg-gradient-to-r from-cyan-400 via-brightBlue to-green animate-fade-in-up mb-12 md:mb-20 text-center w-full leading-[1.1] hover:bg-gradient-to-l transition-all duration-500'
        >
          Technologies I Use
        </motion.h2>
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 justify-center items-center'>
          {skills.map((skill, index) => {
            const SkillIcon = skill.icon;
            return (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 200
                }}
                className='flex flex-col items-center justify-center p-3 md:p-4 bg-[#1a232a] rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:bg-[#2a3340] border border-[#2a3340] hover:border-brightBlue'
                title={skill.name}
              >
                <SkillIcon 
                  className='text-4xl md:text-5xl mb-2'
                  style={{ color: skill.color }}
                />
                <span className='text-sm text-gray-300 group-hover:text-white'>{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skill;