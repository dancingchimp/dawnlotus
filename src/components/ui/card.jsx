// src/components/ui/card.jsx
import React from 'react';

// Simple Card component implementations
export function Card({ className, children, ...props }) {
  return (
    <div className={`bg-stone-800/30 rounded-xl border border-jade-500/10 overflow-hidden ${className || ''}`} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div className={`p-4 ${className || ''}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h3 className={`text-xl font-serif text-gold-400 ${className || ''}`} {...props}>
      {children}
    </h3>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={`p-4 pt-0 ${className || ''}`} {...props}>
      {children}
    </div>
  );
}