/**
 * Enhanced Landing Page with refined mobile spacing and section gaps
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