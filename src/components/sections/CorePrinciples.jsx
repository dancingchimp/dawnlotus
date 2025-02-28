// src/components/sections/CorePrinciples.jsx
import React from 'react';

const CorePrinciples = () => {
  const principles = [
    {
      title: "Integration",
      chinese: "整合",
      pinyin: "Zhěnghé",
      description: "Harmonizing Eastern energy principles with Western physical practices to create a comprehensive system that addresses all dimensions of being.",
      quote: "道法自然",
      quoteTranslation: "The Way follows nature"
    },
    {
      title: "Balance",
      chinese: "平衡",
      pinyin: "Pínghéng",
      description: "Cultivating equilibrium between opposing forces: stillness and movement, structure and freedom, effort and ease, yang and yin.",
      quote: "致虛極，守靜篤",
      quoteTranslation: "Attain utmost emptiness, maintain tranquility"
    },
    {
      title: "Transformation",
      chinese: "轉化",
      pinyin: "Zhuǎnhuà",
      description: "Facilitating profound change through consistent practice, guiding practitioners from physical awareness to energetic mastery to spiritual consciousness.",
      quote: "天人合一",
      quoteTranslation: "Heaven and human become one"
    }
  ];

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 xl:px-24 bg-stone-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-texture opacity-5" />
      <div className="absolute top-0 right-0 w-full h-1/3 bg-gradient-to-b from-stone-800/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-stone-800/50 to-transparent" />
      
      {/* Decorative energy circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-jade-500/5 rounded-full blur-3xl animate-flow opacity-30" 
           style={{ animationDuration: '15s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl animate-flow opacity-30" 
           style={{ animationDuration: '15s', animationDelay: '5s', animationDirection: 'reverse' }} />

      <div className="w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-xl font-chinese text-gold-500 mb-2">核心原則</h2>
          <h3 className="text-4xl font-serif text-stone-100 mb-4">Core Principles</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-jade-500 to-transparent mx-auto"></div>
          <p className="mt-6 text-lg text-stone-300 max-w-2xl mx-auto">
            These foundational principles guide our approach to practice and teaching, 
            creating a balanced path for transformation.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="bg-stone-800/30 rounded-xl p-8 border border-gold-500/10 
                       hover:border-gold-500/30 transition-all duration-500 group
                       animate-fadeIn shadow-lg shadow-stone-950/50 hover:shadow-xl hover:shadow-stone-950/70"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Title */}
              <div className="mb-6">
                <h3 className="font-chinese text-2xl text-gold-500 mb-1 group-hover:text-gradient-gold transition-all duration-300">
                  {principle.chinese}
                </h3>
                <div className="flex justify-between items-baseline">
                  <h4 className="text-xl font-serif text-stone-100 group-hover:text-gold-400 transition-colors">
                    {principle.title}
                  </h4>
                  <span className="text-stone-500 text-sm italic">{principle.pinyin}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-stone-300 mb-6 leading-relaxed">
                {principle.description}
              </p>

              {/* Quote */}
              <div className="bg-stone-800/50 rounded-lg p-4 transform group-hover:scale-105 transition-all duration-300">
                <p className="font-chinese text-lg text-gold-400 mb-1 group-hover:text-glow transition-all duration-300">
                  {principle.quote}
                </p>
                <p className="text-stone-400 text-sm italic">
                  {principle.quoteTranslation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="mt-16 text-center animate-fadeIn" style={{ animationDelay: '0.8s' }}>
          <a 
            href="/theory" 
            className="inline-flex items-center gap-2 border border-jade-500/30 text-stone-100 
                     hover:bg-jade-500/10 px-6 py-3 rounded-lg transition-all duration-300
                     hover:border-jade-500/50"
          >
            <span>Explore Daoist Philosophy</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CorePrinciples;