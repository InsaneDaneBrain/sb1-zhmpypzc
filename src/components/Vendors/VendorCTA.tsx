/**
 * Enhanced VendorCTA section with ROI calculator and modern UI elements
 * - Added impact/ROI calculator with live metrics
 * - Updated layout with floating CTA button
 * - Enhanced benefit cards with icons and hover effects
 * - Improved responsive design
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../ui/Button';
import Tilt from 'react-parallax-tilt';
import { Settings, Rocket, BarChart } from 'lucide-react';

interface VendorCTAProps {
  onApplyClick: () => void;
}

const VendorCTA: React.FC<VendorCTAProps> = ({ onApplyClick }) => {
  const [monthlySales, setMonthlySales] = useState<number>(10000);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const calculateMetrics = (sales: number) => {
    return {
      pointsIssued: sales,
      giftCardLiability: (sales * 0.02).toFixed(2),
      retentionLift: Math.min(15 + (sales / 10000), 25).toFixed(1)
    };
  };

  const metrics = calculateMetrics(monthlySales);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-teal-900/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-500/30">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-400">
                  For Business Owners
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading mt-4 leading-tight">
                Partner With{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400">
                  Block Rewards
                </span>
              </h3>
            </div>
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={onApplyClick}
              className="animate-pulse hover:animate-none"
            >
              Apply Now
            </Button>
          </div>

          <p className="text-lg text-text-secondary font-body mb-8 leading-relaxed">
            Join our network of local businesses and create a community-powered rewards program that keeps customers coming back.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                icon: <Settings className="text-purple-400" size={24} />,
                title: "Simple Setup",
                description: "Go live in 30 min with zero dev"
              },
              {
                icon: <Rocket className="text-purple-400" size={24} />,
                title: "Quick Start",
                description: "Pilot your first promo next week"
              },
              {
                icon: <BarChart className="text-purple-400" size={24} />,
                title: "Full Control",
                description: "Deep dive into customer analytics"
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-background-secondary/50 border border-gray-800 hover:border-purple-500 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-3 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h4 className="font-heading mb-2">{benefit.title}</h4>
                  <p className="text-sm text-text-secondary">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="relative">
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            scale={1}
            transitionSpeed={1000}
          >
            <div className="bg-background-secondary rounded-xl overflow-hidden p-6 border border-gray-800">
              <h4 className="text-xl font-heading mb-6">Projected Impact</h4>
              
              <div className="mb-6">
                <label className="block text-sm text-text-secondary mb-2">
                  Monthly Sales ($)
                </label>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  value={monthlySales}
                  onChange={(e) => setMonthlySales(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-right text-sm text-text-secondary mt-1">
                  ${monthlySales.toLocaleString()}
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-background/50">
                  <div className="text-sm text-text-secondary mb-1">Points Issued</div>
                  <div className="text-2xl font-heading text-white">
                    {metrics.pointsIssued.toLocaleString()} BRP
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-background/50">
                  <div className="text-sm text-text-secondary mb-1">Gift-card Liability Offloaded</div>
                  <div className="text-2xl font-heading text-white">
                    ${metrics.giftCardLiability} credit
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-background/50">
                  <div className="text-sm text-text-secondary mb-1">Estimated Retention Lift</div>
                  <div className="text-2xl font-heading text-green-400">
                    +{metrics.retentionLift}% returning visits
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full animate-pulse hover:animate-none"
                  onClick={onApplyClick}
                >
                  Apply as Vendor
                </Button>
              </div>
            </div>
          </Tilt>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VendorCTA;