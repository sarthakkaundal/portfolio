import React from 'react';
import { motion } from 'framer-motion';

const InfiniteMarquee = ({ text }) => {
  return (
    <div className="w-full overflow-hidden flex flex-col items-center justify-center -mx-4 md:mx-0">
      <div className="relative w-[110%] overflow-hidden flex bg-background/80 backdrop-blur-md py-6 border-y border-glassBorder transform -rotate-3 my-10 z-20 shadow-2xl">
        {/* Subtle overlay to make text pop */}
        <div className="absolute inset-0 bg-gradient-to-r from-neonBlue/5 to-electricPurple/5 z-0"></div>
        
        <motion.div
          className="flex whitespace-nowrap z-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Slow, continuous crawl
          }}
        >
          <div className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-electricPurple opacity-80 uppercase tracking-widest px-8">
            {text} • {text} • {text} • {text} • {text} • {text} • 
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteMarquee;
