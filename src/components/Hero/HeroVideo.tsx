/**
 * Hero Video component with stable YouTube video player
 * - Fixed video controls to not reset playback when interacting
 * - Removed problematic autoplay and loop parameters that cause glitches
 * - Simplified iframe parameters for better stability
 * - Controls are always available for better user experience
 */
import React from 'react';

const HeroVideo: React.FC = () => {
  // Using the specific video requested: https://www.youtube.com/watch?v=pm8aKivcWH8
  const videoId = 'pm8aKivcWH8';

  return (
    <section className="video-section relative z-0 w-full mt-6 sm:mt-8 mb-4 py-4">
      <div className="relative w-full h-48 sm:h-64 md:h-96 rounded-xl overflow-hidden bg-black mx-auto max-w-4xl">
        {/* YouTube iframe with stable parameters */}
        <iframe
          className="w-full h-full rounded-xl"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&iv_load_policy=3`}
          title="Block Rewards Demo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default HeroVideo;