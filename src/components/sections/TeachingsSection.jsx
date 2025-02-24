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
    description: 'Cultivating and directing life force through practice and awareness.'
  },
  {
    chinese: '道',
    pinyin: 'Dào',
    english: 'The Way',
    description: 'Following the natural path of harmony and spiritual development.'
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
    <div className="grid md:grid-cols-3 gap-6">
      {teachings.map((teaching, index) => (
        <TeachingCard key={index} teaching={teaching} />
      ))}
    </div>
  );
}

export default TeachingsSection;