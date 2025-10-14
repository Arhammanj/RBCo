import React from "react";
import { Link } from "react-router-dom";

const TurnKeySolutions = () => {
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
                            Turn Key Solutions
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                            Complete end-to-end project delivery from initial planning to final handover
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">
                            One Partner, Complete Solution
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Our turnkey solutions provide you with a single point of contact for your entire project. 
                            From conceptual design to project completion, we handle every aspect of construction 
                            and delivery, ensuring seamless execution and exceptional results.
                        </p>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            This comprehensive approach reduces complexity, minimizes risk, and ensures consistent 
                            quality throughout the project lifecycle. You focus on your business while we deliver 
                            your project on time and within budget.
                        </p>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-xl">
                        <img src="/l1.jpg" alt="Turn Key Solutions" className="w-full h-96 object-cover"/>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Complete Project Lifecycle
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Project Planning</h4>
                            <p className="text-gray-600">Comprehensive planning including feasibility studies, budgeting, and scheduling.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Design & Engineering</h4>
                            <p className="text-gray-600">Complete architectural and engineering design services from concept to construction.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Permit & Approvals</h4>
                            <p className="text-gray-600">Full regulatory compliance and permit acquisition for smooth project execution.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Construction Management</h4>
                            <p className="text-gray-600">Professional construction management ensuring quality, timeline, and budget control.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Quality Assurance</h4>
                            <p className="text-gray-600">Rigorous quality control processes throughout all project phases.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Project Handover</h4>
                            <p className="text-gray-600">Complete project delivery including documentation, training, and warranty support.</p>
                        </div>
                    </div>
                </div>

                {/* Process Timeline */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Our Process
                    </h3>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">Discovery</h4>
                            <p className="text-gray-600">Understanding your needs and project requirements</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-800 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">Design</h4>
                            <p className="text-gray-600">Creating comprehensive design and planning solutions</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">Build</h4>
                            <p className="text-gray-600">Professional construction with quality management</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-800 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">Deliver</h4>
                            <p className="text-gray-600">Complete handover and ongoing support</p>
                        </div>
                    </div>
                </div>

                {/* Project Portfolio Gallery */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Our Turnkey Project Portfolio
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <img 
                                src="/l2.jpg" 
                                alt="Residential Complex" 
                                className="w-full h-48 object-cover"
                            />
                            
                            <div className="p-4">
                                <h4 className="font-semibold text-gray-800 mb-2">Residential Complex</h4>
                                <p className="text-gray-600 text-sm">Complete turnkey solution</p>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <img 
                                src="/l3.jpg" 
                                alt="Commercial Building" 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h4 className="font-semibold text-gray-800 mb-2">Vibrant Tile Work</h4>
                                <p className="text-gray-600 text-sm">End-to-end project delivery</p>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <img 
                                src="/l4.jpg" 
                                alt="Modern Villa" 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h4 className="font-semibold text-gray-800 mb-2">Modern Villa</h4>
                                <p className="text-gray-600 text-sm">Luxury turnkey solution</p>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <img 
                                src="/KIT1.jpg" 
                                alt="Kitchen Design" 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h4 className="font-semibold text-gray-800 mb-2">Kitchen Design</h4>
                                <p className="text-gray-600 text-sm">Custom kitchen solutions</p>
                            </div>
                        </div>
                        
                        
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <img 
                                src="ven2.jpg" 
                                alt="Washroom Design" 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h4 className="font-semibold text-gray-800 mb-2">Interior Design</h4>
                                <p className="text-gray-600 text-sm">Complete interior solutions</p>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <img 
                                src="/was3.jpg" 
                                alt="Washroom Design" 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h4 className="font-semibold text-gray-800 mb-2">Washroom Design</h4>
                                <p className="text-gray-600 text-sm">Modern bathroom solutions</p>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <img 
                                src="/t1.jpg" 
                                alt="Premium Township" 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h4 className="font-semibold text-gray-800 mb-2">Premium Township</h4>
                                <p className="text-gray-600 text-sm">Integrated development</p>
                            </div>
                        </div>
                        
                        {/* Empty Div 1 - Ready for your image */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <img 
                                src="was1.jpg" 
                                alt="WasHroom Design" 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h4 className="font-semibold text-gray-800 mb-2">Project Title 1</h4>
                                <p className="text-gray-600 text-sm">Project description here</p>
                            </div>
                        </div>
                        
                        {/* Empty Div 2 - Ready for your image */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <img 
                                src="wood1.jpg" 
                                alt="Wooden Design" 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h4 className="font-semibold text-gray-800 mb-2">Project Title 2</h4>
                                <p className="text-gray-600 text-sm">Project description here</p>
                            </div>
                        </div>
                        
                        {/* Empty Div 3 - Ready for your image */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <img 
                                src="siling6.jpg" 
                                alt="Siling Design" 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h4 className="font-semibold text-gray-800 mb-2">Project Title 3</h4>
                                <p className="text-gray-600 text-sm">Project description here</p>
                            </div>
                        </div>
                        
                        {/* Empty Div 4 - Ready for your image */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <img 
                                src="kitchen.jpg" 
                                alt="Kitchen Design" 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h4 className="font-semibold text-gray-800 mb-2">Project Title 4</h4>
                                <p className="text-gray-600 text-sm">Project description here</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="text-center bg-blue-800 rounded-xl p-12 text-white">
                    <h3 className="text-3xl font-bold mb-4">Ready for a Complete Solution?</h3>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Let us handle your entire project from start to finish with our comprehensive turnkey approach.
                    </p>
                    <Link to="/contact" className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                        Arrange Site Visit
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TurnKeySolutions;