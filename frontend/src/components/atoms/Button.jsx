import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-6 py-2 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-neonBlue to-electricPurple text-white border-transparent hover:shadow-lg hover:shadow-neonBlue/30 hover:-translate-y-1',
    secondary: 'bg-glassBg border border-electricPurple text-electricPurple hover:shadow-[0_0_15px_rgba(188,19,254,0.6)] hover:bg-electricPurple hover:text-white',
    outline: 'border border-glassBorder text-lightGray hover:border-foreground hover:text-foreground',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
