import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-stone-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-jade-500/10 rounded-full blur-3xl animate-flow" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-flow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full 
                       bg-gradient-radial from-jade-500/5 to-transparent opacity-50" />
      </div>

      <div className="relative px-4 py-16 w-full max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="text-center lg:text-left max-w-lg mx-auto lg:mx-0">
            {/* Chinese Title */}
            <div className="mb-6 font-chinese">
              <h2 className="text-3xl text-gold-500 tracking-wide">和門</h2>
              <p className="text-stone-400">Hé Mén</p>
            </div>
            
            {/* English Title */}
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-stone-100 tracking-tight mb-6">
              Harmony Gate
            </h1>

            <p className="mt-8 text-xl lg:text-2xl text-stone-300 leading-relaxed font-serif">
              Discover the ancient wisdom of Daoist yoga, where movement meets meditation, 
              and practice transforms into enlightenment.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link 
                to="/practice"
                className="bg-jade-500 hover:bg-jade-600 text-stone-100 px-8 py-4 
                         rounded-xl text-lg font-semibold transition-all duration-300 
                         hover:-translate-y-1 flex items-center justify-center gap-2
                         group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-jade-600/0 via-stone-100/20 to-jade-600/0 
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                Begin Your Journey
              </Link>
              
              <Link 
                to="/about"
                className="border border-gold-500/30 text-stone-100 px-8 py-4 
                         rounded-xl text-lg font-semibold transition-all duration-300
                         hover:bg-gold-500/10 hover:border-gold-500/50
                         flex items-center justify-center gap-2"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right side - Decorative element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-96 h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-jade-500/20 to-transparent 
                            rounded-full blur-2xl transform -rotate-12 animate-pulse-slow" />
              <div className="absolute inset-10 bg-gradient-to-tr from-gold-500/10 to-transparent 
                            rounded-full blur-xl transform rotate-45 animate-float" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-64 h-64 text-jade-500">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M50,2 A48,48 0 0,1 50,98 A24,24 0 0,1 50,50 A24,24 0 0,0 50,2" fill="currentColor" />
                  <circle cx="50" cy="26" r="6" fill="#DAA520" />
                  <circle cx="50" cy="74" r="6" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;