/**
 * Enhanced Hero section with proper spacing for bigger header
 * - Reduced section padding and margins significantly
 * - Maintained visual hierarchy while compacting vertical space
 * - Updated launch date from Q3 2025 to Q1 2026
 * - Added working YouTube video player after CTA buttons, before "Trusted by" logos
 * - Adjusted top spacing to accommodate much larger header (pt-32 md:pt-40)
 */
import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Container from '../ui/Container';
import Button from '../ui/Button';
import NeonParticles from './NeonParticles';
import HeroVideo from './HeroVideo';
import Marquee from 'react-fast-marquee';

interface HeroProps {
  onWaitlistClick: (asVendor?: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ onWaitlistClick }) => {
  const brands = [
    'Square', 'Clover', 'Toast', 'Shopify', 'Stripe',
    'OpenTable', 'DoorDash', 'Uber Eats', 'GrubHub'
  ];

  return (
    <section className="relative min-h-[65vh] md:min-h-[70vh] flex items-center pt-32 md:pt-40 mt-8 md:mt-12 overflow-hidden mb-4">
      <NeonParticles />
      
      <Container className="max-w-7xl mx-auto">
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-4 md:mb-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Coming Q1 2026
              </span>
            </motion.div>

            <Tilt
              tiltMaxAngleX={2}
              tiltMaxAngleY={2}
              perspective={1000}
              scale={1}
              transitionSpeed={1000}
              className="mb-3"
            >
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-7xl font-heading mb-3 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-teal-400">
                  Block Rewards:
                </span>
                <br />
                One Wallet, Every Loyalty.
              </motion.h1>
            </Tilt>
            
            <motion.p 
              className="text-lg md:text-2xl text-text-secondary font-body mb-4 md:mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Unify neighborhood merchants into a single rewards network powered by blockchain technology.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                variant="primary" 
                size="lg"
                className="group relative overflow-hidden text-lg py-6 px-10"
                onClick={() => onWaitlistClick(true)}
              >
                <span className="relative z-10">Join Waitlist as Vendor</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="group text-lg py-6 px-10"
                onClick={() => onWaitlistClick(false)}
              >
                <span className="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300">
                  Get Early Access
                </span>
              </Button>
            </motion.div>

            {/* Hero Video Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-4 md:mb-6"
            >
              <HeroVideo />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-center"
            >
              <p className="text-text-secondary mb-1 text-lg">Trusted by leading platforms</p>
              <div className="bg-gradient-to-b from-background via-transparent to-background py-3 relative z-20 mb-3">
                <Marquee
                  gradient={true}
                  speed={40}
                  gradientColor={[18, 18, 18]}
                >
                  {brands.map((brand, index) => (
                    <span
                      key={index}
                      className="mx-8 text-gray-400 font-body text-lg"
                    >
                      {brand}
                    </span>
                  ))}
                </Marquee>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-purple-500/30 rounded-full blur-3xl opacity-20" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl opacity-20" />
    </section>
  );
};

export default Hero;