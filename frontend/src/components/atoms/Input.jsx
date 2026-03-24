import React from 'react';

const Input = ({ label, isTextArea, ...props }) => {
  const baseClasses = 'w-full p-3 bg-white border-2 border-text-dark rounded-xl font-medium text-text-dark transition-all duration-300 focus:outline-none focus:bg-primary-cream focus:-translate-y-0.5 focus:-translate-x-0.5 focus:shadow-[4px_4px_0_var(--text-dark)] shadow-[2px_2px_0_var(--text-dark)] placeholder:text-text-light';

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && <label className="text-sm font-bold font-display uppercase tracking-wider text-text-dark">{label}</label>}
      {isTextArea ? (
        <textarea className={`${baseClasses} min-h-[120px] resize-y`} {...props} />
      ) : (
        <input className={baseClasses} {...props} />
      )}
    </div>
  );
};

export default Input;
