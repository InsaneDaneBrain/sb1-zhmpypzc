/**
 * Blog post about security vulnerabilities in loyalty apps
 * - Added Back to Blog button
 * - Updated header image with new Unsplash URL
 * - Updated header image to use Pexels URL
 */
import React from 'react';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navigation/Navbar';
import Footer from '../../components/Footer/Footer';
import { Container } from '../../components/ui/Container';
import Button from '../../components/ui/Button';

const LoyaltyAppSecurity: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar onWaitlistClick={() => {}} />
      <main className="pt-24 pb-16">
        <Container>
          <article className="max-w-3xl mx-auto">
            <Link to="/blog">
              <Button variant="outline" className="mb-8">
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
              </Button>
            </Link>
            
            <header className="mb-12">
              <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1280"
                  alt="Secure lock icon over code screen"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              
              <div className="flex items-center text-text-secondary mb-4">
                <Calendar size={16} className="mr-2" />
                April 10, 2025
              </div>
              <h1 className="text-4xl md:text-5xl font-heading mb-6">
                Securing Loyalty: Addressing Top Security Vulnerabilities in Rewards Apps
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </header>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                As loyalty apps store valuable tokens and personal data, they've become prime targets for attackers. The Sainsbury's Nectar breach in late 2024 exposed rootkit vulnerabilities in its backend, underscoring the stakes: fraud, reputational harm, and regulatory fines.
              </p>

              <h2 className="text-2xl font-heading mb-4 mt-12">1. Common Vulnerabilities</h2>
              <ul className="list-none space-y-4 text-text-secondary mb-8">
                <li>• Weak Authentication: Password-only logins and absence of MFA make account takeover trivial.</li>
                <li>• Insecure APIs: Unprotected endpoints can expose token balances or PII.</li>
                <li>• Insufficient Input Validation: SQL injection or XSS flaws allow attackers to tamper with loyalty balances.</li>
              </ul>

              <h2 className="text-2xl font-heading mb-4">2. Lessons from the Nectar Breach</h2>
              <p className="text-text-secondary mb-8">
                Hackers exploited outdated server libraries and unmonitored root access keys to quietly siphon points. Sainsbury's had to invalidate millions of Nectar points and rebuild trust—a multi-million-pound undertaking.
              </p>

              <h2 className="text-2xl font-heading mb-4">3. Best Practices for Reward App Security</h2>
              <ul className="list-none space-y-4 text-text-secondary mb-8">
                <li>• Enforce MFA: Mandatory SMS or authenticator-based second factors block most unauthorized attempts.</li>
                <li>• API Rate-Limiting & Logging: Monitor unusual patterns (e.g., mass redemptions) and throttle suspicious calls.</li>
                <li>• Regular Pen Testing & Dependency Audits: Catch outdated libraries or configuration drift before attackers do.</li>
              </ul>

              <h2 className="text-2xl font-heading mb-4">4. Building User Confidence</h2>
              <p className="text-text-secondary mb-8">
                Transparent security disclosures (e.g., "GDPR-compliant encryption at rest") and quick incident response plans reassure users that their hard-earned rewards—and data—are safe.
              </p>

              <h2 className="text-2xl font-heading mb-4">Conclusion</h2>
              <p className="text-text-secondary mb-8">
                Security is as vital to loyalty as UX. Investing in robust, proactive defenses not only protects assets but also becomes a differentiator. In a world where trust drives repeat business, you can't afford to get breached.
              </p>

              <div className="mt-12 pt-8 border-t border-gray-800">
                <h3 className="text-xl font-heading mb-4">References</h3>
                <p className="text-text-secondary">
                  "Sainsbury's Nectar Loyalty App Backdoor Exposed," The Register, November 2024.
                </p>
              </div>
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default LoyaltyAppSecurity