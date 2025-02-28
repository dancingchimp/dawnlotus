// src/components/sections/PracticePaths.jsx
import React from 'react';

const PracticePaths = () => {
  const practices = [
    {
      title: "Daoist Yoga",
      chinese: "道瑜伽",
      pinyin: "Dào Yújiā",
      description: "Integration of traditional Daoist energy principles with physical postures for complete transformation of the physical and energetic body.",
      iconPath: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      bgClass: "from-jade-500/10 to-jade-500/5",
      path: "/study/daoist-yoga"
    },
    {
      title: "QiGong",
      chinese: "氣功",
      pinyin: "Qì Gōng",
      description: "Systematic energy cultivation that develops the skill of working with Qi until complete mastery.",
      iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
      bgClass: "from-gold-500/10 to-gold-500/5", 
      path: "/study/qigong"
    },
    {
      title: "TaijiGong",
      chinese: "太極功",
      pinyin: "Tàijí Gōng",
      description: "Flowing meditative movement practice that embodies the harmony of yin and yang through spiral patterns and energy circulation.",
      iconPath: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14",
      bgClass: "from-jade-500/10 to-gold-500/5",
      path: "/study/taijigong"
    },
    {
      title: "Meditation",
      chinese: "靜坐",
      pinyin: "Jìng Zuò",
      description: "Still awareness practices for developing presence, clarity, and energy refinement through various meditation techniques.",
      iconPath: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
      bgClass: "from-gold-500/10 to-jade-500/5",
      path: "/study/meditation"
    }
  ];

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 xl:px-24 bg-stone-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-texture opacity-5" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-px h-40 bg-gradient-to-b from-transparent via-jade-500/30 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-px h-40 bg-gradient-to-t from-transparent via-gold-500/30 to-transparent" />
      
      <div className="w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-xl font-chinese text-gold-500 mb-2">修練之道</h2>
          <h3 className="text-4xl font-serif text-stone-100 mb-4">Practice Paths</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
          <p className="mt-6 text-lg text-stone-300 max-w-2xl mx-auto">
            Explore our diverse offerings, each providing a unique gateway to Daoist wisdom 
            and energy cultivation.
          </p>
        </div>

        {/* Practices Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {practices.map((practice, index) => (
            <a 
              key={index}
              href={practice.path}
              className="bg-stone-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-jade-500/10 
                       hover:border-jade-500/30 transition-all duration-300 group animate-fadeIn
                       shadow-md hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-6 md:p-8 practice-path-card">
                {/* Header with icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="text-xl font-serif text-gold-500 group-hover:text-gold-400 transition-colors">
                        {practice.title}
                      </h3>
                      <span className="text-stone-500 text-xs">{practice.pinyin}</span>
                    </div>
                    <p className="text-2xl font-chinese text-stone-400 group-hover:text-jade-400 transition-colors">
                      {practice.chinese}
                    </p>
                  </div>
                  <div className={`p-3 rounded-full bg-gradient-to-br ${practice.bgClass} 
                                  text-jade-500 group-hover:text-jade-400 group-hover:scale-110 
                                  transition-all duration-300 shadow-inner`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={practice.iconPath} />
                    </svg>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-stone-300 group-hover:text-stone-200 transition-colors">
                  {practice.description}
                </p>
                
                {/* Explore button */}
                <div className="mt-6 pt-4 border-t border-stone-700/30 flex justify-end">
                  <span className="inline-flex items-center gap-1 text-jade-500 text-sm font-medium group-hover:text-jade-400 transition-colors">
                    Explore Practice
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Begin Journey Button */}
        <div className="mt-16 text-center animate-fadeIn" style={{ animationDelay: '0.8s' }}>
          <a 
            href="/practice" 
            className="inline-flex items-center gap-2 bg-jade-500 hover:bg-jade-600 text-stone-100 
                     px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 
                     shadow-lg shadow-jade-900/20 hover:shadow-lg hover:shadow-jade-900/30 
                     hover:-translate-y-1"
          >
            Begin Your Practice Journey
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PracticePaths;