import Navbar from "./components/Navbar";
import bgVideo from "../src/assets/Videos/bg-video.mp4";
import HeroSection from "./components/HeroSection";
import Success from "./components/Success";
import Services from "./components/Services";
import ProfessionalServices from "./components/ProfessionalServices";
import TechWeUse from "./components/TechWeUse";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className={`w-full min-h-screen bg-[#18181B] text-white font-["satoshi"] pt-1  transition-colors duration-300 relative overflow-x-hidden`}>
      <div className="fixed top-0 left-0 w-full h-screen">
        <video autoPlay loop muted className="w-full h-full object-cover opacity-50">
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <Success />
        <Services />
        <ProfessionalServices />
        <TechWeUse />
        <Footer />
      </div>
    </div>
  );
}
