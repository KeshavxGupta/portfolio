import React from "react";
import { SiGithub, SiLinkedin, SiMedium } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { personalInfo } from "../data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/80 py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <div className="flex items-center gap-2">
          <span>&copy; {currentYear} {personalInfo.name}.</span>
          <span className="hidden sm:inline">All rights reserved.</span>
        </div>

        <div className="flex items-center gap-4 text-zinc-400">
          <a
            href="https://github.com/KeshavxGupta"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 transition-colors"
            aria-label="GitHub"
          >
            <SiGithub className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/keshav-gupta-751925324"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 transition-colors"
            aria-label="LinkedIn"
          >
            <SiLinkedin className="w-4 h-4" />
          </a>
          <a
            href="https://twitter.com/Keshav463387401"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 transition-colors"
            aria-label="X / Twitter"
          >
            <FaXTwitter className="w-4 h-4" />
          </a>
          <a
            href="https://medium.com/@keshavg60353"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 transition-colors"
            aria-label="Medium"
          >
            <SiMedium className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
