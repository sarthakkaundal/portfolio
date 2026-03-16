import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ name, icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass p-4 rounded-xl flex flex-col items-center justify-center gap-3 border border-white/5 hover:border-electricPurple/50 hover:shadow-[0_0_20px_rgba(188,19,254,0.2)] transition-all"
    >
      <div className="text-neonBlue text-4xl">
        <Icon />
      </div>
      <span className="text-gray-300 font-medium text-sm">{name}</span>
    </motion.div>
  );
};

export default SkillCard;
