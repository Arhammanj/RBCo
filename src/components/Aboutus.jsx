import React from "react";
import { Link } from "react-router-dom";
import a1Image from "../assets/a1.jpg";

const Aboutus = () => {
    return(
        <div className ="flex flex-col items-center justify-center min-h-screen container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden" id="about">
            {/* Hero Image Section */}
            <div className="w-full max-w-6xl mb-12 group relative overflow-hidden rounded-2xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <img 
                    src="/grey6.jpg" 
                    alt="RBCo Construction Excellence" 
                    className="relative w-full h-96 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-700 border-4 border-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">Building Excellence</h2>
                    <p className="text-lg md:text-xl opacity-90 drop-shadow">Transforming visions into reality with precision and care</p>
                </div>
            </div>

            {/* Animated Header Section */}
            <div className ="text-center max-w-4xl transform hover:scale-105 transition-all duration-500">
                <div className="overflow-hidden mb-6">
                      <h1 className="text-4xl md:text-6xl font-black text-gray-800 hover:text-gray-900 transition-all duration-500 tracking-tight"> About
                     <span className="text-blue-800"> Us</span>
                    </h1>
                </div>
                
                {/* Enhanced Description Box */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-amber-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                    <p className="relative text-gray-700 mt-6 text-lg md:text-xl leading-relaxed bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 group-hover:shadow-3xl transform group-hover:-translate-y-1 transition-all duration-500">
                        <span className="text-2xl text-blue-700 font-bold">RBCo</span> is a leading construction company dedicated to transforming dreams into reality. With a commitment to excellence, innovation, and sustainability, we specialize in residential, commercial, and infrastructure projects. Our team of experienced professionals works closely with clients to deliver high-quality results on time and within budget. At RBCo, we believe in building not just structures, but lasting relationships based on trust and integrity. <span className="text-blue-800 font-semibold">Join us on our journey to create spaces that inspire and endure.</span>
                    </p>
                </div>
            </div>

            {/* Interactive Image & Stats Section */}
            <div className="flex flex-col lg:flex-row justify-center items-center mt-12 gap-8 w-full max-w-6xl">
                {/* Enhanced Image */}
                <div className="lg:w-1/2 group relative overflow-hidden rounded-2xl">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                    <img 
                        src="/solution background.jpg" 
                        alt="RBCo Construction Solutions" 
                        className="relative w-full h-80 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 border-4 border-white"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Enhanced Stats Card */}
                <div className="lg:w-1/2 flex justify-center">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                        <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 p-12 rounded-3xl shadow-2xl border border-blue-200 transform group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500">
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shadow-lg mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                                    <span className="text-white text-3xl font-black">20+</span>
                                </div>
                                <h3 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-4 group-hover:scale-110 transition-transform duration-300">
                                    Years of Experience
                                </h3>
                                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto group-hover:w-24 transition-all duration-500"></div>
                                <p className="text-gray-600 mt-4 font-medium">Building Excellence Since 2003</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
           
            
            {/* Innovative Feature Cards with Animations */}
            <div className="mt-16 w-full space-y-12">
                {/* Trusted Legacy - Slide in from right */}
                <div className="flex flex-col lg:flex-row items-center gap-8 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group">
                    <div className="lg:w-2/3 text-left">
                        <div className="overflow-hidden">
                            <p className="text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 transform group-hover:scale-105 transition-transform duration-300">
                                Trusted Legacy
                            </p>
                        </div>
                        <h5 className="text-lg text-amber-600 mt-4 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                            With over 20 years of experience, RBCo has been transforming dreams into reality through premium residential, commercial, and infrastructure projects.
                        </h5>
                    </div>
                    <div className="lg:w-1/3 flex justify-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                            <span className="text-white text-3xl font-bold">20+</span>
                        </div>
                    </div>
                </div>

                {/* Quality & Innovation - Slide in from left */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8 p-8 bg-gradient-to-l from-emerald-50 to-emerald-100 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group">
                    <div className="lg:w-2/3 text-right">
                        <div className="overflow-hidden">
                            <p className="text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700 transform group-hover:scale-105 transition-transform duration-300">
                                Quality & Innovation
                            </p>
                        </div>
                        <h5 className="text-lg text-amber-600 mt-4 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                            We pride ourselves on delivering high-quality construction backed by innovative designs and sustainable practices that stand the test of time.
                        </h5>
                    </div>
                    <div className="lg:w-1/3 flex justify-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                            <span className="text-white text-2xl">🏗️</span>
                        </div>
                    </div>
                </div>

                {/* Client-Centric Approach - Center focused */}
                <div className="flex flex-col lg:flex-row items-center gap-8 p-8 bg-gradient-to-r from-purple-50 to-indigo-100 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group">
                    <div className="lg:w-2/3 text-left">
                        <div className="overflow-hidden">
                            <p className="text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700 transform group-hover:scale-105 transition-transform duration-300">
                                Client-Centric Approach
                            </p>
                        </div>
                        <h5 className="text-lg text-amber-600 mt-4 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                            Our expert team works closely with clients to ensure every project is completed on time, within budget, and tailored to their unique vision.
                        </h5>
                    </div>
                    <div className="lg:w-1/3 flex justify-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                            <span className="text-white text-2xl">🤝</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Call-to-Action Projects Button */}
            <div className="mt-16 mb-8 text-center">
                <div className="relative inline-block group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <Link
                        to="/projects"
                        className="relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-xl rounded-full shadow-2xl hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 group-hover:shadow-red-500/50"
                    >
                        <span>View Our Projects</span>
                        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
                <p className="text-gray-600 mt-4 text-lg">
                    Discover our portfolio of exceptional construction and design projects
                </p>
            </div>

        </div>
    )
}
export default Aboutus;