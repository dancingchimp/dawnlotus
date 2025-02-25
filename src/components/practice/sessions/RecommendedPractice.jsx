// src/components/practice/sessions/RecommendedPractice.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function RecommendedPractice() {
  return (
    <div className="min-h-screen bg-stone-900 pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif text-gold-400 mb-8">Recommended Practice</h1>
        <p className="text-stone-200 mb-8">
          Based on your current phase (Channel Opening), this practice is designed 
          to help you progress most effectively.
        </p>
        
        <div className="bg-stone-800/30 border border-jade-400 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-serif text-jade-300 mb-4">Central Channel Activation</h2>
          <p className="text-stone-200 mb-4">
            A focused practice to develop awareness and energy flow in the central channel.
          </p>
          <p className="text-stone-200 mb-4">
            Duration: 25 minutes
          </p>
          
          <div className="mt-6">
            <p className="text-stone-300">
              This sequence will be available in our next update.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            to="/progress"
            className="bg-jade-600 hover:bg-jade-500 text-stone-100 px-6 py-3 
                     rounded-lg transition-colors inline-block"
          >
            Return to Progress
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecommendedPractice;