import { motion } from 'framer-motion';

const InfiniteMarquee = ({ text }) => {
  return (
    <div className="w-full overflow-hidden flex flex-col items-center justify-center -mx-4 md:mx-0 relative z-20">
      <div className="relative w-[110%] overflow-hidden flex bg-accent-gold py-6 border-y-4 border-text-dark transform rotate-2 my-10 shadow-[0_8px_0_var(--text-dark)]">
        <motion.div
          className="flex whitespace-nowrap z-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          <div className="text-5xl md:text-7xl font-black text-text-dark font-display uppercase tracking-widest px-8">
            {text} • {text} • {text} • {text} • {text} • {text} • 
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteMarquee;
