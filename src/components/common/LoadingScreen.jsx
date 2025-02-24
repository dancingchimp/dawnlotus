import React from 'react';

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-stone-900 flex items-center justify-center">
      <div className="text-center">
        <div className="font-chinese text-2xl text-gold-500">和門</div>
        <div className="text-stone-400 text-sm">Loading...</div>
      </div>
    </div>
  );
}

export default LoadingScreen;