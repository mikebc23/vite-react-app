import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useLocalStorage<boolean>('darkMode', false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');  // Add 'dark' class to <html> when enabled
    } else {
      document.documentElement.classList.remove('dark');  // Remove 'dark' class when disabled
    }
  };

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');  // Apply dark mode on load if persisted
    }
  }, [darkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className={`px-4 py-2 rounded ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'
      }`}
    >
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
