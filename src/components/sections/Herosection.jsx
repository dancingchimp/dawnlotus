// src/components/sections/Herosection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-stone-900 pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-jade-500/10 rounded-full blur-3xl animate-flow opacity-60" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-flow opacity-60" 
             style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full 
                       bg-gradient-radial from-jade-500/5 to-transparent opacity-30" />
                       
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-gradient-texture opacity-10" />
      </div>

      <div className="relative px-6 sm:px-10 lg:px-16 xl:px-24 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="text-center lg:text-left max-w-xl lg:max-w-none mx-auto">
            {/* Chinese Title with subtle animation */}
            <div className="mb-6 font-chinese animate-fadeIn">
              <h2 className="text-4xl md:text-5xl text-gold-500 tracking-wide text-glow">和門</h2>
              <p className="text-stone-400 mt-1">Hé Mén</p>
            </div>
            
            {/* English Title with gradient effect */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6 
                         text-transparent bg-clip-text bg-gradient-to-r from-stone-100 via-stone-50 to-stone-100
                         animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Harmony Gate
            </h1>

            <p className="mt-8 text-xl lg:text-2xl xl:text-3xl text-stone-300 leading-relaxed font-serif
                        animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              Where ancient Daoist wisdom merges with modern yoga practice, creating a unified path 
              to physical vitality, energy mastery, and spiritual awakening.
            </p>

            {/* Call to Action Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start
                          animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <a 
                href="/practice"
                className="bg-jade-500 hover:bg-jade-600 text-stone-100 px-8 py-4 
                         rounded-xl text-lg font-medium transition-all duration-300 
                         hover:-translate-y-1 flex items-center justify-center gap-2
                         shadow-lg shadow-jade-900/20 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-jade-600/0 via-stone-100/20 to-jade-600/0 
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                Begin Your Practice
              </a>
              
              <a 
                href="/about"
                className="border border-gold-500/30 text-stone-100 px-8 py-4 
                         rounded-xl text-lg font-medium transition-all duration-300
                         hover:bg-gold-500/10 hover:border-gold-500/50
                         flex items-center justify-center gap-2"
              >
                Our Approach
              </a>
            </div>

            {/* Key Aspects */}
            <div className="mt-12 grid grid-cols-3 gap-4 lg:gap-6
                          animate-fadeIn" style={{ animationDelay: '0.8s' }}>
              <div className="bg-stone-800/30 rounded-lg p-3 flex flex-col items-center text-center gap-2 group 
                            hover:bg-stone-800/50 transition-all border border-jade-500/10 hover:border-jade-500/30">
                <span className="text-gold-500 text-xl group-hover:scale-110 transition-transform font-chinese">道瑜伽</span>
                <span className="text-stone-300 text-sm">Daoist Yoga</span>
              </div>
              <div className="bg-stone-800/30 rounded-lg p-3 flex flex-col items-center text-center gap-2 group 
                            hover:bg-stone-800/50 transition-all border border-jade-500/10 hover:border-jade-500/30">
                <span className="text-gold-500 text-xl group-hover:scale-110 transition-transform font-chinese">氣功</span>
                <span className="text-stone-300 text-sm">Qigong</span>
              </div>
              <div className="bg-stone-800/30 rounded-lg p-3 flex flex-col items-center text-center gap-2 group 
                            hover:bg-stone-800/50 transition-all border border-jade-500/10 hover:border-jade-500/30">
                <span className="text-gold-500 text-xl group-hover:scale-110 transition-transform font-chinese">靜坐</span>
                <span className="text-stone-300 text-sm">Meditation</span>
              </div>
            </div>
          </div>

          {/* Right side - Taiji symbol with enhanced animations */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-96 h-96 animate-fadeIn" style={{ animationDelay: '1s' }}>
              {/* Animated energy fields */}
              <div className="absolute inset-0 bg-gradient-to-br from-jade-500/20 to-transparent 
                            rounded-full blur-2xl transform -rotate-12 animate-pulse-slow" />
              <div className="absolute inset-10 bg-gradient-to-tr from-gold-500/10 to-transparent 
                            rounded-full blur-xl transform rotate-45 animate-float" />
              
              {/* Taiji symbol */}
              <div className="absolute inset-0 flex items-center justify-center animate-float" 
                   style={{ animationDuration: '8s' }}>
                <svg viewBox="0 0 100 100" className="w-80 h-80 drop-shadow-2xl">
                  {/* Outer glow */}
                  <circle cx="50" cy="50" r="49" fill="none" stroke="rgba(15, 76, 58, 0.3)" strokeWidth="1" />
                  
                  {/* Main symbol */}
                  <circle cx="50" cy="50" r="48" fill="none" stroke="#0F4C3A" strokeWidth="2" />
                  <path d="M50,2 A48,48 0 0,1 50,98 A24,24 0 0,1 50,50 A24,24 0 0,0 50,2" fill="#0F4C3A" />
                  <circle cx="50" cy="26" r="6" fill="#DAA520" />
                  <circle cx="50" cy="74" r="6" fill="#0F4C3A" />
                  
                  {/* Energy circles */}
                  <circle cx="50" cy="50" r="36" fill="none" stroke="#0F4C3A" strokeWidth="0.5" 
                          strokeDasharray="3,3" className="animate-spin-slow" style={{ animationDuration: '60s' }} />
                  <circle cx="50" cy="50" r="24" fill="none" stroke="#DAA520" strokeWidth="0.5" 
                          strokeDasharray="3,3" className="animate-spin-slow" 
                          style={{ animationDuration: '40s', animationDirection: 'reverse' }} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow hidden md:block">
        <div className="w-8 h-12 rounded-full border-2 border-jade-500/30 flex items-center justify-center">
          <div className="w-1.5 h-3 bg-jade-500/50 rounded-full animate-pulse-slow"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;