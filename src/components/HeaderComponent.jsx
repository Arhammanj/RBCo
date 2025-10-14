import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const HeaderComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col w-full relative bg-cover bg-center bg-gray-900"
      id="Header"
      style={{ backgroundImage: `url('/header.jpg')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

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
          <a href="#investor" className="hover:text-blue-400 transition duration-300">
            Investor
          </a>
          <Link to="/contact" className="hover:text-blue-400 transition duration-300">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-3 rounded-lg hover:bg-white/10 transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Phone Number Button - Hidden on mobile when menu is open */}
        <a
          href="tel:+923091666681"
          className={`px-4 md:px-5 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition text-white text-sm md:text-base ${isMobileMenuOpen ? 'hidden' : 'hidden md:block'}`}
        >
          📞 0321-8660255
        </a>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[88px] left-0 right-0 z-30 bg-black/95 backdrop-blur-sm">
          <div className="flex flex-col py-6 px-6 space-y-3">
            <Link 
              to="/" 
              className="text-white hover:text-blue-400 transition duration-300 py-3 px-4 rounded-lg hover:bg-white/5 text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#about" 
              className="text-white hover:text-blue-400 transition duration-300 py-3 px-4 rounded-lg hover:bg-white/5 text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#solution" 
              className="text-white hover:text-blue-400 transition duration-300 py-3 px-4 rounded-lg hover:bg-white/5 text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solution
            </a>
            <Link 
              to="/projects" 
              className="text-white hover:text-blue-400 transition duration-300 py-3 px-4 rounded-lg hover:bg-white/5 text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <a 
              href="#investor" 
              className="text-white hover:text-blue-400 transition duration-300 py-3 px-4 rounded-lg hover:bg-white/5 text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Investor
            </a>
            <Link 
              to="/contact" 
              className="text-white hover:text-blue-400 transition duration-300 py-3 px-4 rounded-lg hover:bg-white/5 text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <a
              href="tel:+923091666681"
              className="mt-6 mx-4 px-6 py-3 bg-red-500 rounded-full hover:bg-red-600 transition text-white text-center font-semibold text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              📞 (309) 166-6681
            </a>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1 text-center relative z-10 px-4 md:px-6 pt-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[82px] font-bold text-white drop-shadow-lg max-w-4xl mb-4 md:mb-6 leading-tight">
          Explore More & Build Your Paradise
        </h1>

        {/* Moving Strip - Below the main heading */}
        <div className="w-full bg-red-500 py-2 overflow-hidden mb-6">
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-white font-medium text-sm mx-8">
              🏗️ Welcome to RBCo - Your Dream Home Awaits! 
            </span>
            <span className="text-white font-medium text-sm mx-8">
              ✨ Quality Construction | Innovative Designs | Trusted Excellence 
            </span>
            <span className="text-white font-medium text-sm mx-8">
              🏡 Building Dreams Since Years | Premium Projects Available 
            </span>
            <span className="text-white font-medium text-sm mx-8">
              📞 Contact Us Today for Your Perfect Home Solution 
            </span>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-32 md:w-48 border-t-2 md:border-t-4 border-white my-4 md:my-6"></div>

        {/* Buttons */}
        <Button />
       
      </div>
    </div>
  );
};

export default HeaderComponent;