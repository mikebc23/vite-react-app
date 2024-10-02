import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, color = 'bg-blue-500' }) => {
  return (
    <button
      onClick={onClick}
      className={`${color} text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300`}
    >
      {label}
    </button>
  );
};

export default Button;
