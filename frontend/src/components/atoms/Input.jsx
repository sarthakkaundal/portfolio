import React from 'react';

const Input = ({ label, type = 'text', name, value, onChange, placeholder, isTextArea = false, className = '', ...props }) => {
  const baseClasses = 'w-full bg-white/[0.02] border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-neonBlue/50 focus:bg-white/[0.05] focus:ring-4 focus:ring-neonBlue/20 focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300 font-light';

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <label className="text-sm font-semibold text-foreground/80 pl-1">{label}</label>}
      {isTextArea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows="5"
          className={`${baseClasses} resize-none`}
          {...props}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={baseClasses}
          {...props}
        />
      )}
    </div>
  );
};

export default Input;
