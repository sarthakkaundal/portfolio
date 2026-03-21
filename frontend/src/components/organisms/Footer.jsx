import React from 'react';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          Designed & Built by <span className="text-gradient font-semibold">Sarthak Kaundal</span>
        </p>

        <div className="flex gap-8">
          <a href="https://github.com/sarthakkaundal" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-neonBlue hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all duration-300">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/sarthak-kaundal/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-electricPurple hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(188,19,254,0.8)] transition-all duration-300">
            <Linkedin size={20} />
          </a>
          <a href="mailto:skkaundal9314@gmail.com" className="text-gray-500 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">
            <Mail size={20} />
          </a>
          <a href="https://leetcode.com/u/saarthak_kaundal/" target="_blank" rel="noreferrer" title="Leetcode" className="text-gray-500 hover:text-yellow-400 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] transition-all duration-300">
            <Code2 size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
