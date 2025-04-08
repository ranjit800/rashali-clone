import React, { useState, useEffect } from "react";
import leftImage from "../assets/Images/heroImg-left.png";
import rightImage from "../assets/Images/heroImg-right.png";

const HeroSection = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = ["IT and Consulting services to power up your business.", "Digital transformation solutions for enterprise.", "Cloud solutions that scale with your needs."];

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % phrases.length;
      const fullText = phrases[currentIndex];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  return (
    <div className="w-full">
       <div className=" container mx-auto relative flex flex-col md:flex-row items-center justify-between  px-6 md:px-4 py-16  bg-transparent  text-white ">
      {/* Left Section */}
      <div className="relative z-10 md:w-1/2 space-y-6">
        <img src={leftImage} alt="Left Background" className="absolute top-0 left-0 w-full h-full object-cover opacity-30 -z-10" />
        <div className="flex items-center space-x-4 text-sm text-blue-400 font-semibold">
          <span>◆ INNOVATE</span>
          <span>◆ TRANSFORM</span>
          <span>◆ GROW</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500 text-transparent bg-clip-text">
            {text}
            <span className="animate-blink">|</span>
          </span>
        </h1>
        <p className="text-[#B0B3BD] text-xl max-w-md">Further your market position with expert IT and Consulting services</p>
        <button className="bg-gradient-to-r  from-blue-500 to-purple-600 px-6 py-3 text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:shadow-[0_0_40px_#263467] transition duration-300">
          Get in Touch →
        </button>
      </div>
      {/* bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 */}
      {/* Right Section */}
      <div className="w-full md:w-1/2 animate-fadeIn relative mb-10 md:mb-0" style={{ opacity: 1, transform: "none" }}>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-75 blur-md"></div>
        <div className="relative transform transition duration-700 hover:scale-105 backdrop-blur-sm bg-gray-900/40 p-4 rounded-lg border border-gray-700/50">
          <img src={rightImage} alt="IT Business Solutions" className="relative w-full max-w-md mx-auto" />

          {/* SVG Background */}
          <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 L20,20 L50,20 L70,40 L100,40" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" fill="none" />
            <path d="M100,0 L80,20 L50,20 L30,40 L0,40" stroke="rgba(167, 139, 250, 0.3)" strokeWidth="1" fill="none" />
            <path d="M0,100 L20,80 L50,80 L70,60 L100,60" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" fill="none" />
            <path d="M100,100 L80,80 L50,80 L30,60 L0,60" stroke="rgba(167, 139, 250, 0.3)" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </div>


      {/* <span class="absolute -inset-1 bg-blue-500/20 rounded-full blur group-hover:bg-blue-500/30 transition-all duration-700 opacity-0 group-hover:opacity-100"></span> */}
    </div>

      {/* Bottom Services */}
      <div className=" right-0 px-16 py-5 flex flex-wrap justify-between text-lg font-semibold">
        {["CLOUD", "MOBILE APP", "WEB APP", "UI/UX", "DATA", "AI/ML", "IOT"].map((item, index) => (
          <span
            key={index}
            className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 hover:shadow-[0_0_45px_#324683] hover:backdrop-blur-sm hover:rounded-xl hover:bg-blue-500/20 transition duration-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
   
  );
};

export default HeroSection;
