/**
 * Reusable benefit card component for feature pages
 */
import React from 'react';
import { motion } from 'framer-motion';

interface BenefitCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-background-secondary p-6 rounded-xl border border-gray-800/50"
    >
      {icon && (
        <div className="mb-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
            {icon}
          </div>
        </div>
      )}
      <h3 className="text-xl font-heading mb-3">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </motion.div>
  );
};

export default BenefitCard;