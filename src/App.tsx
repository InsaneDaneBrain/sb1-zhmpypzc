/**
 * Updated App component with scroll handling and blog post routes
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Blog from './pages/Blog';
import Jobs from './pages/Jobs';
import Integrations from './pages/Integrations';
import API from './pages/API';
import Support from './pages/Support';
import ContactSupport from './pages/ContactSupport';
import Privacy from './pages/Privacy';
import AboutPage from './pages/company/AboutPage';
import BlogPage from './pages/company/BlogPage';
import JobsPage from './pages/company/JobsPage';
import UniversalCurrencyPage from './pages/features/UniversalCurrencyPage';
import TokenizedRewardsPage from './pages/features/TokenizedRewardsPage';
import POSIntegrationPage from './pages/features/POSIntegrationPage';
import EmployeeRewardsPage from './pages/features/EmployeeRewardsPage';
import LoyaltyGrowthInsights from './pages/blog/LoyaltyGrowthInsights';
import LoyaltyBehavioralDrivers from './pages/blog/LoyaltyBehavioralDrivers';
import LoyaltyAppSecurity from './pages/blog/LoyaltyAppSecurity';

// Scroll handler component
function ScrollToHash() {
  const { hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
}

const brandConfig = {
  logoUrl: '/block-rewards-logo-new.png',
  brandName: 'Block Rewards'
};

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<LandingPage {...brandConfig} />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/api" element={<API />} />
        <Route path="/support" element={<Support />} />
        <Route path="/support/contact" element={<ContactSupport />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/company/about" element={<AboutPage />} />
        <Route path="/company/blog" element={<BlogPage />} />
        <Route path="/company/jobs" element={<JobsPage />} />
        <Route path="/features/universal-currency" element={<UniversalCurrencyPage />} />
        <Route path="/features/tokenized-rewards" element={<TokenizedRewardsPage />} />
        <Route path="/features/pos-integration" element={<POSIntegrationPage />} />
        <Route path="/features/employee-rewards" element={<EmployeeRewardsPage />} />
        <Route path="/blog/loyalty-growth-insights" element={<LoyaltyGrowthInsights />} />
        <Route path="/blog/loyalty-behavioral-drivers" element={<LoyaltyBehavioralDrivers />} />
        <Route path="/blog/loyalty-app-security" element={<LoyaltyAppSecurity />} />
      </Routes>
    </Router>
  );
}

export default App;