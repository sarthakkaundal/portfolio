import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary-cream border-b-4 border-text-dark shadow-retro' : 'bg-primary-cream'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-display font-bold text-2xl text-text-dark hover:text-accent-teal transition-colors tracking-tighter">
          SK<span className="text-accent-teal">.</span>
        </a>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-text-medium hover:text-text-dark hover:text-accent-teal transition-all text-sm font-semibold uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/Resume.pdf"
            target="_blank"
            className="btn-retro-outline"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="retro-icon focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Layout Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-primary-cream border-b-4 border-text-dark shadow-retro flex flex-col md:hidden overflow-hidden">
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={closeMenu}
                className="text-text-medium hover:text-text-dark text-base font-semibold border-2 border-transparent hover:border-text-dark p-2 rounded-lg transition-all text-center tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Resume.pdf"
              target="_blank"
              onClick={closeMenu}
              className="mt-2 text-center btn-retro-primary w-full justify-center"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
