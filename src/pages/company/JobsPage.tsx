/**
 * Initial creation of JobsPage component
 * - Basic page structure with placeholder content
 */
import React from 'react';
import { Container } from '../../components/ui/Container';

const JobsPage = () => {
  return (
    <Container>
      <div className="py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Careers</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600">
            Join our team and help shape the future of customer loyalty and rewards.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default JobsPage;