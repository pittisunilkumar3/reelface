import React from 'react';

export type AnimationType = 
  | 'float' 
  | 'pulse' 
  | 'scale' 
  | 'spin' 
  | 'bounce-horizontal'
  | 'bounce-vertical'
  | 'fade'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'rotate';

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  animationType?: AnimationType;
  hoverEffect?: boolean;
  onClick?: () => void;
}

const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  delay = 0,
  duration,
  className = "",
  animationType = 'float',
  hoverEffect = false,
  onClick,
}) => {
  // Map animation type to the corresponding Tailwind animation class
  const getAnimationClass = (type: AnimationType): string => {
    switch (type) {
      case 'float':
        return 'animate-float';
      case 'pulse':
        return 'animate-pulse-slow';
      case 'scale':
        return 'animate-scale-slow';
      case 'spin':
        return 'animate-spin-slow';
      case 'bounce-horizontal':
        return 'animate-bounce-horizontal';
      case 'bounce-vertical':
        return 'animate-bounce';
      case 'fade':
        return 'animate-fade';
      case 'slide-up':
        return 'animate-slide-up';
      case 'slide-down':
        return 'animate-slide-down';
      case 'slide-left':
        return 'animate-slide-left';
      case 'slide-right':
        return 'animate-slide-right';
      case 'rotate':
        return 'animate-rotate';
      default:
        return 'animate-float';
    }
  };

  // Get hover effect class if enabled
  const getHoverClass = (): string => {
    if (!hoverEffect) return '';
    
    switch (animationType) {
      case 'float':
        return 'hover:-translate-y-2';
      case 'scale':
        return 'hover:scale-105';
      case 'bounce-horizontal':
        return 'hover:translate-x-1';
      case 'bounce-vertical':
        return 'hover:-translate-y-1';
      case 'slide-up':
        return 'hover:-translate-y-2';
      case 'slide-down':
        return 'hover:translate-y-2';
      case 'slide-left':
        return 'hover:-translate-x-2';
      case 'slide-right':
        return 'hover:translate-x-2';
      case 'rotate':
        return 'hover:rotate-3';
      default:
        return 'hover:-translate-y-1';
    }
  };

  return (
    <div
      className={`${getAnimationClass(animationType)} ${getHoverClass()} transition-all ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        ...(duration ? { animationDuration: `${duration}s` } : {})
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default FloatingElement;
