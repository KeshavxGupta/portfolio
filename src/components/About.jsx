// src/components/About.jsx

import React from 'react';

function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 text-white bg-gradient-to-b from-[#121212] via-[#1a232a] to-[#121212] overflow-hidden py-16 md:px-16"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute animate-pulse top-[10%] left-[5%] w-24 h-24 bg-brightBlue rounded-full blur-3xl"></div>
        <div className="absolute animate-pulse top-[70%] right-[15%] w-32 h-32 bg-green rounded-full blur-3xl"></div>
        <div className="absolute animate-pulse bottom-[20%] left-[30%] w-16 h-16 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl gap-8 mx-auto px-4 sm:px-6 md:px-8 lg:flex-row lg:gap-12">
        {/* About Image */}
        <div className="flex-shrink-0 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 overflow-hidden border-4 rounded-full shadow-2xl border-brightBlue bg-dark animate-fade-in-up">
          <img
            src={new URL('../assets/photos/profile-photo.jpg', import.meta.url).href} // Replace with your image path
            alt="About me"
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* About Content */}
        <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brightBlue to-green animate-fade-in-up">
            About Me
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed animate-fade-in-up animation-delay-200">
            Hi! I'm <span className="font-bold text-green">Keshav Gupta</span>, a passionate full-stack developer devoted to creating transformative digital solutions that harmoniously integrate cutting-edge technology, intuitive design, and the transformative power of artificial intelligence and machine learning-delivering smarter, more adaptive, and truly engaging user experiences.
          </p>
          {/* Social Media Links */}
          <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-5 animate-fade-in-up animation-delay-400">
            <a
              href="https://www.linkedin.com/in/keshav-gupta-751925324"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 transition duration-300 ease-in-out transform rounded-full bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 hover:-translate-y-1 hover:scale-110 group"
              aria-label="LinkedIn"
            >

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#0A66C2] group-hover:text-white">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://github.com/KeshavxGupta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 transition duration-300 ease-in-out transform rounded-full bg-[#181717]/10 hover:bg-[#181717]/20 hover:-translate-y-1 hover:scale-110 group"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#181717] group-hover:text-white">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/Keshav463387401"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 transition duration-300 ease-in-out transform rounded-full bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 hover:-translate-y-1 hover:scale-110 group"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#1DA1F2] group-hover:text-white">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="https://medium.com/@keshavg60353"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 transition duration-300 ease-in-out transform rounded-full bg-[#12100E]/10 hover:bg-[#12100E]/20 hover:-translate-y-1 hover:scale-110 group"
              aria-label="Medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#12100E] group-hover:text-white">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.46 0c0 3.52-1.51 6.42-3.38 6.42-1.87 0-3.39-2.9-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.9 3.38 6.42zm3-6.5c-.48 0-.87 2.03-.87 4.5s.39 4.5.87 4.5c.48 0 .87-2.03.87-4.5s-.39-4.5-.87-4.5z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/keshav02108"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 transition duration-300 ease-in-out transform rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]/10 hover:opacity-80 hover:-translate-y-1 hover:scale-110 group"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-gray-100">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/share/1BTqMcgkGU/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 transition duration-300 ease-in-out transform rounded-full bg-[#1877F2]/10 hover:bg-[#1877F2]/20 hover:-translate-y-1 hover:scale-110 group"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#1877F2] group-hover:text-white">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="mailto:keshav035306@gmail.com"
              className="group"
              aria-label="Email"
            >
              <div className="p-3 rounded-full bg-green/10 group-hover:bg-green/20 transition-all duration-300 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-green group-hover:scale-110 transition-transform">
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                </svg>
              </div>
            </a>
          </div>
          <ul className="mb-4 sm:mb-6 space-y-2 text-sm sm:text-base">
            <li>
              <span className="font-semibold text-green">🌟 Expertise:</span> Building robust web applications from front-end to back-end, with a strong focus on embedding AI and machine learning capabilities for smarter user experiences.
            </li>
            <li>
              <span className="font-semibold text-yellow">🚀 Focus:</span> Learning new technologies and translating knowledge into practical, impactful solutions for real-world needs.
            </li>
            <li>
              <span className="font-semibold text-brightBlue">🎨 Interests:</span> Exploring AI to its fullest and innovating ways to bring AI-driven features to the web.
            </li>
            <li>
              <span className="font-semibold text-purple">🎓 Education: </span>Bachelor of Engineering in Computer Science Engineering with specialisation in Artificial Intelligence and Machine Learning, Chitkara University (2024 – Present)
            </li>
          </ul>
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base font-semibold transition rounded-full shadow-lg bg-brightBlue text-dark hover:bg-cyan-400 hover:text-dark"
          >
            See My Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;