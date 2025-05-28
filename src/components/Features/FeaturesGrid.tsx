/**
 * Enhanced Features grid with improved animations and routing
 * - Added Coming Soon badge to Employee Rewards card
 * - Updated card styling for preview state
 * - Added accessibility improvements
 */
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import { features } from '../../data/data';

const FeaturesGrid: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const getFeatureRoute = (title: string): string => {
    const routes: { [key: string]: string } = {
      'Universal Currency': '/features/universal-currency',
      'Tokenized Rewards': '/features/tokenized-rewards',
      'Seamless POS Integration': '/features/pos-integration',
      'Employee Rewards': '/features/employee-rewards'
    };
    return routes[title] || '#';
  };

  return (
    <div className="relative">
      <div className="absolute -top-40 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-40 -left-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            variants={cardVariants}
            className="group"
          >
            <Link 
              to={getFeatureRoute(feature.title)}
              aria-label={feature.title === 'Employee Rewards' ? 'Employee Rewards (Coming Soon)' : feature.title}
            >
              <Card 
                gradientBorder 
                className={`h-full transform transition-all duration-300 group-hover:translate-y-[-8px] relative ${
                  feature.title === 'Employee Rewards' ? 'opacity-90 border-2 border-dashed border-yellow-600' : ''
                }`}
              >
                <div className="flex flex-col h-full p-8">
                  {feature.title === 'Employee Rewards' && (
                    <div className="absolute top-2 right-2 px-2 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full">
                      <span className="text-xs text-pink-400">Coming Soon</span>
                    </div>
                  )}
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-[#8A2BE2] to-[#FF1493] bg-opacity-20">
                      <feature.icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-heading ml-4">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary font-body leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <span 
                      className="text-sm font-medium text-white flex items-center group-hover:text-purple-400 transition-colors duration-300"
                    >
                      {feature.title === 'Employee Rewards' ? 'Preview Coming Soon' : 'Learn more'}
                      <svg 
                        className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturesGrid;