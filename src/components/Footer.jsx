import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/no2.jpg" 
                alt="RBCo Logo" 
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">RBCo</h3>
                <p className="text-sm text-gray-300 italic">Build Your Paradise With Us!</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Leading construction company dedicated to transforming dreams into reality with excellence, innovation, and sustainability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 2.012c3.303 0 3.693.016 4.99.073 1.204.055 1.858.249 2.292.415.576.224 1.005.494 1.446.934.44.441.71.87.934 1.446.166.434.36 1.088.415 2.292.057 1.297.073 1.687.073 4.99s-.016 3.693-.073 4.99c-.055 1.204-.249 1.858-.415 2.292-.224.576-.494 1.005-.934 1.446-.441.44-.87.71-1.446.934-.434.166-1.088.36-2.292.415-1.297.057-1.687.073-4.99.073s-3.693-.016-4.99-.073c-1.204-.055-1.858-.249-2.292-.415-.576-.224-1.005-.494-1.446-.934-.44-.441-.71-.87-.934-1.446-.166-.434-.36-1.088-.415-2.292-.057-1.297-.073-1.687-.073-4.99s.016-3.693.073-4.99c.055-1.204.249-1.858.415-2.292.224-.576.494-1.005.934-1.446.441-.44.87-.71 1.446-.934.434-.166 1.088-.36 2.292-.415 1.297-.057 1.687-.073 4.99-.073zm0-2.012c-3.359 0-3.782.015-5.103.073-1.319.06-2.215.27-3.002.577-.813.316-1.503.741-2.191 1.429-.688.688-1.113 1.378-1.429 2.191-.307.787-.517 1.683-.577 3.002-.058 1.321-.073 1.744-.073 5.103s.015 3.782.073 5.103c.06 1.319.27 2.215.577 3.002.316.813.741 1.503 1.429 2.191.688.688 1.378 1.113 2.191 1.429.787.307 1.683.517 3.002.577 1.321.058 1.744.073 5.103.073s3.782-.015 5.103-.073c1.319-.06 2.215-.27 3.002-.577.813-.316 1.503-.741 2.191-1.429.688-.688 1.113-1.378 1.429-2.191.307-.787.517-1.683.577-3.002.058-1.321.073-1.744.073-5.103s-.015-3.782-.073-5.103c-.06-1.319-.27-2.215-.577-3.002-.316-.813-.741-1.503-1.429-2.191-.688-.688-1.378-1.113-2.191-1.429-.787-.307-1.683-.517-3.002-.577-1.321-.058-1.744-.073-5.103-.073z"/><path d="M12 6.351c-3.138 0-5.649 2.511-5.649 5.649s2.511 5.649 5.649 5.649 5.649-2.511 5.649-5.649-2.511-5.649-5.649-5.649zm0 9.316c-2.025 0-3.667-1.642-3.667-3.667s1.642-3.667 3.667-3.667 3.667 1.642 3.667 3.667-1.642 3.667-3.667 3.667z"/><circle cx="17.872" cy="6.128" r="1.344"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@ranabuilders1?_t=ZS-90XYaToBo0O&_r=1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white border-b-2 border-red-500 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-red-400 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-red-400 transition duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#solution" className="text-gray-300 hover:text-red-400 transition duration-300">
                  Our Solutions
                </a>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-red-400 transition duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-red-400 transition duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white border-b-2 border-red-500 pb-2 inline-block">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/architecture" className="text-gray-300 hover:text-red-400 transition duration-300">
                  Architecture Design
                </Link>
              </li>
              <li>
                <Link to="/turnkey" className="text-gray-300 hover:text-red-400 transition duration-300">
                  Turnkey Solutions
                </Link>
              </li>
              <li>
                <Link to="/greystructure" className="text-gray-300 hover:text-red-400 transition duration-300">
                  Grey Structure
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-400 transition duration-300">
                  Interior Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-400 transition duration-300">
                  Construction Management
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white border-b-2 border-red-500 pb-2 inline-block">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <div>
                  <p className="text-gray-300 text-sm">
                    Tariq Gardens<br/>
                    Lahore, Pakistan
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <p className="text-gray-300 text-sm">+92 3218660255 </p>
                
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <p className="text-gray-300 text-sm">info@rbco.international</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1.001-.67 1.551H6a1 1 0 000 2h.013c-.005.166-.013.333-.013.5 0 .167.008.334.013.5H6a1 1 0 100 2h.351c.163.55.385 1.076.67 1.551C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029C10.792 13.807 10.304 14 10 14c-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H9a1 1 0 110-2h-.013C8.992 10.334 9 10.167 9 10c0-.167-.008-.334-.013-.5H9a1 1 0 010-2h-.528c.08-.18.164-.357.264-.521z" clipRule="evenodd"/>
                </svg>
                <p className="text-gray-300 text-sm">www.rbco.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 RBCo All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-400 transition duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;