import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { SiGithub, SiLinkedin, SiMedium } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/meogrljb", {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="text-xs uppercase tracking-wider font-semibold text-zinc-500">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Contact & Opportunities
          </h2>
          <p className="text-sm text-zinc-400 max-w-lg">
            Currently open to summer/fall internships, software engineering roles, and collaborative projects.
          </p>
        </div>

        {/* 2-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Direct Contact Info Card (2 columns) */}
          <div className="md:col-span-2 bento-card rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Direct Channel
                </span>
                <h3 className="text-xl font-bold text-white">
                  Let's connect
                </h3>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                Whether you have an internship opportunity, a project proposal, or want to discuss full-stack & AI architecture, feel free to reach out.
              </p>

              {/* Email Copy Card */}
              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
                <div className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">
                  Email Address
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-medium text-zinc-200 hover:text-white truncate"
                  >
                    {personalInfo.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer flex-shrink-0"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
                {copied && (
                  <div className="text-[11px] text-emerald-400 font-medium">
                    Email copied to clipboard.
                  </div>
                )}
              </div>
            </div>

            {/* Social Grid */}
            <div className="space-y-2 pt-4 border-t border-zinc-800/80">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-zinc-500">
                Online Profiles
              </span>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://github.com/KeshavxGupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 text-xs text-zinc-300 hover:text-white transition-colors"
                >
                  <SiGithub className="w-3.5 h-3.5 text-zinc-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/keshav-gupta-751925324"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 text-xs text-zinc-300 hover:text-white transition-colors"
                >
                  <SiLinkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com/Keshav463387401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 text-xs text-zinc-300 hover:text-white transition-colors"
                >
                  <FaXTwitter className="w-3.5 h-3.5 text-zinc-400" />
                  <span>X / Twitter</span>
                </a>
                <a
                  href="https://medium.com/@keshavg60353"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 text-xs text-zinc-300 hover:text-white transition-colors"
                >
                  <SiMedium className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Medium</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Message Form (3 columns) */}
          <div className="md:col-span-3 bento-card rounded-2xl p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-zinc-400">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Alex Mercer"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-zinc-400">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="alex@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-zinc-400">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your team, role, or project..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 px-4 rounded-xl bg-zinc-100 text-zinc-950 font-medium text-sm hover:bg-white transition-all shadow-sm disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800 text-xs text-emerald-300">
                  Message sent successfully. I will get back to you shortly.
                </div>
              )}

              {status === 'error' && (
                <div className="p-3 rounded-lg bg-red-950/60 border border-red-800 text-xs text-red-300">
                  Unable to send message right now. Please email directly at {personalInfo.email}.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;