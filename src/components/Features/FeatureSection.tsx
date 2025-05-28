/**
 * Reusable section component for feature pages
 */
import React from 'react';

interface FeatureSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  children,
  className = '',
  gradient = false
}) => {
  return (
    <div className={`mb-16 ${className}`}>
      <h2 className="text-2xl font-heading mb-6">{title}</h2>
      <div className={`
        ${gradient ? 'bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-teal-500/20' : ''}
        rounded-xl overflow-hidden
      `}>
        {children}
      </div>
    </div>
  );
};

export default FeatureSection;