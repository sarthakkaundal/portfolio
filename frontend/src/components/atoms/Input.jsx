import React from 'react';

const Input = ({ label, type = 'text', name, value, onChange, placeholder, isTextArea = false, className = '', ...props }) => {
  const baseClasses = 'w-full bg-foreground/[0.02] border border-foreground/10 rounded-xl p-4 text-foreground placeholder-lightGray focus:outline-none focus:border-neonBlue/50 focus:bg-foreground/[0.05] focus:ring-4 focus:ring-neonBlue/10 transition-all duration-300';

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
