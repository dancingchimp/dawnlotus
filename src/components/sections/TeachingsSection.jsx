// src/components/sections/TeachingsSection.jsx

import React from 'react';

const teachings = [
  {
    chinese: '陰陽',
    pinyin: 'Yīn Yáng',
    english: 'Duality',
    description: 'Understanding and balancing opposing forces within body and mind.'
  },
  {
    chinese: '氣',
    pinyin: 'Qì',
    english: 'Vital Energy',
    description: 'Cultivating and directing vital energy through practice and awareness for the good of the microcosm and macrocosm.'
  },
  {
    chinese: '道',
    pinyin: 'Dào',
    english: 'The Way',
    description: 'Following the path of harmony and spiritual development towards embodiment of the divine.'
  },
  {
    chinese: '德',
    pinyin: 'Dé',
    english: 'Virtue',
    description: 'Fusing heaven and earth to create good ripple effects by wielding darkness as the light.'
  },
  {
    chinese: '無為',
    pinyin: 'Wú Wéi',
    english: 'Non-Governance',
    description: 'Acting within the constraints of divine law to spread good ripple effects.'
  },
  {
    chinese: '調息',
    pinyin: 'Tiáo Xī',
    english: 'Breath Harmony',
    description: 'Mastering the breath as a bridge between body and spirit.'
  }
];

function TeachingCard({ teaching }) {
  return (
    <div className="bg-stone-800/30 rounded-lg p-6 border border-gold-500/10 
                    hover:border-gold-500/30 transition-all duration-300 group">
      <div className="mb-4">
        <h3 className="font-chinese text-2xl text-gold-500 group-hover:scale-110 
                      transition-transform duration-300 inline-block">
          {teaching.chinese}
        </h3>
        <p className="text-stone-400 text-sm">{teaching.pinyin}</p>
      </div>
      
      <h4 className="text-lg font-serif text-stone-100 mb-2">{teaching.english}</h4>
      <p className="text-stone-300">{teaching.description}</p>
    </div>
  );
}

function TeachingsSection() {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachings.map((teaching, index) => (
          <TeachingCard key={index} teaching={teaching} />
        ))}
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-jade-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
    </div>
  );
}

export default TeachingsSection;