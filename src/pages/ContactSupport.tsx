/**
 * Contact Support page with EmailJS integration
 * - Updated to use template_hutunld
 * - Added user_message parameter
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer/Footer';
import { Container } from '../components/ui/Container';
import Button from '../components/ui/Button';

const ContactSupport: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_2bwo23s',
        'template_hutunld',
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone || 'Not provided',
          user_message: formData.message,
          type: 'support'
        },
        'Tx2PpiHBvYQz869PT'
      );
      
      setSubmitted(true);
    } catch (error) {
      console.error('Failed to send message:', error);
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar onWaitlistClick={() => {}} />
        <main className="pt-24 pb-16">
          <Container>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto bg-background-secondary p-10 rounded-xl text-center"
            >
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-heading mb-4">Thanks for reaching out!</h3>
              <p className="text-text-secondary">
                We've received your message and will get back to you within 3 business days.
              </p>
            </motion.div>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar onWaitlistClick={() => {}} />
      <main className="pt-24 pb-16">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading mb-6 text-center">Contact Support</h1>
            <p className="text-text-secondary text-lg text-center mb-12">
              Can't find what you need? Send us a message and we'll get back to you within 3 business days.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-body mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-background border ${
                    errors.name ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg focus:outline-none focus:border-purple-500 text-white`}
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-body mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-background border ${
                    errors.email ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg focus:outline-none focus:border-purple-500 text-white`}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-body mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-body mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-background border ${
                    errors.message ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg focus:outline-none focus:border-purple-500 text-white`}
                />
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              {errors.submit && (
                <p className="text-red-500 text-center">{errors.submit}</p>
              )}

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default ContactSupport;