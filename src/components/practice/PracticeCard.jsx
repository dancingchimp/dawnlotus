// src/components/practice/PracticeCard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PracticeCard({ practice }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Get color based on practice level
  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner':
        return 'from-jade-400/80 to-jade-600/80';
      case 'Intermediate':
        return 'from-gold-400/80 to-gold-600/80';
      case 'Advanced':
        return 'from-amber-400/80 to-amber-600/80';
      default:
        return 'from-jade-400/80 to-jade-600/80';
    }
  };
  
  // Get category icon
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'daoist-yoga':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
               className="w-4 h-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z"/>
            <path d="M8 14c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"/>
            <path d="M12 12v8"/>
            <path d="M12 2v6"/>
            <path d="M15 15l5 5"/>
            <path d="M4 4l5 5"/>
          </svg>
        );
      case 'qigong':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
               className="w-4 h-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        );
      case 'meditation':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
               className="w-4 h-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
            <path d="M12 8v8"/>
            <path d="M8 12h8"/>
          </svg>
        );
      case 'theory':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
               className="w-4 h-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
               className="w-4 h-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
          </svg>
        );
    }
  };

  return (
    <div 
      className="card-elegant group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Image */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={practice.image} 
          alt={practice.title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent 
                      opacity-80 group-hover:opacity-100 transition-opacity duration-500"/>
        
        {/* Locked Overlay */}
        {practice.isLocked && (
          <div className="absolute inset-0 bg-stone-900/70 backdrop-blur-sm flex flex-col items-center 
                        justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="p-3 bg-gold-500/20 rounded-full animate-pulse-slow mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold-500" fill="none" 
                   viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" 
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="text-gold-400 font-medium text-glow mb-3">Premium Content</span>
            <Link 
              to="/subscription"
              className="btn-gold px-4 py-2 text-sm"
            >
              Unlock Access
            </Link>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-stone-900/70 backdrop-blur-elegant 
                      rounded-full flex items-center gap-1.5 text-jade-400 text-xs">
          {getCategoryIcon(practice.category)}
          <span>
            {practice.category === 'daoist-yoga' ? 'Daoist Yoga' : 
             practice.category === 'qigong' ? 'Qigong' : 
             practice.category === 'meditation' ? 'Meditation' : 'Theory'}
          </span>
        </div>
        
        {/* Level Badge */}
        <div className={`absolute top-3 right-3 px-3 py-1 
                      bg-gradient-to-r ${getLevelColor(practice.level)} backdrop-blur-elegant
                      rounded-full text-stone-100 text-xs font-medium`}>
          {practice.level}
        </div>
        
        {/* Duration Badge */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-stone-300 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" 
               viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {practice.duration}
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-5">
        <div className="mb-3">
          <h3 className="text-xl font-serif text-gradient-gold mb-1 group-hover:text-glow">{practice.title}</h3>
          <p className="text-stone-400 text-sm font-chinese">{practice.chinese}</p>
        </div>
        
        <p className="text-stone-300 text-sm mb-5 line-clamp-2">{practice.description}</p>
        
        {/* Action Button */}
        {practice.isLocked ? (
          <div className="flex justify-end">
            <Link 
              to="/subscription"
              className="inline-flex items-center gap-1.5 text-gold-500 hover:text-gold-400 
                       font-medium transition-all duration-300 text-sm group-hover:translate-x-1"
            >
              <span>Unlock Content</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" 
                   viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        ) : (
          <div className="flex justify-end">
            <Link 
              to={`/practice/${practice.id}`}
              className="inline-flex items-center gap-1.5 text-jade-500 hover:text-jade-400 
                       font-medium transition-all duration-300 text-sm group-hover:translate-x-1"
            >
              <span>Begin Practice</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" 
                   viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default PracticeCard;