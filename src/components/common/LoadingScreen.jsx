// src/components/common/LoadingScreen.jsx

import React from 'react';

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-stone-900 flex items-center justify-center">
      <div className="text-center">
        {/* Taiji Loading Animation */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-jade-500/30 animate-spin-slow" />
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-jade-500 animate-pulse-slow"
          >
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="4" />
            <path
              d="M50,2 A48,48 0 0,1 50,98 A24,24 0 0,1 50,50 A24,24 0 0,0 50,2"
              fill="currentColor"
            />
            <circle cx="50" cy="26" r="6" fill="#DAA520" />
            <circle cx="50" cy="74" r="6" fill="currentColor" />
          </svg>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <div className="font-chinese text-2xl text-gold-500">和門</div>
          <div className="text-stone-400 text-sm">Loading...</div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;