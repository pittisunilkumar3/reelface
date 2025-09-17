import React, { useEffect, useRef } from 'react';

interface FloatingLogoProps {
  className?: string;
  size?: number;
}

const FloatingLogo: React.FC<FloatingLogoProps> = ({ 
  className = '',
  size = 200
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = size;
    canvas.height = size;
    
    // Hexagon vertices (6 points)
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2 - 20;
    const vertices: [number, number][] = [];
    
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      vertices.push([x, y]);
    }
    
    // Draw the hexagon network
    const drawNetwork = (time: number) => {
      ctx.clearRect(0, 0, size, size);
      
      // Draw lines
      for (let i = 0; i < vertices.length; i++) {
        for (let j = i + 1; j < vertices.length; j++) {
          const gradient = ctx.createLinearGradient(
            vertices[i][0], vertices[i][1], 
            vertices[j][0], vertices[j][1]
          );
          
          // Different colors based on position (top to bottom gradient)
          if (i < 2 || j < 2) {
            gradient.addColorStop(0, 'rgba(255, 165, 79, 0.6)'); // Orange
            gradient.addColorStop(1, 'rgba(255, 20, 147, 0.6)'); // Pink
          } else {
            gradient.addColorStop(0, 'rgba(255, 20, 147, 0.6)'); // Pink
            gradient.addColorStop(1, 'rgba(128, 0, 128, 0.6)'); // Purple
          }
          
          ctx.beginPath();
          ctx.moveTo(vertices[i][0], vertices[i][1]);
          ctx.lineTo(vertices[j][0], vertices[j][1]);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }
      
      // Draw vertices (nodes)
      vertices.forEach(([x, y], index) => {
        const pulseSize = 1 + Math.sin(time / 1000 + index) * 0.2;
        const nodeRadius = 5 * pulseSize;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, nodeRadius * 2);
        
        // Different colors based on position (top to bottom gradient)
        if (index < 2) {
          gradient.addColorStop(0, '#FFA54F'); // Orange
          gradient.addColorStop(1, '#FF8C00');
        } else if (index < 4) {
          gradient.addColorStop(0, '#FF1493'); // Pink
          gradient.addColorStop(1, '#C71585');
        } else {
          gradient.addColorStop(0, '#9932CC'); // Purple
          gradient.addColorStop(1, '#800080');
        }
        
        // Draw glow
        ctx.beginPath();
        ctx.arc(x, y, nodeRadius * 2, 0, Math.PI * 2);
        const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, nodeRadius * 2);
        
        if (index < 2) {
          glowGradient.addColorStop(0, 'rgba(255, 165, 79, 0.5)');
          glowGradient.addColorStop(1, 'rgba(255, 165, 79, 0)');
        } else if (index < 4) {
          glowGradient.addColorStop(0, 'rgba(255, 20, 147, 0.5)');
          glowGradient.addColorStop(1, 'rgba(255, 20, 147, 0)');
        } else {
          glowGradient.addColorStop(0, 'rgba(128, 0, 128, 0.5)');
          glowGradient.addColorStop(1, 'rgba(128, 0, 128, 0)');
        }
        
        ctx.fillStyle = glowGradient;
        ctx.fill();
        
        // Draw node
        ctx.beginPath();
        ctx.arc(x, y, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });
    };
    
    // Animation
    let animationFrame: number;
    let startTime: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      drawNetwork(elapsed);
      animationFrame = requestAnimationFrame(animate);
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [size]);
  
  return (
    <div className={`float ${className}`}>
      <canvas 
        ref={canvasRef} 
        width={size}
        height={size}
        className="w-full h-full"
      />
    </div>
  );
};

export default FloatingLogo;
