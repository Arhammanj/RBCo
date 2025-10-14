import React from "react";
import { Link } from "react-router-dom";

const ArchitectureDesign = () => {
    const portfolioProjects = [
        { image: "/Elevation Design/a1.jpg" },
        { image: "/Elevation Design/a2.jpg" },
        { image: "/Elevation Design/a3.jpg" },
        { image: "/Elevation Design/a4.jpg" },
        { image: "/Elevation Design/a5.jpg" },
        { image: "/Elevation Design/a7.jpg" },
        { image: "/Elevation Design/a7.jpg" },
        { image: "/plaza.jpg" },
        { image: "/Elevation Design/a8.jpg" }
    ];
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
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Architecture Design Services in Lahore
                        </h1>
                        <p className="text-lg md:text-xl max-w-4xl mx-auto mb-4">
                            LDA Approved | Professional | Innovative
                        </p>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto">
                            Specialized architecture design solutions that strictly comply with Lahore Development Authority (LDA) by-laws
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">
                            LDA-Approved Architecture Design
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            At RBCo, we specialize in delivering innovative and practical architecture design 
                            solutions that strictly comply with Lahore Development Authority (LDA) by-laws. Whether 
                            you're planning a residential home, commercial building, or mixed-use project, our expert 
                            architects ensure your design is modern, functional, and fully approved.
                        </p>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Our comprehensive approach covers everything from initial concept design to final LDA 
                            approval, making your architectural journey seamless and hassle-free.
                        </p>
                        <div className="flex items-center space-x-4">
                            <div className="bg-blue-700 text-white px-4 py-2 rounded-full font-semibold">
                                ✓ LDA Approved
                            </div>
                            <div className="bg-blue-800 text-white px-4 py-2 rounded-full font-semibold">
                                ✓ Professional Team
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-xl">
                        <img src="/Elevation Design/a3.jpg" alt="Architecture Design" className="w-full h-96 object-cover"/>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Our Architecture Design Services
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-700">
                            <div className="text-3xl mb-4">🏡</div>
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Residential & Commercial Architecture</h4>
                            <p className="text-gray-600">We design homes, offices, and commercial buildings that balance aesthetics with functionality. Every plan is tailored to your lifestyle, business goals, and budget.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-800">
                            <div className="text-3xl mb-4">📐</div>
                            <h4 className="text-xl font-bold text-gray-800 mb-4">LDA-Approved Drawings</h4>
                            <p className="text-gray-600">Our team prepares detailed architectural drawings as per LDA building regulations, ensuring your project faces no delays in approval.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-700">
                            <div className="text-3xl mb-4">🖥️</div>
                            <h4 className="text-xl font-bold text-gray-800 mb-4">3D Visualization & Concept Design</h4>
                            <p className="text-gray-600">We bring your ideas to life with 3D models and conceptual designs, allowing you to visualize the project before construction begins.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-800">
                            <div className="text-3xl mb-4">🏢</div>
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Space Planning & Interior Layouts</h4>
                            <p className="text-gray-600">Smart and efficient space planning ensures maximum utilization of land and interiors while maintaining elegance and comfort.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-700">
                            <div className="text-3xl mb-4">🏗️</div>
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Structural & MEP Coordination</h4>
                            <p className="text-gray-600">We integrate structural, electrical, and plumbing (MEP) requirements seamlessly within architectural plans to avoid future complications.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-800">
                            <div className="text-3xl mb-4">📑</div>
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Approval & Documentation Support</h4>
                            <p className="text-gray-600">From submission to follow-ups, we handle the entire approval process with LDA, making the journey hassle-free for you.</p>
                        </div>
                    </div>
                </div>

         
                <div className="mb-16">
                    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        {portfolioProjects.map((project, index) => {
                            // Create unique patterns for different projects
                            const patterns = [
                                'polygon(0% 15%, 15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)',
                                'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)',
                                'polygon(0% 0%, 80% 0%, 100% 20%, 100% 100%, 20% 100%, 0% 80%)',
                                'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
                                'polygon(0% 20%, 20% 0%, 100% 0%, 80% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%)',
                                'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)',
                                'circle(50% at 50% 50%)',
                                'ellipse(60% 40% at 50% 50%)'
                            ];
                            
                            const heights = ['h-64', 'h-72', 'h-80', 'h-60', 'h-96', 'h-52', 'h-88', 'h-76'];
                            const selectedHeight = heights[index % heights.length];
                            const selectedPattern = patterns[index % patterns.length];
                            
                            // Different border radius styles
                            const borderStyles = [
                                '50px 10px 50px 10px',
                                '10px 50px 10px 50px', 
                                '30px 5px 30px 5px',
                                '5px 30px 5px 30px',
                                '60px 20px',
                                '20px 60px',
                                '40px',
                                '15px 50px 15px 50px'
                            ];
                            
                            const isClipPath = selectedPattern.includes('polygon') || selectedPattern.includes('circle') || selectedPattern.includes('ellipse');
                            
                            return (
                                <div 
                                    key={index}
                                    className={`group break-inside-avoid mb-6 relative overflow-hidden ${selectedHeight} transform transition-all duration-700 hover:scale-105`}
                                    style={{
                                        background: `linear-gradient(${135 + (index * 30)}deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))`,
                                        borderRadius: !isClipPath ? borderStyles[index % borderStyles.length] : '0'
                                    }}
                                >
                                    {/* Unique Frame Background */}
                                    <div 
                                        className="absolute inset-2 overflow-hidden transition-all duration-700 group-hover:inset-1"
                                        style={isClipPath ? { clipPath: selectedPattern } : { borderRadius: borderStyles[index % borderStyles.length] }}
                                    >
                                        <img 
                                            src={project.image} 
                                            alt={`RBCo Architecture ${index + 1}`}
                                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100"
                                        />
                                        
                                        {/* Dynamic Floating Elements */}
                                        <div 
                                            className="absolute w-3 h-3 bg-white/80 rounded-full animate-pulse"
                                            style={{
                                                top: `${10 + (index % 3) * 20}%`,
                                                right: `${10 + (index % 4) * 15}%`
                                            }}
                                        ></div>
                                        <div 
                                            className="absolute w-2 h-2 bg-purple-400/60 rounded-full animate-pulse delay-300"
                                            style={{
                                                bottom: `${10 + (index % 3) * 15}%`,
                                                left: `${10 + (index % 4) * 20}%`
                                            }}
                                        ></div>
                                        
                                        {/* Gradient Overlay on Hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                        
                                        {/* Dynamic Corner Accents */}
                                        {index % 3 === 0 && (
                                            <>
                                                <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-white/60 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-white/60 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                            </>
                                        )}
                                        
                                        {index % 3 === 1 && (
                                            <div className="absolute inset-0 border-2 border-dashed border-white/40 opacity-0 group-hover:opacity-100 transition-all duration-500 m-4"></div>
                                        )}
                                        
                                        {index % 3 === 2 && (
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                        )}
                                    </div>
                                    
                                    {/* Creative Border Effects */}
                                    <div 
                                        className="absolute inset-0 border-2 border-gradient-to-br from-purple-300/30 to-pink-300/30 pointer-events-none"
                                        style={{ borderRadius: !isClipPath ? borderStyles[index % borderStyles.length] : '0' }}
                                    ></div>
                                    
                                    {/* Floating Number Badge */}
                                    <div 
                                        className={`absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br ${
                                            index % 4 === 0 ? 'from-purple-500 to-purple-700' :
                                            index % 4 === 1 ? 'from-pink-500 to-pink-700' :
                                            index % 4 === 2 ? 'from-blue-500 to-blue-700' :
                                            'from-indigo-500 to-indigo-700'
                                        } rounded-full flex items-center justify-center text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-12 group-hover:rotate-0 shadow-lg`}
                                    >
                                        {index + 1}
                                    </div>
                                    
                                    {/* Animated Corner Dots */}
                                    {index % 2 === 0 && (
                                        <>
                                            <div className="absolute top-2 left-2 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
                                            <div className="absolute bottom-2 right-2 w-1 h-1 bg-green-400 rounded-full animate-ping delay-500"></div>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    
                    {/* Call to Action */}
                    <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl">
                        <div className="flex justify-center mb-4">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
                                <div className="w-3 h-3 bg-blue-700 rounded-full animate-bounce delay-100"></div>
                                <div className="w-3 h-3 bg-blue-800 rounded-full animate-bounce delay-200"></div>
                            </div>
                        </div>
                        <h4 className="text-2xl font-bold text-gray-800 mb-4">Inspired by Our Creative Designs?</h4>
                        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                            Each frame represents our unique approach to architectural excellence and innovative design.
                        </p>
                        <Link to="/contact" className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-800 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Get Your Project Quote
                        </Link>
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="text-center bg-blue-800 rounded-xl p-12 text-white">
                    <h3 className="text-3xl font-bold mb-4">Ready to Design Something Amazing?</h3>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Let's collaborate to create architectural designs that inspire and function beautifully.
                    </p>
                    <Link to="/contact" className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                        Contact Us for Your Project
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ArchitectureDesign;