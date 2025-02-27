// src/components/ui/card.jsx
import React from 'react';

export const Card = ({ className, children, ...props }) => {
  return (
    <div 
      className={`bg-stone-800/30 rounded-xl border border-jade-500/10 overflow-hidden shadow-sm ${className || ''}`} 
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ className, children, ...props }) => {
  return (
    <div 
      className={`p-6 ${className || ''}`} 
      {...props}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({ className, children, ...props }) => {
  return (
    <h3 
      className={`text-xl font-serif text-gold-500 ${className || ''}`} 
      {...props}
    >
      {children}
    </h3>
  );
};

export const CardContent = ({ className, children, ...props }) => {
  return (
    <div 
      className={`p-6 pt-0 ${className || ''}`} 
      {...props}
    >
      {children}
    </div>
  );
};

export default { Card, CardHeader, CardTitle, CardContent };