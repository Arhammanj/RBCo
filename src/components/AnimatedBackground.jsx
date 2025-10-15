import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system for architectural elements
    const particles = [];
    const numParticles = 50;
    
    // Create architectural-inspired particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        type: Math.floor(Math.random() * 3) // Different shapes
      });
    }

    // Grid lines for architectural feel
    const gridLines = [];
    const numLines = 8;
    
    for (let i = 0; i < numLines; i++) {
      gridLines.push({
        x1: Math.random() * canvas.width,
        y1: Math.random() * canvas.height,
        x2: Math.random() * canvas.width,
        y2: Math.random() * canvas.height,
        opacity: Math.random() * 0.1 + 0.05,
        animationOffset: Math.random() * Math.PI * 2
      });
    }

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Draw animated grid lines
      gridLines.forEach((line, index) => {
        const opacityVariation = Math.sin(time * 2 + line.animationOffset) * 0.02;
        ctx.strokeStyle = `rgba(255, 255, 255, ${line.opacity + opacityVariation})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.stroke();
      });

      // Draw and animate particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        // Animate opacity
        const opacityVariation = Math.sin(time * 3 + index) * 0.1;
        const currentOpacity = particle.opacity + opacityVariation;

        ctx.save();
        ctx.globalAlpha = currentOpacity;

        // Draw different shapes based on type
        if (particle.type === 0) {
          // Square (architectural block)
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.fillRect(particle.x - particle.size/2, particle.y - particle.size/2, particle.size, particle.size);
        } else if (particle.type === 1) {
          // Circle (point)
          ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size/2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Line (beam)
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particle.x - particle.size, particle.y);
          ctx.lineTo(particle.x + particle.size, particle.y);
          ctx.stroke();
        }

        ctx.restore();
      });

      // Draw architectural blueprint lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
      
      // Horizontal lines
      for (let i = 0; i < 5; i++) {
        const y = (canvas.height / 5) * i + Math.sin(time + i) * 10;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Vertical lines
      for (let i = 0; i < 8; i++) {
        const x = (canvas.width / 8) * i + Math.cos(time + i) * 15;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default AnimatedBackground;