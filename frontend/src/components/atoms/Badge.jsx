import React from 'react';

const Badge = ({ children, className = '' }) => {
  return (
    <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-electricPurple/20 text-electricPurple border border-electricPurple/30 ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
