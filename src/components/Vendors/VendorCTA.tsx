/**
 * Enhanced VendorCTA section with Loyalty Insights panel
 * - Removed ROI calculator
 * - Added Loyalty Insights panel with stats and blog links
 * - Updated responsive design
 * - Maintained existing benefit cards
 */
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../ui/Button';
import { Settings, Rocket, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VendorCTAProps {
  onApplyClick: () => void;
}

const VendorCTA: React.FC<VendorCTAProps> = ({ onApplyClick }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
                icon: <Settings className="text-purple-400\" size={24} />,
                title: "Simple Setup",
                description: "Go live in 30 min with zero dev"
              },
              {
                icon: <Rocket className="text-purple-400" size={24} />,
                title: "Quick Start",
                description: "Pilot your first promo next week"
              },
              {
                icon: <BarChart className="text-purple-400\" size={24} />,
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
          <div className="bg-background-secondary rounded-xl p-6 space-y-4">
            <h3 className="text-xl font-heading mb-2">Loyalty Insights + Data</h3>
            <p className="text-text-secondary">
              Learn how a well-designed loyalty program can drive sales, reduce breakage, and keep customers returning. Explore our research-backed insights:
            </p>

            <div className="bg-background/50 p-4 rounded-xl flex items-start gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <BarChart size={24} className="text-purple-400" />
              </div>
              <div>
                <p className="font-heading mb-1">+12% Average Spend Lift</p>
                <p className="text-text-secondary text-sm">
                  Customers in a multi-vendor loyalty network spend 12% more per visit.{' '}
                  <Link to="/blog/loyalty-growth-insights" className="text-purple-400 hover:text-purple-300">
                    Read more →
                  </Link>
                </p>
              </div>
            </div>

            <div className="bg-background/50 p-4 rounded-xl flex items-start gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <Rocket size={24} className="text-purple-400" />
              </div>
              <div>
                <p className="font-heading mb-1">+16% Return Rate Increase</p>
                <p className="text-text-secondary text-sm">
                  Pilot merchants see a 16% bump in repeat visits when engaging customers with tokenized rewards.{' '}
                  <Link to="/blog/loyalty-behavioral-drivers" className="text-purple-400 hover:text-purple-300">
                    Read more →
                  </Link>
                </p>
              </div>
            </div>

            <div className="bg-background/50 p-4 rounded-xl flex items-start gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <Settings size={24} className="text-purple-400" />
              </div>
              <div>
                <p className="font-heading mb-1">100% Blockchain Security</p>
                <p className="text-text-secondary text-sm">
                  All reward points, tokens, and gift cards are stored on-chain—eliminate fraud and breakage risk.{' '}
                  <Link to="/blog/loyalty-app-security" className="text-purple-400 hover:text-purple-300">
                    Read more →
                  </Link>
                </p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Button variant="secondary">
                <Link to="/blog">Explore All Insights</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VendorCTA;