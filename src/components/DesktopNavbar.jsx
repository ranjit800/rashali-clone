import React from "react";
import logo from "../assets/Images/logo.png";

const DesktopNavbar = ({ scrolled, navLinks, activeLink }) => {
  return (
    <div className="hidden md:flex justify-between items-center w-full">
      {/* Logo Image */}
      <div className="flex flex-col items-start">
        <img src={logo} alt="Logo" className="w-20 object-contain" />
      </div>

      {/* Nav Items */}
      <ul className="flex space-x-10 text-white font-semibold">
        {navLinks.map((item, idx) => (
          <li key={idx} className="relative group cursor-pointer">
            <span className={`${item === activeLink ? "text-purple-400" : "text-white"} transition-colors duration-300`}>{item}</span>
            <div
              className={`absolute left-0 bottom-[-4px] h-[2px] w-full bg-gradient-to-r from-blue-400 to-purple-400 transition-opacity duration-300 ${
                item === activeLink ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopNavbar;
