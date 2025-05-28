/**
 * Initial creation of AboutPage component
 * - Basic page structure with placeholder content
 */
import React from 'react';
import { Container } from '../../components/ui/Container';

const AboutPage = () => {
  return (
    <Container>
      <div className="py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600">
            Welcome to Block Rewards. We're revolutionizing the way businesses handle customer loyalty and employee rewards.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;