import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Animated particles component
const AnimatedParticles = () => {
    const canvasRef = useRef();
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const particles = [];
        
        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // Create particles
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.1
            });
        }
        
        // Animate particles
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;
                
                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
                ctx.fill();
            });
            
            requestAnimationFrame(animate);
        };
        
        animate();
        
        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);
    
    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
};

// Interactive solution card component
const SolutionCard = ({ title, description, link, color, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef();
    
    const handleMouseMove = (e) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setMousePosition({ x, y });
        }
    };
    
    const getColorClasses = () => {
        const colors = {
            blue: {
                bg: 'from-blue-500 to-blue-700',
                border: 'border-blue-200',
                text: 'text-blue-700',
                hover: 'group-hover:text-blue-800',
                button: 'bg-blue-700 group-hover:bg-blue-800',
                glow: 'group-hover:shadow-blue-500/50'
            },
            slate: {
                bg: 'from-slate-500 to-slate-700',
                border: 'border-slate-200',
                text: 'text-slate-700',
                hover: 'group-hover:text-slate-800',
                button: 'bg-slate-700 group-hover:bg-slate-800',
                glow: 'group-hover:shadow-slate-500/50'
            },
            indigo: {
                bg: 'from-indigo-500 to-indigo-700',
                border: 'border-indigo-200',
                text: 'text-indigo-700',
                hover: 'group-hover:text-indigo-800',
                button: 'bg-indigo-700 group-hover:bg-indigo-800',
                glow: 'group-hover:shadow-indigo-500/50'
            }
        };
        return colors[color] || colors.blue;
    };
    
    const colorClasses = getColorClasses();
    
    return (
        <Link 
            to={link} 
            ref={cardRef}
            className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl ${colorClasses.glow} transition-all duration-700 transform hover:-translate-y-6 hover:scale-105 ${colorClasses.border} border-2 p-8 overflow-hidden interactive-card`}
            style={{
                animationDelay: `${index * 200}ms`
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
        >
            {/* Animated gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.bg} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            
            {/* Interactive glow effect */}
            {isHovered && (
                <div 
                    className="absolute w-32 h-32 rounded-full bg-gradient-radial from-blue-400/30 to-transparent pointer-events-none transition-all duration-300"
                    style={{
                        left: mousePosition.x - 64,
                        top: mousePosition.y - 64,
                    }}
                />
            )}
            
            <div className="relative z-10">
                <div className="mb-6">
                    <h3 className={`text-3xl font-bold ${colorClasses.text} ${colorClasses.hover} transition-colors duration-300 group-hover:scale-105 transform-gpu`}>
                        {title}
                    </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-8 group-hover:text-gray-700 transition-colors duration-300">
                    {description}
                </p>
                
                <div className={`flex items-center justify-center ${colorClasses.button} text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 group-hover:scale-105 shadow-lg group-hover:shadow-xl`}>
                    <span className="mr-3">Explore Solution</span>
                    <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-animation"></div>
            </div>
        </Link>
    );
};

const Solutions = () => {
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
            title: "Architecture Design",
            description: "Innovative architectural solutions with functionality and creative design that transform your vision into reality with cutting-edge technology.",
            link: "/architecture",
        
            color: "blue"
        },
        {
            title: "Grey Structure",
            description: "Robust structural framework and foundation solutions for lasting construction that stands the test of time with premium materials.",
            link: "/greystructure",
        
            color: "slate"
        },
        {
            title: "Turn Key Solutions",
            description: "Complete end-to-end project delivery from planning to handover with full service management and quality assurance.",
            link: "/turnkey",
           
            color: "indigo"
        }
    ];
    
    return (
        <div 
            ref={sectionRef}
            className="relative min-h-screen flex flex-col items-center justify-center container mx-auto p-8 md:px-20 lg:px-32 w-full overflow-hidden" 
            id="solution"
            style={{
                backgroundImage: "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 50%, rgba(15, 23, 42, 0.95) 100%), url('/solution background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed"
            }}
        >
            {/* Animated particles background */}
            <AnimatedParticles />
            
            {/* Content Container */}
            <div className="relative z-10 w-full">
                {/* Header Section */}
                <div className={`text-center max-w-5xl mb-16 mx-auto transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}>
                    <div className="overflow-hidden mb-6">
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
                            Our{" "}
                            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
                                Solutions
                            </span>
                        </h1>
                    </div>
                    <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
                        Comprehensive construction solutions designed to bring your vision to life with innovation, quality, and excellence.
                    </p>
                    
                    {/* Animated line */}
                    <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-8 rounded-full animate-pulse"></div>
                </div>

                {/* Solutions Cards Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full max-w-7xl mx-auto mb-20 transform transition-all duration-1000 delay-300 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}>
                    {solutions.map((solution, index) => (
                        <SolutionCard 
                            key={solution.title}
                            {...solution}
                            index={index}
                        />
                    ))}
                </div>

                {/* Call to Action Section */}
                <div className={`w-full max-w-5xl mx-auto transform transition-all duration-1000 delay-500 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}>
                    <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 md:p-16 text-white text-center shadow-2xl overflow-hidden group">
                        {/* Animated background pattern */}
                        <div className="absolute inset-0 bg-grid-white/10 opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                        
                        {/* Floating elements */}
                        <div className="absolute top-4 left-4 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
                        <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/10 rounded-full animate-float-delayed"></div>
                        
                        <div className="relative z-10 space-y-8">
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                Ready to{" "}
                                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                                    Transform
                                </span>{" "}
                                Your Vision?
                            </h2>
                            
                            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                                Let's collaborate to create something extraordinary. Your dream project is just one click away.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
                                <Link 
                                    to="/contact" 
                                    className="group relative bg-white text-blue-800 px-10 py-4 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden"
                                >
                                    <span className="relative z-10">Start Your Journey</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                </Link>
                                
                                <div className="flex items-center text-blue-200 space-x-4">
                                    <span className="text-lg">or call us:</span>
                                    <a 
                                        href="tel:+923392707066" 
                                        className="font-bold text-xl hover:text-white transition-colors duration-300 hover:scale-110 transform"
                                    >
                                        033 9270 7066
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solutions;
