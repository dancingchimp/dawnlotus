// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  const orbRef = useRef(null);
  const containerRef = useRef(null);

  // Handle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (containerRef.current) {
        containerRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        containerRef.current.style.opacity = 1 - (scrollPosition * 0.002);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mouse movement for interactive effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!orbRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position relative to center of screen
      const xOffset = (clientX - innerWidth / 2) / 30;
      const yOffset = (clientY - innerHeight / 2) / 30;

      orbRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-stone-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glowing Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-jade-500/5 rounded-full blur-3xl animate-float opacity-60" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl animate-float opacity-60" 
             style={{ animationDelay: '2s' }} />
        
        {/* Radial Gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full 
                       bg-gradient-radial from-jade-500/5 to-transparent opacity-70" />
        
        {/* Subtle Grain Texture Overlay */}
        <div className="absolute inset-0 bg-gradient-texture opacity-10" />
        
        {/* Meridian Lines (Subtle Pattern) */}
        <div className="absolute inset-0 opacity-5 bg-repeat" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.344 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V0h-.284zM60 5.373L34.544 30.828l1.414 1.415L60 8.2V5.374zm0 5.656L37.373 33.656l1.414 1.414L60 13.86v-2.83zm0 5.656l-19.8 19.8 1.415 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413L30 11.8l7.07 7.414z' fill='%23DAA520' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")` 
             }} 
        />
      </div>

      {/* Main Content */}
      <div ref={containerRef} className="relative px-4 py-16 w-full max-w-screen-xl mx-auto z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="text-center lg:text-left max-w-lg mx-auto lg:mx-0">
            {/* Chinese Title */}
            <div className="mb-6">
              <h2 className="text-4xl text-gold-500 tracking-wide font-chinese">和門</h2>
              <p className="text-stone-400 tracking-widest">Hé Mén</p>
            </div>
            
            {/* English Title */}
            <h1 className="text-6xl lg:text-7xl font-serif font-bold text-stone-100 tracking-tight mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400">
                Harmony Gate
              </span>
            </h1>

            <p className="mt-6 text-xl lg:text-2xl text-stone-300 leading-relaxed font-serif">
              Discover the ancient wisdom of Daoist yoga, 
              where movement meets meditation, and 
              practice transforms into enlightenment.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link 
                to="/practice"
                className="bg-jade-500 hover:bg-jade-600 text-stone-100 px-8 py-4 
                         rounded-xl text-lg font-semibold transition-all duration-300 
                         hover:-translate-y-1 flex items-center justify-center gap-2
                         group relative overflow-hidden"
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-jade-600/0 via-stone-100/30 to-jade-600/0 
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                {/* Text with subtle glow */}
                <span className="relative drop-shadow-[0_0_8px_rgba(78,163,134,0.3)]">Begin Your Journey</span>
              </Link>
              
              <Link 
                to="/about"
                className="border border-gold-500/40 text-stone-100 px-8 py-4 
                         rounded-xl text-lg font-semibold transition-all duration-300
                         hover:bg-gold-500/10 hover:border-gold-500/70
                         flex items-center justify-center gap-2"
              >
                <span>Learn More</span>
              </Link>
            </div>
          </div>

          {/* Right side - Animated Taiji Orb */}
          <div className="hidden lg:flex items-center justify-center">
            <div ref={orbRef} className="relative w-96 h-96 transition-transform duration-200 ease-out">
              {/* Background glow effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-jade-500/20 to-transparent 
                            rounded-full blur-2xl transform -rotate-12 animate-pulse-slow" />
              <div className="absolute inset-10 bg-gradient-to-tr from-gold-500/20 to-transparent 
                            rounded-full blur-xl transform rotate-45 animate-float" />
              
              {/* Taiji Symbol */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-64 h-64 drop-shadow-[0_0_15px_rgba(78,163,134,0.4)]">
                  {/* Outer circle */}
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" className="text-jade-500" />
                  
                  {/* Yin-Yang path */}
                  <path d="M50,2 A48,48 0 0,1 50,98 A24,24 0 0,1 50,50 A24,24 0 0,0 50,2" fill="currentColor" className="text-jade-500" />
                  
                  {/* Gold dot */}
                  <circle cx="50" cy="26" r="6" fill="#DAA520" className="drop-shadow-[0_0_8px_rgba(218,165,32,0.8)]" />
                  
                  {/* Jade dot */}
                  <circle cx="50" cy="74" r="6" fill="currentColor" className="text-jade-500" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-stone-400 text-sm mb-2">Explore</span>
        <div className="w-6 h-10 border-2 border-stone-400 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce-slow" />
        </div>
      </div>
    </div>
  );
}

export default Hero;