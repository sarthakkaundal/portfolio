import React from 'react';
import SkillCard from '../molecules/SkillCard';
import { Database, Server, Code, Layout, GitBranch, Cpu, Container, Hexagon, Component, Braces } from 'lucide-react';

const SkillsSection = () => {
  const coreSkills = [
    { name: 'React', icon: Component },
    { name: 'Node.js', icon: Server },
    { name: 'Express.js', icon: Container },
    { name: 'MongoDB', icon: Database },
    { name: 'JavaScript', icon: Braces },
    { name: 'TailwindCSS', icon: Layout },
  ];

  const languageSkills = [
    { name: 'C / C++', icon: Code },
    { name: 'Java', icon: Hexagon },
    { name: 'Python', icon: Cpu },
  ];

  const toolsSkills = [
    { name: 'MySQL', icon: Database },
    { name: 'Firebase', icon: Server },
    { name: 'Git & GitHub', icon: GitBranch },
  ];

  const SkillCategory = ({ title, skills, isCore, colorClass }) => (
    <div className={`mb-10 ${isCore ? 'p-6 md:p-8 rounded-2xl retro-card-large bg-primary-cream border-4 border-text-dark' : 'p-6 retro-card bg-white'}`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-2 border-b-2 border-text-dark pb-3">
        <h3 className={`font-display font-bold uppercase tracking-widest text-text-dark flex items-center gap-2`}>
          {isCore && <div className={`w-3 h-3 rounded-full border-2 border-text-dark shadow-[1px_1px_0_var(--text-dark)] ${colorClass || 'bg-accent-teal'}`}></div>}
          {title}
        </h3>
        {isCore && <span className="text-sm text-text-medium font-bold bg-white px-2 border-2 border-text-dark rounded-md shadow-[2px_2px_0_var(--text-dark)]">Primary Stack</span>}
      </div>
      <div className={`grid gap-4 ${isCore ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6' : 'grid-cols-2 lg:grid-cols-3'}`}>
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto relative z-10">
      <div className="flex flex-col mb-12">
        <h2 className="text-4xl font-black text-text-dark uppercase tracking-tight inline-block mb-3">
          Technical Arsenal
        </h2>
        <div className="h-1 w-24 bg-accent-coral border border-text-dark"></div>
      </div>

      <div className="space-y-8">
        <SkillCategory title="Core Stack" skills={coreSkills} isCore={true} colorClass="bg-accent-teal" />
        
        <div className="grid md:grid-cols-2 gap-8">
          <SkillCategory title="Languages" skills={languageSkills} colorClass="bg-accent-gold" />
          <SkillCategory title="Data & Dev Tools" skills={toolsSkills} colorClass="bg-accent-purple" />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
