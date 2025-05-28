/**
 * Enhanced About page with company information, mission statement, and team details
 */
import React from 'react';
import { Mail } from 'lucide-react';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer/Footer';
import { Container } from '../components/ui/Container';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar onWaitlistClick={() => {}} />
      <main className="pt-24 pb-16">
        <Container>
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading mb-6">About Block Rewards</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          </div>

          {/* Mission Statement */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Our Mission
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              At Block Rewards, our mission is to unite local merchants and customers in a single, secure rewards ecosystem—powered by blockchain—so that everyone wins.
            </p>
          </section>

          {/* Our Story */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Our Story
            </h2>
            <div className="bg-background-secondary rounded-xl p-8 border border-gray-800">
              <p className="text-text-secondary text-lg leading-relaxed">
                Born out of a frustration with fragmented loyalty cards and program liabilities, Block Rewards was founded in 2024 to simplify loyalty for small businesses and delight shoppers with true ownership of their rewards.
              </p>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Transparency',
                  description: 'On-chain tracking means every point is verifiable.'
                },
                {
                  title: 'Simplicity',
                  description: 'No crypto jargon; just scan, earn, and redeem.'
                },
                {
                  title: 'Collaboration',
                  description: 'We build tools that bring communities together.'
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="bg-background-secondary p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all duration-300"
                >
                  <h3 className="text-xl font-heading mb-3">{value.title}</h3>
                  <p className="text-text-secondary">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Meet the Team */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Meet the Team
            </h2>
            <div className="bg-background-secondary rounded-xl p-8 border border-gray-800">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <span className="text-3xl font-heading">DR</span>
                </div>
                <div>
                  <h3 className="text-xl font-heading mb-1">Dane Rose</h3>
                  <p className="text-purple-400 mb-2">CEO & Founder</p>
                  <p className="text-text-secondary">
                    Serial entrepreneur on a mission to modernize loyalty.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Get in Touch */}
          <section>
            <h2 className="text-2xl md:text-3xl font-heading mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Get in Touch
            </h2>
            <div className="bg-background-secondary rounded-xl p-8 border border-gray-800">
              <p className="text-text-secondary mb-4">
                Questions or partnership ideas? Drop us a line at:
              </p>
              <a 
                href="mailto:exco@blockrewardsapp.com"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Mail size={20} />
                exco@blockrewardsapp.com
              </a>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default About;