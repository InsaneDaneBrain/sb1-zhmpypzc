/**
 * Shared layout component for feature pages with consistent structure and smooth scrolling
 * - Removed custom header in favor of global Navbar
 * - Added Back to Features button
 * - Added Coming Soon notice for Employee Rewards
 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import Navbar from '../Navigation/Navbar';
import Footer from '../Footer/Footer';

interface FeatureLayoutProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  gradientFrom?: string;
  gradientTo?: string;
  children: React.ReactNode;
  isComingSoon?: boolean;
}

const FeatureLayout: React.FC<FeatureLayoutProps> = ({
  icon,
  title,
  subtitle,
  gradientFrom = "from-purple-800",
  gradientTo = "to-pink-800",
  children,
  isComingSoon = false
}) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onWaitlistClick={() => {}} />

      {/* Hero Section */}
      <section className={`pt-24 pb-12 bg-gradient-to-r ${gradientFrom} ${gradientTo}`}>
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link
              to="/#features"
              className="inline-flex items-center px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition mb-8"
            >
              ← All Features
            </Link>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-3 rounded-lg bg-white/10 backdrop-blur-sm mb-6">
                {icon}
              </div>
              <h1 className="text-4xl md:text-5xl font-heading mb-4 text-white">{title}</h1>
              <p className="text-xl text-white/80">{subtitle}</p>
              
              {isComingSoon && (
                <div className="mt-6 inline-block px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full">
                  <span className="text-pink-400">Coming Soon</span>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <Container>
          {children}
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default FeatureLayout;