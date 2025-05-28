/**
 * Enhanced Section component with improved gradient transitions and spacing
 */
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  noPadding?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  title,
  subtitle,
  noPadding = false
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section 
      id={id} 
      className={`relative ${!noPadding ? 'py-12 md:py-16' : ''} ${className}`}
      ref={ref}
    >
      {/* Removed top gradient that was causing the issue */}
      
      {/* Bottom gradient now has reduced opacity and better transition */}
      <div className="absolute inset-x-0 -bottom-24 h-24 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        className="relative z-20"
      >
        {(title || subtitle) && (
          <div className="text-center mb-8 md:mb-12">
            {title && (
              <motion.div variants={variants} className="inline-block">
                <span className="inline-block px-4 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 mb-4">
                  {title}
                </span>
                <motion.h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-heading text-white"
                  variants={variants}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-teal-400">
                    {title}
                  </span>
                </motion.h2>
              </motion.div>
            )}
            {subtitle && (
              <motion.p 
                className="text-lg text-text-secondary font-body max-w-2xl mx-auto mt-4"
                variants={variants}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
};

export default Section;