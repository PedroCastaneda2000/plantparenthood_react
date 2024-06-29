import React from 'react';

interface LightButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const LightButton: React.FC<LightButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      className={`bg-primary-white rounded w-full h-14 ${className}`}
      onClick={onClick}
    >
      <p className='text-dark text-16sm font-inter font-semibold'>{text}</p>
    </button>
  );
};

export default LightButton;
