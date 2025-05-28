/**
 * Enhanced Integrations page showcasing supported platforms and developer tools
 */
import React from 'react';
import { Terminal, CreditCard, ShoppingBag, Code, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer/Footer';
import { Container } from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Integrations: React.FC = () => {
  const platforms = [
    {
      category: 'POS',
      systems: ['Clover', 'Square', 'Toast'],
      icon: <Terminal size={24} className="text-purple-400" />
    },
    {
      category: 'Payments',
      systems: ['Stripe'],
      icon: <CreditCard size={24} className="text-purple-400" />
    },
    {
      category: 'eCommerce',
      systems: ['Shopify'],
      icon: <ShoppingBag size={24} className="text-purple-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onWaitlistClick={() => {}} />
      <main className="pt-24 pb-16">
        <Container>
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading mb-6">Seamless Integrations</h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Connect Block Rewards to your existing systems—no heavy lifting required.
            </p>
          </div>

          {/* Supported Platforms */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Supported Platforms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-background-secondary rounded-xl p-8 border border-gray-800 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 inline-block mb-4">
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-heading mb-4">{platform.category}</h3>
                  <ul className="space-y-2">
                    {platform.systems.map((system, idx) => (
                      <li key={idx} className="text-text-secondary flex items-center">
                        <ArrowRight size={16} className="mr-2 text-purple-400" />
                        {system}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Developer Tools */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Developer Tools
            </h2>
            <div className="bg-background-secondary rounded-xl p-8 border border-gray-800">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <Code size={32} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-heading mb-3">Modular SDKs</h3>
                  <p className="text-text-secondary mb-6">
                    Our modular SDKs let you trigger token minting, QR-code scans, and user lookups in under 30 minutes.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['Token Minting', 'QR Code Scanning', 'User Management'].map((feature, index) => (
                      <div key={index} className="bg-background/50 rounded-lg p-4 text-text-secondary">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Get Started */}
          <section className="text-center">
            <h2 className="text-2xl md:text-3xl font-heading mb-6">Get Started</h2>
            <p className="text-text-secondary mb-8">
              Ready to integrate? Check out our documentation or request a custom walkthrough.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary">
                <Link to="/api">Visit API Docs</Link>
              </Button>
              <Button variant="outline">Request Integration Demo</Button>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Integrations;