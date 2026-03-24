import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useTheme } from '../../context/ThemeContext';
import { AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-glassBorder shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-foreground hover:text-neonBlue transition-colors tracking-tighter">
          SK<span className="text-neonBlue">.</span>
        </a>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-lightGray hover:text-foreground hover:text-glow transition-all text-sm font-medium"
            >
              <span className="text-electricPurple mr-1">0{idx + 1}.</span> {link.name}
            </a>
          ))}

          <a
            href="/Resume.pdf"
            target="_blank"
            className="px-4 py-2 text-sm text-neonBlue border border-neonBlue rounded-md hover:bg-neonBlue/10 transition-colors"
          >
            Resume
          </a>

          <button
            onClick={toggleTheme}
            className="rounded-full hover:bg-gray-500/10 text-foreground transition-colors flex items-center justify-center w-10 h-10 overflow-hidden"
            aria-label="Toggle theme"
          >
            <DotLottieReact
              src="https://lottie.host/91f4257b-da41-4655-82d1-f2bf3749d931/bmxS8RWdQN.lottie"
              stateMachineId="StateMachine1"
            />
          </button>
        </div>

        {/* Mobile Menu Toggle & Theme Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="rounded-full hover:bg-gray-500/10 text-foreground transition-colors flex items-center justify-center w-10 h-10 overflow-hidden"
            aria-label="Toggle theme"
          >
            <DotLottieReact
              src="https://lottie.host/91f4257b-da41-4655-82d1-f2bf3749d931/bmxS8RWdQN.lottie"
              stateMachineId="StateMachine1"
            />
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-foreground p-2 focus:outline-none flex items-center justify-center rounded-full hover:bg-gray-500/10 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Layout Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/5 shadow-2xl flex flex-col md:hidden overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-lightGray hover:text-foreground hover:text-glow transition-all text-base font-medium flex items-center tracking-wide"
                >
                  <span className="text-electricPurple mr-4 font-mono text-sm leading-none">0{idx + 1}.</span> {link.name}
                </a>
              ))}
              <a
                href="/Resume.pdf"
                target="_blank"
                onClick={closeMenu}
                className="mt-2 w-[max-content] px-8 py-3 text-sm text-neonBlue border border-neonBlue rounded-md hover:bg-neonBlue/10 transition-colors text-center"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
