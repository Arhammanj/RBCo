import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <div className="flex justify-center gap-6 mt-8">
      <button className="px-8 py-4 bg-blue-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-600 hover:scale-105 transition duration-300">
        Get Started
      </button>
      <Link 
        to="/projects"
        className="px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition duration-300 inline-block text-center"
      >
        View Projects
      </Link>
    </div>
  );
};

export default Button;