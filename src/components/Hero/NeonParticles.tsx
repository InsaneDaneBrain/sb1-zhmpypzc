/**
 * Enhanced neon particle background with improved performance and visual effects
 */
import React, { useEffect, useRef } from 'react';

const NeonParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    const particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      life: number;
      maxLife: number;
    }[] = [];

    const colors = [
      'rgba(138, 43, 226, 0.7)',  // Purple
      'rgba(255, 20, 147, 0.7)',  // Pink
      'rgba(0, 206, 209, 0.7)',   // Teal
      'rgba(255, 0, 255, 0.7)',   // Magenta
    ];

    const createParticle = (x = Math.random() * canvas.width, y = Math.random() * canvas.height) => {
      const radius = Math.random() * 2 + 1;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const maxLife = 100 + Math.random() * 100;

      particles.push({
        x,
        y,
        radius,
        color,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        life: 0,
        maxLife,
      });
    };

    const createInitialParticles = () => {
      for (let i = 0; i < 50; i++) {
        createParticle();
      }
    };

    createInitialParticles();

    const drawParticle = (particle: typeof particles[0]) => {
      const opacity = 1 - (particle.life / particle.maxLife);
      
      ctx.beginPath();
      const gradient = ctx.createRadialGradient(
        particle.x, 
        particle.y, 
        0, 
        particle.x, 
        particle.y, 
        particle.radius * 2
      );
      
      const color = particle.color.replace('0.7', String(opacity * 0.7));
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.arc(particle.x, particle.y, particle.radius * 2, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;

      const gridSize = 40;
      const offsetX = mouseX ? (mouseX - canvas.width / 2) * 0.02 : 0;
      const offsetY = mouseY ? (mouseY - canvas.height / 2) * 0.02 : 0;

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y + offsetY);
        ctx.lineTo(canvas.width, y + offsetY);
        ctx.stroke();
      }

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x + offsetX, 0);
        ctx.lineTo(x + offsetX, canvas.height);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawGrid();

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        
        particle.life++;
        if (particle.life >= particle.maxLife) {
          particles.splice(i, 1);
          createParticle();
          continue;
        }

        // Add subtle mouse interaction
        if (mouseX && mouseY) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 200) {
            particle.x += dx * 0.002;
            particle.y += dy * 0.002;
          }
        }

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        drawParticle(particle);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
      style={{
        background: 'linear-gradient(to bottom, rgba(18, 18, 18, 0.95), rgba(18, 18, 18, 1))',
      }}
    />
  );
};

export default NeonParticles;