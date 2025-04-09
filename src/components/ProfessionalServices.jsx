import React from 'react';
import { RiGlobalLine, RiSmartphoneLine, RiPaletteLine } from 'react-icons/ri';

const services = [
  {
    icon: <RiGlobalLine className="text-white text-2xl" />,
    title: 'Web Development',
    description:
      'We build responsive, high-performance websites and web applications using the latest technologies and best practices.',
    color: 'from-purple-500 to-blue-400',
    barColor: 'from-blue-500 to-[#63C9EB]',
  },
  {
    icon: <RiSmartphoneLine className="text-white text-2xl" />,
    title: 'Mobile App Development',
    description:
      'We create native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
    color: 'from-purple-500 to-blue-400',
    barColor: 'from-green-500 to-teal-400',
  },
  {
    icon: <RiPaletteLine className="text-white text-2xl" />,
    title: 'UI/UX Design',
    description:
      'We design intuitive, user-centered interfaces that enhance usability and create memorable digital experiences.',
    color: 'from-purple-500 to-blue-400',
    barColor: 'from-[#A65DE7] to-[#DA75BB]',
  },
];

const ProfessionalServices = () => {
  return (
    <section className="text-white py-16 px-4 text-center">
      <div className="mb-4">
        <span className="text-sm px-4 py-2 bg-[#1c2b4a] text-blue-300 rounded-full uppercase tracking-wide border-[1px] border-blue-500">
          Our Services
        </span>
      </div>
      <h2 className="text-5xl font-bold mb-4">
        <span className=" bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500 text-transparent bg-clip-text">Professional</span> Services
      </h2>
      <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
        We offer a wide range of services to help your business grow and succeed in the digital world
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-xl p-6  border-[0.9px] border-white border-t-0 transition-all relative backdrop-blur-md bg-white/5 group hover:scale-105"
          >
            <div
              className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
            >
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-left group-hover:text-blue-500 transition-colors">{service.title}</h3>
            <p className="text-gray-400 mb-4 text-left">{service.description}</p>
            <a href="#" className="text-blue-400 font-medium inline-flex items-center gap-1 hover:underline">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14 5l7 7-7 7M5 12h16" />
              </svg>
            </a>
            <div
              className={`absolute top-0 left-0 h-2 w-full px-4 bg-gradient-to-r ${service.barColor} rounded-t-2xl`}
            />
          </div>
        ))}
      </div>

      <div className="mt-12">
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all">
          View All Services
        </button>
      </div>
    </section>
  );
};

export default ProfessionalServices;
