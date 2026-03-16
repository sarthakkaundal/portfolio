import React from 'react';
import { motion } from 'framer-motion';
import Badge from '../atoms/Badge';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass-card flex flex-col h-full group"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={project.imagePlaceholder}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent opacity-80" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack?.map((tech, index) => (
            <Badge key={index}>{tech}</Badge>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10 mb-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neonBlue transition-colors flex items-center gap-2 text-sm"
            >
              <Github size={18} />
              <span>Source</span>
            </a>
          )}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-electricPurple transition-colors flex items-center gap-2 text-sm"
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          )}
        </div>

        {project.features && project.features.length > 0 && (
          <div className="pt-4 border-t border-white/10 mt-2">
            <h4 className="text-white text-sm font-semibold mb-2">Architecture Highlights</h4>
            <ul className="text-gray-400 text-xs list-disc pl-4 marker:text-neonBlue space-y-1">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
