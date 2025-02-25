// src/components/practice/sessions/FoundationSession.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function FoundationSession() {
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

        <h1 className="text-4xl font-serif text-gold-400 mb-4">Foundation Practice</h1>
        <div className="flex items-center gap-2 mb-8">
          <span className="px-3 py-1 bg-jade-700 text-jade-300 rounded-full text-sm">
            Beginner
          </span>
          <span className="px-3 py-1 bg-stone-700 text-stone-300 rounded-full text-sm">
            20 minutes
          </span>
        </div>
        
        <p className="text-stone-200 mb-8">
          An introductory sequence that establishes proper alignment,
          breath awareness, and basic energy principles for beginners.
        </p>
        
        <div className="bg-stone-800/30 border border-jade-400 p-6 rounded-xl mb-8">
          <h2 className="text-2xl font-serif text-jade-300 mb-4">Practice Overview</h2>
          <p className="text-stone-200 mb-4">
            This foundational practice introduces key concepts in Daoist energy work 
            while keeping the physical forms accessible. Focus is placed on establishing 
            proper structure, developing breath awareness, and beginning to sense subtle energy.
          </p>
          <p className="text-stone-200">
            The full practice video will be available in our next update.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-stone-800/50 p-5 rounded-lg border border-jade-400/20">
            <h3 className="text-lg font-serif text-jade-300 mb-2">Proper Alignment</h3>
            <p className="text-stone-200 text-sm mb-3">
              Learn the foundational principles of body alignment that create the optimal 
              conditions for energy flow.
            </p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2 text-stone-300 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-jade-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Stacking the joints</span>
              </li>
              <li className="flex items-start gap-2 text-stone-300 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-jade-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Establishing the root</span>
              </li>
              <li className="flex items-start gap-2 text-stone-300 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-jade-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Releasing unnecessary tension</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-stone-800/50 p-5 rounded-lg border border-jade-400/20">
            <h3 className="text-lg font-serif text-jade-300 mb-2">Breath Awareness</h3>
            <p className="text-stone-200 text-sm mb-3">
              Develop conscious breath control as the bridge between physical movement 
              and energy cultivation.
            </p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2 text-stone-300 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-jade-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Natural breathing patterns</span>
              </li>
              <li className="flex items-start gap-2 text-stone-300 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-jade-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Coordinating breath with movement</span>
              </li>
              <li className="flex items-start gap-2 text-stone-300 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-jade-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Using breath to direct awareness</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-stone-800/50 p-5 rounded-lg border border-jade-400/20">
            <h3 className="text-lg font-serif text-jade-300 mb-2">Energy Principles</h3>
            <p className="text-stone-200 text-sm mb-3">
              Begin to understand and experience the subtle energy sensations that 
              form the foundation of Daoist practice.
            </p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2 text-stone-300 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-jade-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Sensing the field</span>
              </li>
              <li className="flex items-start gap-2 text-stone-300 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-jade-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Lower dantian awareness</span>
              </li>
              <li className="flex items-start gap-2 text-stone-300 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-jade-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Beginning to direct qi</span>
              </li>
            </ul>
          </div>
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

export default FoundationSession;