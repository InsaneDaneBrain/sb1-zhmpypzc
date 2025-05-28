/**
 * Shared header component for feature pages with navigation
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import Logo from './Logo';
import Button from '../ui/Button';

const PageHeader: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-gray-800 py-4">
      <Container className="flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-6">
          <Link 
            to="/#features" 
            className="text-text-secondary hover:text-white transition-colors duration-300"
          >
            Back to Features
          </Link>
          <Button variant="primary" size="sm">
            <Link to="/#waitlist">Join Waitlist</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default PageHeader;