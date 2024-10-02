import React from 'react';

interface InputProps {
  label: string;
  type: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, type, onChange }) => {
    return (
      <label className="block mb-2">
        <span className="block text-sm font-medium text-gray-700">{label}</span> {/* Label */}
        <input
          type={type}  
          onChange={onChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </label>
    );
  };

export default Input;
