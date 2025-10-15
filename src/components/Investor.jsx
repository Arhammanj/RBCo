import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Investor = () => {
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

    const investmentOpportunities = [
        {
            title: "Residential Development",
            description: "Quality residential projects in prime locations with potential for good returns.",
            investment: "Investment options available",
            duration: "Project based",
            returns: "Competitive returns",
            status: "Available"
        },
        {
            title: "Commercial Projects",
            description: "Commercial development opportunities in growing business areas.",
            investment: "Various investment levels",
            duration: "Project based",
            returns: "Market competitive",
            status: "Available"
        },
        {
            title: "Construction Partnerships",
            description: "Partner with us on upcoming construction and development projects.",
            investment: "Flexible investment",
            duration: "Project timeline",
            returns: "Mutual benefits",
            status: "Open"
        }
    ];

    const keyMetrics = [
        { label: "Active Projects", value: "Multiple", icon: "🏗️" },
        { label: "Investment Options", value: "Various", icon: "💼" },
        { label: "Partnership Approach", value: "Flexible", icon: "🤝" },
        { label: "Project Focus", value: "Quality", icon: "⭐" }
    ];

    const advantages = [
        {
            title: "Quality Focus",
            description: "We prioritize quality construction and attention to detail in all our projects.",
            icon: "🏆"
        },
        {
            title: "Strategic Locations",
            description: "Our projects are located in areas with growth potential and development prospects.",
            icon: "📍"
        },
        {
            title: "Professional Approach",
            description: "We maintain professional standards and work towards successful project completion.",
            icon: "👨‍💼"
        },
        {
            title: "Clear Communication",
            description: "We believe in open communication and keeping our partners informed throughout the process.",
            icon: "📊"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">Partnership Opportunities</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Explore opportunities to collaborate with RBCo on construction and development projects
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16" ref={sectionRef}>
                {/* Key Metrics Section */}
                <div className={`mb-20 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We focus on building quality projects and creating opportunities for growth and partnership
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {keyMetrics.map((metric, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                                <div className="text-4xl mb-4">{metric.icon}</div>
                                <div className="text-3xl font-bold text-red-500 mb-2">{metric.value}</div>
                                <div className="text-gray-600 font-medium">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Investment Opportunities */}
                <div className={`mb-20 transform transition-all duration-1000 delay-300 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore opportunities to partner with us on construction and development projects
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {investmentOpportunities.map((opportunity, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-2xl font-bold text-gray-900">{opportunity.title}</h3>
                                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                            opportunity.status === 'Open' ? 'bg-green-100 text-green-800' :
                                            opportunity.status === 'Limited' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                            {opportunity.status}
                                        </span>
                                    </div>
                                    
                                    <p className="text-gray-600 mb-6 leading-relaxed">{opportunity.description}</p>
                                    
                                    <div className="space-y-3 mb-6">
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Investment:</span>
                                            <span className="font-semibold text-gray-900">{opportunity.investment}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Duration:</span>
                                            <span className="font-semibold text-gray-900">{opportunity.duration}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Expected Returns:</span>
                                            <span className="font-semibold text-green-600">{opportunity.returns}</span>
                                        </div>
                                    </div>
                                    
                                    <button className="w-full bg-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Invest With Us */}
                <div className={`mb-20 transform transition-all duration-1000 delay-500 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner With RBCo?</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our commitment to quality and professional approach makes us a reliable partner
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {advantages.map((advantage, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex items-start space-x-6">
                                <div className="text-4xl flex-shrink-0">{advantage.icon}</div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Investment Process */}
                <div className={`mb-20 transform transition-all duration-1000 delay-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-12 text-white">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">Simple Partnership Process</h2>
                            <p className="text-xl opacity-90 max-w-3xl mx-auto">
                                Working with us is straightforward and professional
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                                <h3 className="text-xl font-semibold mb-2">Initial Discussion</h3>
                                <p className="opacity-90">Contact us to discuss potential opportunities and your interests</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                                <h3 className="text-xl font-semibold mb-2">Project Review</h3>
                                <p className="opacity-90">Review available projects and partnership options</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                                <h3 className="text-xl font-semibold mb-2">Agreement</h3>
                                <p className="opacity-90">Finalize terms and formalize the partnership</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                                <p className="opacity-90">Work together on successful project completion</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className={`text-center transform transition-all duration-1000 delay-900 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    <div className="bg-white rounded-2xl p-12 shadow-lg">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Explore Opportunities?</h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Contact us to discuss potential partnerships and learn more about working together
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link 
                                to="/contact"
                                className="inline-flex items-center px-8 py-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-300 hover:scale-105 transform"
                            >
                                Get In Touch
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                            
                            <a 
                                href="tel:+923218660255"
                                className="inline-flex items-center px-8 py-4 border-2 border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-105 transform"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Investor;