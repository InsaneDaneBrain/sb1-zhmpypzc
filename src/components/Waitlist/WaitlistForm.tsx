/**
 * Enhanced Waitlist form with email functionality
 * - Updated EmailJS template ID to template_wcncb6g
 * - Fixed recipient email handling by removing to_email parameter
 * - Added email template validation
 * - Improved error handling for email sending
 * - Updated success message
 * - Fixed: Now sending all form fields in email template
 * - Added console logging for debugging email parameters
 * - Updated template parameters to match template variables
 * - Added IP address capture
 * - Added user agent capture
 * - Added geolocation data capture
 * - Updated geolocation service from ipapi.co to geojs.io for better reliability
 */
import React, { useState, useEffect, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import Button from '../ui/Button';

interface FormData {
  name: string;
  email: string;
  location: string;
  phone: string;
  type: 'vendor' | 'user';
  company: string;
  notify: boolean;
}

interface WaitlistFormProps {
  preSelectVendor?: boolean;
}

interface LocationData {
  ip?: string;
  city?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
}

const WaitlistForm = forwardRef<HTMLDivElement, WaitlistFormProps>(({ preSelectVendor = false }, ref) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    location: '',
    phone: '',
    type: preSelectVendor ? 'vendor' : 'user',
    company: '',
    notify: true,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [locationData, setLocationData] = useState<LocationData>({});
  const [userAgent, setUserAgent] = useState<string>('');

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Set user agent
    setUserAgent(window.navigator.userAgent);

    // Get IP and location data
    const getLocationData = async () => {
      try {
        const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
        const data = await response.json();
        setLocationData({
          ip: data.ip,
          city: data.city,
          country: data.country,
          latitude: parseFloat(data.latitude),
          longitude: parseFloat(data.longitude),
        });
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    };

    getLocationData();
  }, []);

  useEffect(() => {
    setFormData(prev => ({ ...prev, type: preSelectVendor ? 'vendor' : 'user' }));
  }, [preSelectVendor]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: checkbox.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location/ZIP Code is required';
    }
    
    if (formData.type === 'vendor' && !formData.company.trim()) {
      newErrors.company = 'Company name is required for vendors';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    
    if (validateForm()) {
      setIsLoading(true);
      try {
        const templateParams = {
          user_name: formData.name,
          user_email: formData.email,
          user_location: formData.location,
          user_phone: formData.phone || 'Not provided',
          user_type: formData.type,
          user_company: formData.type === 'vendor' ? formData.company : 'N/A',
          user_notify: formData.notify ? 'Yes' : 'No',
          user_ip: locationData.ip || 'Not available',
          user_agent: userAgent,
          user_geo_city: locationData.city || 'Not available',
          user_geo_country: locationData.country || 'Not available',
          user_geo_coords: locationData.latitude && locationData.longitude 
            ? `${locationData.latitude},${locationData.longitude}` 
            : 'Not available',
          message: `New waitlist signup details:
Name: ${formData.name}
Email: ${formData.email}
Location: ${formData.location}
Phone: ${formData.phone || 'Not provided'}
Type: ${formData.type}
Company: ${formData.type === 'vendor' ? formData.company : 'N/A'}
Notify about programs: ${formData.notify ? 'Yes' : 'No'}
IP Address: ${locationData.ip || 'Not available'}
User Agent: ${userAgent}
City: ${locationData.city || 'Not available'}
Country: ${locationData.country || 'Not available'}
Coordinates: ${locationData.latitude && locationData.longitude ? `${locationData.latitude},${locationData.longitude}` : 'Not available'}`
        };

        console.log('Sending email with parameters:', templateParams);

        await emailjs.send(
          'service_2bwo23s',
          'template_wcncb6g',
          templateParams,
          'Tx2PpiHBvYQz869PT'
        );

        setSubmitted(true);
      } catch (error) {
        console.error('Email submission error:', error);
        setSubmitError('Failed to submit form. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-background-secondary p-10 rounded-xl text-center"
      >
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-heading mb-4">Thanks for joining!</h3>
        <p className="text-text-secondary">
          We've added you to our waitlist and will be in touch soon.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={(node) => {
        inViewRef(node);
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={formVariants}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-background-secondary p-8 rounded-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2] to-[#FF1493] opacity-10"></div>
        
        <div className="relative z-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white font-body mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-background border ${
                  errors.name ? 'border-red-500' : 'border-gray-700'
                } rounded-lg focus:outline-none focus:border-[#8A2BE2] text-white`}
              />
              {errors.name && (
                <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-white font-body mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-background border ${
                  errors.email ? 'border-red-500' : 'border-gray-700'
                } rounded-lg focus:outline-none focus:border-[#8A2BE2] text-white`}
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="location" className="block text-white font-body mb-2">
                Location / ZIP Code
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-background border ${
                  errors.location ? 'border-red-500' : 'border-gray-700'
                } rounded-lg focus:outline-none focus:border-[#8A2BE2] text-white`}
              />
              {errors.location && (
                <p className="mt-1 text-red-500 text-sm">{errors.location}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-white font-body mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-gray-700 rounded-lg focus:outline-none focus:border-[#8A2BE2] text-white"
              />
              <p className="mt-1 text-text-secondary text-sm">
                Optional – we may send SMS launch updates
              </p>
            </div>
            
            <div>
              <label htmlFor="type" className="block text-white font-body mb-2">
                I am a
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-gray-700 rounded-lg focus:outline-none focus:border-[#8A2BE2] text-white"
              >
                <option value="user">User</option>
                <option value="vendor">Vendor</option>
              </select>
            </div>
            
            {formData.type === 'vendor' && (
              <div>
                <label htmlFor="company" className="block text-white font-body mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-background border ${
                    errors.company ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg focus:outline-none focus:border-[#8A2BE2] text-white`}
                />
                {errors.company && (
                  <p className="mt-1 text-red-500 text-sm">{errors.company}</p>
                )}
              </div>
            )}
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="notify"
                name="notify"
                checked={formData.notify}
                onChange={handleChange}
                className="h-5 w-5 bg-background border border-gray-700 rounded focus:outline-none"
              />
              <label htmlFor="notify" className="ml-2 text-text-secondary font-body">
                Notify me about pilot programs
              </label>
            </div>

            {submitError && (
              <p className="text-red-500 text-sm text-center">{submitError}</p>
            )}
            
            <Button 
              type="submit" 
              variant="secondary" 
              className="w-full"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Join Waitlist'}
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  );
});

WaitlistForm.displayName = 'WaitlistForm';

export default WaitlistForm;