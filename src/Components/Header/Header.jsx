import React from 'react';
import { FaCog, FaBell, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="text-white">Logo</div>
        <div className="flex items-center space-x-4">
          <FaCog className="text-white" />
          <FaBell className="text-white" />
          <FaSignOutAlt className="text-white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
