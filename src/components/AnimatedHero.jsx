import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Floating geometric shapes component
const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-red-500 opacity-30 animate-float-slow transform rotate-45"></div>
      <div className="absolute top-40 right-20 w-6 h-6 border-2 border-white opacity-20 animate-float-medium"></div>
      <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-white opacity-40 rounded-full animate-float-fast"></div>
      <div className="absolute top-1/3 right-1/3 w-8 h-1 bg-red-400 opacity-25 animate-float-slow"></div>
      <div className="absolute bottom-1/3 left-1/2 w-2 h-8 bg-gray-300 opacity-20 animate-float-medium"></div>
      
      {/* Larger architectural elements */}
      <div className="absolute top-1/4 left-1/3 w-16 h-16 border border-white opacity-10 transform rotate-12 animate-slow-spin"></div>
      <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-gradient-to-br from-red-500 to-transparent opacity-15 transform -rotate-12 animate-pulse-slow"></div>
    </div>
  );
};

// Parallax background component
const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.85)), url('/header.jpg')`,
          transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-gray-900/70 to-black/80"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-grid-pattern"></div>
      </div>
    </div>
  );
};

// Animated text component
const AnimatedText = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef();

  useEffect(() => {
    // Set a timeout fallback to ensure buttons show
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={textRef} className="text-center z-20 relative">
      {/* Main heading with staggered animation */}
      <div className="overflow-hidden mb-4">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <span className="inline-block text-shadow-lg">BUILD</span>
        </h1>
      </div>
      
      <div className="overflow-hidden mb-4">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <span className="inline-block">YOUR</span>
        </h1>
      </div>
      
      <div className="overflow-hidden mb-4">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <span className="inline-block text-shadow-lg">PARADISE</span>
        </h1>
      </div>

      <div className="overflow-hidden mb-8">
        <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200 transform transition-all duration-1000 delay-900 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <span className="inline-block text-shadow-lg">WITH US</span>
        </h2>
      </div>

      {/* Subtitle */}
      <div className="overflow-hidden mb-12">
        <p className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-1100 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          From concept to completion, we transform architectural dreams into stunning reality with precision, innovation, and uncompromising quality.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transform transition-all duration-1000 delay-1000 z-30 relative ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}>
        <Link 
          to="/projects"
          className="group relative px-8 py-4 bg-red-500 text-white font-semibold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:bg-red-600 hover:scale-105 hover:shadow-xl z-40"
        >
          <span className="relative z-50">EXPLORE PROJECTS</span>
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </Link>
        
        <Link 
          to="/contact"
          className="group relative px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105 hover:shadow-xl z-40"
        >
          <span className="relative z-50">GET CONSULTATION</span>
        </Link>
      </div>
    </div>
  );
};

// Scroll indicator
const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
      <div className="flex flex-col items-center space-y-2">
        <span className="text-sm font-medium tracking-wider">SCROLL</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

// Main component
const AnimatedHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <ParallaxBackground />
      
      {/* Floating Shapes */}
      <FloatingShapes />
      
      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-30 pt-32 md:pt-28">
        <AnimatedText />
      </div>
      
      {/* Scroll Indicator */}
      <ScrollIndicator />
      
      {/* Side decorative elements */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-red-500 opacity-50"></div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-red-500 opacity-50"></div>
      
      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
    </section>
  );
};

export default AnimatedHero;