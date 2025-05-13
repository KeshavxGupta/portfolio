import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const colors = [
    // Vibrant Reds - Extended
    '#FF6B6B', '#FF4757', '#FF3F34', '#E74C3C', '#C0392B', '#DC143C', '#B22222', '#FF2400', 
    '#FF5733', '#FF4500', '#FF6347', '#FF7F50', '#FF8C69', '#FA8072', '#E9967A', '#F08080',
    
    // Cool Blues - Expanded
    '#4ECDC4', '#45B7D1', '#00B4D8', '#0077B6', '#1E90FF', '#4169E1', '#0000FF', '#00CED1', 
    '#1589FF', '#4682B4', '#5F9EA0', '#6495ED', '#7B68EE', '#87CEFA', '#87CEEB', '#ADD8E6', 
    '#B0E0E6', '#B0C4DE', '#00BFFF', '#1E90FF', '#6A5ACD', '#483D8B', '#4169E1', '#0047AB',
    
    // Warm Yellows and Oranges - More Variations
    '#FDCB6E', '#FAD390', '#FF6B35', '#F7B801', '#FF9F1C', '#FFA500', '#FFD700', '#FFAA00', 
    '#FF8C00', '#FFA07A', '#FFE4B5', '#FFDAB9', '#FFEFD5', '#FFE4E1', '#FFF0F5', '#FAFAD2', 
    '#FFEBC6', '#FFE5B4', '#FFDB58', '#FFD700', '#FFC300', '#FFD700', '#FFED46', '#FFFF00',
    
    // Purples and Violets - Deeper Palette
    '#6C5CE7', '#8E44AD', '#9B59B6', '#5D3FD3', '#7B68EE', '#8A2BE2', '#9400D3', '#BA55D3', 
    '#DA70D6', '#DDA0DD', '#EE82EE', '#FF00FF', '#FF1493', '#C71585', '#DB7093', '#E75480', 
    '#8B008B', '#800080', '#9932CC', '#9400D3', '#8B4513', '#A020F0', '#BF40BF', '#C8A2C8',
    
    // Greens - Even More Variety
    '#A8E6CF', '#B8E994', '#2ECC71', '#27AE60', '#1ABC9C', '#00FF00', '#32CD32', '#90EE90', 
    '#98FB98', '#00FA9A', '#3CB371', '#2E8B57', '#228B22', '#008000', '#006400', '#00FF7F', 
    '#00FA9A', '#98FB98', '#90EE90', '#00FF00', '#7FFF00', '#7CFC00', '#32CD32', '#3CB371', 
    '#2E8B57', '#20B2AA', '#2F4F4F', '#008B8B', '#008080', '#40E0D0', '#48D1CC', '#20B2AA',
    
    // Pinks and Magentas - Expanded Spectrum
    '#FF8ED4', '#F8A5C2', '#FF69B4', '#FF1493', '#DB7093', '#FF00FF', '#C71585', '#FF1493', 
    '#FF69B4', '#FFB6C1', '#FFC0CB', '#FF7F50', '#FF6347', '#FF4500', '#FF8C00', '#FFA500', 
    '#FFD700', '#FFFF00', '#FF00FF', '#FF1493', '#C71585', '#DB7093', '#FF69B4', '#FF6EB4',
    
    // Teals and Cyans - More Nuanced
    '#82CCDD', '#6A89CC', '#48DBFB', '#00CEC9', '#20BF6B', '#40E0D0', '#48D1CC', '#20B2AA', 
    '#008B8B', '#00CED1', '#5F9EA0', '#4682B4', '#87CEEB', '#87CEFA', '#B0E0E6', '#AFEEEE', 
    '#40E0D0', '#48D1CC', '#20B2AA', '#008B8B', '#00CED1', '#00FFFF', '#00CED1', '#20B2AA',
    
    // Deep and Muted Tones - Expanded
    '#03045E', '#2C3E50', '#34495E', '#2980B9', '#8E44AD', '#4A4A4A', '#36454F', '#2F4F4F', 
    '#708090', '#464646', '#556B2F', '#2F4F4F', '#483D8B', '#2C3E50', '#34495E', '#4A4A4A', 
    '#696969', '#808080', '#A9A9A9', '#D3D3D3', '#778899', '#708090', '#2F4F4F', '#000000',
    
    // Earthy and Pastel Tones - More Depth
    '#D2B48C', '#DEB887', '#D2691E', '#CD853F', '#8B4513', '#F0E68C', '#E6E6FA', '#FFF0F5', 
    '#FAF0E6', '#FAFAD2', '#FFDAB9', '#FFEFD5', '#FFE4E1', '#FFF0F5', '#FFE4B5', '#FFDAB9', 
    '#FFEBC6', '#FFE5B4', '#D2B48C', '#DEB887', '#D2691E', '#CD853F', '#8B4513', '#A0522D',
    
    // Metallic and Shimmer Tones
    '#B8860B', '#DAA520', '#FFD700', '#FAFAD2', '#EEE8AA', '#F0E68C', '#BDB76B', '#D4AF37', 
    '#CFB53B', '#C5B358', '#C4A484', '#C2B280', '#C2B290', '#C0C0C0', '#C0C0C0', '#D3D3D3', 
    '#778899', '#708090', '#2F4F4F', '#A9A9A9', '#696969', '#808080'
  ];

  const blendColors = (color1, color2, percentage = 0.5) => {
    // Convert hex to RGB
    const hex2rgb = (hex) => {
      const bigint = parseInt(hex.slice(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return [r, g, b];
    };

    // Convert RGB to hex
    const rgb2hex = (r, g, b) => {
      return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    };

    const [r1, g1, b1] = hex2rgb(color1);
    const [r2, g2, b2] = hex2rgb(color2);

    const r = Math.round(r1 + percentage * (r2 - r1));
    const g = Math.round(g1 + percentage * (g2 - g1));
    const b = Math.round(b1 + percentage * (b2 - b1));

    return rgb2hex(r, g, b);
  };

  const getRandomGradientColors = () => {
    // Select two unique random colors from the palette
    const firstColor = colors[Math.floor(Math.random() * colors.length)];
    let secondColor;
    do {
      secondColor = colors[Math.floor(Math.random() * colors.length)];
    } while (secondColor === firstColor);

    // Generate multiple smooth gradient styles
    const gradientStyles = [
      `linear-gradient(45deg, ${firstColor}, ${secondColor})`,
      `linear-gradient(135deg, ${firstColor}, ${secondColor})`,
      `linear-gradient(to right, ${firstColor}, ${secondColor})`,
      `linear-gradient(to bottom right, ${firstColor}, ${secondColor})`,
      `radial-gradient(circle, ${firstColor}, ${secondColor})`,
      `linear-gradient(45deg, ${firstColor}, ${blendColors(firstColor, secondColor, 0.3)}, ${secondColor})`,
      `linear-gradient(to right, ${firstColor}, ${blendColors(firstColor, secondColor, 0.5)}, ${secondColor})`
    ];

    return {
      from: firstColor, 
      to: secondColor,
      gradient: gradientStyles[Math.floor(Math.random() * gradientStyles.length)]
    };
  };

  const handleSectionHover = (section) => {
    setActiveSection(section);
    // Removed redundant color selection
  };

  return (
    <motion.nav 
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="fixed top-0 left-0 z-50 w-full py-4 shadow bg-nightShadow/90 backdrop-blur-sm"
>
      <div className="container flex items-center justify-between px-4 mx-auto relative">
        <a href="#hero" className="text-2xl font-bold text-sand transition-transform hover:scale-105">Keshav</a>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button 
            onClick={toggleMenu} 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white focus:outline-none"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Desktop and Mobile Menu */}
        <motion.ul 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className={`
          fixed md:static 
          top-16 left-0 right-0 
          md:flex md:gap-8 
          font-semibold text-sandShadow 
          bg-nightShadow/95 md:bg-transparent 
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'block' : 'hidden'}
          md:block
          p-4 md:p-0
          space-y-4 md:space-y-0
        `}
        >
          <motion.li 
            className="md:inline-block group"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => handleSectionHover('about')}
            onHoverEnd={() => setActiveSection('')}
          >
            <a 
              href="#about" 
              style={{ 
                background: activeSection === 'about' ? getRandomGradientColors().gradient : 'transparent',
                transition: 'all 0.3s ease',
                borderRadius: activeSection === 'about' ? '25px' : '0',
                padding: activeSection === 'about' ? '8px 16px' : '0',
                boxShadow: activeSection === 'about' ? '0 4px 6px rgba(0,0,0,0.1)' : 'none'
              }}
              className={`
                block md:inline-block 
                hover:text-sand 
                transition-all duration-300 
                py-2 md:py-0
                ${activeSection === 'about' ? 'text-white' : ''}
                relative
                overflow-hidden
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">About</span>
              {activeSection === 'about' && (
                <motion.span 
                  layoutId="about-hover"
                  style={{
                    background: `linear-gradient(45deg, ${getRandomGradientColors().from}, ${getRandomGradientColors().to})`
                  }}
                  className="absolute inset-0 opacity-75 -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </a>
          </motion.li>
          <motion.li 
            className="md:inline-block group"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => handleSectionHover('skills')}
            onHoverEnd={() => setActiveSection('')}
          >
            <a 
              href="#skills" 
              style={{ 
                background: activeSection === 'skills' ? getRandomGradientColors().gradient : 'transparent',
                transition: 'all 0.3s ease',
                borderRadius: activeSection === 'skills' ? '25px' : '0',
                padding: activeSection === 'skills' ? '8px 16px' : '0',
                boxShadow: activeSection === 'skills' ? '0 4px 6px rgba(0,0,0,0.1)' : 'none'
              }}
              className={`
                block md:inline-block 
                hover:text-sand 
                transition-all duration-300 
                py-2 md:py-0
                ${activeSection === 'skills' ? 'text-white' : ''}
                relative
                overflow-hidden
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">Skills</span>
              {activeSection === 'skills' && (
                <motion.span 
                  layoutId="skills-hover"
                  style={{
                    background: `linear-gradient(45deg, ${getRandomGradientColors().from}, ${getRandomGradientColors().to})`
                  }}
                  className="absolute inset-0 opacity-75 -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </a>
          </motion.li>
          <motion.li 
            className="md:inline-block group"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => handleSectionHover('projects')}
            onHoverEnd={() => setActiveSection('')}
          >
            <a 
              href="#projects" 
              style={{ 
                background: activeSection === 'projects' ? getRandomGradientColors().gradient : 'transparent',
                transition: 'all 0.3s ease',
                borderRadius: activeSection === 'projects' ? '25px' : '0',
                padding: activeSection === 'projects' ? '8px 16px' : '0',
                boxShadow: activeSection === 'projects' ? '0 4px 6px rgba(0,0,0,0.1)' : 'none'
              }}
              className={`
                block md:inline-block 
                hover:text-sand 
                transition-all duration-300 
                py-2 md:py-0
                ${activeSection === 'projects' ? 'text-white' : ''}
                relative
                overflow-hidden
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">Projects</span>
              {activeSection === 'projects' && (
                <motion.span 
                  layoutId="projects-hover"
                  style={{
                    background: `linear-gradient(45deg, ${getRandomGradientColors().from}, ${getRandomGradientColors().to})`
                  }}
                  className="absolute inset-0 opacity-75 -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </a>
          </motion.li>
          <motion.li 
            className="md:inline-block group"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => handleSectionHover('certificates')}
            onHoverEnd={() => setActiveSection('')}
          >
            <a 
              href="#certificates" 
              style={{ 
                background: activeSection === 'certificates' ? getRandomGradientColors().gradient : 'transparent',
                transition: 'all 0.3s ease',
                borderRadius: activeSection === 'certificates' ? '25px' : '0',
                padding: activeSection === 'certificates' ? '8px 16px' : '0',
                boxShadow: activeSection === 'certificates' ? '0 4px 6px rgba(0,0,0,0.1)' : 'none'
              }}
              className={`
                block md:inline-block 
                hover:text-sand 
                transition-all duration-300 
                py-2 md:py-0
                ${activeSection === 'certificates' ? 'text-white' : ''}
                relative
                overflow-hidden
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">Certificates</span>
              {activeSection === 'certificates' && (
                <motion.span 
                  layoutId="certificates-hover"
                  style={{
                    background: `linear-gradient(45deg, ${getRandomGradientColors().from}, ${getRandomGradientColors().to})`
                  }}
                  className="absolute inset-0 opacity-75 -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </a>
          </motion.li>
          <motion.li 
            className="md:inline-block group"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => handleSectionHover('contact')}
            onHoverEnd={() => setActiveSection('')}
          >
            <a 
              href="#contact" 
              style={{ 
                background: activeSection === 'contact' ? getRandomGradientColors().gradient : 'transparent',
                transition: 'all 0.3s ease',
                borderRadius: activeSection === 'contact' ? '25px' : '0',
                padding: activeSection === 'contact' ? '8px 16px' : '0',
                boxShadow: activeSection === 'contact' ? '0 4px 6px rgba(0,0,0,0.1)' : 'none'
              }}
              className={`
                block md:inline-block 
                hover:text-sand 
                transition-all duration-300 
                py-2 md:py-0
                ${activeSection === 'contact' ? 'text-white' : ''}
                relative
                overflow-hidden
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">Contact</span>
              {activeSection === 'contact' && (
                <motion.span 
                  layoutId="contact-hover"
                  style={{
                    background: `linear-gradient(45deg, ${getRandomGradientColors().from}, ${getRandomGradientColors().to})`
                  }}
                  className="absolute inset-0 opacity-75 -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </a>
          </motion.li>
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;