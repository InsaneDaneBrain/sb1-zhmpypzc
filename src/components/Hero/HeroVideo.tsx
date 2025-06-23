/**
 * Hero Video component with YouTube video player
 * - Updated to play specific YouTube video: pm8aKivcWH8
 * - Embeds YouTube video with autoplay and muted settings
 * - Responsive design with rounded corners
 * - Click to toggle controls visibility
 * - Uses YouTube nocookie domain for privacy
 */
import React, { useState } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';

const HeroVideo: React.FC = () => {
  const [showControls, setShowControls] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  // Using the specific video requested: https://www.youtube.com/watch?v=pm8aKivcWH8
  const videoId = 'pm8aKivcWH8';

  const handleVideoClick = () => {
    setShowControls(!showControls);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="video-section w-full overflow-hidden mb-4">
      <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden bg-black group">
        {/* YouTube iframe */}
        <iframe
          className="w-full h-full object-cover"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=${showControls ? 1 : 0}&modestbranding=1&playsinline=1&rel=0&showinfo=0`}
          title="Block Rewards Demo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        {/* Control overlay */}
        <div className="absolute inset-0 cursor-pointer" onClick={handleVideoClick} />

        {/* Controls indicator */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="px-3 py-2 bg-black/50 backdrop-blur-sm rounded-lg text-white text-sm flex items-center gap-2">
            {showControls ? (
              <>
                <Volume2 size={16} />
                <span>Controls visible</span>
              </>
            ) : (
              <>
                <VolumeX size={16} />
                <span>Click for controls</span>
              </>
            )}
          </div>
        </div>

        {/* Video info overlay */}
        <div className="absolute bottom-4 left-4 right-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
            <h3 className="text-white text-lg md:text-xl font-heading mb-1">
              Block Rewards Demo
            </h3>
            <p className="text-white/80 text-sm">
              See how our unified rewards platform works
            </p>
          </div>
        </div>

        {/* Play button overlay when not playing */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <button
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Play size={24} className="text-white ml-1" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroVideo;