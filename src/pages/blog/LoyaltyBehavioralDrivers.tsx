/**
 * Blog post about behavioral drivers in loyalty rewards
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

const LoyaltyBehavioralDrivers: React.FC = () => {
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
                  src="https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1280"
                  alt="Customer checking rewards on phone"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              
              <div className="flex items-center text-text-secondary mb-4">
                <Calendar size={16} className="mr-2" />
                May 20, 2025
              </div>
              <h1 className="text-4xl md:text-5xl font-heading mb-6">
                Why Customers Shop More with Loyalty Rewards: Behavioral Drivers
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </header>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                It's not magic: well-crafted loyalty programs tap into deep psychological drivers—everything from the need for recognition to the thrill of progression. A study by Mack Collier revealed that 78% of customers cite "feeling appreciated" as their primary loyalty motivator, and 80% point to consistent rewards as essential for repeat business.
              </p>

              <h2 className="text-2xl font-heading mb-4 mt-12">1. The Power of Social Recognition</h2>
              <p className="text-text-secondary mb-8">
                Humans crave status. Digital badges, VIP tiers, and "insider" early-access perks signal belonging to an exclusive club, triggering oxytocin releases that reinforce brand affinity.
              </p>

              <h2 className="text-2xl font-heading mb-4">2. Loss Aversion and the Sunk-Cost Effect</h2>
              <p className="text-text-secondary mb-8">
                Once customers invest points or tokens, the idea of "losing" unused rewards spurs additional visits. This interplay between loss aversion and sunk costs can lift purchase frequency by up to 15%.
              </p>

              <h2 className="text-2xl font-heading mb-4">3. Immediate vs. Delayed Gratification</h2>
              <p className="text-text-secondary mb-8">
                Tiered programs balance instant win elements (e.g., "Free coffee today") with longer-term milestones (e.g., "Gold status after 1,000 XP"). This mix keeps engagement high across both impulsive and strategic shoppers.
              </p>

              <h2 className="text-2xl font-heading mb-4">4. Emotional Engagement Through Personalization</h2>
              <p className="text-text-secondary mb-8">
                Surveys show that tailored offers—like birthday bonuses or "just for you" product bundles—drive a 25% higher redemption rate than generic promotions. Personalization taps into individual preferences, making each reward feel uniquely valuable.
              </p>

              <h2 className="text-2xl font-heading mb-4">Conclusion</h2>
              <p className="text-text-secondary mb-8">
                Behavioral science isn't optional—it's the backbone of effective loyalty. By designing programs that honor customers' emotional and cognitive drivers, brands can dramatically boost engagement, retention, and ultimately, revenue.
              </p>

              <div className="mt-12 pt-8 border-t border-gray-800">
                <h3 className="text-xl font-heading mb-4">References</h3>
                <p className="text-text-secondary">
                  Mack Collier, "New Research Uncovers the Drivers of Customer Loyalty," 2021.
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

export default LoyaltyBehavioralDrivers