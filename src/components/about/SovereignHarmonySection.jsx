// src/components/about/SovereignHarmonySection.jsx
// Enhanced founder section highlighting the Sovereign Harmony role

import React from 'react';

function SovereignHarmonySection() {
  return (
    <div className="bg-stone-800/30 rounded-xl p-8 border border-jade-400 mb-16">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64">
            {/* Enhanced Sovereign Harmony symbol with special effects */}
            <div className="absolute inset-0 bg-gradient-radial from-gold-500/20 to-transparent opacity-70 rounded-full animate-pulse-slow" />
            <div className="absolute inset-5 bg-gradient-radial from-jade-500/30 to-transparent opacity-60 rounded-full animate-float" 
                 style={{ animationDelay: '1s' }} />
            
            <svg className="w-full h-full text-jade-400 relative" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50,2 A48,48 0 0,1 50,98 A24,24 0 0,1 50,50 A24,24 0 0,0 50,2" fill="currentColor" />
              <circle cx="50" cy="26" r="6" fill="#DAA520" />
              <circle cx="50" cy="74" r="6" fill="currentColor" />
              
              {/* Special gold ring symbolizing the Sovereign Harmony */}
              <circle cx="50" cy="50" r="15" fill="none" stroke="#DAA520" strokeWidth="1.5" strokeDasharray="3,2" className="animate-spin-slow" 
                      style={{ transformOrigin: 'center', animationDuration: '30s' }}/>
              <circle cx="50" cy="50" r="30" fill="none" stroke="#DAA520" strokeWidth="0.5" strokeDasharray="1,3" className="animate-spin-slow" 
                      style={{ transformOrigin: 'center', animationDuration: '60s', animationDirection: 'reverse' }}/>
            </svg>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-2xl font-serif text-gold-400">The Sovereign Harmony</h3>
            <div className="h-px flex-grow bg-gradient-to-r from-jade-400/50 to-transparent"></div>
          </div>
          
          <div className="space-y-4 text-stone-200">
            <p>
              The Harmony Gate approach emerged from a vision to bridge ancient Daoist wisdom with contemporary 
              practice methods, creating a path that honors tradition while speaking to modern practitioners.
            </p>
            <p>
              As the Sovereign Harmony, my role is not to place myself at the center of the teaching, 
              but rather to maintain the integrity of transmission while allowing the practices to 
              speak directly to each individual's experience. This approach reflects the Daoist principle 
              that <em>the true teacher is the practice itself</em>.
            </p>
            <p>
              This is why you will find no personal teacher prominently featured in our instruction.
              Instead, we use carefully designed AI guidance to present the teachings with clarity and precision,
              free from the distractions of personality or ego that so often arise in traditional teacher-student dynamics.
            </p>
            <p>
              The practices and principles shared through Harmony Gate are drawn from authentic lineage teachings 
              that have been carefully adapted to create an accessible yet profound path of transformation. 
              My commitment as Sovereign Harmony is to preserve the essence of these teachings while ensuring they 
              remain relevant and applicable in our rapidly changing world.
            </p>
          </div>
          
          <div className="mt-6 border-t border-jade-400/20 pt-6">
            <p className="text-stone-300 italic text-center">
              "The gate of harmony opens not through the effort of the gatekeeper, 
              but through the resonance between the seeker and the way itself."
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <button 
              onClick={() => window.location.href = '/sovereign-harmony-teachings'}
              className="bg-jade-700 hover:bg-jade-600 text-stone-100 px-6 py-3 
                       rounded-lg transition-all duration-300 shadow-md shadow-black/20"
            >
              Explore Sovereign Harmony Teachings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SovereignHarmonySection;