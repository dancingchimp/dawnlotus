// src/components/sections/FounderSection.jsx
import React from 'react';

const FounderSection = () => {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 xl:px-24 bg-stone-800 relative overflow-hidden">
      {/* Background texture and decorative elements */}
      <div className="absolute inset-0 bg-gradient-texture opacity-5" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-jade-500/5 rounded-full blur-3xl animate-flow opacity-40" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl animate-flow opacity-40" 
           style={{ animationDelay: '2s', animationDirection: 'reverse' }} />

      <div className="w-full relative z-10">
        <div className="bg-stone-900/50 backdrop-blur-md rounded-xl overflow-hidden border border-jade-500/10 
                      shadow-xl transition-all duration-500 hover:border-jade-500/20 hover:shadow-jade-900/20">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left column - Advanced Taiji symbol */}
            <div className="relative flex items-center justify-center p-8 bg-gradient-to-br from-stone-800/70 to-stone-900/70
                          border-r border-jade-500/10 overflow-hidden">
              {/* Background energy field */}
              <div className="absolute inset-0 bg-gradient-radial from-jade-500/5 to-transparent opacity-70" />
              
              <div className="relative taiji-container">
                {/* Animated energy circles */}
                <div className="absolute w-full h-full rounded-full border border-jade-500/10 animate-pulse-slow" 
                     style={{ animationDuration: '4s' }} />
                <div className="absolute w-5/6 h-5/6 top-[8.33%] left-[8.33%] rounded-full border border-gold-500/10 animate-pulse-slow" 
                     style={{ animationDuration: '6s' }} />
                <div className="absolute w-2/3 h-2/3 top-1/6 left-1/6 rounded-full border border-jade-500/10 animate-pulse-slow" 
                     style={{ animationDuration: '8s' }} />
                
                {/* Main Taiji symbol */}
                <svg viewBox="0 0 100 100" className="taiji-symbol relative z-10">
                  {/* Base circle */}
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  
                  {/* Yin-yang path with transparency */}
                  <path d="M50,2 A48,48 0 0,1 50,98 A24,24 0 0,1 50,50 A24,24 0 0,0 50,2" 
                        fill="currentColor" fillOpacity="0.15" />
                  
                  {/* Dots */}
                  <circle cx="50" cy="26" r="6" fill="#DAA520" fillOpacity="0.7" />
                  <circle cx="50" cy="74" r="6" fill="currentColor" fillOpacity="0.7" />

                  {/* Energy circulation paths */}
                  <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="0.7" 
                          strokeDasharray="2,4" className="animate-spin-slow" 
                          style={{ animationDuration: '60s' }} />
                  <circle cx="50" cy="50" r="24" fill="none" stroke="#DAA520" strokeWidth="0.7" 
                          strokeDasharray="2,4" className="animate-spin-slow" 
                          style={{ animationDuration: '40s', animationDirection: 'reverse' }} />
                  
                  {/* Spiritual center */}
                  <circle cx="50" cy="50" r="3" fill="#DAA520" fillOpacity="0.5" className="animate-pulse" />
                </svg>
              </div>
            </div>

            {/* Right column - Sovereign Harmony content */}
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <div className="animate-fadeIn">
                <h2 className="text-xl font-chinese text-gold-500 mb-1">主權和諧</h2>
                <h3 className="text-3xl font-serif text-stone-100 mb-6 title-shadow">Sovereign Harmony</h3>
                <div className="space-y-4 text-stone-300">
                  <p>
                    As the Sovereign Harmony, my role is not to place myself at the center of the teaching, but rather to
                    maintain the integrity of transmission while allowing the practices to speak directly to each individual's
                    experience. This approach reflects the Daoist principle that <span className="italic text-jade-400">the true teacher is the practice itself</span>.
                  </p>
                  <p>
                    This is why you will find no personal teacher prominently featured in our instruction. Instead, we use
                    carefully designed guidance to present the teachings with clarity and precision, free from the
                    distractions of personality or ego that so often arise in traditional teacher-student dynamics.
                  </p>
                  <p>
                    The practices and principles shared through Harmony Gate are drawn from authentic lineage teachings
                    that have been carefully adapted to create an accessible yet profound path of transformation. My
                    commitment as Sovereign Harmony is to preserve the essence of these teachings while ensuring they
                    remain relevant and applicable in our rapidly changing world.
                  </p>
                </div>
              </div>

              <blockquote className="mt-8 border-l-4 border-gold-500/30 pl-4 py-1 text-stone-400 italic bg-gold-500/5 
                                   rounded-r-lg animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                "The gate of harmony opens not through the effort of the gatekeeper, but through the resonance
                between the seeker and the way itself."
              </blockquote>
              
              <div className="mt-8 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
                <a 
                  href="/study/wisdom"
                  className="inline-flex items-center gap-2 bg-jade-500 hover:bg-jade-600 text-stone-100 
                           px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1
                           shadow-md shadow-jade-900/20 hover:shadow-lg hover:shadow-jade-900/30 btn-effect"
                >
                  Explore Sovereign Harmony Teachings
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;