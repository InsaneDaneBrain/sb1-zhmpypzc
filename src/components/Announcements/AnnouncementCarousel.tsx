/**
 * Enhanced Announcements carousel with continuous progress bar and faster rotation
 */
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Card from '../ui/Card';
import { announcements } from '../../data/data';

const AnnouncementCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const progressRef = useRef<number>(0);
  const lastUpdateRef = useRef<number>(Date.now());

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? announcements.length - 1 : prevIndex - 1
    );
    progressRef.current = 0;
    lastUpdateRef.current = Date.now();
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
    );
    progressRef.current = 0;
    lastUpdateRef.current = Date.now();
  }, []);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = now - lastUpdateRef.current;
      progressRef.current = Math.min(100, (elapsed / 4000) * 100); // Reduced from 10000 to 4000ms

      if (elapsed >= 4000) { // Reduced from 10000 to 4000ms
        goToNext();
      }
    }, 16); // Increased update frequency for smoother animation

    return () => clearInterval(interval);
  }, [isHovered, goToNext]);

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        lastUpdateRef.current = Date.now() - ((progressRef.current / 100) * 4000); // Adjusted timing
      }}
    >
      <div className="grid grid-cols-12 gap-6">
        {/* Navigation Preview - Previous */}
        <div className="col-span-2 hidden md:block">
          <button
            onClick={goToPrevious}
            className="w-full h-full flex items-center justify-center group relative rounded-xl overflow-hidden bg-background-secondary/50 backdrop-blur-sm border border-gray-800 hover:border-purple-500 transition-colors duration-300"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <ChevronLeft 
                size={24} 
                className="text-white/50 group-hover:text-white transition-colors duration-300" 
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
            <div className="p-4 opacity-50">
              <p className="text-sm text-white/70 truncate">
                {announcements[currentIndex === 0 ? announcements.length - 1 : currentIndex - 1].title}
              </p>
            </div>
          </button>
        </div>

        {/* Current Announcement */}
        <div className="col-span-12 md:col-span-8">
          <div className="relative rounded-xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-teal-500/20 p-[1px] shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-xl bg-background-secondary/80 backdrop-blur-sm overflow-hidden"
              >
                <div className="px-8 py-10">
                  <h3 className="text-2xl md:text-3xl font-heading mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-teal-400">
                    {announcements[currentIndex].title}
                  </h3>
                  <p className="text-lg text-text-secondary font-body leading-relaxed">
                    {announcements[currentIndex].description}
                  </p>
                </div>

                {/* Progress bar - now always visible but pauses on hover */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progressRef.current}%` }}
                  transition={{ duration: 0.1 }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Preview - Next */}
        <div className="col-span-2 hidden md:block">
          <button
            onClick={goToNext}
            className="w-full h-full flex items-center justify-center group relative rounded-xl overflow-hidden bg-background-secondary/50 backdrop-blur-sm border border-gray-800 hover:border-purple-500 transition-colors duration-300"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <ChevronRight 
                size={24} 
                className="text-white/50 group-hover:text-white transition-colors duration-300" 
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-l from-background/80 to-transparent" />
            <div className="p-4 opacity-50">
              <p className="text-sm text-white/70 truncate">
                {announcements[currentIndex === announcements.length - 1 ? 0 : currentIndex + 1].title}
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex justify-center mt-4 space-x-2 md:hidden">
        {announcements.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              progressRef.current = 0;
              lastUpdateRef.current = Date.now();
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-4' 
                : 'bg-gray-700'
            }`}
            aria-label={`Go to announcement ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AnnouncementCarousel;