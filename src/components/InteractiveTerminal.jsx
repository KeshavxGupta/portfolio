import React, { useState, useRef, useEffect } from 'react';
import { personalInfo, skillCategories, featuredProjects } from '../data/portfolioData';

const initialHistory = [
  { type: 'system', text: 'Keshav Gupta Developer Console [Version 2.4.0]' },
  { type: 'system', text: 'Type "help" or click the command chips below to inspect system metadata.' },
  { type: 'input', text: 'whoami' },
  { type: 'output', text: `${personalInfo.name} — ${personalInfo.role} (${personalInfo.status})` }
];

const InteractiveTerminal = ({ onOpenResume }) => {
  const [history, setHistory] = useState(initialHistory);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'input', text: cmdText }];

    switch (trimmed) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: 'Available commands:\n  about      - Display background, education and focus\n  skills     - View categorized technical capabilities\n  projects   - Summary of featured engineering systems\n  resume     - View verified curriculum vitae / resume\n  contact    - Retrieve direct contact details\n  clear      - Clear terminal screen'
        });
        break;

      case 'resume':
        if (onOpenResume) {
          onOpenResume();
          newHistory.push({
            type: 'output',
            text: 'Opening in-browser resume viewer modal...'
          });
        } else {
          newHistory.push({
            type: 'output',
            text: 'Resume viewer is accessible via the top navigation bar or Cmd+K.'
          });
        }
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: `Name: ${personalInfo.name}\nRole: ${personalInfo.role}\nStatus: ${personalInfo.status}\nEducation: ${personalInfo.education.degree} (${personalInfo.education.specialization}) at ${personalInfo.education.institution} [${personalInfo.education.period}]\nBio: ${personalInfo.bio}`
        });
        break;

      case 'skills':
        const skillsText = skillCategories.map(cat => `[${cat.category}]\n  ${cat.skills.join(', ')}`).join('\n\n');
        newHistory.push({ type: 'output', text: skillsText });
        break;

      case 'projects':
        const projectsText = featuredProjects.map(p => `* ${p.title} (${p.technologies.slice(0, 3).join(', ')})\n  Tagline: ${p.tagline}${p.liveDemo ? `\n  Live: ${p.liveDemo}` : ''}\n  GitHub: ${p.github}`).join('\n\n');
        newHistory.push({ type: 'output', text: projectsText });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email: ${personalInfo.email}\nGitHub: ${personalInfo.socials[0].url}\nLinkedIn: ${personalInfo.socials[1].url}`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not found: "${trimmed}". Type "help" for available commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  return (
    <div className="w-full rounded-2xl bg-[#0d0d11]/95 border border-zinc-800/80 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-left">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-950/90 border-b border-zinc-800/80">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-xs text-zinc-500 ml-2 font-medium">keshav@workstation:~</span>
        </div>
        <div className="text-[11px] text-zinc-500 hidden sm:block">zsh - 80x24</div>
      </div>

      {/* Terminal Body */}
      <div 
        className="p-4 sm:p-5 max-h-72 sm:max-h-80 overflow-y-auto space-y-3 text-xs leading-relaxed"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((entry, idx) => (
          <div key={idx} className="space-y-1">
            {entry.type === 'input' && (
              <div className="flex items-center gap-2 text-zinc-300">
                <span className="text-emerald-400 select-none">guest@terminal:~$</span>
                <span>{entry.text}</span>
              </div>
            )}
            {entry.type === 'system' && (
              <div className="text-zinc-500 italic select-none">{entry.text}</div>
            )}
            {entry.type === 'output' && (
              <pre className="text-zinc-300 whitespace-pre-wrap font-mono pl-4 border-l border-zinc-800 text-[11px] sm:text-xs">
                {entry.text}
              </pre>
            )}
            {entry.type === 'error' && (
              <div className="text-rose-400 pl-4 border-l border-rose-900/60 text-[11px]">
                {entry.text}
              </div>
            )}
          </div>
        ))}

        {/* Input prompt */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
          <span className="text-emerald-400 select-none">guest@terminal:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="flex-1 bg-transparent text-zinc-100 outline-none border-none p-0 focus:ring-0 text-xs font-mono"
            placeholder="Type a command (try 'help')..."
            autoComplete="off"
            spellCheck="false"
          />
        </form>

        <div ref={bottomRef} />
      </div>

      {/* Quick Action Chips */}
      <div className="px-4 py-2.5 bg-zinc-950/80 border-t border-zinc-800/80 flex flex-wrap items-center gap-1.5 text-[11px]">
        <span className="text-zinc-500 mr-1 select-none">Quick:</span>
        {['help', 'about', 'skills', 'projects', 'resume', 'contact', 'clear'].map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => executeCommand(chip)}
            className="px-2 py-0.5 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer select-none"
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InteractiveTerminal;
