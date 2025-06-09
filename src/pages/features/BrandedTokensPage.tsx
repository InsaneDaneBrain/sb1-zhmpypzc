/**
 * Branded Tokens feature page with detailed information about custom merchant tokens
 * - Created comprehensive feature page with benefits, use cases, and migration details
 * - Added interactive elements and responsive design
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coins, Upload, Settings, Users, Trophy, Gift, ArrowRight, CheckCircle } from 'lucide-react';
import FeatureLayout from '../../components/Features/FeatureLayout';
import FeatureSection from '../../components/Features/FeatureSection';
import BenefitCard from '../../components/Features/BenefitCard';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

const BrandedTokensPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const migrationSteps = [
    {
      title: 'Upload Your Data',
      description: 'Import existing customer points, punch cards, or loyalty data via CSV or API',
      icon: <Upload size={24} className="text-purple-400" />
    },
    {
      title: 'Configure Your Token',
      description: 'Set earning rates, redemption rules, and custom rewards for your Brand Token',
      icon: <Settings size={24} className="text-purple-400" />
    },
    {
      title: 'Launch & Engage',
      description: 'Go live with your tokenized program and start engaging customers',
      icon: <Trophy size={24} className="text-purple-400" />
    }
  ];

  const useCases = [
    {
      title: 'Coffee Shop Chain',
      description: 'StarBucks Tokens (SBT) - Earn 2 SBT per $1, redeem 50 SBT for free drink',
      benefits: ['Loyalty migration from punch cards', 'Seasonal token drops', 'VIP tier unlocks']
    },
    {
      title: 'Fitness Studio',
      description: 'FitLife Tokens (FLT) - Earn tokens for classes, redeem for gear and sessions',
      benefits: ['Class attendance rewards', 'Referral bonuses', 'Merchandise discounts']
    },
    {
      title: 'Local Restaurant',
      description: 'Bistro Tokens (BT) - Special event access and exclusive menu items',
      benefits: ['Chef\'s table reservations', 'Wine tasting events', 'Birthday rewards']
    }
  ];

  return (
    <FeatureLayout
      icon={<Coins size={32} className="text-white" />}
      title="Brand Tokens"
      subtitle="Your own customizable, on-chain rewards currency"
      gradientFrom="from-purple-800"
      gradientTo="to-teal-800"
    >
      <div className="max-w-4xl mx-auto">
        {/* Key Benefits */}
        <FeatureSection title="Key Benefits">
          <div className="grid md:grid-cols-3 gap-6">
            <BenefitCard
              icon={<Upload size={24} className="text-purple-400" />}
              title="Seamless Migration"
              description="Import existing loyalty data and convert to blockchain tokens instantly."
            />
            <BenefitCard
              icon={<Settings size={24} className="text-purple-400" />}
              title="Total Control"
              description="Define custom earning rates, expiration rules, and redemption tiers."
            />
            <BenefitCard
              icon={<Users size={24} className="text-purple-400" />}
              title="Deep Engagement"
              description="Create scarcity, gamify experiences, and unlock VIP access."
            />
          </div>
        </FeatureSection>

        {/* Migration Process */}
        <FeatureSection title="Migration Process" gradient>
          <div className="p-8">
            <div className="space-y-8">
              {migrationSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-teal-500/20 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-heading mb-2">{step.title}</h4>
                    <p className="text-text-secondary">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FeatureSection>

        {/* Use Cases */}
        <FeatureSection title="Real-World Examples">
          <div className="space-y-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-background-secondary p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h4 className="text-xl font-heading mb-2">{useCase.title}</h4>
                    <p className="text-text-secondary mb-4">{useCase.description}</p>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-heading mb-3">Benefits:</h5>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-text-secondary">
                          <CheckCircle size={16} className="mr-2 text-green-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </FeatureSection>

        {/* Token Features */}
        <FeatureSection title="Token Features">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-8">
            {[
              { icon: <Gift size={20} />, text: "Custom Rewards" },
              { icon: <Trophy size={20} />, text: "Tier Systems" },
              { icon: <Users size={20} />, text: "Referral Programs" },
              { icon: <Settings size={20} />, text: "Flexible Rules" },
              { icon: <Coins size={20} />, text: "Token Trading" },
              { icon: <CheckCircle size={20} />, text: "Fraud Protection" }
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-background-secondary/50 hover:bg-background-secondary transition-colors duration-300"
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-teal-500/20">
                  {feature.icon}
                </div>
                <span className="text-sm">{feature.text}</span>
              </div>
            ))}
          </div>
        </FeatureSection>

        {/* CTA Section */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-purple-500/20 via-teal-500/20 to-purple-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-heading mb-4">Ready to Launch Your Brand Tokens?</h3>
            <p className="text-text-secondary mb-8">Join our vendor waitlist and be among the first to create your custom token ecosystem.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary">
                <Link to="/#waitlist">Join Vendor Waitlist</Link>
              </Button>
              <Button variant="secondary">
                <Link to="/api">View API Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </FeatureLayout>
  );
};

export default BrandedTokensPage;