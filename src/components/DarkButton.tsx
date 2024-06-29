import React from 'react';

interface DarkButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const DarkButton: React.FC<DarkButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      className={`bg-secondary-solid rounded w-full h-14 hover:bg-[#97373A] transition duration-500 ${className}`}
      onClick={onClick}
    >
      <p className='text-light text-16sm font-inter font-semibold'>{text}</p>
    </button>
  );
};

export default DarkButton;
