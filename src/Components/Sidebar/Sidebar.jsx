import React from 'react';
import { FaHome, FaTh, FaAddressBook, FaHistory } from 'react-icons/fa';
import { FaLaptopFile } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 w-1/5 p-4 h-screen">
      <div className="flex items-center justify-center mb-8">
        <div className="bg-white h-1 w-3/4 rounded-full"></div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <FaHome className="text-white" />
          <span className="text-white">Inicio</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaTh className="text-white" />
          <span className="text-white">Otra opción</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaAddressBook className="text-white" />
          <span className="text-white">Registro</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaLaptopFile className="text-white" />
          <span className="text-white">Objetos Registrados</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaHistory className="text-white" />
          <span className="text-white">Historial</span>
        </div>
      </div>
      <div className="mt-auto ">
        <div className="flex items-center justify-center mt-8">
          <div className="bg-white h-1 w-3/4 rounded-full"></div>
        </div>
        <div className="flex items-center justify-center mt-8">
          <span className="text-white">Logo Empresa</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
