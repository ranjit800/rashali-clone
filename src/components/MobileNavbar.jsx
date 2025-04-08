import React, { useState, useEffect } from "react";
import logo from "../assets/Images/logo.png";
import { IoClose } from "react-icons/io5";

const MobileNavbar = ({ navLinks, activeLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="md:hidden w-full">
      <div className="flex justify-between items-center">
        {/* Logo Image */}
        <div className="flex flex-col items-start px-2">
          <img src={logo} alt="Logo" className="w-20 object-contain" />
        </div>

        {/* Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="menu-button text-white p-2 focus:outline-none" 
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <IoClose className="w-6 h-6" />
          ) : (
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="block w-full h-0.5 bg-white" />
              <span className="block w-full h-0.5 bg-white" />
              <span className="block w-full h-0.5 bg-white" />
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`mobile-menu fixed top-0 right-0 h-full w-64 bg-[#131826] backdrop-blur-sm transition-all duration-300 transform ${
          isOpen 
            ? "translate-x-0 opacity-100" 
            : "translate-x-full opacity-0"
        }`}
      >
        {/* Close Button */}
        <button 
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white p-2 focus:outline-none"
        >
          <IoClose className="w-6 h-6" />
        </button>

        <div className="pt-20 px-6">
          <ul className="space-y-4">
            {navLinks.map((item, idx) => (
              <li key={idx} className="relative group">
                <span className={`block text-white font-semibold ${item === activeLink ? "text-purple-400" : ""}`}>
                  {item}
                </span>
                <div className={`absolute left-0 bottom-[-4px] h-[2px] w-full bg-gradient-to-r from-blue-400 to-purple-400 ${
                  item === activeLink ? "opacity-100" : "opacity-0"
                }`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
