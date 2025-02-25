// src/components/about/FounderSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function FounderSection() {
  return (
    <div className="bg-stone-800/30 rounded-xl p-8 border border-jade-500/10 mb-16">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-48 h-48">
            {/* Abstract founder representation - Taiji symbol with special coloring */}
            <div className="absolute inset-0 bg-gradient-radial from-gold-500/20 to-transparent opacity-70 rounded-full" />
            <svg className="w-full h-full text-jade-500 relative" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50,2 A48,48 0 0,1 50,98 A24,24 0 0,1 50,50 A24,24 0 0,0 50,2" fill="currentColor" />
              <circle cx="50" cy="26" r="6" fill="#DAA520" />
              <circle cx="50" cy="74" r="6" fill="currentColor" />
              
              {/* Special glow to indicate the Sovereign Harmony role */}
              <circle cx="50" cy="50" r="10" fill="none" stroke="#DAA520" strokeWidth="1" className="animate-pulse-slow" />
            </svg>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-xl font-serif text-gold-500">From the Sovereign Harmony</h3>
            <div className="h-px flex-grow bg-gradient-to-r from-jade-500/30 to-transparent"></div>
          </div>
          
          <div className="space-y-4 text-stone-300">
            <p>
              Harmony Gate emerged from a vision to bridge ancient Daoist wisdom with contemporary practice methods, 
              creating a path that honors tradition while speaking to modern practitioners.
            </p>
            <p>
              As the Sovereign Harmony, my role is not to place myself at the center of the teaching, 
              but rather to maintain the integrity of transmission while allowing the practices to 
              speak directly to each individual's experience. This approach reflects the Daoist principle 
              that the true teacher is the practice itself.
            </p>
            <p>
              The practices and principles shared through Harmony Gate are drawn from authentic lineage teachings 
              that have been carefully adapted to create an accessible yet profound path of transformation. 
              My continuing commitment is to preserve the essence of these teachings while ensuring they 
              remain relevant and applicable in our rapidly changing world.
            </p>
          </div>
          
          <div className="mt-6 border-t border-jade-500/10 pt-6">
            <p className="text-stone-400 italic">
              "The gate of harmony opens not through the effort of the gatekeeper, 
              but through the resonance between the seeker and the way itself."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FounderSection;