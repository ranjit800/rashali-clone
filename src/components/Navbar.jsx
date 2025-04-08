import React, { useState, useEffect } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const navLinks = ["Home", "About Us", "Services", "Portfolio", "Contact Us"];
  const activeLink = "Home"; // Update this dynamically if needed
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${scrolled ? "bg-gray-900 backdrop-blur-sm" : "bg-transparent"}`}>
      <div className="container mx-auto">
        <DesktopNavbar scrolled={scrolled} navLinks={navLinks} activeLink={activeLink} />
        <MobileNavbar navLinks={navLinks} activeLink={activeLink} />
      </div>
    </nav>
  );
};

export default Navbar;
