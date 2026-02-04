import React, { useState, useEffect } from "react";
import { callIcon, logo1, logo2, timerIcon } from "../assets/assets";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setScrolled(window.scrollY > heroHeight * 0.8);
    };

    const handleResize = () => {
      setMobileView(window.innerWidth < 768); // Tailwind md breakpoint
    };

    // Initial checks
    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-49 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <img
        src={scrolled ? logo2 : logo1}
        className="h-6 md:h-10 transition-opacity duration-500"
        alt="Mahindra Lifespaces"
      />

      {/* Call / CTA Button */}
      <a
        href="tel:+919901717339"
        className="bg-[#FF3B3B] hover:bg-[#E62E2E] text-white flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
      >
        <img
          src={mobileView ? timerIcon : callIcon}
          className="h-4 w-4"
          alt="Call"
        />
        <span className="text-xs md:text-sm font-medium">
          {mobileView ? "Book a Visit" : "+91 9901717339"}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
