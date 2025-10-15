import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ModernSolutions = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const solutions = [
    {
      id: 1,
      title: "Architecture Design",
      subtitle: "Innovative Blueprints",
      description: "Transform your vision into stunning architectural masterpieces with our cutting-edge design solutions.",
      icon: "🏗️",
      color: "from-blue-500 to-purple-600",
      link: "/architecture",
      features: ["3D Modeling", "CAD Design", "Site Planning", "Interior Layout"]
    },
    {
      id: 2,
      title: "Turnkey Solutions",
      subtitle: "Complete Construction",
      description: "End-to-end construction services from foundation to finishing touches, delivered with precision and excellence.",
      icon: "🔑",
      color: "from-red-500 to-pink-600",
      link: "/turnkey",
      features: ["Project Management", "Quality Control", "Timeline Delivery", "Full Service"]
    },
    {
      id: 3,
      title: "Grey Structure",
      subtitle: "Solid Foundations",
      description: "Build strong, durable structures with our expert grey structure construction and engineering solutions.",
      icon: "🏢",
      color: "from-green-500 to-teal-600",
      link: "/greystructure",
      features: ["Foundation Work", "Structural Engineering", "Quality Materials", "Safety Standards"]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
      id="solutions"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-100 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-100 rounded-full opacity-15 blur-3xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4 animate-fadeInUp">
              Our Solutions
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Building
              <span className="block bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of construction services designed to bring your architectural dreams to life with precision and innovation.
            </p>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveCard(solution.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Card Container */}
              <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Floating Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gray-50 group-hover:bg-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                    <span className="text-3xl">{solution.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-sm font-semibold text-red-500 mb-4 uppercase tracking-wider">
                    {solution.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover:animate-pulse"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={solution.link}
                    className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold transition-all duration-300 hover:bg-red-600 hover:scale-105 group-hover:shadow-lg"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Hover Effect Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-red-500 rounded-full opacity-0 group-hover:opacity-20 transform scale-0 group-hover:scale-100 transition-all duration-500"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-blue-500 rounded-full opacity-0 group-hover:opacity-15 transform scale-0 group-hover:scale-100 transition-all duration-700"></div>
                
                {/* Active Card Indicator */}
                {activeCard === solution.id && (
                  <div className="absolute inset-0 border-2 border-red-500 rounded-3xl animate-pulse"></div>
                )}
              </div>

              {/* Card Number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg transform rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-300 shadow-lg">
                {solution.id}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-red-500 to-red-700 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-xl mb-6 opacity-90">
                Let's discuss your vision and create something extraordinary together.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-red-600 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-lg"
              >
                Get Free Consultation
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernSolutions;