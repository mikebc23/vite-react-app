import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <ul className="flex justify-center space-x-8 p-4">
        <li><Link to="/" className="text-gray-700 hover:text-blue-500 transition duration-300">Home</Link></li>
        <li><Link to="/profile" className="text-gray-700 hover:text-blue-500 transition duration-300">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
