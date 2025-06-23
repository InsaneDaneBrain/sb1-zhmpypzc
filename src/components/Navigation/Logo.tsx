/**
 * Logo component with 48px height and proportional scaling
 * - Reverted logo path back to working BR_LOGO_new.png
 * - Set logo height to 48px with auto width for proportional scaling
 * - Used object-fit: contain for proper scaling
 * - Maintained fallback to Lucide icon if image fails to load
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { Blocks } from 'lucide-react';

interface LogoProps {
  brandName?: string;
  logoUrl?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  brandName = 'Block Rewards',
  logoUrl
}) => {
  const [imageError, setImageError] = useState(false);
  
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true
    });
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Link to="/" onClick={scrollToTop} className="flex items-center">
      {!imageError ? (
        <img 
          src="/BR_LOGO_new.png" 
          alt="Block Rewards Logo"
          className="h-12 w-auto object-contain"
          style={{ objectFit: 'contain' }}
          onError={handleImageError}
        />
      ) : (
        <div className="flex items-center gap-2">
          <Blocks className="h-8 w-8 md:h-10 md:w-10 text-white" />
          <span className="text-2xl md:text-3xl font-heading text-white">
            {brandName}
          </span>
        </div>
      )}
    </Link>
  );
};

export default Logo;