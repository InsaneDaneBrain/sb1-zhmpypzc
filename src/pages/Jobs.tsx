/**
 * Jobs page component for career opportunities
 */
import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer/Footer';
import { Container } from '../components/ui/Container';

const Jobs: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar onWaitlistClick={() => {}} />
      <main className="pt-24 pb-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-heading mb-6">Join Our Team</h1>
          <p className="text-text-secondary text-lg">
            Help shape the future of customer loyalty and rewards.
          </p>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;