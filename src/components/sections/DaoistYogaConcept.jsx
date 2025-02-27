// src/components/sections/DaoistYogaConcept.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function DaoistYogaConcept() {
  return (
    <section className="py-24 bg-stone-800 relative">
      <div className="absolute inset-0 bg-gradient-texture opacity-5" />
      
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-jade-500/5 rounded-full blur-3xl animate-float opacity-40 z-0" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl animate-float opacity-40 z-0" 
           style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="font-chinese text-3xl text-gold-500 mb-4">道瑜伽</h2>
          <h3 className="text-4xl font-serif text-stone-100 mb-6">The Daoist Yoga Approach</h3>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            A revolutionary integration of Western yoga postures with traditional Daoist energy principles,
            creating a complete system for physical opening, energy cultivation, and spiritual transformation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {/* Physical Foundation */}
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
          
          {/* Energy Cultivation */}
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
          
          {/* Spiritual Development */}
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
        
        <div className="mt-16 text-center">
          <Link 
            to="/practice"
            className="inline-flex items-center gap-2 bg-jade-500 hover:bg-jade-600 text-stone-100 
                     px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
          >
            <span>Explore Daoist Yoga Practices</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DaoistYogaConcept;