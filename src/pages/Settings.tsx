import React from 'react';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import DarkModeToggle from '../components/DarkModeToggle'; // Import the toggle button

const Settings: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Settings Page</h1>
      <Checkbox label="Enable notifications" />
      <Input label="Name" type="text" />
      <Input label="Email" type="email" />
      <Input label="Password" type="password" />
      <div className="mt-4">
        <DarkModeToggle /> {/* Add the dark mode toggle */}
      </div>
    </div>
  );
};

export default Settings;
