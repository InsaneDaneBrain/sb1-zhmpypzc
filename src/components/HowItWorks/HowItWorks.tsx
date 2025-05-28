/**
 * Enhanced How It Works section with dual-panel layout for shoppers and vendors
 * - Split into two side-by-side panels
 * - Added detailed steps for both user types
 * - Enhanced mobile responsiveness
 */
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Gift, Award, Plug, Settings, PlayCircle, LineChart, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const shopperSteps = [
    {
      icon: <TrendingUp size={24} />,
      title: "Earn at Every Purchase",
      description: "Spend $10 at Joe's Coffee → Earn 10 BRP + 20 Star Tokens"
    },
    {
      icon: <ArrowRight size={24} />,
      title: "Auto-Credit",
      description: "Points appear instantly—no app switching or QR scanning."
    },
    {
      icon: <Gift size={24} />,
      title: "Redeem Your Way",
      description: "100 BRP = 1 XUSD on your debit card or $2 on NFT gift cards."
    },
    {
      icon: <Award size={24} />,
      title: "Engage & Level Up",
      description: "Spend 50 Star Tokens for a free latte → unlock a 'Coffee Lover' badge for 5% off."
    }
  ];

  const vendorSteps = [
    {
      icon: <Plug size={24} />,
      title: "Install in 5 Minutes",
      description: "Add our Clover/Toast integration with zero code—no dev needed."
    },
    {
      icon: <Settings size={24} />,
      title: "Set Your Rates",
      description: "Define earn & redemption rules—1 BRP per $1, custom token multipliers."
    },
    {
      icon: <PlayCircle size={24} />,
      title: "Launch Instantly",
      description: "Start rewarding customers at checkout—no downtime or extra hardware."
    },
    {
      icon: <LineChart size={24} />,
      title: "Track Performance",
      description: "View real-time stats on points issued, redemptions & customer tiers."
    }
  ];

  const renderSteps = (steps: typeof shopperSteps, subtitle: string) => (
    <div className="flex-1 p-8">
      <h3 className="text-xl text-text-secondary mb-8 text-center">{subtitle}</h3>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-start gap-6"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
              {step.icon}
            </div>
            <div>
              <h4 className="text-xl font-heading mb-2">{step.title}</h4>
              <p className="text-text-secondary">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-purple-500/10 via-pink-500/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative"
      >
        <div className="flex flex-col md:flex-row gap-8">
          {/* Shoppers Panel */}
          {renderSteps(shopperSteps, "For Shoppers")}

          {/* Vertical Divider */}
          <div className="hidden md:block w-px bg-gradient-to-b from-purple-500/20 via-pink-500/20 to-purple-500/20" />

          {/* Vendors Panel */}
          {renderSteps(vendorSteps, "For Vendors")}
        </div>
      </motion.div>
    </div>
  );
};

export default HowItWorks;