// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen bg-stone-900 flex items-center justify-center p-4">
      <div className="text-center">
        <h2 className="font-chinese text-3xl text-gold-500 mb-4">頁面未找到</h2>
        <h1 className="text-4xl font-serif text-stone-100 mb-6">Page Not Found</h1>
        <p className="text-stone-300 mb-8">
          The path you seek lies elsewhere.
        </p>
        <Link 
          to="/"
          className="bg-jade-500 hover:bg-jade-600 text-stone-100 px-6 py-3 
                   rounded-lg transition-all duration-300 inline-block"
        >
          Return to Path
        </Link>
      </div>
    </div>
  );
}

export default NotFound;