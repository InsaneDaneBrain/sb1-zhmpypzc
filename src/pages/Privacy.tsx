/**
 * Enhanced Privacy Policy page with detailed sections about data collection, usage, and user rights
 */
import React from 'react';
import { Shield, Lock, UserCheck, Download, FileText } from 'lucide-react';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer/Footer';
import { Container } from '../components/ui/Container';
import Button from '../components/ui/Button';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar onWaitlistClick={() => {}} />
      <main className="pt-24 pb-16">
        <Container>
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading mb-6">Privacy Policy</h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Your data is yours. Here's how we collect, use, and protect it.
            </p>
          </div>

          {/* Last Updated */}
          <div className="mb-12 text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 text-sm">
              Last Updated: March 15, 2025
            </span>
          </div>

          {/* Data Collection Section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              What We Collect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Personal Information',
                  items: ['Name', 'Email address', 'Phone number', 'Billing information'],
                  icon: <UserCheck size={24} className="text-purple-400" />
                },
                {
                  title: 'Transaction Data',
                  items: ['Purchase history', 'Reward redemptions', 'Point balances', 'Token transfers'],
                  icon: <FileText size={24} className="text-purple-400" />
                },
                {
                  title: 'Technical Data',
                  items: ['IP address', 'Browser type', 'Device information', 'Usage statistics'],
                  icon: <Lock size={24} className="text-purple-400" />
                }
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-background-secondary rounded-xl p-6 border border-gray-800"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 inline-block mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-heading mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-text-secondary flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Data Usage Section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              How We Use It
            </h2>
            <div className="bg-background-secondary rounded-xl p-8 border border-gray-800">
              <div className="space-y-6">
                {[
                  {
                    title: 'Reward Management',
                    description: 'To credit rewards & manage your wallet'
                  },
                  {
                    title: 'Service Improvement',
                    description: 'To improve our products & personalize offers'
                  },
                  {
                    title: 'Legal Compliance',
                    description: 'To comply with legal obligations and prevent fraud'
                  }
                ].map((use, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Shield size={24} className="text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-heading mb-2">{use.title}</h4>
                      <p className="text-text-secondary">{use.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Your Rights Section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Your Rights
            </h2>
            <div className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 p-[1px] rounded-xl">
              <div className="bg-background-secondary rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-heading mb-4">Access & Control</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center text-text-secondary">
                        <Download size={20} className="mr-3 text-purple-400" />
                        Access or export your data anytime
                      </li>
                      <li className="flex items-center text-text-secondary">
                        <UserCheck size={20} className="mr-3 text-purple-400" />
                        Request corrections or deletions
                      </li>
                      <li className="flex items-center text-text-secondary">
                        <Lock size={20} className="mr-3 text-purple-400" />
                        Opt-out of promotional emails
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading mb-4">Data Protection</h3>
                    <p className="text-text-secondary mb-4">
                      We employ industry-standard security measures to protect your personal information and ensure data privacy.
                    </p>
                    <Button variant="outline" className="w-full">
                      Download Full Policy PDF
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <h2 className="text-2xl font-heading mb-4">Questions About Privacy?</h2>
            <p className="text-text-secondary mb-6">
              Contact our Data Protection Officer at privacy@blockrewards.com
            </p>
            <Button variant="primary">Contact Privacy Team</Button>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;