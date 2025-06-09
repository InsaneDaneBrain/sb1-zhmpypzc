/**
 * Enhanced Landing Page with refined mobile spacing and section gaps
 * - Added new Branded Tokens section between Pricing and Vendors
 * - Reordered sections: Features → How It Works → Branded Tokens → Vendors → Pricing → Waitlist
 */
import React, { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navigation/Navbar';
import Hero from '../components/Hero/Hero';
import Section from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import FeaturesGrid from '../components/Features/FeaturesGrid';
import AnnouncementCarousel from '../components/Announcements/AnnouncementCarousel';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import VendorCTA from '../components/Vendors/VendorCTA';
import PricingSection from '../components/Pricing/PricingSection';
import WaitlistForm from '../components/Waitlist/WaitlistForm';
import Footer from '../components/Footer/Footer';
import { scroller } from 'react-scroll';

interface LandingPageProps {
  logoUrl?: string;
  brandName?: string;
}

const LandingPage: React.FC<LandingPageProps> = ({ 
  logoUrl,
  brandName 
}) => {
  const [preSelectVendor, setPreSelectVendor] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    if (location.state?.scrollToFeatures) {
      scroller.scrollTo('features', {
        duration: 800,
        delay: 0,
        smooth: true,
        offset: -80
      });
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const scrollToWaitlist = useCallback((asVendor = false) => {
    setPreSelectVendor(asVendor);
    scroller.scrollTo('waitlist', {
      duration: 800,
      delay: 0,
      smooth: true,
      offset: -80
    });
  }, []);

  return (
    <div className="min-h-screen bg-background font-body text-text-primary overflow-hidden">
      <Navbar 
        onWaitlistClick={() => scrollToWaitlist(false)}
        logoUrl={logoUrl}
        brandName={brandName}
      />
      
      <Hero onWaitlistClick={scrollToWaitlist} />

      <div className="relative">
        <Section noPadding className="md:translate-y-[-30%] translate-y-[-15%] mb-8 md:mb-12">
          <Container>
            <AnnouncementCarousel />
          </Container>
        </Section>
        
        <Section
          id="features"
          title="Features"
          subtitle="Everything you need to build a thriving community of loyal customers"
          className="mt-[-2rem] md:mt-[-4rem]"
        >
          <Container>
            <FeaturesGrid />
          </Container>
        </Section>
        
        <Section
          id="how-it-works"
          title="How It Works"
          subtitle="A simple, transparent process for both users and businesses"
          className="mt-[-3rem]"
        >
          <Container>
            <HowItWorks />
          </Container>
        </Section>

        {/* ===== BRANDED TOKENS SECTION ===== */}
        <section id="branded-tokens" className="py-16 bg-background">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-heading mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-teal-400">
                  Your Own Branded Token Ecosystem
                </span>
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto mb-8 text-lg">
                In addition to our shared community currency, every merchant can launch their own Brand Tokens—fully tokenized rewards that live in your customers' wallets.  
                Migrate your existing program data or start fresh with a custom token you control.  
                Let your customers trade BTs for discounts, freebies, VIP access, and anything you choose.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <div className="bg-background-secondary rounded-xl p-6 flex-1 border border-gray-800 hover:border-purple-500 transition-all duration-300">
                  <h3 className="text-xl font-heading text-white mb-2">Seamless Migration</h3>
                  <p className="text-text-secondary text-sm">
                    Upload your legacy points or punch-card data in one click and convert balances to your new Brand Tokens.
                  </p>
                </div>
                <div className="bg-background-secondary rounded-xl p-6 flex-1 border border-gray-800 hover:border-purple-500 transition-all duration-300">
                  <h3 className="text-xl font-heading text-white mb-2">Total Control</h3>
                  <p className="text-text-secondary text-sm">
                    Define earn rates, expiration rules, redemption tiers—or run time-limited campaigns and special drops.
                  </p>
                </div>
                <div className="bg-background-secondary rounded-xl p-6 flex-1 border border-gray-800 hover:border-purple-500 transition-all duration-300">
                  <h3 className="text-xl font-heading text-white mb-2">Deep Engagement</h3>
                  <p className="text-text-secondary text-sm">
                    Let customers collect, trade, and redeem BTs—all on-chain.  
                    Create scarcity, gamify your program, or unlock VIP experiences.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="/features/branded-tokens"
                  className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300"
                >
                  Learn About Brand Tokens
                </a>
              </div>
            </div>
          </Container>
        </section>
        
        <Section id="vendors" noPadding>
          <Container>
            <VendorCTA onApplyClick={() => scrollToWaitlist(true)} />
          </Container>
        </Section>
        
        <Section
          id="pricing"
          title="Pricing"
          subtitle="Plans that grow with your business"
        >
          <Container>
            <PricingSection />
          </Container>
        </Section>
        
        <Section
          id="waitlist"
          title="Join the Waitlist"
          subtitle="Be among the first to experience our platform"
        >
          <Container>
            <WaitlistForm preSelectVendor={preSelectVendor} />
          </Container>
        </Section>
      </div>
      
      <Footer />
    </div>
  );
};

export default LandingPage;