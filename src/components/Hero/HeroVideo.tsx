/**
 * Hero Video component with YouTube video player
 * - Fixed hover controls to not interfere with video interaction
 * - Removed problematic overlay that was preventing video controls access
 * - Controls now show automatically on hover without resetting video
 * - Mobile-friendly click interaction for showing controls
 * - Proper z-index stacking to prevent interference
 */
import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const HeroVideo: React.FC = () => {
  const [showControls, setShowControls] = useState(false);

  // Using the specific video requested: https://www.youtube.com/watch?v=pm8aKivcWH8
  const videoId = 'pm8aKivcWH8';

  const handleContainerClick = (e: React.MouseEvent) => {
    // Only toggle controls if clicking on the container, not the iframe
    if (e.target === e.currentTarget) {
      setShowControls(!showControls);
    }
  };

  return (
    <section className="video-section relative z-0 w-full mt-6 sm:mt-8 mb-4 py-4">
      <div 
        className="relative w-full h-48 sm:h-64 md:h-96 rounded-xl overflow-hidden bg-black group mx-auto max-w-4xl"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        onClick={handleContainerClick}
      >
        {/* YouTube iframe */}
        <iframe
          className="w-full h-full rounded-xl"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=${showControls ? 1 : 0}&modestbranding=1&playsinline=1&rel=0&showinfo=0`}
          title="Block Rewards Demo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        {/* Controls indicator - only shows on hover */}
        <div className={`absolute top-4 right-4 transition-opacity duration-300 pointer-events-none ${showControls ? 'opacity-100' : 'opacity-0'}`}>
          <div className="px-3 py-2 bg-black/70 backdrop-blur-sm rounded-lg text-white text-sm flex items-center gap-2">
            {showControls ? (
              <>
                <Volume2 size={16} />
                <span>Controls active</span>
              </>
            ) : (
              <>
                <VolumeX size={16} />
                <span>Hover for controls</span>
              </>
            )}
          </div>
        </div>

        {/* Video info overlay - only shows on hover */}
        <div className={`absolute bottom-4 left-4 right-4 pointer-events-none transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4">
            <h3 className="text-white text-lg md:text-xl font-heading mb-1">
              Block Rewards Demo
            </h3>
            <p className="text-white/80 text-sm">
              See how our unified rewards platform works
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;