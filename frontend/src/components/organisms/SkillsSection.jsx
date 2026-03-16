import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from '../molecules/SkillCard';
import { Database, Server, Code, Layout, GitBranch, Cpu, Container, Hexagon, Component, Braces } from 'lucide-react';

const SkillsSection = () => {
  const languageSkills = [
    { name: 'C / C++', icon: Code },
    { name: 'Java', icon: Hexagon },
    { name: 'Python', icon: Cpu },
    { name: 'JavaScript', icon: Braces },
  ];

  const frontendSkills = [
    { name: 'React', icon: Component },
    { name: 'TailwindCSS', icon: Layout },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: Server },
    { name: 'Express', icon: Container },
  ];

  const databaseSkills = [
    { name: 'MongoDB', icon: Database },
    { name: 'MySQL', icon: Database },
    { name: 'Firebase', icon: Server },
    { name: 'Git', icon: GitBranch },
  ];

  const SkillCategory = ({ title, skills, delayOffset }) => (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-300 mb-6">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

        <div className="space-y-12">
          <SkillCategory title="Languages" skills={languageSkills} delayOffset={0.1} />
          <SkillCategory title="Frontend Development" skills={frontendSkills} delayOffset={0.3} />
          <SkillCategory title="Backend Development" skills={backendSkills} delayOffset={0.5} />
          <SkillCategory title="Database & Others" skills={databaseSkills} delayOffset={0.7} />
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
