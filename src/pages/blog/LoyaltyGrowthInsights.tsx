/**
 * Blog post about loyalty program growth insights from NielsenIQ
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

const LoyaltyGrowthInsights: React.FC = () => {
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
                  src="https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1280"
                  alt="Growth chart analytics dashboard"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              
              <div className="flex items-center text-text-secondary mb-4">
                <Calendar size={16} className="mr-2" />
                June 15, 2025
              </div>
              <h1 className="text-4xl md:text-5xl font-heading mb-6">
                How Loyalty Programs Boost Business Growth: Insights from NielsenIQ
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </header>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                Loyalty programs aren't just a "nice to have"—they're a proven driver of incremental revenue and customer lifetime value. According to a recent NielsenIQ analysis, brands that invest in well-designed loyalty schemes can see repeat purchases rise by up to 20% compared to non-members. Understanding these gains is crucial as competition for wallet share intensifies across every retail sector.
              </p>

              <h2 className="text-2xl font-heading mb-4 mt-12">1. Increased Repeat Purchases</h2>
              <p className="text-text-secondary mb-8">
                NielsenIQ found that customers enrolled in loyalty programs make 20% more repeat purchases year-over-year than those without membership. That bump comes from targeted promotions and personalized messaging—tactics that keep your brand top of mind.
              </p>

              <h2 className="text-2xl font-heading mb-4">2. Higher Average Order Value (AOV)</h2>
              <p className="text-text-secondary mb-8">
                Members also tend to spend more per transaction, often leveraging tiered rewards incentives (e.g., "Spend $50, earn 5 bonus points"). NielsenIQ reports a 15% uplift in AOV for active loyalty members versus one-time purchasers.
              </p>

              <h2 className="text-2xl font-heading mb-4">3. Reduced Churn and Higher Retention</h2>
              <p className="text-text-secondary mb-8">
                By gamifying repeat visits—through points, tiers, and badges—brands lock in customers. The same NielsenIQ study shows a 12% decline in churn among loyalty participants, translating directly to lower acquisition costs.
              </p>

              <h2 className="text-2xl font-heading mb-4">4. Data-Driven Marketing Opportunities</h2>
              <p className="text-text-secondary mb-8">
                Every point-earning or redemption action feeds your CRM. This rich behavioral data lets you segment high-value cohorts and run hyper-targeted campaigns (e.g., lapsed VIPs, birthday bonus offers), maximizing ROI on marketing spend.
              </p>

              <h2 className="text-2xl font-heading mb-4">Conclusion</h2>
              <p className="text-text-secondary mb-8">
                Loyalty programs are more than punch cards—they're sophisticated growth engines. By harnessing data, personalization, and strategic incentives, brands can unlock significant bottom-line gains. As NielsenIQ's findings illustrate, the right loyalty strategy pays for itself many times over.
              </p>

              <div className="mt-12 pt-8 border-t border-gray-800">
                <h3 className="text-xl font-heading mb-4">References</h3>
                <p className="text-text-secondary">
                  NielsenIQ, The ROI of Loyalty Programs, 2024.
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

export default LoyaltyGrowthInsights