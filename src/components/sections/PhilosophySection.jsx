// src/components/sections/PhilosophySection.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const philosophyPoints = [
  {
    title: 'Natural Harmony',
    chinese: '自然和諧',
    description: 'Aligning practice with the natural rhythms of the universe and our own bodies.',
    quote: '道法自然',
    quoteTranslation: 'The Way follows nature'
  },
  {
    title: 'Balance Cultivation',
    chinese: '平衡修養',
    description: 'Developing equilibrium between movement and stillness, effort and ease.',
    quote: '致虛極，守靜篤',
    quoteTranslation: 'Attain utmost emptiness, maintain tranquility'
  },
  {
    title: 'Mindful Integration',
    chinese: '正念合一',
    description: 'Unifying body, breath, and spirit through conscious practice.',
    quote: '天人合一',
    quoteTranslation: 'Heaven and human become one'
  }
];

function PhilosophySection() {
  return (
    <div className="relative">
      <div className="grid lg:grid-cols-3 gap-8">
        {philosophyPoints.map((point, index) => (
          <div 
            key={index}
            className="bg-stone-800/30 rounded-xl p-8 border border-gold-500/10 
                     hover:border-gold-500/30 transition-all duration-300 group"
          >
            {/* Title */}
            <div className="mb-6">
              <h3 className="font-chinese text-2xl text-gold-500 mb-2">
                {point.chinese}
              </h3>
              <h4 className="text-xl font-serif text-stone-100">
                {point.title}
              </h4>
            </div>

            {/* Description */}
            <p className="text-stone-300 mb-6">
              {point.description}
            </p>

            {/* Quote */}
            <div className="bg-stone-800/50 rounded-lg p-4">
              <p className="font-chinese text-lg text-gold-400 mb-1">
                {point.quote}
              </p>
              <p className="text-stone-400 text-sm italic">
                {point.quoteTranslation}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <Link
          to="/theory"
          className="inline-flex items-center gap-2 border border-gold-500/30 
                   text-stone-100 px-8 py-3 rounded-lg text-lg font-serif
                   hover:bg-gold-500/10 transition-all duration-300"
        >
          Explore Daoist Philosophy
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-jade-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
    </div>
  );
}

export default PhilosophySection;