import React from 'react';
import { motion } from 'framer-motion';
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

  const SkillCategory = ({ title, skills, delayOffset, isCore }) => (
    <div className={`mb-10 ${isCore ? 'p-6 md:p-8 rounded-2xl glass border-neonBlue/20 shadow-[0_0_30px_rgba(0,240,255,0.03)]' : ''}`}>
      <h3 className={`font-mono uppercase tracking-widest mb-6 ${isCore ? 'text-neonBlue text-sm font-semibold flex items-center gap-2' : 'text-gray-500 text-xs'}`}>
        {isCore && <div className="w-2 h-2 rounded-full bg-neonBlue animate-pulse"></div>}
        {title}
      </h3>
      <div className={`grid gap-4 ${isCore ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6' : 'grid-cols-2 md:grid-cols-3'}`}>
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            delay={delayOffset + index * 0.1}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-electricPurple/10 rounded-full blur-[100px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-neonBlue font-mono text-xl mr-2">02.</span> Technical Arsenal
          </h2>
          <div className="h-[1px] bg-white/10 flex-grow"></div>
        </div>

        <div className="space-y-4">
          <SkillCategory title="Core Stack" skills={coreSkills} delayOffset={0.1} isCore={true} />
          
          <div className="grid md:grid-cols-2 gap-8">
            <SkillCategory title="Languages" skills={languageSkills} delayOffset={0.3} />
            <SkillCategory title="Data & Dev Tools" skills={toolsSkills} delayOffset={0.5} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
