/**
 * Hero Video component with YouTube video player
 * - Removed all hover overlays and info boxes for clean video interaction
 * - No more "Block Rewards Demo" title or description overlays
 * - Clean, minimal video player that doesn't interfere with user interaction
 * - Mobile-friendly with no blocking elements
 */
import React, { useState } from 'react';

const HeroVideo: React.FC = () => {
  const [showControls, setShowControls] = useState(false);

  // Using the specific video requested: https://www.youtube.com/watch?v=pm8aKivcWH8
  const videoId = 'pm8aKivcWH8';

  return (
    <section className="video-section relative z-0 w-full mt-6 sm:mt-8 mb-4 py-4">
      <div 
        className="relative w-full h-48 sm:h-64 md:h-96 rounded-xl overflow-hidden bg-black mx-auto max-w-4xl"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
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
      </div>
    </section>
  );
};

export default HeroVideo;