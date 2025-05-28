/**
 * Enhanced Tokenized Rewards feature page with interactive token gallery and use cases
 * - Added flippable token type cards
 * - Implemented use cases carousel
 * - Enhanced blockchain advantages section
 * - Added developer resources link
 * - Updated sixth token type from "Event Tickets" to "Perks & Boosters"
 * - Removed "NFT Trading" use case
 * - Updated third blockchain advantage text
 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coins, Shield, Gift, Award, ArrowRight, ArrowLeft, Code } from 'lucide-react';
import FeatureLayout from '../../components/Features/FeatureLayout';
import FeatureSection from '../../components/Features/FeatureSection';
import BenefitCard from '../../components/Features/BenefitCard';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

const TokenizedRewardsPage: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const tokenTypes = [
    {
      title: 'BR Points',
      description: 'Fungible tokens representing your earned rewards. Trade and spend across the network.',
      icon: <Coins size={24} className="text-purple-400" />
    },
    {
      title: 'Branded Tokens',
      description: 'Custom merchant-specific tokens with unique benefits and redemption options.',
      icon: <Award size={24} className="text-purple-400" />
    },
    {
      title: 'NFT Gift Cards',
      description: '2× multiplier NFTs that boost your rewards earning potential.',
      icon: <Gift size={24} className="text-purple-400" />
    },
    {
      title: 'Deals & Offers',
      description: 'Single-use NFT perks for special promotions and exclusive deals.',
      icon: <Shield size={24} className="text-purple-400" />
    },
    {
      title: 'Loyalty Badges',
      description: 'Achievement NFTs that unlock tier benefits and special status.',
      icon: <Award size={24} className="text-purple-400" />
    },
    {
      title: 'Perks & Boosters',
      description: 'Limited-time perks & booster NFTs—double points, free items, special discounts.',
      icon: <Gift size={24} className="text-purple-400" />
    }
  ];

  const useCases = [
    {
      title: 'Badge Trading',
      description: 'Trade or redeem special badge NFTs for bonus rewards',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg'
    },
    {
      title: 'Employee Benefits',
      description: 'Receive a "Go Home Early" NFT for outstanding performance',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
    },
    {
      title: 'Community Rewards',
      description: 'Redeem group challenge badges for exclusive perks',
      image: 'https://images.pexels.com/photos/3184286/pexels-photo-3184286.jpeg'
    }
  ];

  return (
    <FeatureLayout
      icon={<Coins size={32} className="text-white" />}
      title="Tokenized Rewards"
      subtitle="Own your rewards forever with blockchain-backed tokens"
      gradientFrom="from-teal-800"
      gradientTo="to-purple-800"
    >
      <div className="max-w-4xl mx-auto">
        {/* Key Benefits */}
        <FeatureSection title="Key Benefits">
          <div className="grid md:grid-cols-3 gap-6">
            <BenefitCard
              icon={<Shield size={24} className="text-purple-400" />}
              title="True Ownership"
              description="Your rewards live on-chain—unlosable, transferable NFTs."
            />
            <BenefitCard
              icon={<Gift size={24} className="text-purple-400" />}
              title="Never Expires"
              description="On-chain tokens can't be devalued or reset."
            />
            <BenefitCard
              icon={<Award size={24} className="text-purple-400" />}
              title="Special NFTs"
              description="Collect boosters, badges, gift-card NFTs, and limited-edition rewards."
            />
          </div>
        </FeatureSection>

        {/* Token Types Gallery */}
        <FeatureSection title="Token Types">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
            {tokenTypes.map((token, index) => (
              <div
                key={index}
                className="relative h-48 cursor-pointer"
                onMouseEnter={() => setFlippedCard(index)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={flippedCard === index ? 'back' : 'front'}
                    initial={{ rotateY: flippedCard === index ? -90 : 90 }}
                    animate={{ rotateY: 0 }}
                    exit={{ rotateY: flippedCard === index ? 90 : -90 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 backface-hidden"
                  >
                    <div className="h-full p-6 rounded-xl bg-background-secondary border border-gray-800 hover:border-purple-500 transition-colors duration-300">
                      {flippedCard === index ? (
                        <p className="text-text-secondary">{token.description}</p>
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full">
                          <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/20 to-teal-500/20 mb-4">
                            {token.icon}
                          </div>
                          <h4 className="text-xl font-heading text-center">{token.title}</h4>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            ))}
          </div>
        </FeatureSection>

        {/* Blockchain Advantages */}
        <FeatureSection title="Blockchain Advantages" gradient>
          <div className="p-8">
            <div className="space-y-6">
              {[
                'Transparent Tracking: Every reward transaction is recorded on-chain',
                'Peer-to-Peer Transfers: Send rewards directly to friends and family',
                'Badge Trading: Trade or redeem special badge NFTs for bonus rewards',
                'Automated Smart Contracts: Instant reward distribution and redemption'
              ].map((advantage, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <span className="text-purple-400">{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-lg">{advantage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FeatureSection>

        {/* Use Cases Carousel */}
        <FeatureSection title="Use Cases">
          <div className="relative p-8">
            <div className="relative overflow-hidden rounded-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCase}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <img
                    src={useCases[activeCase].image}
                    alt={useCases[activeCase].title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <div>
                      <h4 className="text-xl font-heading mb-2">{useCases[activeCase].title}</h4>
                      <p className="text-text-secondary">{useCases[activeCase].description}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={() => setActiveCase((prev) => (prev === 0 ? useCases.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={() => setActiveCase((prev) => (prev === useCases.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </FeatureSection>

        {/* Developer Resources */}
        <div className="mt-8 text-center">
          <Link
            to="#"
            className="inline-flex items-center text-text-secondary hover:text-white transition-colors"
          >
            <Code size={16} className="mr-2" />
            Developer Resources: API Docs & SDK
          </Link>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Button variant="primary" size="lg">
            <Link to="/#waitlist">Start Tokenizing Your Rewards—Join Our Waitlist</Link>
          </Button>
        </div>
      </div>
    </FeatureLayout>
  );
};

export default TokenizedRewardsPage;