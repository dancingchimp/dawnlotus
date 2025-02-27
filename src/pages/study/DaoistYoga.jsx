// src/pages/study/DaoistYoga.jsx
import React from 'react';

const DaoistYoga = () => {
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
            <h2 className="text-2xl font-chinese text-gold-500 mb-2">道瑜伽</h2>
            <h1 className="text-5xl md:text-6xl font-serif text-stone-100 mb-6">Daoist Yoga</h1>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              An integrated system of physical postures, energy cultivation, and spiritual refinement
              that bridges Western yoga practices with Eastern energy principles.
            </p>
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10 hover:border-jade-500/30 transition-all">
              <h3 className="text-2xl font-serif text-gold-500 mb-4">The Integration Approach</h3>
              <p className="text-stone-300 mb-6">
                Daoist Yoga represents a revolutionary integration of traditional Chinese energy arts with 
                accessible physical postures. At its core is the understanding that physical forms serve 
                as gateways to energy cultivation.
              </p>
              <p className="text-stone-300">
                Unlike conventional yoga systems that focus primarily on flexibility or physical fitness, 
                Daoist Yoga emphasizes the subtle energy work that happens within and through the 
                physical forms.
              </p>
            </div>
            
            <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10 hover:border-jade-500/30 transition-all">
              <h3 className="text-2xl font-serif text-gold-500 mb-4">A Complete System</h3>
              <p className="text-stone-300 mb-6">
                Our approach recognizes that body, breath, and mind must work in harmony to create the 
                conditions for transformation on all levels—physical, energetic, and spiritual.
              </p>
              <p className="text-stone-300">
                Through systematic practice, Daoist Yoga creates a pathway for genuine transformation 
                that incorporates the best of both Eastern and Western traditions, without 
                compromising the essence of either.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* The Three Pillars Section */}
      <section className="py-16 px-4 bg-stone-800 relative">
        <div className="absolute inset-0 bg-gradient-texture opacity-5" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-chinese text-gold-500 mb-2">三支柱</h2>
            <h3 className="text-4xl font-serif text-stone-100 mb-6">The Three Pillars</h3>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Our approach to Daoist Yoga is built upon three essential pillars that create a complete 
              system for transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1: Physical Foundation */}
            <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10 
                         hover:border-jade-500/30 transition-all duration-300 group">
              <div className="mb-6">
                <h4 className="text-xl font-serif text-gold-500 mb-2">Channel Opening</h4>
                <p className="text-stone-400 font-chinese">經絡開通</p>
              </div>
              <p className="text-stone-300 mb-6">
                Western yoga postures are strategically sequenced to open specific meridian pathways, 
                preparing the body's energy channels while building strength and flexibility.
              </p>
              <div className="bg-stone-900/30 p-4 rounded-lg">
                <p className="text-jade-400 text-sm italic">
                  "The physical body is the vessel for energy cultivation. 
                  Without properly opened channels, deeper practices cannot take root."
                </p>
              </div>
            </div>
            
            {/* Pillar 2: Energy Cultivation */}
            <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10 
                         hover:border-jade-500/30 transition-all duration-300 group">
              <div className="mb-6">
                <h4 className="text-xl font-serif text-gold-500 mb-2">Energy Cultivation</h4>
                <p className="text-stone-400 font-chinese">能量培養</p>
              </div>
              <p className="text-stone-300 mb-6">
                Once physical pathways are opened, breath and awareness techniques are integrated to
                build, direct, and refine energy through the body's energy fields and meridian system.
              </p>
              <div className="bg-stone-900/30 p-4 rounded-lg">
                <p className="text-jade-400 text-sm italic">
                  "Qi follows intention. When the channels are open and the mind is focused,
                  energy naturally flows and accumulates in the three fields."
                </p>
              </div>
            </div>
            
            {/* Pillar 3: Spiritual Development */}
            <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10 
                         hover:border-jade-500/30 transition-all duration-300 group">
              <div className="mb-6">
                <h4 className="text-xl font-serif text-gold-500 mb-2">Spiritual Refinement</h4>
                <p className="text-stone-400 font-chinese">精神提升</p>
              </div>
              <p className="text-stone-300 mb-6">
                Through consistent practice, energy is refined into increasingly subtle forms,
                leading to heightened awareness, emotional balance, and spiritual insight.
              </p>
              <div className="bg-stone-900/30 p-4 rounded-lg">
                <p className="text-jade-400 text-sm italic">
                  "The ultimate goal is not merely health or longevity, but the transformation
                  of consciousness and connection to the Dao."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Practice Levels Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-texture opacity-5" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-chinese text-gold-500 mb-2">實踐階段</h2>
            <h3 className="text-4xl font-serif text-stone-100 mb-6">Practice Levels</h3>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Our Daoist Yoga curriculum is structured in progressive levels, each building upon the previous 
              to create a complete foundation.
            </p>
          </div>
          
          {/* Level cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Level 1 */}
            <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10 hover:border-jade-500/30 transition-all">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-xl font-serif text-gold-500">Level 1</h4>
                  <p className="text-stone-400">Foundation</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-jade-500/10 flex items-center justify-center text-jade-500 text-xl">
                  1
                </div>
              </div>
              <h5 className="text-lg text-stone-200 mb-3">Western Yoga Bridge</h5>
              <p className="text-stone-300 mb-6">
                Establishing physical awareness through familiar poses while introducing basic energy concepts.
              </p>
              <ul className="space-y-2 text-stone-400">
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <span>Standing poses for root and stability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <span>Floor sequences for spinal flexibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <span>Balance poses for focus and integration</span>
                </li>
              </ul>
            </div>
            
            {/* Level 2 */}
            <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10 hover:border-jade-500/30 transition-all">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-xl font-serif text-gold-500">Level 2</h4>
                  <p className="text-stone-400">Integration</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-jade-500/10 flex items-center justify-center text-jade-500 text-xl">
                  2
                </div>
              </div>
              <h5 className="text-lg text-stone-200 mb-3">Energy Principles</h5>
              <p className="text-stone-300 mb-6">
                Incorporating Daoist energy concepts into the physical practice for deeper awareness.
              </p>
              <ul className="space-y-2 text-stone-400">
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <span>Daoist breathing techniques in poses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <span>Opening major energy gates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <span>Flowing sequences with breath focus</span>
                </li>
              </ul>
            </div>
            
            {/* Level 3 */}
            <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10 hover:border-jade-500/30 transition-all">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-xl font-serif text-gold-500">Level 3</h4>
                  <p className="text-stone-400">Transformation</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-jade-500/10 flex items-center justify-center text-jade-500 text-xl">
                  3
                </div>
              </div>
              <h5 className="text-lg text-stone-200 mb-3">Daoist Principles</h5>
              <p className="text-stone-300 mb-6">
                Deep integration of Daoist philosophy and advanced energy practices within the movement system.
              </p>
              <ul className="space-y-2 text-stone-400">
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <span>Advanced energy cultivation techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <span>Working with meridian channels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <span>Integrating stillness within movement</span>
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
              Begin Your Practice
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

export default DaoistYoga;