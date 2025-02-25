// src/components/practice/sessions/FiveElementsSession.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function FiveElementsSession() {
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

        <h1 className="text-4xl font-serif text-gold-400 mb-4">Five Elements Balance</h1>
        <div className="flex items-center gap-2 mb-8">
          <span className="px-3 py-1 bg-gold-700 text-gold-300 rounded-full text-sm">
            Intermediate
          </span>
          <span className="px-3 py-1 bg-stone-700 text-stone-300 rounded-full text-sm">
            30 minutes
          </span>
        </div>
        
        <p className="text-stone-200 mb-8">
          A practice designed around the Five Elements theory, creating balance
          between Water, Wood, Fire, Earth, and Metal energies within the body.
        </p>
        
        <div className="bg-stone-800/30 border border-jade-400 p-6 rounded-xl mb-8">
          <h2 className="text-2xl font-serif text-jade-300 mb-4">Practice Overview</h2>
          <p className="text-stone-200 mb-4">
            In Daoist philosophy, the Five Elements describe the dynamic relationships between different 
            qualities of energy. This practice systematically works with each element, creating harmony 
            and balance within the body's energy system.
          </p>
          <p className="text-stone-200">
            The full practice video will be available in our next update.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-4 mb-12">
          <div className="bg-stone-800/50 p-4 rounded-lg text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-blue-700/30 mb-2 flex items-center justify-center">
              <span className="text-blue-300">水</span>
            </div>
            <h3 className="text-blue-300">Water</h3>
            <p className="text-stone-300 text-sm">Flowing & Yielding</p>
          </div>
          
          <div className="bg-stone-800/50 p-4 rounded-lg text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-green-700/30 mb-2 flex items-center justify-center">
              <span className="text-green-300">木</span>
            </div>
            <h3 className="text-green-300">Wood</h3>
            <p className="text-stone-300 text-sm">Growth & Expansion</p>
          </div>
          
          <div className="bg-stone-800/50 p-4 rounded-lg text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-red-700/30 mb-2 flex items-center justify-center">
              <span className="text-red-300">火</span>
            </div>
            <h3 className="text-red-300">Fire</h3>
            <p className="text-stone-300 text-sm">Transformation</p>
          </div>
          
          <div className="bg-stone-800/50 p-4 rounded-lg text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-yellow-700/30 mb-2 flex items-center justify-center">
              <span className="text-yellow-300">土</span>
            </div>
            <h3 className="text-yellow-300">Earth</h3>
            <p className="text-stone-300 text-sm">Stability & Center</p>
          </div>
          
          <div className="bg-stone-800/50 p-4 rounded-lg text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-gray-500/30 mb-2 flex items-center justify-center">
              <span className="text-gray-300">金</span>
            </div>
            <h3 className="text-gray-300">Metal</h3>
            <p className="text-stone-300 text-sm">Refinement</p>
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

export default FiveElementsSession;