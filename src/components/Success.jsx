import React from "react";
import rightDivImg from "../assets/Images/secondSection/rightImg.png";
import leftImgOne from "../assets/Images/secondSection/LeftImg1.png";
import leftImgTwo from "../assets/Images/secondSection/LeftImg2.png";
import leftImgThree from "../assets/Images/secondSection/LeftImg3.png";

const Success = () => {
  return (
    <div className="relative bg-gradient-to-b from-transparent to-gray-700/5 w-full text-white md:mt-16  py-10 md:py-20 px-4 h-auto">
      {/* Heading and Subheading */}
      <div className="text-center mb-16 md:mb-36 px-4 md:px-10">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-purple-500">Secure the Success of Your IT Initiative</h2>
        <p className="mt-4 text-gray-300 text-base md:text-xl max-w-3xl mx-auto">
          Rashail Infotech is India's most unique and innovative product development company; working closely with Enterprises, SMEs, and startups to mentor their executive
          decision-making and product launches.
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
        {/* Left Section */}
        {/* <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 md:gap-6 px-4 md:px-10">
          <div className="rounded-xl overflow-hidden border-2 border-transparent shadow-[0_0_20px_5px_rgba(138,43,226,0.5)]">
            <img src={leftImgOne} alt="Healthcare" className="w-full h-full rounded-lg transition-transform duration-300 hover:scale-105 p-2" />
          </div>
          <div className="w-1/2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-center flex flex-col justify-center items-center shadow-[0_0_25px_6px_rgba(168,85,247,0.4)] animate-breathing p-4">
            <p className="text-xl md:text-2xl font-bold animate-pulse">4k+</p>
            <p className="text-xs md:text-sm">Project Completed</p>
          </div>
          <div className="rounded-xl overflow-hidden border-2 border-transparent shadow-[0_0_20px_5px_rgba(0,255,255,0.4)] p-1">
            <img src={leftImgTwo} alt="Agriculture" className="w-full h-full rounded-lg transition-transform duration-300 hover:scale-105" />
          </div>
          <div className="rounded-xl overflow-hidden border-2 border-transparent shadow-[0_0_20px_5px_rgba(255,0,102,0.4)] p-1">
            <img src={leftImgThree} alt="Education" className="w-full h-full rounded-lg transition-transform duration-300 hover:scale-105" />
          </div>
        </div> */}

        {/* left section */}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          {/* Top Row */}
          <div className="md:flex md:flex-row flex flex-col-reverse gap-4">
            <div className="flex-1 rounded-xl overflow-hidden border-2 border-transparent shadow-[0_0_20px_5px_rgba(138,43,226,0.5)]">
              <img src={leftImgOne} alt="Healthcare" className="w-full h-full rounded-lg transition-transform duration-300 hover:scale-105 p-2" />
            </div>
            <div className="md:w-1/2 w-3/5 mx-auto">
            <div className="flex-1 py-20  md:w-1/2   rounded-xl bg-gradient-to-br from-[#7a24c4] to-gray-900 text-center flex flex-col justify-center items-center shadow-[0_0_25px_6px_rgba(168,85,247,0.4)] animate-breathing p-4">
              <p className="text-xl md:text-2xl font-bold animate-pulse">4k+</p>
              <p className="text-xs md:text-sm">Project Completed</p>
            </div>
            </div>
          </div>
          
          {/* Bottom Row */}
          <div className="md:flex md:flex-row flex flex-col gap-4">
            <div className="flex-1 rounded-xl overflow-hidden border-2 border-transparent shadow-[0_0_20px_5px_rgba(0,255,255,0.4)] p-1">
              <img src={leftImgTwo} alt="Agriculture" className="w-full h-full rounded-lg transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="flex-1 rounded-xl overflow-hidden border-2 border-transparent shadow-[0_0_20px_5px_rgba(255,0,102,0.4)] p-1">
              <img src={leftImgThree} alt="Education" className="w-full h-full rounded-lg transition-transform duration-300 hover:scale-105" />
            </div>
          </div>
        </div>

        {/* Right Section - Transparent Background */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center bg-transparent mt-8 md:mt-0 ">
          <img 
            src={rightDivImg} 
            alt="Glowing Bulb" 
            className="h-[100vw]  md:h-[100vh] md:w-full md:object-contain  md:absolute md:-right-[30%] relative -right-24" 
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes breathing {
          0% {
            transform: scale(1);
            box-shadow: 0 0 25px 6px rgba(168, 85, 247, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 35px 8px rgba(168, 85, 247, 0.6);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 25px 6px rgba(168, 85, 247, 0.4);
          }
        }

        .animate-breathing {
          animation: breathing 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Success;
