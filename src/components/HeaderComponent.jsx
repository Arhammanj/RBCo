import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedHero from "./AnimatedHero";

const HeaderComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Navbar - Fixed at top */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between px-4 md:px-8 py-4 md:py-6 bg-black/70 backdrop-blur-sm">
        {/* Logo */}
        <div className="flex flex-col">
          <div className="flex items-center mb-1">
            <img 
              src="/no2.jpg" 
              alt="Logo" 
              className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover mr-2 md:mr-3"
            />
            <span className="text-lg md:text-2xl font-bold text-white">RBCo</span>
          </div>
          <p className="text-xs md:text-sm text-white/80 ml-12 md:ml-15 italic">Build Your Paradise With Us!</p>
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex gap-8 text-white font-medium">
          <Link to="/" className="hover:text-blue-400 transition duration-300">
            Home
          </Link>
          <a href="#about" className="hover:text-blue-400 transition duration-300">
            About Us
          </a>
          <a href="#solution" className="hover:text-blue-400 transition duration-300">
            Solution
          </a>
          <Link to="/projects" className="hover:text-blue-400 transition duration-300">
            Projects
          </Link>
          <Link to="/investor" className="hover:text-blue-400 transition duration-300">
            Investor
          </Link>
          <Link to="/contact" className="hover:text-blue-400 transition duration-300">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-3 rounded-lg hover:bg-white/10 transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-20 left-0 right-0 bg-black/90 backdrop-blur-md z-40 md:hidden">
          <div className="flex flex-col p-6 space-y-4 text-white font-medium">
            <Link to="/" className="hover:text-blue-400 transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <a href="#about" className="hover:text-blue-400 transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </a>
            <a href="#solution" className="hover:text-blue-400 transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>
              Solution
            </a>
            <Link to="/projects" className="hover:text-blue-400 transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>
              Projects
            </Link>
            <Link to="/investor" className="hover:text-blue-400 transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>
              Investor
            </Link>
            <Link to="/contact" className="hover:text-blue-400 transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        </div>
      )}

      {/* Animated Hero Section */}
      <AnimatedHero />
    </div>
  );
};

export default HeaderComponent;