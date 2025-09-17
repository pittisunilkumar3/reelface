import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  animated?: boolean;
  size?: 'sm' | 'md' | 'lg';
  textOnly?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  animated = true,
  size = 'md',
  textOnly = false
}) => {
  // Size mapping
  const sizeMap = {
    sm: {
      logoHeight: 30,
      logoWidth: textOnly ? 0 : 120,
      fontSize: 'text-xl',
    },
    md: {
      logoHeight: 40,
      logoWidth: textOnly ? 0 : 160,
      fontSize: 'text-2xl',
    },
    lg: {
      logoHeight: 60,
      logoWidth: textOnly ? 0 : 240,
      fontSize: 'text-4xl',
    },
  };

  return (
    <Link to="/" className="flex items-center">
      {!textOnly ? (
        <div className={`${animated ? 'hover:scale-105 transition-transform duration-300' : ''}`}>
          <img
            src="/images/ReelFace-removebg-preview[1].png"
            alt="ReelFace Logo"
            className={`h-[${sizeMap[size].logoHeight}px] w-auto`}
            style={{ height: sizeMap[size].logoHeight }}
          />
        </div>
      ) : (
        <div className={`font-bold ${sizeMap[size].fontSize} logo-gradient`}>
          ReelFace
        </div>
      )}
    </Link>
  );
};

export default Logo;
