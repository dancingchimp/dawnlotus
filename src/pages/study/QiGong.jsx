// src/pages/study/QiGong.jsx
import React from 'react';

const QiGong = () => {
  const practices = [
    {
      name: "Zhan Zhuang",
      chinese: "站樁",
      description: "Standing meditation to develop root and energy awareness",
      benefits: ["Grounding", "Energy sensitivity", "Structural alignment"],
      level: "Foundation"
    },
    {
      name: "Ba Duan Jin",
      chinese: "八段錦",
      description: "Eight Pieces of Brocade for overall health",
      benefits: ["Joint mobility", "Energy circulation", "Organ health"],
      level: "Foundation"
    },
    {
      name: "Yi Jin Jing",
      chinese: "易筋經",
      description: "Muscle/Tendon Changing Classic for strength and flexibility",
      benefits: ["Tendon strength", "Deep stretching", "Power development"],
      level: "Intermediate"
    },
    {
      name: "Wu Qin Xi",
      chinese: "五禽戲",
      description: "Five Animals Play for health and vitality",
      benefits: ["Natural movement", "Organ energetics", "Emotional balance"],
      level: "Intermediate"
    },
    {
      name: "Xiao Zhou Tian",
      chinese: "小周天",
      description: "Small Heavenly Circuit for energy circulation",
      benefits: ["Energy pathways", "Internal balance", "Healing potential"],
      level: "Advanced"
    },
    {
      name: "Da Zhou Tian",
      chinese: "大周天",
      description: "Grand Circulation for complete energy system cultivation",
      benefits: ["Full body integration", "Spiritual development", "Deep healing"],
      level: "Advanced"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-texture opacity-5" />
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-jade-500/10 rounded-full blur-3xl animate-flow opacity-40" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-flow opacity-40" 
             style={{ animationDelay: '2s' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-chinese text-gold-500 mb-2">氣功</h2>
            <h1 className="text-5xl md:text-6xl font-serif text-stone-100 mb-6">QiGong</h1>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              The art and science of energy cultivation through specific movements, 
              breathing techniques, and mental focus to build and direct vital energy.
            </p>
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10 hover:border-jade-500/30 transition-all">
              <h3 className="text-2xl font-serif text-gold-500 mb-4">The Essence of QiGong</h3>
              <p className="text-stone-300 mb-6">
                QiGong (氣功) translates as "energy work" or "the skill of working with Qi." It comprises 
                a diverse set of practices developed over thousands of years in China for health maintenance, 
                healing, martial power, and spiritual cultivation.
              </p>
              <p className="text-stone-300">
                Through specific movements, breathing techniques, and mental focus, QiGong practitioners 
                learn to sense, build, and direct vital energy within and beyond the physical body.
              </p>
            </div>
            
            <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10 hover:border-jade-500/30 transition-all">
              <h3 className="text-2xl font-serif text-gold-500 mb-4">A Path of Transformation</h3>
              <p className="text-stone-300 mb-6">
                While the immediate benefits of QiGong include improved health, flexibility, and stress reduction, 
                the deeper purpose is energetic transformation—creating a strong, balanced energy body that 
                supports higher awareness and spiritual development.
              </p>
              <p className="text-stone-300">
                Our approach to QiGong preserves the depth and authenticity of traditional practices while 
                making them accessible and relevant to contemporary practitioners.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Three Treasures Section */}
      <section className="py-16 px-4 bg-stone-800 relative">
        <div className="absolute inset-0 bg-gradient-texture opacity-5" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-chinese text-gold-500 mb-2">三寶</h2>
            <h3 className="text-4xl font-serif text-stone-100 mb-6">The Three Treasures</h3>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              QiGong works with the three fundamental energies of life cultivation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Jing */}
            <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10 
                         hover:border-jade-500/30 transition-all duration-300 group">
              <div className="mb-6">
                <h4 className="text-xl font-serif text-gold-500 mb-2">Jing</h4>
                <p className="text-stone-400 font-chinese">精</p>
              </div>
              <p className="text-stone-300 mb-6">
                The essence or foundational energy that is stored in the kidneys and reproductive system. 
                It represents our constitutional strength and is the densest form of energy in the body.
              </p>
              <div className="bg-stone-900/30 p-4 rounded-lg">
                <p className="text-jade-400 text-sm italic">
                  "Preserving Jing is the foundation of longevity and provides the material
                  basis for higher energy transformation."
                </p>
              </div>
            </div>
            
            {/* Qi */}
            <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10 
                         hover:border-jade-500/30 transition-all duration-300 group">
              <div className="mb-6">
                <h4 className="text-xl font-serif text-gold-500 mb-2">Qi</h4>
                <p className="text-stone-400 font-chinese">氣</p>
              </div>
              <p className="text-stone-300 mb-6">
                The vital energy that flows through the meridian system and energizes all physiological functions. 
                It is the active, dynamic energy that we work with most directly in QiGong practice.
              </p>
              <div className="bg-stone-900/30 p-4 rounded-lg">
                <p className="text-jade-400 text-sm italic">
                  "When Qi flows smoothly, there is health and vitality. When Qi is blocked or deficient, 
                  illness arises."
                </p>
              </div>
            </div>
            
            {/* Shen */}
            <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10 
                         hover:border-jade-500/30 transition-all duration-300 group">
              <div className="mb-6">
                <h4 className="text-xl font-serif text-gold-500 mb-2">Shen</h4>
                <p className="text-stone-400 font-chinese">神</p>
              </div>
              <p className="text-stone-300 mb-6">
                The spiritual energy of consciousness, awareness, and higher mind. It is the most refined 
                form of energy and is associated with spiritual development and enlightenment.
              </p>
              <div className="bg-stone-900/30 p-4 rounded-lg">
                <p className="text-jade-400 text-sm italic">
                  "Cultivating Shen leads to clarity, wisdom, and ultimately, a return to the Dao—the 
                  ultimate purpose of all energy cultivation."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* QiGong Practices Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-texture opacity-5" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-chinese text-gold-500 mb-2">修練方法</h2>
            <h3 className="text-4xl font-serif text-stone-100 mb-6">QiGong Practices</h3>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Our curriculum includes a variety of traditional QiGong methods, each with specific purposes 
              and benefits.
            </p>
          </div>
          
          {/* Practices Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practices.map((practice, index) => (
              <div 
                key={index}
                className="bg-stone-800/30 p-6 rounded-xl border border-jade-500/10 hover:border-jade-500/30 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-serif text-gold-500 mb-1">{practice.name}</h4>
                    <p className="text-stone-400 font-chinese">{practice.chinese}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs 
                                 ${practice.level === 'Foundation' ? 'bg-jade-500/10 text-jade-400' : 
                                   practice.level === 'Intermediate' ? 'bg-gold-500/10 text-gold-400' : 
                                   'bg-stone-700/50 text-stone-300'}`}>
                    {practice.level}
                  </span>
                </div>
                <p className="text-stone-300 mb-4">{practice.description}</p>
                <div className="flex flex-wrap gap-2">
                  {practice.benefits.map((benefit, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-stone-800/50 text-stone-400 px-2 py-1 rounded-full"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Begin Practice Button */}
          <div className="mt-12 text-center">
            <a 
              href="/practice" 
              className="inline-flex items-center gap-2 bg-jade-500 hover:bg-jade-600 text-stone-100 
                       px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 
                       shadow-lg shadow-jade-900/20 hover:shadow-lg hover:shadow-jade-900/30 
                       hover:-translate-y-1"
            >
              Begin Your QiGong Journey
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QiGong;