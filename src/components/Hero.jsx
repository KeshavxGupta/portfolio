// src/components/Hero.jsx

import React, { useState, useEffect } from 'react';

function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullTexts = [
    "Designing user-centric web experiences that blend creativity with functionality.",
    "Developing scalable web systems across diverse domains, from media management to workflow tools.",
    "Thriving in fast-paced hackathon environments with adaptable, team-driven development."
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    const fullText = fullTexts[currentTextIndex];

    const typingInterval = setInterval(() => {
      if (!isDeleting && currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;

        if (currentIndex === fullText.length) {
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        }
      } else if (isDeleting && currentIndex >= 0) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex--;

        if (currentIndex === 0) {
          isDeleting = false;
          setCurrentTextIndex((prevIndex) => 
            (prevIndex + 1) % fullTexts.length
          );
        }
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentTextIndex]);

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen px-4 text-white bg-gradient-to-b from-[#121212] via-[#1a232a] to-[#121212] overflow-hidden py-16"
      id="hero"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute animate-pulse top-[10%] left-[5%] w-24 h-24 bg-brightBlue rounded-full blur-3xl"></div>
        <div className="absolute animate-pulse top-[70%] right-[15%] w-32 h-32 bg-green rounded-full blur-3xl"></div>
        <div className="absolute animate-pulse bottom-[20%] left-[30%] w-16 h-16 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto space-y-6 px-4">
        <div className="relative space-y-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brightBlue to-green animate-fade-in-up">
            Hi, I'm <span className="text-white">Keshav Gupta</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-300 animate-fade-in-up animation-delay-200">
            <div className="relative inline-flex flex-wrap justify-center items-center gap-2 md:gap-4 group">
              {[
                { text: 'Full-Stack Developer', gradient: 'from-brightBlue to-green', borderColor: 'border-brightBlue' },
                { text: 'Creative Innovator', gradient: 'from-green to-yellow', borderColor: 'border-green' },
                { text: 'AI Enthusiast', gradient: 'from-yellow to-cyan-500', borderColor: 'border-yellow' },
                { text: 'Tech Enthusiast', gradient: 'from-cyan-500 to-purple-500', borderColor: 'border-cyan-500' }
              ].map((role, index) => (
                <React.Fragment key={role.text}>
                  <span 
                    className={`
                      relative bg-gradient-to-r ${role.gradient} bg-clip-text text-transparent 
                      px-2 py-1 rounded-md transition-all duration-300 
                      group-hover:opacity-50 group-hover:blur-[1px]
                      hover:!opacity-100 hover:!blur-none
                      cursor-default
                      inline-flex items-center justify-center
                      ${index < 3 ? `border-r-2 ${role.borderColor} pr-2 mr-2` : ''}
                    `}
                  >
                    {role.text}
                    <span className="absolute inset-0 bg-gradient-to-r ${role.gradient} opacity-0 group-hover:opacity-10 rounded-md transition-opacity duration-300"></span>
                  </span>
                </React.Fragment>
              ))}
            </div>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed animate-fade-in-up animation-delay-400 min-h-[120px]">
          <p className="inline-block bg-opacity-50 bg-dark px-2 py-1 rounded-md">
            {typedText}
            <span className="animate-blink text-green">|</span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 text-lg font-bold uppercase tracking-wider 
            transition duration-300 ease-in-out transform 
            bg-gradient-to-r from-brightBlue to-green 
            text-dark hover:from-green hover:to-brightBlue 
            hover:-translate-y-1 hover:scale-105 
            rounded-full shadow-2xl group"
          >
            <span>Explore My Projects</span>
            <svg 
              className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-2" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth={2} 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="https://drive.google.com/file/d/11c3kQgzj7nW4SjwZcF4UFe122rtckkbb/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold transition rounded-full shadow-lg bg-green text-dark hover:bg-green-400 hover:text-dark animate-bounce-subtle animation-delay-200 group"
          >
            Download Resume
            <svg 
              className="w-5 h-5 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth={2} 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;