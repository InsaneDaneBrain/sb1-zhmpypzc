/**
 * Simplified Logo component using Lucide React icon by default
 * - Removed image loading attempts
 * - Using Blocks icon with brand name as default display
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { Blocks } from 'lucide-react';

interface LogoProps {
  brandName?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  brandName = 'Block Rewards'
}) => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true
    });
  };

  return (
    <Link to="/" onClick={scrollToTop} className="flex items-center">
      <div className="flex items-center gap-2">
        <Blocks className="h-8 w-8 md:h-10 md:w-10 text-white" />
        <span className="text-2xl md:text-3xl font-heading text-white">
          {brandName}
        </span>
      </div>
    </Link>
  );
};

export default Logo;