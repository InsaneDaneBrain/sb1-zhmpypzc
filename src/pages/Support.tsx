/**
 * Enhanced Support page with FAQ sections, quick links, and contact options
 * - Updated quick links to use correct routing
 * - Added FAQ scroll functionality
 * - Removed support ticket CTA
 * - Updated support hours messaging
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Book, MessageCircle, ChevronDown, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer/Footer';
import { Container } from '../components/ui/Container';
import Button from '../components/ui/Button';

const Support: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const quickLinks = [
    {
      title: 'Developer Docs',
      description: 'API reference and integration guides',
      icon: <Book size={24} className="text-purple-400" />,
      link: '/api'
    },
    {
      title: 'FAQ',
      description: 'Common questions and answers',
      icon: <HelpCircle size={24} className="text-purple-400" />,
      link: '/support#faq'
    },
    {
      title: 'Contact Support',
      description: 'Get help from our team',
      icon: <MessageCircle size={24} className="text-purple-400" />,
      link: '/support/contact'
    }
  ];

  const faqs = [
    {
      question: 'How do I redeem my points?',
      answer: 'Scan the QR code in-app or convert points to USDC / gift cards. Points can be redeemed at any participating merchant in our network.'
    },
    {
      question: 'What if I lose my NFT gift card?',
      answer: 'All assets are on-chain—login on a new device and they\'re still yours. Your NFT gift cards are securely stored on the blockchain and tied to your account.'
    },
    {
      question: 'How do I connect my POS system?',
      answer: 'We support major POS systems like Square, Clover, and Toast. Visit our integrations page for step-by-step setup guides.'
    },
    {
      question: 'What are Brand Tokens (BTs)?',
      answer: 'Brand Tokens are merchant-specific rewards that can be earned alongside BRP. Each merchant can set custom earning rates and redemption options.'
    },
    {
      question: 'Is there a minimum balance to redeem?',
      answer: 'The minimum redemption amount is 100 BRP, which equals $1 USDC or $2 in gift card value.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onWaitlistClick={() => {}} />
      <main className="pt-24 pb-16">
        <Container>
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading mb-6">We're Here to Help</h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Find answers, documentation, and support for all things Block Rewards.
            </p>
          </div>

          {/* Quick Links */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.link}
                  className="bg-background-secondary p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-heading mb-2 group-hover:text-purple-400 transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-text-secondary">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-heading mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-background-secondary rounded-xl overflow-hidden border border-gray-800">
                  <button
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                    onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                  >
                    <span className="text-lg font-heading">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`transform transition-transform duration-200 ${
                        activeQuestion === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`px-6 transition-all duration-200 ${
                      activeQuestion === index ? 'py-4' : 'h-0 overflow-hidden'
                    }`}
                  >
                    <p className="text-text-secondary">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Support */}
          <section id="contact" className="text-center">
            <h2 className="text-2xl md:text-3xl font-heading mb-6">Still Need Help?</h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Our team is available during business hours to help you with any questions or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button disabled className="opacity-50 cursor-not-allowed px-6 py-3 rounded-lg bg-background-secondary text-text-secondary border border-gray-800">
                Coming Soon: Support Ticketing
              </button>
              <Button variant="outline">
                <span className="flex items-center">
                  View Knowledge Base
                  <ExternalLink size={16} className="ml-2" />
                </span>
              </Button>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Support;