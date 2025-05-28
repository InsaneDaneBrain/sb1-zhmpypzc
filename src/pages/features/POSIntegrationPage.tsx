/**
 * Enhanced POS Integration feature page with interactive elements
 * - Replaced static images with Lottie animations
 * - Added bullet points for each step
 * - Updated integration process layout
 * - Added pilot support callout
 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Zap, RefreshCw, Lock, ChevronDown } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';
import FeatureLayout from '../../components/Features/FeatureLayout';
import FeatureSection from '../../components/Features/FeatureSection';
import BenefitCard from '../../components/Features/BenefitCard';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

const POSIntegrationPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const posSystems = [
    'Square',
    'Clover',
    'Toast',
    'Shopify',
    'Stripe Terminal',
    'Custom API'
  ];

  const integrationSteps = [
    {
      title: 'Install the Block Rewards App',
      description: 'Search & install "Block Rewards" from your POS\'s App Store (Square, Clover, Toast, Shopify POS, etc.).',
      bullets: [
        'Find "Block Rewards" in your POS marketplace',
        'Click "Install" and authorize access',
        'Open the setup wizard from your POS dashboard'
      ],
      animation: 'https://lottie.host/2a98c72b-b27b-4268-9ce1-e7c3ea9d0d5c/AhPJoEFWGE.json'
    },
    {
      title: 'Run the Setup Wizard',
      description: 'The wizard will walk you through API keys, earning/redeeming rules, and your digital wallet configuration.',
      bullets: [
        'Configure earning & redemption rules',
        'Set up your digital wallet',
        'Test your first transaction'
      ],
      animation: 'https://lottie.host/0b783f3d-01c4-4b3f-8e8f-09b1c4223a4c/mMu7pOO9Hy.json'
    },
    {
      title: 'Launch Your Pilot',
      description: 'Our team will be on standby—testing transactions, tweaking rewards rates, and ensuring a smooth rollout.',
      bullets: [
        'Run test transactions',
        'Train your staff',
        'Go live with full support'
      ],
      animation: 'https://lottie.host/c1af1273-1b5f-49c1-99e8-dd2be6c3e55c/YbPtHF8Aqw.json'
    }
  ];

  const faqs = [
    {
      question: 'Can I use multiple POS systems at once?',
      answer: 'Yes! Block Rewards supports simultaneous integration with multiple POS systems. All transactions are unified in your dashboard, regardless of their source.'
    },
    {
      question: 'What data do you store vs. vendor storage?',
      answer: 'We only store transaction metadata and reward calculations. Sensitive customer and payment data remains within your POS system, ensuring compliance and security.'
    },
    {
      question: 'How do I handle offline transactions?',
      answer: 'Our system includes offline transaction support. Rewards are queued locally and synced automatically when connection is restored.'
    }
  ];

  return (
    <FeatureLayout
      icon={<Terminal size={32} className="text-white" />}
      title="Seamless POS Integration"
      subtitle="Connect Block Rewards to your existing point-of-sale system in minutes"
      gradientFrom="from-teal-800"
      gradientTo="to-purple-800"
    >
      <div className="max-w-4xl mx-auto">
        {/* Key Benefits */}
        <FeatureSection title="Key Benefits">
          <div className="grid md:grid-cols-3 gap-6">
            <BenefitCard
              icon={<Zap size={24} className="text-purple-400" />}
              title="Quick Setup"
              description="Install & configure in under 30 minutes with guided wizard."
            />
            <BenefitCard
              icon={<RefreshCw size={24} className="text-purple-400" />}
              title="Real-Time Sync"
              description="Automatic point awarding & redemption per transaction."
            />
            <BenefitCard
              icon={<Lock size={24} className="text-purple-400" />}
              title="Secure Integration"
              description="End-to-end encryption, PCI-compliant connections."
            />
          </div>
        </FeatureSection>

        {/* Supported POS Systems */}
        <FeatureSection title="Supported POS Systems" gradient>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-8">
            {posSystems.map((system) => (
              <motion.button
                key={system}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl bg-background-secondary/50 hover:bg-background-secondary border border-gray-800 hover:border-purple-500 transition-all duration-300"
              >
                <span className="text-lg font-heading">{system}</span>
              </motion.button>
            ))}
          </div>
        </FeatureSection>

        {/* Integration Process */}
        <FeatureSection title="Integration Process">
          <div className="text-center mb-8">
            <p className="text-lg text-text-secondary">Getting set up is quick and painless.</p>
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
              <div className="bg-background-secondary/50 rounded-lg px-4 py-2">Download our app from your POS Marketplace</div>
              <div className="bg-background-secondary/50 rounded-lg px-4 py-2">Follow the in-app Setup Wizard</div>
              <div className="bg-background-secondary/50 rounded-lg px-4 py-2">Kick off your pilot with full team support</div>
            </div>
          </div>

          <div className="space-y-4">
            {integrationSteps.map((step, index) => (
              <div key={index} className="rounded-xl overflow-hidden">
                <button
                  onClick={() => setActiveStep(activeStep === index ? null : index)}
                  className="w-full p-6 bg-background-secondary flex items-center justify-between hover:bg-background-secondary/80 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/20 to-teal-500/20 flex items-center justify-center">
                      <span className="text-purple-400">{index + 1}</span>
                    </div>
                    <h4 className="text-lg font-heading">{step.title}</h4>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`transform transition-transform duration-300 ${
                      activeStep === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeStep === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 bg-background-secondary/50">
                        <p className="text-text-secondary mb-4">{step.description}</p>
                        <div className="flex flex-col md:flex-row items-center gap-8">
                          <Player
                            autoplay
                            loop
                            src={step.animation}
                            style={{ width: 200, height: 200 }}
                          />
                          <ul className="mt-4 list-disc list-inside text-sm text-text-secondary">
                            {step.bullets.map((bullet, idx) => (
                              <li key={idx} className="mb-2">✔️ {bullet}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Pilot Support Callout */}
          <div className="mt-8 bg-background-secondary p-6 rounded-xl text-center">
            <p className="text-lg font-heading mb-2 italic">
              "We'll hold your hand through every step of your pilot—configuration, testing, and launch."
            </p>
            <Button variant="outline" className="mt-4">
              <Link to="/#waitlist">Contact Our Onboarding Team</Link>
            </Button>
          </div>
        </FeatureSection>

        {/* FAQ Section */}
        <FeatureSection title="Frequently Asked Questions">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-xl overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full p-6 bg-background-secondary flex items-center justify-between hover:bg-background-secondary/80 transition-colors duration-300"
                >
                  <h4 className="text-lg font-heading text-left">{faq.question}</h4>
                  <ChevronDown
                    size={20}
                    className={`transform transition-transform duration-300 ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 bg-background-secondary/50">
                        <p className="text-text-secondary">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </FeatureSection>

        {/* CTA Section */}
        <div className="mt-16">
          <Button variant="primary" size="lg" className="w-full">
            <Link to="/#waitlist">Ready to connect? Join the Vendor Waitlist</Link>
          </Button>
        </div>
      </div>
    </FeatureLayout>
  );
};

export default POSIntegrationPage;