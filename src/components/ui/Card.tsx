/**
 * Enhanced Card component with improved hover effects and transitions
 */
import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  gradientBorder?: boolean;
  gradient?: string;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  gradientBorder = false,
  gradient
}) => {
  const baseClasses = 'bg-background-secondary/80 backdrop-blur-sm rounded-xl transition-all duration-300';
  const gradientBorderClasses = gradientBorder ? 
    'p-[1px] bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-teal-500/50 rounded-xl' : '';
  const gradientClasses = gradient || '';
  
  return (
    <motion.div 
      className={`${gradientBorderClasses} ${className}`}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className={`${baseClasses} h-full ${gradient ? gradientClasses : ''}`}>
        {children}
      </div>
    </motion.div>
  );
};

export default Card;