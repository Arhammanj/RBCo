import React from "react";
import { Link } from "react-router-dom";

const Solutions = () => {
    return (
        <div 
            className="flex flex-col items-center justify-center min-h-screen container mx-auto p-8 md:px-20 lg:px-32 w-full overflow-hidden relative" 
            id="solution"
            style={{
                backgroundImage: "url('/solution background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
            
            {/* Content Container */}
            <div className="relative z-10 w-full">
                <div className="text-center max-w-5xl mb-12 mx-auto">
                    <h1 className="text-4xl md:text-6xl font-black text-gray-800 hover:text-gray-900 transition-all duration-500 tracking-tight">
                        "Our <span className="text-blue-900">Solutions"</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mt-4">
                        Comprehensive construction solutions designed to bring your vision to life. Click on any solution to learn more.
                    </p>
                    </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
                {/* Architecture Design Card */}
                <Link to="/architecture" className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-200 p-8">
                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-blue-700 mb-4 group-hover:text-blue-800 transition-colors">Architecture Design</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">Innovative architectural solutions with functionality and creative design that transform your vision into reality.</p>
                        <div className="flex items-center justify-center bg-blue-700 text-white py-3 px-6 rounded-lg group-hover:bg-blue-800 transition-colors font-semibold">
                            <span className="mr-2">Click Here</span>
                            <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </div>
                    </div>
                </Link>

                {/* Grey Structure Card */}
                <Link to="/greystructure" className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200 p-8">
                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-slate-700 mb-4 group-hover:text-slate-800 transition-colors">Grey Structure</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">Robust structural framework and foundation solutions for lasting construction that stands the test of time.</p>
                        <div className="flex items-center justify-center bg-slate-700 text-white py-3 px-6 rounded-lg group-hover:bg-slate-800 transition-colors font-semibold">
                            <span className="mr-2">Click Here</span>
                            <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </div>
                    </div>
                </Link>

                {/* Turn Key Solutions Card */}
                <Link to="/turnkey" className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-indigo-200 p-8">
                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-indigo-700 mb-4 group-hover:text-indigo-800 transition-colors">Turn Key Solutions</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">Complete end-to-end project delivery from planning to handover with full service management.</p>
                        <div className="flex items-center justify-center bg-indigo-700 text-white py-3 px-6 rounded-lg group-hover:bg-indigo-800 transition-colors font-semibold">
                            <span className="mr-2">Click Here</span>
                            <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="w-full max-w-4xl mt-20">
                <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Ready to <span className="text-blue-200">Get Started?</span>
                        </h2>
                        
                        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                            Transform your vision into reality. Let's build something amazing together.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                            <Link 
                                to="/contact" 
                                className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                Start Your Project
                            </Link>
                            
                            <div className="flex items-center text-blue-200">
                                <span className="mr-2">or call:</span>
                                <a href="tel:+923091666681" className="font-bold hover:text-white transition-colors">
                                    030 916 66681
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           
            </div> {/* Close content container */}
        </div>
    );
};

export default Solutions;
