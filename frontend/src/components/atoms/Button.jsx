import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'btn-retro-primary',
    secondary: 'btn-retro-secondary',
    outline: 'btn-retro-outline',
  };

  return (
    <button
      onClick={onClick}
      className={`${variants[variant] || 'btn-retro-primary'} ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
