import React from 'react';
import { FaCog, FaBell, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="text-white">Logo</div>
        <div className="flex items-center space-x-4">
          <Link to='/configuracion'><FaCog className="text-white" /></Link>
          <Link to='/notificaciones'><FaBell className="text-white" /></Link>
          <Link to='/login'><FaSignOutAlt className="text-white" /></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
