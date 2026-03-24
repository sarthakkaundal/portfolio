import React from 'react';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t-4 border-text-dark bg-primary-cream mt-20 relative z-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-text-dark font-black uppercase tracking-wide text-sm flex items-center gap-2">
          Designed & Built by 
          <span className="bg-accent-teal text-white px-2 py-1 border-2 border-text-dark shadow-[2px_2px_0_var(--text-dark)] rotate-1 inline-block">Sarthak Kaundal</span>
        </p>

        <div className="flex gap-4">
          <a href="https://github.com/sarthakkaundal" target="_blank" rel="noreferrer" className="retro-icon bg-white hover:bg-accent-blue hover:text-white" aria-label="GitHub">
            <Github size={20} strokeWidth={2.5} />
          </a>
          <a href="https://www.linkedin.com/in/sarthak-kaundal/" target="_blank" rel="noreferrer" className="retro-icon bg-white hover:bg-accent-blue hover:text-white" aria-label="LinkedIn">
            <Linkedin size={20} strokeWidth={2.5} />
          </a>
          <a href="mailto:skkaundal9314@gmail.com" className="retro-icon bg-white hover:bg-accent-coral hover:text-white" aria-label="Email">
            <Mail size={20} strokeWidth={2.5} />
          </a>
          <a href="https://leetcode.com/u/saarthak_kaundal/" target="_blank" rel="noreferrer" title="Leetcode" className="retro-icon bg-white hover:bg-accent-gold hover:text-white" aria-label="LeetCode">
            <Code2 size={20} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
