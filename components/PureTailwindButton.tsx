'use client';
import React from 'react';

interface PureTailwindButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const PureTailwindButton = ({ children, className = '', onClick, ...props }: PureTailwindButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-blue-600 hover:bg-blue-700
        text-white font-semibold
        px-6 py-3
        rounded-lg
        transition-all duration-200
        shadow-md hover:shadow-lg
        active:scale-95
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default PureTailwindButton;
