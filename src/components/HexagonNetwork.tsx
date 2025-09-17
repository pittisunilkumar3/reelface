import React, { useEffect, useRef } from 'react';

interface HexagonNetworkProps {
  width?: number;
  height?: number;
  nodeCount?: number;
  animated?: boolean;
  className?: string;
}

const HexagonNetwork: React.FC<HexagonNetworkProps> = ({
  width = 500,
  height = 400,
  nodeCount = 20,
  animated = true,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = width;
    canvas.height = height;
    
    // Create nodes
    type Node = {
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
    };
    
    const nodes: Node[] = [];
    const colors = ['#FFA54F', '#FF1493', '#9932CC', '#800080'];
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }
    
    // Draw function
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            // Create gradient for the line
            const gradient = ctx.createLinearGradient(
              nodes[i].x, nodes[i].y, 
              nodes[j].x, nodes[j].y
            );
            gradient.addColorStop(0, nodes[i].color.replace(')', ', ' + (1 - distance / 100) + ')').replace('rgb', 'rgba'));
            gradient.addColorStop(1, nodes[j].color.replace(')', ', ' + (1 - distance / 100) + ')').replace('rgb', 'rgba'));
            
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      
      // Draw nodes
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
        
        // Add glow effect
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 2, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          node.x, node.y, node.radius,
          node.x, node.y, node.radius + 5
        );
        gradient.addColorStop(0, node.color.replace(')', ', 0.3)').replace('rgb', 'rgba'));
        gradient.addColorStop(1, node.color.replace(')', ', 0)').replace('rgb', 'rgba'));
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    };
    
    // Animation function
    const animate = () => {
      if (animated) {
        for (const node of nodes) {
          // Update position
          node.x += node.vx;
          node.y += node.vy;
          
          // Bounce off walls
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }
      }
      
      draw();
      animationId = requestAnimationFrame(animate);
    };
    
    // Start animation
    let animationId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [width, height, nodeCount, animated]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`hexagon-network ${className}`}
      style={{ width, height }}
    />
  );
};

export default HexagonNetwork;
