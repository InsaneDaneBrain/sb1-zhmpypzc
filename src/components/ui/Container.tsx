/**
 * Container component for consistent section spacing
 * Fixed: Changed export to use named export instead of default export to match import usage
 */
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '', id }) => {
  return (
    <div 
      id={id}
      className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;