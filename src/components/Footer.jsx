import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='relative flex flex-col items-center justify-center text-white bg-gradient-to-b from-[#121212] via-[#1a232a] to-[#121212] overflow-hidden py-16 md:py-24'>
      {/* Animated Background Elements */}
      <div className='absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden'>
      </div>
      <div className="relative z-10 w-full max-w-6xl px-4 mx-auto">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-gray-400">&copy; {currentYear} Keshav Gupta. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/KeshavxGupta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-sand transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/keshav-gupta-751925324"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-sand transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/Keshav463387401"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-sand transition-colors duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
