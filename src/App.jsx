import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="space-y-0">
        <Hero />
        <About />
        <Skill />
        <Projects />
        <Certificates />        
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;