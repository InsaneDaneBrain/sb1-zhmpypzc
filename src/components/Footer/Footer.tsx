/**
 * Footer component with multiple information columns
 * - Updated links to use React Router Link component
 * - Added new page routes
 * - Removed social media links
 */
import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Logo from '../Navigation/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-secondary pt-16 pb-8">
      <Container>
        {/* Top border with gradient */}
        <div className="h-px bg-purple-red-gradient mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <Logo />
            <p className="mt-4 text-text-secondary">
              Unifying neighborhood merchants into a single rewards network.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-heading mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-text-secondary hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/blog" className="text-text-secondary hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/jobs" className="text-text-secondary hover:text-white transition-colors">Jobs</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-heading mb-4">For Vendors</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/#pricing" className="text-text-secondary hover:text-white transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/integrations" className="text-text-secondary hover:text-white transition-colors">Integrations</Link>
              </li>
              <li>
                <Link to="/api" className="text-text-secondary hover:text-white transition-colors">API</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-heading mb-4">For Users</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/#features" className="text-text-secondary hover:text-white transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/support" className="text-text-secondary hover:text-white transition-colors">Support</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-text-secondary hover:text-white transition-colors">Privacy</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm">
            © 2025 Block Rewards, Inc. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;