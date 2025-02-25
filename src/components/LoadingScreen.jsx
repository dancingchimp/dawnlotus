// src/components/LoadingScreen.jsx
import React from 'react';

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-stone-900 flex items-center justify-center">
      <div className="text-center">
        <div className="font-chinese text-2xl text-gold-500 mb-2">和門</div>
        <div className="text-stone-300">Loading...</div>
        <div className="mt-4 w-16 h-16 border-4 border-jade-500/30 border-t-jade-500 
                      rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;