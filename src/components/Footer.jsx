import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsFillSendFill } from "react-icons/bs";
import Logo from '../assets/Images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#592B8C]/95 to-black/95 text-white pt-10">
      {/* Newsletter */}
      <div className="py-6 md:py-12 px-4 md:px-8 bg-white/10 backdrop-blur-lg rounded-xl mx-2 sm:mx-4 md:mx-12 mt-8 mb-4 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Stay Updated with Our Newsletter</h3>
            <p className="text-gray-300 mt-1">Get the latest news and updates delivered directly to your inbox.</p>
          </div>
          <div className="flex w-full md:w-auto items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-l-md bg-black text-white focus:outline-none w-full md:w-80"
            />
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-r-md text-white font-semibold flex items-center justify-center">
              Subscribe <span className="ml-1">
              <BsFillSendFill />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 h-full border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
          <img src={Logo} alt="Rashail Infotech Logo" className="h-12 mb-4" />
          <p className="text-sm mt-2 text-gray-400">An IT Division of</p>
          <a
            href="https://rashailinfotech.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 underline"
          >
            Rashail Tech Labs Private Limited ↗
          </a>

          <div className="mt-4 text-gray-300 space-y-2">
            <div className="flex items-center gap-2">
              <MdPhone className="text-purple-500" />
              <span>+91 86027 93619</span>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-purple-500" />
              <span>info@rashailinfotech.co.in</span>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-purple-500" />
              <span>sales@rashailinfotech.co.in</span>
            </div>
          </div>

          <div className="flex gap-4 mt-4 text-purple-400 text-lg">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h5 className="text-xl font-semibold pb-2 mb-2">Quick Links</h5>
          <div className="h-[0.5px] w-2/5 bg-purple-500 mb-4 mx-auto md:mx-0"></div>
          <ul className="space-y-2 text-gray-300">
            <li className="text-purple-400 cursor-pointer">›<span className='hover:text-purple-500 text-white'> Careers</span></li>
            <li className="text-purple-400 cursor-pointer">›<span className='hover:text-purple-500 text-white'> Blogs</span></li>
            <li className="text-purple-400 cursor-pointer">›<span className='hover:text-purple-500 text-white'> Terms & Conditions</span> </li>
            <li className="text-purple-400 cursor-pointer">›<span className='hover:text-purple-500 text-white'> Privacy Policy</span></li>
          </ul>
        </div>

        {/* Pages */}
        <div className="text-center md:text-left">
          <h5 className="text-xl font-semibold pb-2 mb-2">Pages</h5>
          <div className="h-[0.5px] w-1/5 bg-purple-500 mb-4 mx-auto md:mx-0"></div>
          <ul className="space-y-2 text-gray-300">
            <li className="text-purple-400 cursor-pointer">›<span className='hover:text-purple-500 text-white'> Home</span></li>
            <li className="text-purple-400 cursor-pointer">›<span className='hover:text-purple-500 text-white'> About Us</span></li>
            <li className="text-purple-400 cursor-pointer">›<span className='hover:text-purple-500 text-white'> Services</span></li>
            <li className="text-purple-400 cursor-pointer">›<span className='hover:text-purple-500 text-white'> Portfolio</span></li>
            <li className="text-purple-400 cursor-pointer">›<span className='hover:text-purple-500 text-white'> Contact Us</span></li>
          </ul>
        </div>

        {/* Google Map */}
        <div className="text-center md:text-left">
          <h5 className="text-xl font-semibold flex items-center gap-1 text-purple-400 mb-2 justify-center md:justify-start">
            <HiOutlineLocationMarker /> Find Us
          </h5>
          <div className="h-[0.5px] w-2/5 bg-purple-500 mb-4 mx-auto md:mx-0"></div>
          <div className="relative">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7361.731985521594!2d75.86467!3d22.696032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd3c0a8ef0fd%3A0x406b8e6797d06f57!2sRashail%20Tech%20Labs%20Private%20Limited!5e0!3m2!1sen!2sin!4v1744136763280!5m2!1sen!2sin"
              width="100%"
              height="250"
              className="rounded-md border-2 border-white"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="absolute inset-0 bg-gray-900 opacity-50 rounded-md pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center py-4 border-t border-gray-600 text-gray-400 text-sm max-w-7xl mx-auto">
        © 2025 Rashail Infotech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
