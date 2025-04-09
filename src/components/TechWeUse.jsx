import React from 'react';
import BgImg from '../assets/Images/TechUse/background-img.png';

const TechWeUse = () => {
  return (
    <section className="text-white pt-8 md:pt-16 pb-6 px-4 md:px-16 text-center bg-gradient-to-b from-transparent to-[#1C222E] mb-8 md:mb-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#7429C6]">
          Technologies We Use
        </h2>
        <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
          At Rashail, we pride ourselves on being at the forefront of technological innovation. Our commitment to providing top-notch IT Services is backed by our multidisciplinary expertise, coupled with cutting-edge technologies we use to meet our clients' needs.
        </p>
      </div>

      <div className="container mx-auto">
        <div className="w-full h-full flex justify-center items-center p-4 md:p-10 lg:p-20 backdrop-blur-md bg-[#464d5a] bg-opacity-50 rounded-lg">
          <img 
            src={BgImg} 
            alt="Tech Stack" 
            className="w-full h-full object-contain md:object-cover" 
          />
        </div>
      </div>
    </section>
  );
};

export default TechWeUse;
