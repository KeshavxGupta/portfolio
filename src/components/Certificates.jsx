import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Certificate Modal Component
const CertificateModal = ({ imageUrl, title, onClose }) => {
  return (
    <motion.div
      className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className='max-w-4xl w-full max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden'
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={imageUrl} 
          alt={title} 
          className='object-contain w-full h-full'
        />
        <button 
          onClick={onClose}
          className='absolute p-2 text-white transition-colors bg-red-500 rounded-full top-4 right-4 hover:bg-red-600'
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Open certificate or badge URL
  const handleViewCertificate = (cert) => {
    if (cert.badgeUrl) {
      // If badge URL exists, open in a new tab
      window.open(cert.badgeUrl, '_blank', 'noopener,noreferrer');
    } else {
      // Otherwise, open the image in the modal
      setSelectedCertificate(cert);
    }
  };

  // Sample certificate data - replace with your actual certificates
  const certificates = [
    {
      id: 1,
      title: 'Digital Transformation in Financial Services',
      issuer: 'Coursera',
      year: 2025,
      imageUrl: '/src/assets/photos/certificate1.jpg',
    },
    {
      id: 2,
      title: 'Natural Disaster and Climate Change Risk Assessment',
      issuer: 'Coursera',
      year: 2024,
      imageUrl: '/src/assets/photos/certificate2.jpg',
    },
    {
      id: 3,
      title: 'Finance for Everyone',
      issuer: 'Coursera',
      year: 2024,
      imageUrl: '/src/assets/photos/certificate3.jpg',
    },
    {
      id: 4,
      title: 'The Basics of Google Cloud Compute',
      issuer: 'Google Cloud',
      year: 2024,
      imageUrl: '/src/assets/photos/certificate4.png',
      badgeUrl: 'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/11892530',
    },
    {
      id: 5,
      title: 'Get Started with Cloud Storage',
      issuer: 'Google Cloud',
      year: 2024,
      imageUrl: '/src/assets/photos/certificate5.png',
      badgeUrl: 'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/11893706',
    },
    {
      id: 6,
      title: 'Get Started with Looker',
      issuer: 'Google Cloud',
      year: 2024,
      imageUrl: '/src/assets/photos/certificate6.png',
      badgeUrl: 'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/11978101'
    },
    {
      id: 7,
      title: 'Get Started with Dataplex',
      issuer: 'Google Cloud',
      year: 2024,
      imageUrl: '/src/assets/photos/certificate7.png',
      badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12096729'
    },
    {
      id: 8,
      title: 'Cloud Run Functions: 3 Ways',
      issuer: 'Google Cloud',
      year: 2024,
      imageUrl: '/src/assets/photos/certificate8.png',
      badgeUrl: 'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12101031'
    },
    {
      id: 9,
      title: 'App Engine: 3 Ways',
      issuer: 'Google Cloud',
      year: 2024,
      imageUrl: '/src/assets/photos/certificate9.png',
      badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12118124'
    },
    {
      id: 10,
      title: 'Get Started with API Gateway',
      issuer: 'Google Cloud',
      year: 2024,
      imageUrl: '/src/assets/photos/certificate10.png',
      badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12120043'
    },
    {
      id: 11,
      title: 'Cloud Speech API: 3 Ways',
      issuer: 'Google Cloud',
      year: 2024,
      imageUrl: '/src/assets/photos/certificate11.png',
      badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12179548'
    },
    {
      id: 12,
      title: 'Monitoring in Google Cloud',
      issuer: 'Google Cloud',
      year: 2024,
      imageUrl: '/src/assets/photos/certificate12.png',
      badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12182633'
    },
    {
      id: 13,
      title: 'Networking Fundamentals on Google Cloud',
      issuer: 'Google Cloud',
      year: 2024,
      imageUrl: '/src/assets/photos/certificate13.png',
      badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12222990'
    },
    {
      id: 14,
      title: 'Analyze Images with the Cloud Vision API',
      issuer: 'Google Cloud',
      year: 2024,
      imageUrl: '/src/assets/photos/certificate14.png',
      badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12223644'
    },
    {
      id: 15,
      title: 'Get Started with Pub/Sub',
      issuer: 'Google Cloud',
      year: 2024,
      imageUrl: '/src/assets/photos/certificate15.png',
      badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12223958'
    },
    {
      id: 16,
      title: 'Get Started with Google Workspace Tools',
      issuer: 'Google Cloud',
      year: 2024,
      imageUrl: '/src/assets/photos/certificate16.png',
      badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12259968'
    },
    {
      id: 17,
      title: 'Prompt Design in Vertex AI',
      issuer: 'Google Cloud',
      year: 2024,
      imageUrl: '/src/assets/photos/certificate17.png',
      badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12315604'
    },
    {
      id: 18,
      title: 'Develop GenAI Apps with Gemini and Streamlit',
      issuer: 'Google Cloud',
      year: 2024,
      imageUrl: '/src/assets/photos/certificate18.png',
      badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12321784'
    },
    {
      id: 19,
      title: 'Level 3: Google Cloud Adventures',
      issuer: 'Google Cloud',
      year: 2024,
      imageUrl: '/src/assets/photos/certificate19.png',
      badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12333674'
    },
    {
      id: 20,
      title: 'Introduction to Generative AI',
      issuer: 'Google Cloud',
      year: 2024,
      imageUrl: '/src/assets/photos/certificate20.png',
      badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12334028'
    },
    {
      id: 21,
      title: 'Build Real World AI Applications with Gemini and Imagen',
      issuer: 'Google Cloud',
      year: 2025,
      imageUrl: '/src/assets/photos/certificate21.png',
      badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/15293770'
    },
    {
      id: 22,
      title: 'Certificate of Participation of Workshop in Collaboration with Nextleap',
      issuer: 'Nextleap',
      year: 2025,
      imageUrl: '/src/assets/photos/certificate22.jpg',
    },
    {
      id: 23,
      title: 'Hackmol 6.0',
      issuer: 'GDG NIT Jalandhar',
      year: 2025,
      imageUrl: '/src/assets/photos/certificate23.png',
    },
    {
      id: 24,
      title: 'VR Wellness: Innovating Mental Health Through Virtual Reality',
      issuer: 'GFG CUIET Student Chapter',
      year: 2025,
      imageUrl: '/src/assets/photos/certificate24.png',
    },
    {
      id: 25,
      title: 'Google Study Jam ',
      issuer: 'GDG Chitkara University',
      year: 2025,
      imageUrl: '/src/assets/photos/certificate25.jpg',
    },
    {
      id: 26,
      title: 'Build With India',
      issuer: 'Hack With India',
      year: 2025,
      imageUrl: '/src/assets/photos/certificate26.png',
    }
  ];

  return (
    <section 
      id='certificates' 
      className='relative flex flex-col items-center justify-center min-h-screen px-4 text-white bg-gradient-to-b from-[#121212] via-[#1a232a] to-[#121212] overflow-hidden py-16 md:py-24'
    >
      {/* Animated Background Elements */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10'>
        <div className='absolute animate-pulse top-[10%] left-[5%] w-24 h-24 bg-brightBlue rounded-full blur-3xl'></div>
        <div className='absolute animate-pulse top-[70%] right-[15%] w-32 h-32 bg-green rounded-full blur-3xl'></div>
        <div className='absolute animate-pulse bottom-[20%] left-[30%] w-16 h-16 bg-cyan-500 rounded-full blur-3xl'></div>
      </div>

      <div className='relative z-10 w-full max-w-6xl px-4 mx-auto'>
        <h2 className='text-4xl md:text-6xl font-extrabold tracking-normal text-white bg-clip-text bg-gradient-to-r from-cyan-400 via-brightBlue to-green animate-fade-in-up mb-12 md:mb-20 text-center w-full leading-[1.1] hover:bg-gradient-to-l transition-all duration-500'>
          Certificates
        </h2>

        {/* Dynamic Certificates Showcase */}
        <div className='relative w-full px-4 overflow-hidden group md:px-8 lg:px-16'>
          <div className='absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none' />
          <div className='absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none' />
          
          <motion.div
            className='flex w-full py-4 space-x-6 scrollbar-hide'
            drag='x'
            dragConstraints={{ left: -(certificates.length * 280), right: 0 }}
            dragElastic={0.3}
            initial={{ x: 0 }}
            style={{
              display: 'inline-flex',
              overscrollBehaviorX: 'contain',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {certificates.map((cert, index) => (
              <motion.div 
                key={`${cert.id}-${index}`} 
                className='flex-shrink-0 w-72 bg-gradient-to-br from-[#1e2630] to-[#2c3e50] rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.03] group'
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                initial={{ 
                  opacity: 0.7,
                  filter: 'grayscale(50%)'
                }}
                whileInView={{ 
                  opacity: 1,
                  filter: 'grayscale(0%)',
                  transition: { 
                    duration: 0.4,
                    type: 'spring',
                    stiffness: 100
                  }
                }}
                viewport={{ once: true }}
              >
                <div className='relative flex items-center justify-center w-full h-56 overflow-hidden rounded-t-2xl bg-white/10 backdrop-blur-sm'>
                  <div className='absolute inset-0 z-10 transition-opacity duration-300 opacity-0 bg-gradient-to-b from-transparent to-black/30 group-hover:opacity-100'></div>
                  <img 
                    src={cert.imageUrl} 
                    alt={cert.title} 
                    loading='lazy'
                    decoding='async'
                    className='max-w-full max-h-full object-contain p-2 transition-all duration-300 group-hover:scale-[1.02] rounded-xl shadow-lg'
                    style={{
                      filter: 'brightness(1.1) contrast(1.05) saturate(1.1)',
                      mixBlendMode: 'normal'
                    }}
                  />
                </div>
                <div className='p-5 bg-[#2c3e50]/50 backdrop-blur-sm relative'>
                  {cert.issuer === 'Google Cloud' && (
                    <motion.div
                      className='absolute top-0 right-0 px-3 py-1 text-xs font-bold text-white bg-blue-600 rounded-bl-xl'
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        type: 'spring', 
                        stiffness: 300,
                        delay: 0.2
                      }}
                    >
                      Cloud Certified
                    </motion.div>
                  )}
                  <h3 className='mb-2 text-lg font-bold transition-colors duration-300 text-cyan-300 group-hover:text-cyan-200'>
                    {cert.title}
                  </h3>
                  <div className='flex items-center justify-between mb-2'>
                    <p className='text-sm text-gray-300 opacity-80'>{cert.issuer}</p>
                    <span className='text-sm font-semibold text-cyan-400'>{cert.year}</span>
                  </div>
                  <motion.button
                    onClick={() => handleViewCertificate(cert)}
                    className='w-full py-2 text-white transition-colors rounded-md bg-cyan-700 hover:bg-cyan-600'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {cert.badgeUrl ? 'View Badge' : 'View Certificate'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <CertificateModal
            imageUrl={selectedCertificate.imageUrl}
            title={selectedCertificate.title}
            onClose={() => setSelectedCertificate(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
