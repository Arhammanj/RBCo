import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Aboutus = () => {
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

    return (
        <section 
            ref={sectionRef}
            className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
            id="about"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-4 h-4 bg-red-500 opacity-20 animate-float-slow transform rotate-45"></div>
                <div className="absolute bottom-40 right-20 w-6 h-6 border-2 border-gray-400 opacity-15 animate-float-medium"></div>
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-red-400 opacity-25 rounded-full animate-float-fast"></div>
            </div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                {/* Header Section with Enhanced Animations */}
                <div className={`text-center mb-20 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    <div className="inline-block mb-4">
                        <span className="text-red-500 font-semibold text-lg tracking-wider uppercase animate-pulse">About RBCo</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        <span className="inline-block animate-slideInLeft">Building</span>{' '}
                        <span className="inline-block animate-slideInRight animation-delay-300 text-red-500">Excellence</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-500">
                        Transforming architectural dreams into stunning reality with precision, innovation, and uncompromising quality.
                    </p>
                </div>

                {/* Moving Ticker Line */}
                <div className="relative mb-16 overflow-hidden bg-red-500 py-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-400"></div>
                    <div className="relative">
                        <div className="animate-marquee whitespace-nowrap text-white font-bold text-lg tracking-wider">
                            🏗️ PREMIUM CONSTRUCTION • INNOVATIVE DESIGN • QUALITY ASSURANCE • TIMELY DELIVERY • EXPERT CRAFTSMANSHIP • CLIENT SATISFACTION • 20+ YEARS EXPERIENCE • MODERN SOLUTIONS • SUSTAINABLE BUILDING • ARCHITECTURAL EXCELLENCE • TRUSTED PARTNERS • BUILD YOUR DREAMS • 
                        </div>
                    </div>
                </div>

                {/* Main Content Grid with Enhanced Animations */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left Content */}
                    <div className={`transform transition-all duration-1000 delay-300 ${
                        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                    }`}>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6 animate-slideInUp animation-delay-700">
                            Your Vision, Our Expertise
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6 animate-fadeInUp animation-delay-1000">
                            RBCo is a leading construction company dedicated to transforming dreams into reality. With over 20 years of experience, we specialize in residential, commercial, and infrastructure projects that stand the test of time.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed mb-8 animate-fadeInUp animation-delay-1500">
                            Our team of experienced professionals works closely with clients to deliver high-quality results on time and within budget. We believe in building not just structures, but lasting relationships based on trust and integrity.
                        </p>
                        
                        {/* Animated Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slideInLeft animation-delay-2000">
                                <div className="text-3xl font-bold text-red-500 mb-2 animate-pulseGlow">20+</div>
                                <div className="text-gray-600 font-medium">Years Experience</div>
                            </div>
                            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slideInRight animation-delay-2500">
                                <div className="text-2xl font-bold text-red-500 mb-2 animate-textGlow">✨</div>
                                <div className="text-red-500 font-bold">Excellence & Integrity</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image with Enhanced Animations */}
                    <div className={`transform transition-all duration-1000 delay-500 ${
                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}>
                        <div className="relative group animate-float">
                            <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300 animate-pulseGlow"></div>
                            <img 
                                src="/plaza.jpg" 
                                alt="RBCo Construction Excellence" 
                                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Overlay Badge */}
                          
                        </div>
                    </div>
                </div>

                {/* Features Grid with Staggered Animations */}
                <div className={`grid md:grid-cols-3 gap-8 mb-20 transform transition-all duration-1000 delay-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    {/* Feature 1 */}
                    <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slideInUp animation-delay-1000">
                        <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-float animation-delay-500">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Quality Construction</h4>
                        <p className="text-gray-600 leading-relaxed">Premium materials and expert craftsmanship in every project we undertake.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slideInUp animation-delay-1500">
                        <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-float animation-delay-1000">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Timely Delivery</h4>
                        <p className="text-gray-600 leading-relaxed">On-time project completion with efficient project management and planning.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slideInUp animation-delay-2000">
                        <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-float animation-delay-1500">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Expert Team</h4>
                        <p className="text-gray-600 leading-relaxed">Experienced professionals dedicated to bringing your vision to life.</p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className={`text-center transform transition-all duration-1000 delay-900 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-12 relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="w-full h-full bg-grid-pattern"></div>
                        </div>
                        
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Ready to Start Your Project?
                            </h3>
                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Let's transform your vision into reality with our expert construction services.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link 
                                    to="/projects"
                                    className="inline-flex items-center px-8 py-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-300 hover:scale-105 transform"
                                >
                                    View Our Projects
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                                
                                <Link 
                                    to="/contact"
                                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 transform"
                                >
                                    Get Consultation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map and Contact Information Section */}
                <div className={`mt-20 transform transition-all duration-1000 delay-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp">
                            Visit Our Office
                        </h3>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fadeInUp animation-delay-300">
                            Come see us in person or get in touch to discuss your next project
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Information */}
                        <div className="space-y-8 animate-slideInLeft animation-delay-500">
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <svg className="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Contact Information
                                </h4>
                                
                                <div className="space-y-6">
                                    {/* Address */}
                                    <div className="flex items-start space-x-4 group hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
                                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                                            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold text-gray-900 mb-1">Office Address</h5>
                                            <p className="text-gray-600">DHA Lahore<br />Defence Housing Authority<br />Lahore, Punjab, Pakistan</p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start space-x-4 group hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
                                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                                            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold text-gray-900 mb-1">Phone Number</h5>
                                            <p className="text-gray-600">+92 (321) 866-0255</p>
                                            <p className="text-sm text-gray-500">Mon-Fri: 8:00 AM - 6:00 PM</p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start space-x-4 group hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
                                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                                            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold text-gray-900 mb-1">Email Address</h5>
                                            <p className="text-gray-600">info@rbco.international</p>
                                            <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                                        </div>
                                    </div>

                                    {/* WhatsApp */}
                                    <div className="flex items-start space-x-4 group hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
                                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                                            <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.886 3.75"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold text-gray-900 mb-1">WhatsApp</h5>
                                            <a 
                                                href="https://wa.me/1234567890?text=Hello%2C%20I%27m%20interested%20in%20your%20construction%20services"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-green-600 hover:text-green-700 transition-colors duration-300"
                                            >
                                                +92 (339) 270-7066
                                            </a>
                                            <p className="text-sm text-gray-500">Quick response via WhatsApp</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="animate-slideInRight animation-delay-700">
                            <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <svg className="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                    </svg>
                                    Find Us Here
                                </h4>
                                
                                {/* Google Maps Embed */}
                                <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-inner">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.8745742194896!2d74.35874931544207!3d31.509534574181654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190029ed8df4af%3A0xb5b6501cdf4c7e3b!2sDHA%20Lahore!5e0!3m2!1sen!2s!4v1697379345667!5m2!1sen!2s"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="grayscale hover:grayscale-0 transition-all duration-500"
                                        title="RBCo Office Location - DHA Lahore"
                                    ></iframe>
                                </div>
                                
                                {/* Map Footer */}
                                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-semibold text-gray-900">Office Hours</p>
                                            <p className="text-sm text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                                            <p className="text-sm text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                                        </div>
                                        <a 
                                            href="https://maps.google.com/?q=DHA+Lahore+Pakistan"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition-colors duration-300"
                                        >
                                            Get Directions
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Aboutus;