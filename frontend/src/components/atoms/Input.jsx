import React from 'react';

const Input = ({ label, type = 'text', name, value, onChange, placeholder, isTextArea = false, className = '', ...props }) => {
  const baseClasses = 'w-full bg-darkGray/60 border border-white/10 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-neonBlue focus:shadow-[0_0_10px_rgba(0,243,255,0.3)] transition-all duration-300';

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <label className="text-sm font-medium text-gray-300">{label}</label>}
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
