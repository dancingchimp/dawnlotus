// src/pages/study/TaijiGong.jsx
import React from 'react';

const TaijiGong = () => {
  const principles = [
    {
      name: "Yin-Yang Balance",
      chinese: "陰陽平衡",
      description: "The harmonious interplay of opposing yet complementary forces in movement and stillness."
    },
    {
      name: "Spiral Force",
      chinese: "螺旋力",
      description: "Energy moving in spiral patterns through the body, creating internal strength without tension."
    },
    {
      name: "Central Equilibrium",
      chinese: "中定",
      description: "Maintaining perfect balance around the body's central axis throughout all movements."
    },
    {
      name: "Silk Reeling",
      chinese: "纏絲",
      description: "The spiraling connection between all parts of the body, like unwinding silk from a cocoon."
    },
    {
      name: "Song",
      chinese: "鬆",
      description: "Deep relaxation that allows energy to flow freely while maintaining structure."
    },
    {
      name: "Intent Leading Energy",
      chinese: "意領氣",
      description: "Using mind intention to guide energy movement rather than muscular force."
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
            <h2 className="text-2xl font-chinese text-gold-500 mb-2">太極功</h2>
            <h1 className="text-5xl md:text-6xl font-serif text-stone-100 mb-6">TaijiGong</h1>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              The flowing meditation of Taiji, harmonizing yin and yang through 
              continuous, circular movements that cultivate internal power and balance.
            </p>
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10 hover:border-jade-500/30 transition-all">
              <h3 className="text-2xl font-serif text-gold-500 mb-4">The Art of TaijiGong</h3>
              <p className="text-stone-300 mb-6">
                TaijiGong (太極功) represents the energy cultivation aspect of Taiji practice, focusing on the development 
                of internal strength, energy awareness, and balanced movement. While often known in the West as 
                "Tai Chi," our approach emphasizes the original energy cultivation purpose of this profound art.
              </p>
              <p className="text-stone-300">
                Through slow, deliberate movements and precise body alignments, TaijiGong teaches practitioners 
                to move from their energetic center, developing a deep mind-body connection that transforms 
                both physical structure and energetic capacity.
              </p>
            </div>
            
            <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10 hover:border-jade-500/30 transition-all">
              <h3 className="text-2xl font-serif text-gold-500 mb-4">Beyond Physical Movement</h3>
              <p className="text-stone-300 mb-6">
                While the flowing sequences of TaijiGong offer immediate benefits of improved balance, flexibility, 
                and stress reduction, the deeper purpose is to develop the ability to sense, circulate, and express 
                energy through the body's natural spiral patterns.
              </p>
              <p className="text-stone-300">
                Our approach preserves the meditation aspect of Taiji, teaching practitioners to maintain a 
                tranquil mind while in continuous motion—a skill that transfers powerfully to daily life.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Principles Section */}
      <section className="py-16 px-4 bg-stone-800 relative">
        <div className="absolute inset-0 bg-gradient-texture opacity-5" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-chinese text-gold-500 mb-2">核心原則</h2>
            <h3 className="text-4xl font-serif text-stone-100 mb-6">Core Principles</h3>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              These foundational principles guide all TaijiGong practice, creating the internal structure 
              that allows energy to flow and develop.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className="bg-stone-800/30 p-8 rounded-xl border border-gold-500/10 
                         hover:border-gold-500/30 transition-all duration-300 group"
              >
                <div className="mb-6">
                  <h4 className="text-xl font-serif text-gold-500 mb-2">{principle.name}</h4>
                  <p className="text-stone-400 font-chinese">{principle.chinese}</p>
                </div>
                <p className="text-stone-300 group-hover:text-stone-200 transition-colors">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Forms and Practice Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-texture opacity-5" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-chinese text-gold-500 mb-2">太極形式</h2>
            <h3 className="text-4xl font-serif text-stone-100 mb-6">TaijiGong Practice</h3>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Our TaijiGong curriculum includes traditional forms, qigong exercises, and partner 
              work, all designed to develop internal power and energetic awareness.
            </p>
          </div>
          
          {/* Practice Categories */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Solo Forms */}
            <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10 hover:border-jade-500/30 transition-all">
              <h4 className="text-xl font-serif text-gold-500 mb-4">Solo Forms</h4>
              <p className="text-stone-300 mb-6">
                Choreographed sequences that teach the fundamental movements, alignments, and 
                energy patterns of TaijiGong.
              </p>
              <ul className="space-y-3 text-stone-400">
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <div>
                    <span className="text-stone-300">Short Form</span>
                    <p className="text-sm">Essential movements for beginners</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <div>
                    <span className="text-stone-300">Long Form</span>
                    <p className="text-sm">Extended sequence for deeper practice</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <div>
                    <span className="text-stone-300">Spiral Form</span>
                    <p className="text-sm">Advanced practice with explicit spiral energy</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Qigong Elements */}
            <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10 hover:border-jade-500/30 transition-all">
              <h4 className="text-xl font-serif text-gold-500 mb-4">Qigong Elements</h4>
              <p className="text-stone-300 mb-6">
                Specific exercises that isolate and develop the internal components of TaijiGong movement.
              </p>
              <ul className="space-y-3 text-stone-400">
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <div>
                    <span className="text-stone-300">Silk Reeling Exercises</span>
                    <p className="text-sm">Developing spiral connection throughout the body</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <div>
                    <span className="text-stone-300">Standing Practice</span>
                    <p className="text-sm">Building internal structure and energy awareness</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <div>
                    <span className="text-stone-300">Circular Walking</span>
                    <p className="text-sm">Cultivating continuous spiral force</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Partner Work */}
            <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10 hover:border-jade-500/30 transition-all">
              <h4 className="text-xl font-serif text-gold-500 mb-4">Partner Work</h4>
              <p className="text-stone-300 mb-6">
                Interactive exercises that develop sensitivity, responsiveness, and practical 
                application of TaijiGong principles.
              </p>
              <ul className="space-y-3 text-stone-400">
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <div>
                    <span className="text-stone-300">Sensing Hands</span>
                    <p className="text-sm">Developing tactile sensitivity and responsiveness</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <div>
                    <span className="text-stone-300">Push Hands</span>
                    <p className="text-sm">Interactive practice of yielding and neutralizing</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <div>
                    <span className="text-stone-300">Applications</span>
                    <p className="text-sm">Functional expression of form movements</p>
                  </div>
                </li>
              </ul>
            </div>
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
              Begin TaijiGong Practice
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

export default TaijiGong;