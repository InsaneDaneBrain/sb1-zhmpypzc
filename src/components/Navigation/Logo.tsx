/**
 * Enhanced Logo component with improved Supabase storage integration
 * - Fixed image loading by using correct file path
 * - Added better error handling and loading states
 * - Improved fallback mechanism
 */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { Blocks } from 'lucide-react';
import { imageStorage } from '../../utils/supabase';

interface LogoProps {
  logoUrl?: string;
  brandName?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  logoUrl,
  brandName = 'Block Rewards'
}) => {
  const [supabaseLogo, setSupabaseLogo] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadLogo = async () => {
      try {
        // Try multiple possible paths for the logo
        const possiblePaths = [
          'Block Rewards Logo-01.png',
          'logos/Block Rewards Logo-01.png',
          'logos/block-rewards-logo.png',
          'block-rewards-logo.png'
        ];

        for (const path of possiblePaths) {
          const logoUrl = imageStorage.getImageUrl(path);
          
          // Test if the image exists by trying to load it
          const img = new Image();
          img.onload = () => {
            setSupabaseLogo(logoUrl);
            setIsLoading(false);
            return;
          };
          img.onerror = () => {
            // Continue to next path
          };
          img.src = logoUrl;
          
          // Wait a bit for the image to load
          await new Promise(resolve => setTimeout(resolve, 100));
          
          if (supabaseLogo) break;
        }
        
        // If no image found, stop loading
        if (!supabaseLogo) {
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error loading logo:', error);
        setIsLoading(false);
      }
    };

    loadLogo();
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true
    });
  };

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
    setImageError(false);
  };

  // Determine which logo to use (priority: prop > supabase > fallback icon)
  const finalLogoUrl = logoUrl || supabaseLogo;
  const shouldShowImage = finalLogoUrl && !imageError && !isLoading;

  return (
    <Link to="/" onClick={scrollToTop} className="flex items-center">
      <div className="flex items-center gap-2">
        {shouldShowImage ? (
          <img 
            src={finalLogoUrl}
            alt={`${brandName} Logo`}
            className="h-8 w-auto md:h-10"
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        ) : (
          <>
            <Blocks className="h-8 w-8 md:h-10 md:w-10 text-white" />
            <span className="text-2xl md:text-3xl font-heading text-white">
              {brandName}
            </span>
          </>
        )}
      </div>
    </Link>
  );
};

export default Logo;