import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-electricPurple font-mono text-xl mr-2">01.</span> About Me
          </h2>
          <div className="h-[1px] bg-white/10 flex-grow"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 text-gray-400 space-y-6 text-base md:text-lg relative">
            <p className="leading-relaxed">
              Hello! I'm Sarthak, a <span className="text-white font-medium">MERN stack developer</span> and competitive programmer. I bridge the gap between algorithmic problem-solving and building robust, real-world software applications.
            </p>
            
            <ul className="space-y-4 font-light mt-6">
              <li className="flex items-start gap-3 group">
                <span className="text-neonBlue mt-[5px] text-xs transition-transform group-hover:scale-125 group-hover:text-white">▹</span>
                <span className="leading-relaxed">Focusing heavily on <span className="text-white font-medium">scalable backend systems</span> and interactive frontends.</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-electricPurple mt-[5px] text-xs transition-transform group-hover:scale-125 group-hover:text-white">▹</span>
                <span className="leading-relaxed">Applying competitive programming logic and data structures to design highly efficient architectures.</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-neonBlue mt-[5px] text-xs transition-transform group-hover:scale-125 group-hover:text-white">▹</span>
                <span className="leading-relaxed">Always exploring new technologies, from AI integrations to seamless cloud deployments.</span>
              </li>
            </ul>

            <div className="pt-6 mt-4 border-t border-white/10">
              <p className="text-sm font-mono text-gray-500 leading-relaxed">
                <span className="text-white/80">Current Status:</span> Pursuing BTech Computer Science (CGPA: <span className="text-neonBlue">8.39</span>)<br/>
                Actively seeking software engineering roles and collaborations.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="glass p-6 rounded-xl border border-white/5 shadow-xl relative overflow-hidden group hover:border-white/10 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neonBlue to-electricPurple scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-mono">Education</h3>
              <p className="text-lg font-bold text-white mb-1">BTech Computer Science</p>
              <p className="text-gray-400 text-sm mb-4">Lovely Professional University</p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neonBlue/10 border border-neonBlue/20 rounded text-neonBlue text-sm font-mono">
                <span className="w-2 h-2 rounded-full bg-neonBlue animate-pulse"></span>
                CGPA: 8.39
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-white/5 shadow-xl relative overflow-hidden group hover:border-white/10 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electricPurple to-neonBlue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-mono">Key Highlights</h3>
              <ul className="text-gray-400 text-sm space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-neonBlue text-lg font-bold">2<span className="text-xs uppercase align-top">nd</span></span>
                  <span className="leading-snug pt-1">Position — Group Discussion Competition</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electricPurple text-lg font-bold">3★</span>
                  <span className="leading-snug pt-1">Silver Badge on HackerRank (Java)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00f0ff] text-lg font-bold">{'{ }'}</span>
                  <span className="leading-snug pt-1">Active problem solver on LeetCode</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
