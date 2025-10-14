import React from "react";
import { Link } from "react-router-dom";

const GreyStructure = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-md fixed w-full top-0 z-50">
                <div className="container mx-auto px-4 py-3">
                    <Link to="/" className="text-orange-600 hover:text-orange-700 font-semibold">
                        ← Back to Home
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="pt-20 pb-12 bg-gradient-to-r from-blue-800 to-blue-900">
                <div className="container mx-auto px-4">
                    <div className="text-center text-white">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Grey Structure
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                            Robust structural framework and foundation solutions for lasting construction
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">
                            Strong Foundation, Lasting Structures
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Grey structure forms the backbone of any construction project. Our expertise in structural 
                            engineering ensures that your building has a solid foundation, robust framework, and 
                            reliable infrastructure to support all architectural and design elements.
                        </p>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            From foundation laying to structural completion, we provide comprehensive grey structure 
                            solutions that meet all safety standards and engineering requirements.
                        </p>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-xl">
                        <img src="/grey6.jpg" alt="Grey Structure" className="w-full h-96 object-cover"/>
                    </div>
                </div>

                {/* View Projects CTA */}
                <div className="text-center mb-16">
                    <Link 
                        to="/projects" 
                        className="inline-flex items-center bg-gradient-to-r from-blue-700 to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-800 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4 4m4-4l-4-4" />
                        </svg>
                        View Our Grey Structure Projects
                    </Link>
                </div>

                {/* Features Grid */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Grey Structure Services
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-700">
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Foundation Work</h4>
                            <p className="text-gray-600">Deep foundation, shallow foundation, and specialized foundation systems.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-800">
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Structural Framework</h4>
                            <p className="text-gray-600">RCC columns, beams, slabs, and structural steel framework construction.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-700">
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Load Bearing Walls</h4>
                            <p className="text-gray-600">Brick masonry, block work, and reinforced concrete wall construction.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-800">
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Staircase Construction</h4>
                            <p className="text-gray-600">RCC staircases, precast stairs, and specialized staircase solutions.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-700">
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Roof Structure</h4>
                            <p className="text-gray-600">Flat roofs, pitched roofs, and specialized roofing structure systems.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-800">
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Quality Assurance</h4>
                            <p className="text-gray-600">Structural testing, quality control, and compliance with building codes.</p>
                        </div>
                    </div>
                </div>

                {/* Process Section */}
                <div className="mb-16 bg-gray-100 rounded-xl p-12">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
                        Grey Structure Process
                    </h3>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">Site Preparation</h4>
                            <p className="text-gray-600">Excavation, leveling, and site preparation for foundation work</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-800 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">Foundation</h4>
                            <p className="text-gray-600">Foundation laying, reinforcement, and concrete pouring</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">Framework</h4>
                            <p className="text-gray-600">Column, beam, and slab construction with proper reinforcement</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-800 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">Completion</h4>
                            <p className="text-gray-600">Final structural work, quality checks, and handover</p>
                        </div>
                    </div>
                </div>

                {/* Gallery */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Solid Foundations, Strong Structures
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <img src="/grey1.jpg" alt="Grey Structure Project 1" className="w-full h-64 object-cover rounded-lg shadow-lg"/>
                        <img src="/grey2.jpg" alt="Grey Structure Project 2" className="w-full h-64 object-cover rounded-lg shadow-lg"/>
                        <img src="/grey7.jpg" alt="Grey Structure Project 4" className="w-full h-64 object-cover rounded-lg shadow-lg"/>
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="text-center bg-blue-800 rounded-xl p-12 text-white">
                    <h3 className="text-3xl font-bold mb-4">Need Strong Structural Foundation?</h3>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Let us build the structural backbone of your project with our expert grey structure solutions.
                    </p>
                    <Link to="/contact" className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                        Get Structure Quote
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GreyStructure;