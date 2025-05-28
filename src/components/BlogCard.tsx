import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: {
    key: string;
    title: string;
    date: string;
    excerpt: string;
    alt: string;
    slug: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const imageUrlMap = {
    growth: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=600",
    behavior: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=600",
    security: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600"
  };

  const imageUrl = imageUrlMap[post.key as keyof typeof imageUrlMap];

  return (
    <Link 
      to={post.slug}
      className="block bg-background-secondary rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-all duration-300 group h-full"
    >
      <div className="relative aspect-video">
        <img 
          src={imageUrl}
          alt={post.alt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-secondary/80 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex items-center text-text-secondary mb-3">
          <Calendar size={16} className="mr-2" />
          {post.date}
        </div>
        <h3 className="text-xl font-heading mb-3 group-hover:text-purple-400 transition-colors">
          {post.title}
        </h3>
        <p className="text-text-secondary mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="text-purple-400 hover:text-purple-300 transition-colors flex items-center">
          Read more
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;