import { useState, useEffect } from 'react';
import Button from '../atoms/Button';

const ROLES = [
  "Building scalable web apps.",
  "Creating AI-assisted solutions.",
  "Designing practical systems.",
  "Solving real-world problems."
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-20 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="retro-bg-pattern"></div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-1 w-8 bg-text-dark"></div>
            <span className="text-accent-teal font-display font-bold tracking-widest uppercase text-sm">
              Hello, World! I am
            </span>
          </div>

          <h1 className="text-6xl md:text-[5.5rem] font-black text-text-dark tracking-tighter leading-tight drop-shadow-sm">
            Sarthak Kaundal.
          </h1>

          <div className="flex flex-col gap-2 mb-6">
            <span className="text-3xl md:text-5xl font-bold text-text-dark">MERN Developer.</span>
            <div className="h-10 md:h-12 w-full overflow-hidden text-accent-teal font-display text-2xl font-bold">
               {ROLES[roleIndex]}
            </div>
          </div>

          {/* Credibility / Proof Strip */}
          <div className="flex flex-wrap gap-3 mb-2">
            <span className="retro-tag retro-tag-outline border-2 border-text-dark">8.39 CGPA</span>
            <span className="retro-tag retro-tag-teal border-2 border-text-dark">100+ LeetCode Problems Solved</span>
            <span className="retro-tag retro-tag-purple border-2 border-text-dark">Full-Stack Focus</span>
          </div>

          <p className="text-base md:text-lg text-text-medium max-w-xl leading-relaxed font-medium mb-8">
            I build full-stack applications that combine clean user experiences, solid backend systems, and practical problem-solving.
          </p>

          <div className="flex flex-wrap items-center gap-5 pt-2">
            <Button variant="primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              Explore Projects
            </Button>
            <Button variant="secondary" onClick={() => window.open('/Resume.pdf', '_blank')}>
              Download Resume
            </Button>
            <a href="https://github.com/sarthakkaundal" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-xl border-3 border-text-dark font-display font-bold text-text-dark transition-all md:ml-3 flex items-center gap-2 bg-white flex-shrink-0" style={{ border: '3px solid var(--text-dark)', boxShadow: '4px 4px 0 var(--text-dark)' }}>
              GitHub <span className="text-lg leading-none">↗</span>
            </a>
          </div>
        </div>

        <div className="relative flex justify-center mt-12 md:mt-0 w-full">
          {/* Profile image container replacing glowing Lottie */}
          <div className="retro-card-large w-72 h-72 md:w-96 md:h-96 p-2 bg-[#ffddaa] flex items-center justify-center transform hover:-rotate-2 transition-transform duration-300">
            <img src="/profile.jpeg" alt="Sarthak Kaundal" className="w-full h-full object-cover rounded-xl border-4 border-text-dark" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
