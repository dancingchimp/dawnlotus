// src/pages/LogPractice.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LogPractice() {
  const [practiceType, setPracticeType] = useState('');
  const [duration, setDuration] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally save to your backend
    console.log({ practiceType, duration, notes });
    // For now just simulate success
    setSubmitted(true);
  };
  
  return (
    <div className="min-h-screen bg-stone-900 py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-chinese text-3xl text-gold-400 mb-4">記錄修練</h2>
          <h1 className="text-4xl font-serif text-stone-100 mb-6">
            Log Your Practice
          </h1>
          <p className="text-stone-200 max-w-3xl mx-auto">
            Record your practice sessions to track progress and receive personalized recommendations.
          </p>
        </div>
        
        {submitted ? (
          <div className="bg-jade-700/20 border border-jade-400 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-serif text-jade-300 mb-4">Practice Logged Successfully!</h3>
            <p className="text-stone-200 mb-6">
              Your practice session has been recorded and your progress updated.
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                to="/progress"
                className="bg-jade-600 hover:bg-jade-500 text-stone-100 px-6 py-3 
                         rounded-lg transition-colors inline-block"
              >
                View Your Progress
              </Link>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-stone-700 hover:bg-stone-600 text-stone-100 px-6 py-3 
                         rounded-lg transition-colors inline-block"
              >
                Log Another Practice
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-stone-800/30 border border-jade-400 rounded-xl p-6">
            <div className="space-y-6">
              <div>
                <label className="block text-stone-200 mb-2">Practice Type</label>
                <select
                  value={practiceType}
                  onChange={(e) => setPracticeType(e.target.value)}
                  required
                  className="w-full bg-stone-700 border border-stone-600 text-stone-200 rounded-lg p-3"
                >
                  <option value="">-- Select Practice Type --</option>
                  <option value="foundation">Foundation Sequence</option>
                  <option value="meridian-flow">Meridian Flow</option>
                  <option value="five-elements">Five Elements</option>
                  <option value="standing-meditation">Standing Meditation</option>
                  <option value="custom">Custom Practice</option>
                </select>
              </div>
              
              <div>
                <label className="block text-stone-200 mb-2">Duration (minutes)</label>
                <input
                  type="number"
                  min="5"
                  max="120"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required
                  className="w-full bg-stone-700 border border-stone-600 text-stone-200 rounded-lg p-3"
                  placeholder="Enter practice duration"
                />
              </div>
              
              <div>
                <label className="block text-stone-200 mb-2">Notes & Sensations</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-stone-700 border border-stone-600 text-stone-200 rounded-lg p-3 h-32"
                  placeholder="Describe any energy sensations or insights from your practice..."
                ></textarea>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-jade-600 hover:bg-jade-500 text-stone-100 py-3 px-4 rounded-lg text-center transition-colors"
                >
                  Log Practice Session
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default LogPractice;