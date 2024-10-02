import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage'; // Import the custom hook

interface CheckboxProps {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  // Use the custom hook to store the checkbox state in localStorage
  const [checked, setChecked] = useLocalStorage<boolean>('notificationsEnabled', false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <label className="flex items-center space-x-2">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
