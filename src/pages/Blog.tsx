import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer/Footer';
import { Container } from '../components/ui/Container';
import Button from '../components/ui/Button';
import BlogCard from '../components/BlogCard';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      key: "growth",
      title: "How Loyalty Programs Boost Business Growth: Insights from NielsenIQ",
      date: "May 31, 2025",
      excerpt: "Loyalty programs aren't just a \"nice to have\"--they're a proven driver of incremental revenue and customer lifetime value.",
      alt: "Growth chart analytics dashboard",
      slug: "/blog/loyalty-growth-insights"
    },
    {
      key: "behavior",
      title: "Why Customers Shop More with Loyalty Rewards: Behavioral Drivers",
      date: "May 20, 2025",
      excerpt: "Well-crafted loyalty programs tap into deep psychological drivers--from recognition to progression.",
      alt: "Customer checking rewards on phone",
      slug: "/blog/loyalty-behavioral-drivers"
    },
    {
      key: "security",
      title: "Securing Loyalty: Addressing Top Security Vulnerabilities in Rewards Apps",
      date: "April 10, 2025",
      excerpt: "As loyalty apps store valuable tokens and personal data, they've become prime targets for attackers.",
      alt: "Secure lock icon over code screen",
      slug: "/blog/loyalty-app-security"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onWaitlistClick={() => {}} />
      <main className="pt-24 pb-16">
        <Container>
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading mb-6">Insights & Updates</h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Stay up-to-date on product launches, best practices for loyalty, blockchain news, and customer success stories.
            </p>
          </div>

          {/* Featured Posts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-background-secondary rounded-xl p-8 text-center">
            <h2 className="text-2xl font-heading mb-4">Want to see your story featured here?</h2>
            <p className="text-text-secondary mb-6">
              Submit a guest post or subscribe for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary">Submit a Story</Button>
              <Button variant="outline">Subscribe to Updates</Button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;