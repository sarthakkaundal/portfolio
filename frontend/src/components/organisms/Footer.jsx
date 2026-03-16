import React from 'react';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          Designed & Built by <span className="text-gradient font-semibold">Sarthak Kaundal</span>
        </p>

        <div className="flex gap-6">
          <a href="https://github.com/sarthakkaundal" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-neonBlue transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/sarthak-kaundal/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-electricPurple transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:skkaundal9314@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
          <a href="https://leetcode.com/u/saarthak_kaundal/" target="_blank" rel="noreferrer" title="Leetcode" className="text-gray-400 hover:text-yellow-400 transition-colors">
            <Code2 size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
