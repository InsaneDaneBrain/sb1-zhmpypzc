/**
 * Initial creation of BlogPage component
 * - Basic page structure with placeholder content
 */
import React from 'react';
import { Container } from '../../components/ui/Container';

const BlogPage = () => {
  return (
    <Container>
      <div className="py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600">
            Stay updated with the latest news and insights from Block Rewards.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default BlogPage;