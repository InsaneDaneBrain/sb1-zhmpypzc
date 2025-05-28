/**
 * Type definitions for Block Rewards components
 * Updated pricing tier structure with simplified transaction limits
 */

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.FC;
}

export interface PricingTier {
  id: number;
  title: string;
  price: string;
  features: string[];
  gradient: string;
  cta: string;
  isPopular?: boolean;
  monthlyTransactions: string;
}

export interface Announcement {
  id: number;
  title: string;
  description: string;
}

export interface NavLink {
  id: number;
  label: string;
  href: string;
}