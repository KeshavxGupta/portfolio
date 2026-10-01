import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experienceTimeline, certificatesList } from '../data/portfolioData';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Google Cloud', 'Coursera', 'Hackathon / Community'];

  const filteredCerts = certificatesList.filter((cert) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Google Cloud') return cert.issuer.includes('Google Cloud');
    if (activeFilter === 'Coursera') return cert.issuer.includes('Coursera');
    if (activeFilter === 'Hackathon / Community') {
      return !cert.issuer.includes('Google Cloud') && !cert.issuer.includes('Coursera');
    }
    return true;
  });

  const displayedCerts = showAllCerts ? filteredCerts : filteredCerts.slice(0, 6);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-20">
        
        {/* Subsection 1: Hackathons & Academic Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-wider font-semibold text-zinc-500">
              Trajectory & Milestones
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Experience & Hackathons
            </h2>
          </div>

          <div className="relative pl-6 border-l border-zinc-800 space-y-8">
            {experienceTimeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline Node Dot */}
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-900 border-2 border-zinc-600 group-hover:border-cyan-400 transition-colors" />

                <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl p-5 sm:p-6 space-y-2 hover:border-zinc-700/80 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-zinc-800 text-zinc-300">
                      {item.type}
                    </span>
                    <span className="text-xs text-zinc-500 font-medium">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {item.role}
                  </h3>

                  <div className="text-xs text-cyan-400 font-medium">
                    {item.organization}
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                    {item.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Subsection 2: Verified Certifications */}
        <div className="space-y-8 pt-8 border-t border-zinc-800/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-wider font-semibold text-zinc-500">
                Credentials & Badges
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Verified Certifications
              </h3>
            </div>
            <p className="text-xs text-zinc-400">
              Showing {displayedCerts.length} of {filteredCerts.length} verified credentials
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setShowAllCerts(false);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-sm'
                    : 'bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {displayedCerts.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl p-4 flex flex-col justify-between gap-3 cursor-pointer group hover:border-zinc-700/80 transition-all duration-300"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-zinc-500">
                    <span>{cert.issuer}</span>
                    <span>{cert.year}</span>
                  </div>
                  <h4 className="text-xs font-semibold text-zinc-200 group-hover:text-white line-clamp-2">
                    {cert.title}
                  </h4>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-zinc-800/60 text-[11px]">
                  <span className="text-cyan-400 group-hover:underline">
                    View Certificate
                  </span>
                  {cert.badgeUrl && (
                    <span className="text-zinc-500 text-[10px]">
                      Verified Badge
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Show More / Show Less Toggle */}
          {filteredCerts.length > 6 && (
            <div className="flex justify-center pt-2">
              <button
                onClick={() => setShowAllCerts(!showAllCerts)}
                className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer"
              >
                {showAllCerts ? 'Show Less' : `View All ${filteredCerts.length} Credentials`}
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Modern Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-white">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    {selectedCert.issuer} ({selectedCert.year})
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors cursor-pointer"
                  aria-label="Close Modal"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="max-h-[60vh] overflow-hidden rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                <img
                  src={selectedCert.imageUrl}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[55vh] object-contain"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                {selectedCert.badgeUrl ? (
                  <a
                    href={selectedCert.badgeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:underline"
                  >
                    <span>Verify External Credential</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <span className="text-xs text-zinc-500">Verified Certificate</span>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-3.5 py-1.5 text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
