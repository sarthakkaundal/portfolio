import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
            className="p-2 rounded-full hover:bg-gray-500/10 text-foreground transition-colors flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
