// src/components/practice/sessions/MeridianFlowSession.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function MeridianFlowSession() {
  return (
    <div className="min-h-screen bg-stone-900 pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link 
            to="/practice"
            className="inline-flex items-center text-stone-400 hover:text-jade-400 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Practices
          </Link>
        </div>

        <h1 className="text-4xl font-serif text-gold-400 mb-4">Meridian Flow Sequence</h1>
        <div className="flex items-center gap-2 mb-8">
          <span className="px-3 py-1 bg-jade-700 text-jade-300 rounded-full text-sm">
            Intermediate
          </span>
          <span className="px-3 py-1 bg-stone-700 text-stone-300 rounded-full text-sm">
            25 minutes
          </span>
        </div>
        
        <p className="text-stone-200 mb-8">
          A flowing sequence that works systematically through the major meridian pathways,
          opening energy channels while building strength and flexibility.
        </p>
        
        <div className="bg-stone-800/30 border border-jade-400 p-6 rounded-xl mb-8">
          <h2 className="text-2xl font-serif text-jade-300 mb-4">Practice Overview</h2>
          <p className="text-stone-200 mb-4">
            This practice emphasizes the connection between physical postures and energy cultivation. 
            Each movement is designed to stimulate specific meridian pathways, creating a balanced 
            and harmonious flow of qi throughout the body.
          </p>
          <p className="text-stone-200">
            The full practice video will be available in our next update.
          </p>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/progress"
            className="bg-jade-600 hover:bg-jade-500 text-stone-100 px-6 py-3 
                     rounded-lg transition-colors inline-block"
          >
            Track Your Progress
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MeridianFlowSession;