import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import LeftImg from "../assets/Images/servicesImg/leftImg.png";
import CenterImg from "../assets/Images/servicesImg/centerImg.png";
import RightImg from "../assets/Images/servicesImg/rightImg.png";

const services = [
  {
    id: 1,
    title: "Website Development",
    image: LeftImg,
    description:
      "Mark your business presence in cyberspace with Dynamic and Static websites from Rashail Infotech. Functional, beautifully designed, and light as a feature, our skilled web developers are making the magic happen, one sliver of code at a time.",
  },
  {
    id: 2,
    title: "Mobile App Development",
    image: CenterImg,
    description: "We excel in creating Mobile Apps for Android as well and iOS, using Hybrid Platform, which reduces Production Time and Developmental Cost.",
  },
  {
    id: 3,
    title: "UI/UX Design",
    image: RightImg,
    description: "We are committed to understanding your Business, Vision and Dream and Transform them into Reality and deliver it directly to your customers.",
  },
];

const Services = () => {
  const cardInnerRefs = useRef([]);

  useEffect(() => {
    cardInnerRefs.current.forEach((card) => {
      gsap.set(card.querySelector(".back"), { rotationY: 180 });
      gsap.set(card, { transformStyle: "preserve-3d" });
      gsap.set(card.querySelectorAll(".card-face"), {
        backfaceVisibility: "hidden",
      });
    });
  }, []);

  const handleMouseEnter = (index) => {
    const inner = cardInnerRefs.current[index];
    gsap.to(inner, { rotationY: 180, duration: 0.4, ease: "power2.inOut" });
  };

  const handleMouseLeave = (index) => {
    const inner = cardInnerRefs.current[index];
    gsap.to(inner, { rotationY: 0, duration: 0.4, ease: "power2.inOut" });
  };

  return (
    <div className="w-full bg-gradient-to-b from-transparent to-gray-700/5 text-white md:pt-20 pb-20 px-4 md:px-12 lg:px-24">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-[#867FF0] mb-16">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="w-[270px] h-[300px] perspective"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div
              ref={(el) => (cardInnerRefs.current[index] = el)}
              className="relative w-full h-full transition-transform duration-500 transform-style preserve-3d"
            >
              {/* Front */}
              <div className="card-face front absolute w-full h-full rounded-xl overflow-hidden shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain bg-black/10"
                />
                <div className="absolute bottom-0 left-0 w-full h-[70px] bg-gradient-to-b from-transparent to-black px-4 flex flex-col justify-end pb-2">
                  <h3 className="text-lg font-bold">{service.title}</h3>
                  <p className="text-sm text-gray-300">Hover to reveal details</p>
                </div>
              </div>

              {/* Back */}
              <div className="card-face back absolute w-full h-full rounded-xl bg-gradient-to-br from-[#2e2c52] to-[#7946c1] p-5 text-white transform rotate-y-180 flex flex-col justify-start items-center text-center">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-base">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
