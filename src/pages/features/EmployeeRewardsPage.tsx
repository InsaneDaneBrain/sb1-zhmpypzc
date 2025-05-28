/**
 * Enhanced Employee Rewards feature page with gamification elements
 * - Removed Success Story section
 * - Updated Easy Integration section content
 * - Added Coming Soon tag
 * - Retained Key Benefits, Program Features, and Available Rewards sections
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, BookOpen, Users, BarChart as ChartBar, Calendar, Gift, Clock, Star, Briefcase } from 'lucide-react';
import FeatureLayout from '../../components/Features/FeatureLayout';
import FeatureSection from '../../components/Features/FeatureSection';
import BenefitCard from '../../components/Features/BenefitCard';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

const EmployeeRewardsPage: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  const rewards = [
    {
      icon: <ChartBar size={24} />,
      title: 'Performance Bonuses',
      description: 'Earn extra rewards for exceeding targets'
    },
    {
      icon: <Star size={24} />,
      title: 'Training Certificates',
      description: 'Digital credentials for completed courses'
    },
    {
      icon: <Gift size={24} />,
      title: 'Special Privileges',
      description: 'Unlock exclusive workplace perks'
    },
    {
      icon: <Clock size={24} />,
      title: 'Extra Time Off',
      description: 'Earn additional vacation days'
    },
    {
      icon: <Calendar size={24} />,
      title: 'Team Events',
      description: 'Group activities and celebrations'
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Professional Development',
      description: 'Access to learning resources'
    }
  ];

  return (
    <FeatureLayout
      icon={<Trophy size={32} className="text-white" />}
      title="Employee Rewards"
      subtitle="Motivate and retain employees with gamified rewards and recognition"
      gradientFrom="from-purple-800"
      gradientTo="to-pink-800"
      isComingSoon={true}
    >
      <div className="max-w-4xl mx-auto">
        {/* Coming Soon Notice */}
        <p className="text-center text-text-secondary italic mb-12">
          Employee Rewards is launching in our full release—stay tuned!
        </p>

        {/* Key Benefits */}
        <FeatureSection title="Key Benefits">
          <div className="grid md:grid-cols-3 gap-6">
            <BenefitCard
              icon={<Target size={24} className="text-purple-400" />}
              title="Performance Incentives"
              description="Points, badges, & perks for top performers."
            />
            <BenefitCard
              icon={<BookOpen size={24} className="text-purple-400" />}
              title="Training Rewards"
              description="Achievement-based tokens for course completions."
            />
            <BenefitCard
              icon={<Users size={24} className="text-purple-400" />}
              title="Team Competitions"
              description="Leaderboards, group challenges, and shared goals."
            />
          </div>
        </FeatureSection>

        {/* Program Features */}
        <FeatureSection title="Program Features" gradient>
          <div className="p-8">
            <div className="space-y-8">
              {[
                {
                  title: 'Custom Reward Tiers',
                  description: 'Create personalized achievement levels with unique rewards and recognition.'
                },
                {
                  title: 'Real-Time Performance Dashboard',
                  description: 'Track individual and team progress with detailed analytics and insights.'
                },
                {
                  title: 'Automated Team Challenges',
                  description: 'Set up recurring competitions with automated reward distribution.'
                },
                {
                  title: 'Recognition & Acknowledgments',
                  description: 'Celebrate achievements with public recognition and social features.'
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <span className="text-2xl font-heading text-purple-400">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-heading mb-2">{feature.title}</h4>
                    <p className="text-text-secondary">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FeatureSection>

        {/* Available Rewards */}
        <FeatureSection title="Available Rewards">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-8">
            {rewards.map((reward, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveTooltip(index)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <motion.div
                  className="p-6 rounded-xl bg-background-secondary border border-gray-800 hover:border-purple-500 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-4">
                      {reward.icon}
                    </div>
                    <h4 className="font-heading">{reward.title}</h4>
                  </div>
                </motion.div>
                {activeTooltip === index && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-gray-900 rounded-lg text-sm text-center z-10">
                    {reward.description}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </FeatureSection>

        {/* Easy Integration */}
        <FeatureSection title="Easy Integration">
          <div className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 p-8 rounded-xl">
            <div className="text-center">
              <h3 className="text-2xl font-heading mb-4">Connect Your Systems</h3>
              <p className="text-text-secondary mb-8">
                Connect Block Rewards to your HRIS or LMS via our API or CSV upload. We'll support:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'LinkedIn Learning (soon)',
                  'Udemy Business (soon)',
                  'ADP Learning Academy',
                  'BambooHR',
                  'Namely'
                ].map((system) => (
                  <div key={system} className="p-4 rounded-lg bg-background-secondary/50">
                    {system}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FeatureSection>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Button variant="primary" size="lg">
            <Link to="/#waitlist">Empower Your Team—Join the Enterprise Waitlist</Link>
          </Button>
        </div>
      </div>
    </FeatureLayout>
  );
};

export default EmployeeRewardsPage;