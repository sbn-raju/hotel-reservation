import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const LuxuryHeroHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const { scrollY } = useScroll();
  
  // Enhanced dynamic header effects based on scroll
  const headerOpacity = useTransform(scrollY, [0, 50, 100], [0.85, 0.9, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 50, 100], [8, 12, 20]);
  const headerScale = useTransform(scrollY, [0, 50], [1, 1.02]);
  const headerY = useTransform(scrollY, [0, 50], [8, 4]);
  const textOpacity = useTransform(scrollY, [0, 30, 80], [0.9, 0.95, 1]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'properties', label: 'Properties' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
    setIsMenuOpen(false);
  };

  // Track scrolling state and active section
  useEffect(() => {
    let scrollTimeout;
    
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.3
        }}
        className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block"
      >
        <motion.div
          style={{ 
            opacity: headerOpacity,
            backdropFilter: `blur(${headerBlur}px)`,
            scale: headerScale,
            y: headerY
          }}
          className="relative px-8 py-3 rounded-full bg-gradient-to-r from-slate-900/60 via-slate-800/70 to-slate-900/60 border border-white/20 shadow-2xl transition-all duration-300"
          animate={{
            backgroundColor: isScrolling ? 'rgba(15, 23, 42, 0.9)' : 'rgba(15, 23, 42, 0.7)',
            borderColor: isScrolling ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.25)',
            paddingTop: isScrolling ? '20px' : '12px',
            paddingBottom: isScrolling ? '20px' : '12px',
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Enhanced gradient overlay */}
          <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-blue-500/10"
            animate={{
              opacity: isScrolling ? 0.8 : 0.5
            }}
            transition={{ duration: 0.3 }}
          />
          
          <div className="relative flex items-center justify-between space-x-12">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div 
                className="w-8 h-8 rounded-full bg-gradient-to-br from-white/90 to-blue-100/70 flex items-center justify-center shadow-lg"
                animate={{
                  width: isScrolling ? '40px' : '36px',
                  height: isScrolling ? '40px' : '36px'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-3 h-3 bg-gradient-to-br from-slate-700 to-blue-900 rounded-sm" />
              </motion.div>
              <motion.span 
                className="font-light tracking-wide text-white"
                animate={{
                  fontSize: isScrolling ? '24px' : '22px',
                  opacity: isScrolling ? 1 : 0.95
                }}
                transition={{ duration: 0.3 }}
              >
                LUXE
                <span className="font-extralight text-blue-100/80">STAY</span>
              </motion.span>
            </motion.div>

            {/* Navigation */}
            <nav className="flex items-center space-x-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-light tracking-wide transition-all duration-500 ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  style={{ opacity: textOpacity }}
                  animate={{
                    color: isScrolling 
                      ? (activeSection === item.id ? '#ffffff' : 'rgba(255, 255, 255, 0.9)')
                      : (activeSection === item.id ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)')
                  }}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"
                      layoutId="activeIndicator"
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  )}
                  
                  {/* Hover effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="relative px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              animate={{
                paddingTop: isScrolling ? '12px' : '10px',
                paddingBottom: isScrolling ? '12px' : '10px',
                paddingLeft: isScrolling ? '32px' : '28px',
                paddingRight: isScrolling ? '32px' : '28px'
              }}
            >
              <span className="relative z-10">Book Now</span>
              
              {/* Hover background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-2 left-4 right-4 z-50 lg:hidden"
      >
        <motion.div
          style={{ 
            opacity: headerOpacity,
            backdropFilter: `blur(${headerBlur}px)`
          }}
          className="relative px-4 py-3 rounded-2xl bg-gradient-to-r from-slate-900/60 via-slate-800/70 to-slate-900/60 border border-white/20 shadow-2xl"
          animate={{
            backgroundColor: isScrolling ? 'rgba(15, 23, 42, 0.9)' : 'rgba(15, 23, 42, 0.7)',
            borderColor: isScrolling ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.25)',
            paddingTop: isScrolling ? '16px' : '12px',
            paddingBottom: isScrolling ? '16px' : '12px',
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Enhanced gradient overlay for mobile */}
          <motion.div 
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-blue-500/10"
            animate={{
              opacity: isScrolling ? 0.8 : 0.5
            }}
            transition={{ duration: 0.3 }}
          />
          
          <div className="relative flex items-center justify-between">
            {/* Mobile Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="w-7 h-7 rounded-full bg-gradient-to-br from-white/90 to-blue-100/70 flex items-center justify-center shadow-lg"
                animate={{
                  width: isScrolling ? '32px' : '30px',
                  height: isScrolling ? '32px' : '30px'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-3 h-3 bg-gradient-to-br from-slate-700 to-blue-900 rounded-sm" />
              </motion.div>
              <motion.span 
                className="font-light tracking-wide text-white"
                animate={{
                  fontSize: isScrolling ? '20px' : '19px',
                  opacity: isScrolling ? 1 : 0.95
                }}
                transition={{ duration: 0.3 }}
              >
                LUXE
                <span className="font-extralight text-blue-100/80">STAY</span>
              </motion.span>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 rounded-full bg-gradient-to-r from-slate-700/30 to-slate-800/30 backdrop-blur-md border border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                padding: isScrolling ? '12px' : '10px',
                backgroundColor: isScrolling ? 'rgba(51, 65, 85, 0.6)' : 'rgba(51, 65, 85, 0.5)'
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            y: isMenuOpen ? 0 : -20,
            scale: isMenuOpen ? 1 : 0.95,
            pointerEvents: isMenuOpen ? 'auto' : 'none'
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute top-full left-0 right-0 mt-4"
        >
          <div className="relative p-6 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-slate-900/80 to-slate-800/90 border border-white/20 shadow-2xl">
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-light tracking-wide transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-l-4 border-blue-400'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.button>
              ))}
              
              {/* Mobile CTA */}
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="w-full mt-6 px-4 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
};

export default LuxuryHeroHeader;