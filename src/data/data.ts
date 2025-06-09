/**
 * This file contains all the data for the Block Rewards marketing website
 * Updated pricing tiers with transaction limits and Enterprise messaging
 * - Added Waitlist navigation link
 * - Updated Vendors nav link to point to Branded Tokens section
 */

import { 
  CreditCard, 
  Coins, 
  Terminal, 
  Trophy, 
  TrendingUp, 
  Gift, 
  Award 
} from 'lucide-react';
import { Feature, PricingTier, Announcement, NavLink } from '../types';

export const navLinks: NavLink[] = [
  { id: 1, label: 'Features', href: '#features' },
  { id: 2, label: 'How It Works', href: '#how-it-works' },
  { id: 3, label: 'Vendors', href: '#branded-tokens' },
  { id: 4, label: 'Pricing', href: '#pricing' },
  { id: 5, label: 'Waitlist', href: '#waitlist' },
];

export const features: Feature[] = [
  {
    id: 1,
    title: 'Universal Currency',
    description: 'Earn & spend points across local vendors in your neighborhood with a unified rewards currency.',
    icon: CreditCard,
  },
  {
    id: 2,
    title: 'Tokenized Rewards',
    description: 'Own your rewards on-chain forever. No more expiring points or lost loyalty cards.',
    icon: Coins,
  },
  {
    id: 3,
    title: 'Seamless POS Integration',
    description: 'Works with Square, Clover, Toast, and other popular point-of-sale systems.',
    icon: Terminal,
  },
  {
    id: 4,
    title: 'Employee Rewards',
    description: 'Gamified training, wellness & performance incentives for your team members.',
    icon: Trophy,
  },
];

export const howItWorks = [
  {
    id: 1,
    title: 'Earn',
    description: '1 BRP per $1 spent at any participating merchant',
    icon: TrendingUp,
  },
  {
    id: 2,
    title: 'Redeem',
    description: 'Convert to gift cards or digital debit card (100 BRP = $1)',
    icon: Gift,
  },
  {
    id: 3,
    title: 'Engage',
    description: 'Claim perks, booster NFTs, and employee badges',
    icon: Award,
  },
];

export const pricingTiers: PricingTier[] = [
  {
    id: 1,
    title: 'Essentials',
    price: '$99/mo',
    monthlyTransactions: '1,000',
    features: [
      'Unlimited Points & Tokens',
      'POS plugins & integrations',
      'Analytics dashboard',
      'API access',
      'Email support',
      'Included on-chain transactions per month: 1,000'
    ],
    gradient: 'bg-purple-red-gradient',
    cta: 'Select Essentials',
  },
  {
    id: 2,
    title: 'Professional',
    price: '$199/mo',
    monthlyTransactions: '5,000',
    features: [
      'Everything in Essentials, plus:',
      'Custom campaigns',
      'Priority support',
      'Weekly performance reviews',
      'Advanced analytics',
      'Included on-chain transactions per month: 5,000'
    ],
    gradient: 'bg-teal-magenta-gradient',
    cta: 'Select Professional',
    isPopular: true,
  },
  {
    id: 3,
    title: 'Enterprise',
    price: '$299/mo',
    monthlyTransactions: 'Custom',
    features: [
      'Everything in Professional, plus:',
      'Employee Rewards Module',
      'Team challenges & training',
      'Custom leaderboards',
      'White-labeling',
      'Multi-location support',
      'Dedicated account manager',
      'Custom transaction limits—please contact sales'
    ],
    gradient: 'bg-purple-red-gradient',
    cta: 'Contact Sales',
  },
];

export const announcements: Announcement[] = [
  {
    id: 1,
    title: 'Pilot Launch Q3 2025',
    description: 'Block Rewards will be launching our first neighborhood pilot in select cities. Join the waitlist to be considered.',
  },
  {
    id: 2,
    title: 'Double Points Week Coming Soon',
    description: 'Our partner merchants will offer double points on all purchases during our promotional launch week.',
  },
  {
    id: 3,
    title: 'Employee Rewards Beta',
    description: 'We\'re looking for businesses to pilot our new employee rewards program. Limited spots available.',
  },
];