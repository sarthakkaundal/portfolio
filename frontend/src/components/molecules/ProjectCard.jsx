import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, isActive }) => {
  // A short 1-line impact statement derived from the first sentence of description or purpose
  const shortDescription = project.description ? project.description.split('.')[0] + '.' : '';
  
  // Max 2 concise key highlights to reduce density
  const highlights = project.features ? project.features.slice(0, 2) : [];

  return (
    <div
      className={`relative h-full w-full rounded-2xl overflow-hidden transition-all duration-700 ease-in-out ${
        isActive 
          ? 'glass-card border-neonBlue/50 shadow-[0_0_30px_rgba(0,240,255,0.15)] bg-darkGray/80' 
          : 'bg-white/[0.02] border-white/5 backdrop-blur-md shadow-none grayscale-[40%]'
      }`}
    >
      {/* Animated Cyberpunk Background Accent for active card */}
      {isActive && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-neonBlue/20 animate-[spin_4s_linear_infinite]" />
          <div className="absolute inset-[1px] bg-darkGray/90 rounded-2xl backdrop-blur-xl" />
        </div>
      )}

      {/* Card Content */}
      <div className="relative z-10 flex flex-col h-full text-left">
        {/* Top Image Area */}
        <div className="relative overflow-hidden h-48 sm:h-56 rounded-t-2xl">
          <img
            src={project.imagePlaceholder}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${isActive ? 'scale-100' : 'scale-105'}`}
          />
          <div className="absolute inset-0 bg-darkGray/60" />
          
          {isActive && (
            <div className="absolute top-4 right-4 bg-darkGray/60 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20">
              <div className="w-1.5 h-1.5 rounded-full bg-neonBlue animate-pulse" />
              <span className="text-[9px] uppercase tracking-widest text-white font-mono">Spotlight</span>
            </div>
          )}
          
          <div className="absolute bottom-4 left-5 right-5">
            <h3 className={`font-bold tracking-wide transition-all duration-500 leading-tight ${isActive ? 'text-xl sm:text-2xl text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'text-lg text-gray-400'}`}>
              {project.title.split('—')[0].trim()}
            </h3>
            {project.title.includes('—') && (
              <p className={`text-xs font-medium mt-1 uppercase tracking-wider ${isActive ? 'text-neonBlue' : 'text-gray-500'}`}>
                {project.title.split('—')[1]?.trim()}
              </p>
            )}
          </div>
        </div>

        {/* Body Area */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Quick Summary */}
          <p className={`text-sm mb-4 transition-all duration-500 line-clamp-2 ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>
            {shortDescription}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.techStack?.map((tech, index) => (
              <span key={index} className={`px-2 py-1 text-[10px] sm:text-xs rounded-md font-mono border transition-colors ${isActive ? 'bg-neonBlue/10 text-neonBlue border-neonBlue/20 shadow-[0_0_10px_rgba(0,240,255,0.1)]' : 'bg-white/5 text-gray-500 border-white/5'}`}>
                {tech}
              </span>
            ))}
          </div>

          {/* Highlights */}
          <div className="flex-grow">
            <h4 className={`text-[10px] font-semibold uppercase tracking-widest mb-2 ${isActive ? 'text-white/70' : 'text-white/30'}`}>
              Highlights
            </h4>
            <ul className="space-y-1.5">
              {highlights.map((feature, idx) => (
                <li key={idx} className={`text-xs flex align-top gap-2 ${isActive ? 'text-gray-400' : 'text-gray-600'}`}>
                  <span className={`mt-[2px] text-[8px] ${isActive ? 'text-electricPurple' : 'text-white/10'}`}>▶</span>
                  <span className="leading-snug line-clamp-2">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mt-5 pt-4 border-t border-white/10">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 ${isActive ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-400'} ${!isActive && 'pointer-events-none'}`}
                tabIndex={isActive ? 0 : -1}
              >
                <Github size={16} />
                <span>Source</span>
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 ${isActive ? 'text-electricPurple hover:text-electricPurple/80 shadow-electricPurple' : 'text-gray-600'} ${!isActive && 'pointer-events-none'}`}
                tabIndex={isActive ? 0 : -1}
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
