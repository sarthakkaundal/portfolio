import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, isActive }) => {
  const shortDescription = project.description ? project.description.split('.')[0] + '.' : '';
  const highlights = project.features ? project.features.slice(0, 2) : [];

  return (
    <div
      className={`relative h-full w-full rounded-2xl overflow-hidden transition-all duration-300 ease-in-out ${
        isActive 
          ? 'retro-card-large bg-white opacity-100 scale-100 z-10' 
          : 'retro-card bg-primary-cream opacity-60 scale-95 border-2 brightness-90 grayscale-[20%]'
      }`}
    >
      {/* Top Image Area */}
      <div className="relative overflow-hidden h-48 sm:h-56 rounded-t-xl border-b-3 border-text-dark bg-gray-100">
        <img
          src={project.imagePlaceholder}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        
        {isActive && (
          <div className="absolute top-4 right-4 bg-accent-teal border-2 border-text-dark px-3 py-1 rounded-full flex items-center gap-1.5 shadow-[2px_2px_0_var(--text-dark)] z-20">
            <span className="text-[10px] uppercase tracking-widest text-white font-display font-bold">Featured</span>
          </div>
        )}
      </div>

      {/* Body Area */}
      <div className="p-5 flex flex-col flex-grow bg-white">
        <h3 className={`font-black tracking-tight leading-tight mb-1 ${isActive ? 'text-2xl text-text-dark' : 'text-xl text-text-dark'}`}>
          {project.title.split('—')[0].trim()}
        </h3>
        {project.title.includes('—') && (
          <p className="text-sm font-bold mt-1 uppercase tracking-widest text-text-medium mb-3">
            {project.title.split('—')[1]?.trim()}
          </p>
        )}

        {/* Quick Summary */}
        <p className="text-sm md:text-base font-medium text-text-medium mb-4 line-clamp-2">
          {shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack?.map((tech, index) => (
            <span key={index} className="px-2 py-1 text-[10px] sm:text-xs rounded-md font-display font-bold border-2 border-text-dark bg-primary-cream text-text-dark shadow-[1px_1px_0_var(--text-dark)]">
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <div className="flex-grow mb-4">
          <ul className="space-y-2">
            {highlights.map((feature, idx) => (
              <li key={idx} className="text-xs sm:text-sm flex items-start gap-2 font-medium text-text-medium">
                <span className="text-accent-coral font-bold mt-0.5">↳</span>
                <span className="leading-snug line-clamp-2">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-auto pt-4 border-t-2 border-gray-200">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-retro-outline bg-white px-4 py-2 flex-1 text-sm ${!isActive && 'pointer-events-none opacity-50'}`}
              tabIndex={isActive ? 0 : -1}
            >
              <Github size={16} />
              Code
            </a>
          )}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-retro-primary px-4 py-2 flex-1 text-sm ${!isActive && 'pointer-events-none opacity-50'}`}
              tabIndex={isActive ? 0 : -1}
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
