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
          <div className="md:col-span-3 text-gray-400 space-y-4 text-lg">
            <p>
              Hello! My name is Sarthak, and I enjoy creating things that live on the internet. As a <span className="text-neonBlue">MERN stack developer</span> and an active competitive programmer, my interest in full-stack development was sparked by a desire to build impactful, scalable applications.
            </p>
            <p>
              Fast-forward to today, I am currently a <span className="text-white">BTech Computer Science student at Lovely Professional University</span> pursuing my degree with a CGPA of <span className="text-neonBlue font-semibold">8.39</span>. My primary focus these days is building scalable web solutions, tackling complex algorithmic problems, and translating those problem-solving skills to real-world software architecture.
            </p>
            <p>
              I am driven by creating high-performance, robust backend systems paired with flawless, interactive user interfaces, always eager to take on new challenges and build impactful solutions.
            </p>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="glass p-6 rounded-xl border border-white/5 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-cyber-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <h3 className="text-xl font-bold text-white mb-2">Education</h3>
              <p className="text-electricPurple font-medium mb-1">Lovely Professional University</p>
              <p className="text-gray-400">BTech Computer Science</p>
              <p className="text-sm text-gray-500 mt-2">CGPA: 8.39</p>
            </div>

            <div className="glass p-6 rounded-xl border border-white/5 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-cyber-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <h3 className="text-xl font-bold text-white mb-2">Achievements</h3>
              <ul className="text-gray-400 text-sm list-disc pl-4 marker:text-neonBlue space-y-2">
                <li><span className="text-white">2nd Position</span> — Group Discussion Competition (College)</li>
                <li>HackerRank <strong className="text-neonBlue">3★ Silver</strong> in Java</li>
                <li>Active Competitor on LeetCode</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
