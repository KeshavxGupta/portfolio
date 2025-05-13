// src/components/Contact.jsx

import React, { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        setStatus('Thanks for your submission!');
        form.reset();
      } else {
        setStatus('Oops! There was a problem.');
      }
    } catch (error) {
      setStatus('Oops! There was a problem.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <section 
      id='contact' 
      className='relative flex flex-col items-center justify-center min-h-screen px-4 text-white bg-gradient-to-b from-[#121212] via-[#1a232a] to-[#121212] overflow-hidden py-16 md:py-24'
    >
      {/* Animated Background Elements */}
      <div className='absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden'>
        <div className='absolute animate-pulse top-[10%] left-[5%] w-24 h-24 bg-brightBlue rounded-full blur-3xl'></div>
        <div className='absolute animate-pulse top-[70%] right-[15%] w-32 h-32 bg-green rounded-full blur-3xl'></div>
        <div className='absolute animate-pulse bottom-[20%] left-[30%] w-16 h-16 bg-cyan-500 rounded-full blur-3xl'></div>
      </div>
      <div className='relative z-10 w-full max-w-6xl px-4 mx-auto'>
        <h2 className='text-4xl md:text-6xl font-extrabold tracking-normal text-white bg-clip-text bg-gradient-to-r from-cyan-400 via-brightBlue to-green animate-fade-in-up mb-12 md:mb-20 text-center w-full leading-[1.1] hover:bg-gradient-to-l transition-all duration-500'>
          Contact Me
        </h2>
        <p className="mb-8 text-lg text-yellow text-center">
          Have a project in mind or want to collaborate? I’d love to hear from you!
        </p>
        <div className="mb-8 flex justify-center items-center gap-4">
          <a
            href="mailto:keshav035306@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold transition rounded-full shadow-lg bg-brightBlue text-dark hover:bg-cyan-400 hover:text-dark"
          >
            Email Me
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/keshav-gupta-751925324" // Replace with your actual LinkedIn profile
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold transition rounded-full shadow-lg bg-green text-dark hover:bg-yellow hover:text-dark"
          >
            Let's Connect
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-4 text-left bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl"
        >
          <div>
            <label className="block mb-1 font-bold text-brightBlue" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-2 text-white border rounded bg-dark border-brightBlue focus:outline-none focus:ring-2 focus:ring-brightBlue placeholder:text-gray-400"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-1 font-bold text-brightBlue" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-2 text-white border rounded bg-dark border-brightBlue focus:outline-none focus:ring-2 focus:ring-brightBlue placeholder:text-gray-400"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="block mb-1 font-bold text-brightBlue" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              className="w-full px-4 py-2 text-white border rounded bg-dark border-brightBlue focus:outline-none focus:ring-2 focus:ring-brightBlue placeholder:text-gray-400"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold transition rounded-full bg-green text-dark hover:bg-yellow hover:text-dark shadow-md"
          >
            Send Message
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          {status && (
            <div className={`mt-4 p-3 rounded text-center ${status.includes('Thanks') ? 'bg-green text-dark' : 'bg-red-500 text-white'}`}>
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;