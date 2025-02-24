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
            <div className="mb-6">
              <h3 className="font-chinese text-2xl text-gold-500 mb-2">
                {point.chinese}
              </h3>
              <h4 className="text-xl font-serif text-stone-100">
                {point.title}
              </h4>
            </div>

            <p className="text-stone-300 mb-6">
              {point.description}
            </p>

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
    </div>
  );
}

export default PhilosophySection;