// src/components/practice/sessions/RecommendedPractice.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function RecommendedPractice() {
  return (
    <div className="min-h-screen bg-stone-900 pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link 
            to="/progress"
            className="inline-flex items-center text-stone-400 hover:text-jade-400 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Progress
          </Link>
        </div>

        <h1 className="text-4xl font-serif text-gold-400 mb-4">Recommended Practice</h1>
        <p className="text-stone-200 mb-8">
          Based on your current phase (Channel Opening), this practice is designed 
          to help you progress most effectively.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-stone-800/30 border border-jade-400 rounded-xl p-6">
            <h2 className="text-2xl font-serif text-jade-300 mb-4">Central Channel Activation</h2>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-jade-700 text-jade-300 rounded-full text-sm">
                Intermediate
              </span>
              <span className="px-3 py-1 bg-stone-700 text-stone-300 rounded-full text-sm">
                25 minutes
              </span>
            </div>
            
            <p className="text-stone-200 mb-6">
              A focused practice to develop awareness and energy flow in the central channel.
              This practice is specifically recommended to help progress your Channel Opening phase.
            </p>
            
            <h3 className="text-lg font-serif text-gold-400 mb-3">Practice Benefits:</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-stone-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-jade-400 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Opens the central meridian from tailbone to crown</span>
              </li>
              <li className="flex items-start gap-2 text-stone-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-jade-400 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Prepares the body for small circulation practice</span>
              </li>
              <li className="flex items-start gap-2 text-stone-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-jade-400 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Connects the three dantians through the central axis</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <button className="w-full bg-jade-600 hover:bg-jade-500 text-stone-100 py-3 rounded-lg transition-colors">
                Begin Practice
              </button>
            </div>
          </div>
          
          <div className="bg-stone-800/30 border border-jade-400/40 rounded-xl p-6">
            <h2 className="text-2xl font-serif text-jade-300 mb-4">Arm Meridian Opening</h2>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-jade-700 text-jade-300 rounded-full text-sm">
                Intermediate
              </span>
              <span className="px-3 py-1 bg-stone-700 text-stone-300 rounded-full text-sm">
                20 minutes
              </span>
            </div>
            
            <p className="text-stone-200 mb-6">
              A sequence focused on opening the six primary arm meridians: Lung, Large Intestine,
              Heart, Small Intestine, Pericardium, and Triple Warmer.
            </p>
            
            <h3 className="text-lg font-serif text-gold-400 mb-3">Practice Benefits:</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-stone-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-jade-400 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Clears blockages in the arm meridians</span>
              </li>
              <li className="flex items-start gap-2 text-stone-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-jade-400 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Enhances energy flow to the hands</span>
              </li>
              <li className="flex items-start gap-2 text-stone-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-jade-400 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Balances upper body energy with the central channel</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <button className="w-full bg-stone-700 hover:bg-stone-600 text-stone-300 py-3 rounded-lg transition-colors">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
        
        {/* Practice Notes */}
        <div className="bg-stone-800/30 border border-gold-400/30 rounded-xl p-6 mb-12">
          <h3 className="text-lg font-serif text-gold-400 mb-3">Practice Notes</h3>
          <p className="text-stone-200 mb-3">
            In your current Channel Opening phase, focus on sensing the subtle energy 
            movement along the central channel. Pay attention to any areas that feel blocked 
            or restricted, as well as areas where energy flows freely.
          </p>
          <p className="text-stone-200">
            After each practice session, take a few minutes to observe and record your 
            sensations and experiences to track your progress over time.
          </p>
        </div>
        
        <div className="text-center">
          <Link 
            to="/log-practice"
            className="bg-gold-700 hover:bg-gold-600 text-stone-100 px-6 py-3 
                     rounded-lg transition-colors inline-block"
          >
            Log Your Practice
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecommendedPractice;