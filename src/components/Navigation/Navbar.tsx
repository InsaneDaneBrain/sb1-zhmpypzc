/**
 * Enhanced Navbar component with larger, more prominent styling
 * - Logo height increased to 48px with proportional scaling
 * - Navigation links increased to 18px font-size with 1.2 line-height
 * - Header padding reduced to py-1 (4px top/bottom)
 * - CTA button styling enhanced with larger padding
 * - Maintained responsive design and proper alignment
 */
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '../ui/Container';
import Button from '../ui/Button';
import { navLinks } from '../../data/data';
import Logo from './Logo';

interface NavbarProps {
  onWaitlistClick: () => void;
  logoUrl?: string;
  brandName?: string;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onWaitlistClick,
  logoUrl,
  brandName 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navbarClasses = scrolled
    ? 'py-1 bg-background/80 backdrop-blur-sm border-b border-gray-800'
    : 'py-1 bg-transparent';

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClasses}`}>
      <Container className="flex justify-between items-center px-4">
        <Logo logoUrl={logoUrl} brandName={brandName} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={`/${link.href}`}
                  className="font-body text-lg leading-tight text-text-secondary hover:text-white transition-colors duration-300"
                  style={{ lineHeight: '1.2' }}
                  onClick={handleNavClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button variant="primary" className="px-6 py-2 text-base">
            <Link to="/#waitlist" onClick={onWaitlistClick}>
              Join Waitlist
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-[80vw] bg-background-secondary/80 backdrop-blur-md shadow-lg z-50 p-8 md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={toggleMenu}
                  className="text-white focus:outline-none"
                  aria-label="Close menu"
                >
                  <X size={32} />
                </button>
              </div>
              <ul className="space-y-8">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={`/${link.href}`}
                      className="text-2xl font-body text-white block py-2"
                      onClick={handleNavClick}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-12">
                <Button variant="primary" className="w-full px-6 py-2 text-base">
                  <Link 
                    to="/#waitlist" 
                    onClick={() => {
                      onWaitlistClick();
                      handleNavClick();
                    }}
                  >
                    Join Waitlist
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
};

export default Navbar;