import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../atoms/Button';
import MagneticWrapper from '../atoms/MagneticWrapper';

const ROLES = ["MERN Developer", "Problem Solver", "AI Enthusiast", "Software Engineer"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-20 px-6 max-w-7xl mx-auto">
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-electricPurple/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-neonBlue/20 rounded-full blur-[120px] -z-10" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="h-[1px] w-8 bg-neonBlue"></div>
            <span className="text-neonBlue font-mono font-semibold tracking-widest uppercase text-sm">
              Hello, World! I am
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-[5.5rem] font-extrabold text-foreground tracking-tighter leading-tight"
          >
            Sarthak Kaundal.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold flex flex-wrap gap-3 text-lightGray mb-8"
          >
            <span>I'm {/^[AEIOU]/i.test(ROLES[roleIndex]) ? 'an' : 'a'}</span>
            <div className="relative flex-1 min-w-[300px]">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                  className="absolute top-0 left-0 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200 whitespace-nowrap"
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-lightGray max-w-xl leading-relaxed font-light mt-4"
          >
            Turning complex problems into <strong className="text-foreground font-semibold">scalable web solutions.</strong>
            <br className="mb-2" />
            I’m a software engineer specializing in building exceptional digital experiences with a focus on robust architectures and intuitive design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 pt-4"
          >
            <MagneticWrapper>
              <Button variant="primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                View Projects
              </Button>
            </MagneticWrapper>
            <MagneticWrapper>
              <Button variant="secondary" onClick={() => window.open('/Resume.pdf', '_blank')}>
                Download Resume
              </Button>
            </MagneticWrapper>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative hidden md:flex justify-center"
        >
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl border-2 border-neonBlue relative z-10 p-2 object-cover overflow-hidden transition-all hover:border-electricPurple shadow-2xl group">
             {/* Profile image Placeholder implementation. User should replace /profile.jpg with their actual image */}
            <div className="w-full h-full bg-darkGray rounded-xl absolute inset-0 z-20 flex items-center justify-center -translate-x-[10px] -translate-y-[10px] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 border border-white/10 overflow-hidden">
               <img src="/profile.jpeg" alt="Sarthak Kaundal" className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-500" />
            </div>
            <div className="absolute inset-0 bg-neonBlue/10 z-0 rounded-2xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
