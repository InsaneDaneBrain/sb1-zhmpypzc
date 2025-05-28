/**
 * Enhanced Universal Currency feature page with compact balance simulator
 * - Updated conversion rates for all reward types
 * - Implemented compact progress bar design
 * - Added inline reward stats with corrected calculations
 * - Added generic token example note
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Wallet, Globe, BarChart, RefreshCw, Users, QrCode, Gift, Trophy, Coins } from 'lucide-react';
import FeatureLayout from '../../components/Features/FeatureLayout';
import FeatureSection from '../../components/Features/FeatureSection';
import BenefitCard from '../../components/Features/BenefitCard';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

const UniversalCurrencyPage: React.FC = () => {
  const [spendAmount, setSpendAmount] = useState<number>(100);
  
  // Conversion rates
  const BRP_PER_DOLLAR = 1; // 1 BRP per $1 spent
  const XUSD_RATE = 100; // 100 BRP = 1 XUSD
  const GIFT_CARD_RATE = 100; // 100 BRP = $2 (2× multiplier)
  const BRAND_TOKEN_RATE = 2; // 2 BT per $1 spent

  const calculateBRP = (amount: number) => amount * BRP_PER_DOLLAR;
  const calculateXUSD = (brp: number) => (brp / XUSD_RATE).toFixed(2);
  const calculateGiftCard = (brp: number) => ((brp / GIFT_CARD_RATE) * 2).toFixed(2);
  const calculateBrandTokens = (amount: number) => amount * BRAND_TOKEN_RATE;

  return (
    <FeatureLayout
      icon={<CreditCard size={32} className="text-white" />}
      title="Universal Currency"
      subtitle="One unified rewards currency that works across all participating merchants"
      gradientFrom="from-purple-800"
      gradientTo="to-teal-800"
    >
      <div className="max-w-4xl mx-auto">
        {/* Key Benefits */}
        <FeatureSection title="Key Benefits">
          <div className="grid md:grid-cols-3 gap-6">
            <BenefitCard
              icon={<Wallet size={24} className="text-purple-400" />}
              title="Earn Everywhere"
              description="1 BRP per $1 spent at any partner—coffee shops, gyms, gas stations."
            />
            <BenefitCard
              icon={<Globe size={24} className="text-purple-400" />}
              title="Spend Anywhere"
              description="Redeem at any network merchant—no more single-store punch cards."
            />
            <BenefitCard
              icon={<BarChart size={24} className="text-purple-400" />}
              title="Track Progress"
              description="Real-time balances, transaction history, and predictive reward forecasts."
            />
          </div>
        </FeatureSection>

        {/* Balance Simulator */}
        <FeatureSection title="Try It Out">
          <div className="bg-background-secondary p-6 rounded-xl">
            <div className="max-w-xl mx-auto space-y-6">
              {/* Spend Controls */}
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Monthly Spend ($)
                </label>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={spendAmount}
                  onChange={(e) => setSpendAmount(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer mb-2"
                />
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="w-full h-5 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-teal-500 transition-all duration-300"
                    style={{ width: `${(spendAmount / 1000) * 100}%` }}
                  />
                </div>
                <div className="text-sm text-text-secondary">
                  Monthly Spend: ${spendAmount} → {((spendAmount / 1000) * 100).toFixed(1)}%
                </div>
              </div>

              {/* Reward Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-background/50 rounded-lg p-4">
                  <div className="text-sm text-text-secondary mb-1">XUSD</div>
                  <div className="font-heading">
                    {calculateXUSD(calculateBRP(spendAmount))} XUSD
                  </div>
                  <div className="text-xs text-text-secondary mt-1">
                    on your debit card
                  </div>
                </div>

                <div className="bg-background/50 rounded-lg p-4">
                  <div className="text-sm text-text-secondary mb-1">Gift Card</div>
                  <div className="font-heading">
                    ${calculateGiftCard(calculateBRP(spendAmount))}
                  </div>
                  <div className="text-xs text-text-secondary mt-1">
                    in-store credit
                  </div>
                </div>

                <div className="bg-background/50 rounded-lg p-4">
                  <div className="text-sm text-text-secondary mb-1">Brand Tokens</div>
                  <div className="font-heading">
                    {calculateBrandTokens(spendAmount)} BT
                  </div>
                  <div className="text-xs text-text-secondary mt-1">
                    toward your next reward
                  </div>
                </div>
              </div>

              {/* Token Example Note */}
              <div className="text-xs text-text-secondary text-center">
                Example: Other branded tokens (BTs) are available for each partner (e.g., free latte, order discount, or other vendor offer)
              </div>
            </div>
          </div>
        </FeatureSection>

        {/* Additional Features */}
        <FeatureSection title="Additional Features">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-8">
            {[
              { icon: <Coins size={20} />, text: "Deposit & Withdraw USDC" },
              { icon: <Users size={20} />, text: "Referral Bonuses" },
              { icon: <Trophy size={20} />, text: "Tier Progress Tracking" },
              { icon: <Gift size={20} />, text: "Cross-Vendor Challenges" },
              { icon: <QrCode size={20} />, text: "QR & Barcode Support" },
              { icon: <RefreshCw size={20} />, text: "Offline Earning Credits" }
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
            <h3 className="text-2xl font-heading mb-4">Ready to unify your loyalty?</h3>
            <p className="text-text-secondary mb-8">Join our vendor waitlist or get early access as a user!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary">
                <Link to="/#waitlist">Join as Vendor</Link>
              </Button>
              <Button variant="secondary">
                <Link to="/#waitlist">Get Early Access</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </FeatureLayout>
  );
};

export default UniversalCurrencyPage;