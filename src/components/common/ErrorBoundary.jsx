import React from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorBoundary() {
  const error = useRouteError();

  return (
    <div className="min-h-screen bg-stone-900 flex items-center justify-center p-4">
      <div className="text-center">
        <h2 className="font-chinese text-3xl text-gold-500 mb-4">出錯了</h2>
        <h1 className="text-4xl font-serif text-stone-100 mb-6">Something Went Wrong</h1>
        <p className="text-stone-300 mb-8">
          {error.message || 'An unexpected error occurred.'}
        </p>
        <button 
          onClick={() => window.location.href = '/harmonygate'}
          className="bg-jade-500 hover:bg-jade-600 text-stone-100 px-6 py-3 
                   rounded-lg transition-all duration-300"
        >
          Return Home
        </button>
      </div>
    </div>
  );
}

export default ErrorBoundary;