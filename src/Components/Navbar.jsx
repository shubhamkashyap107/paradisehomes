import React from 'react';
import logo from '../assets/Logos/finalPng.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6 flex justify-between items-center shadow-lg">
      <div className="cursor-pointer transform transition duration-300 hover:scale-105">
        <img src={logo} alt="Logo" className="h-[60px]" />
      </div>
      <div className="flex space-x-8">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive 
              ? "text-white text-lg font-medium border-b-2 border-yellow-500 pb-1 transition-all duration-300 transform scale-x-100 origin-left"
              : "text-gray-200 text-lg font-medium hover:text-white pb-1 transition-all duration-300 border-b-2 border-transparent transform hover:scale-x-100 origin-left"
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => 
            isActive 
              ? "text-white text-lg font-medium border-b-2 border-yellow-500 pb-1 transition-all duration-300 transform scale-x-100 origin-left"
              : "text-gray-200 text-lg font-medium hover:text-white pb-1 transition-all duration-300 border-b-2 border-transparent transform hover:scale-x-100 origin-left"
          }
        >
          Projects
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            isActive 
              ? "text-white text-lg font-medium border-b-2 border-yellow-500 pb-1 transition-all duration-300 transform scale-x-100 origin-left"
              : "text-gray-200 text-lg font-medium hover:text-white pb-1 transition-all duration-300 border-b-2 border-transparent transform hover:scale-x-100 origin-left"
          }
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
