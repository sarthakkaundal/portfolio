import React from 'react';

const SkillCard = ({ name, icon: Icon, delay = 0 }) => {
  return (
    <div className="retro-card p-4 flex flex-col items-center justify-center gap-3 bg-white">
      <div className="text-accent-teal">
        {Icon && <Icon size={32} strokeWidth={2.5} />}
      </div>
      <span className="text-text-dark font-display font-bold text-sm tracking-wide">{name}</span>
    </div>
  );
};

export default SkillCard;
