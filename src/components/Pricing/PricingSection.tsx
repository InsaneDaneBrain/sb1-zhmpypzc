/**
 * Enhanced Pricing section with simplified tiers and automatic upgrade messaging
 * - Added annual/monthly billing toggle
 * - Updated pricing calculations
 * - Disabled CTA buttons with Coming Soon labels
 * - Added tooltips on hover
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../ui/Button';

const PricingSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredTier, setHoveredTier] = useState<number | null>(null);
  const [showTooltip, setShowTooltip] = useState<number | null>(null);
  const [isAnnual, setIsAnnual] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const calculatePrice = (basePrice: number): string => {
    if (basePrice === 0) return 'Custom (contact us)';
    const price = isAnnual ? basePrice : Math.round(basePrice * 1.5);
    return `$${price} /mo`;
  };

  const pricingTiers = [
    {
      id: 1,
      title: 'Essentials',
      price: calculatePrice(149),
      monthlyTransactions: '1,000',
      features: [
        'Unlimited Points & Tokens',
        'POS plugins & integrations',
        'Analytics dashboard',
        'API access',
        'Email support',
        'Included on-chain transactions per month: 1,000'
      ],
      gradient: 'bg-purple-red-gradient',
      cta: 'Select Essentials',
    },
    {
      id: 2,
      title: 'Professional',
      price: calculatePrice(299),
      monthlyTransactions: '5,000',
      features: [
        'Everything in Essentials, plus:',
        'Custom campaigns',
        'Priority support',
        'Weekly performance reviews',
        'Advanced analytics',
        'Included on-chain transactions per month: 5,000'
      ],
      gradient: 'bg-teal-magenta-gradient',
      cta: 'Select Professional',
      isPopular: true,
    },
    {
      id: 3,
      title: 'Enterprise',
      price: calculatePrice(0),
      monthlyTransactions: 'Custom',
      features: [
        'Everything in Professional, plus:',
        'Employee Rewards Module',
        'Team challenges & training',
        'Custom leaderboards',
        'White-labeling',
        'Multi-location support',
        'Dedicated account manager',
        'Custom transaction limits—please contact sales'
      ],
      gradient: 'bg-purple-red-gradient',
      cta: 'Contact Sales',
    },
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-teal-500/5 blur-3xl" />

      <div className="relative text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-teal-400">
            Simple, Transparent Pricing
          </span>
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
          All plans include unlimited points, universal POS integrations, and core features.
          Choose based on your transaction needs.
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              isAnnual 
                ? 'bg-purple-500/20 text-white' 
                : 'text-text-secondary hover:text-white'
            }`}
          >
            Annual
          </button>
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              !isAnnual 
                ? 'bg-purple-500/20 text-white' 
                : 'text-text-secondary hover:text-white'
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {pricingTiers.map((tier, index) => (
          <motion.div
            key={tier.id}
            variants={cardVariants}
            onMouseEnter={() => setHoveredTier(index)}
            onMouseLeave={() => setHoveredTier(null)}
            className={`transform transition-all duration-500 ${
              hoveredTier === index ? 'scale-105 z-10' : 'scale-100 z-0'
            }`}
          >
            <div className={`${tier.gradient} rounded-xl p-[1px]`}>
              <div className="bg-background-secondary rounded-xl p-8 h-full flex flex-col relative overflow-hidden">
                {tier.isPopular && (
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-heading mb-2">{tier.title}</h3>
                  <div className="text-4xl font-heading">{tier.price}</div>
                  <div className="text-sm text-text-secondary mt-2">
                    {isAnnual ? 'billed annually' : 'month-to-month'}
                  </div>
                </div>

                <div className="mb-8 bg-background/50 rounded-lg p-4 border border-gray-800">
                  <div className="text-sm text-text-secondary mb-1">Monthly Transactions</div>
                  <div className="text-xl font-heading text-white">
                    {tier.monthlyTransactions}
                    {tier.id === 3 && <span className="text-sm text-text-secondary ml-2">(contact us)</span>}
                  </div>
                </div>

                <ul className="mb-8 flex-grow space-y-4">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 text-green-400 mt-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-text-secondary">{feature}</p>
                    </li>
                  ))}
                </ul>

                <div 
                  className="relative"
                  onMouseEnter={() => setShowTooltip(index)}
                  onMouseLeave={() => setShowTooltip(null)}
                >
                  <button 
                    className={`w-full px-6 py-3 rounded-lg bg-gradient-to-r ${
                      tier.isPopular ? 'from-teal-500 to-purple-500' : 'from-purple-500 to-pink-500'
                    } opacity-50 cursor-not-allowed text-white font-medium transition-all duration-300`}
                    disabled
                  >
                    Coming Soon
                  </button>
                  {showTooltip === index && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap">
                      Pricing plans launching soon—stay tuned!
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900" />
                    </div>
                  )}
                </div>

                {tier.id !== 3 && (
                  <p className="text-sm text-text-secondary mt-4 text-center">
                    Need more? Exceeding your limit automatically moves you up to the next tier.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PricingSection;