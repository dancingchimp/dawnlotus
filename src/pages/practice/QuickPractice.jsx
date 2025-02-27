// src/pages/practice/QuickPractice.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Award, ArrowLeft } from 'lucide-react';

const QuickPractice = () => {
  const navigate = useNavigate();
  const [selectedDuration, setSelectedDuration] = useState(15); // Default 15 minutes
  
  // Quick practice options
  const quickPractices = [
    {
      id: 'quick-energy-boost',
      title: 'Energy Boost',
      description: 'A quick practice to revitalize your energy and clear your mind',
      category: 'QiGong',
      durations: [5, 10, 15],
      benefits: ['Increased energy', 'Mental clarity', 'Stress reduction'],
      image: '/api/placeholder/400/200'
    },
    {
      id: 'quick-channel-clearing',
      title: 'Channel Clearing',
      description: 'Simple movements to release blockages and facilitate energy flow',
      category: 'Daoist Yoga',
      durations: [10, 15, 20],
      benefits: ['Relief from tension', 'Improved circulation', 'Energy pathway clearing'],
      image: '/api/placeholder/400/200'
    },
    {
      id: 'quick-grounding',
      title: 'Grounding Practice',
      description: 'Connect to earth energy and strengthen your energetic root',
      category: 'QiGong',
      durations: [5, 10, 15],
      benefits: ['Stability', 'Centeredness', 'Reduced anxiety'],
      image: '/api/placeholder/400/200'
    }
  ];
  
  // Start a quick practice session
  const startPractice = (practiceId) => {
    // In a real app, you would prepare the session with the selected duration
    navigate(`/practice/${practiceId}?duration=${selectedDuration}`);
  };

  return (
    <div className="min-h-screen bg-stone-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-stone-400 hover:text-stone-300 transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          
          <div>
            <h1 className="text-2xl font-serif text-gold-500">Quick Practice</h1>
            <p className="text-stone-400">
              Short sessions for when you have limited time
            </p>
          </div>
        </div>
        
        {/* Duration Selector */}
        <div className="bg-stone-800/30 rounded-xl p-6 border border-jade-500/10 mb-8">
          <h2 className="text-xl font-serif text-gold-500 mb-4">Session Duration</h2>
          <div className="flex flex-wrap gap-4">
            {[5, 10, 15, 20, 30].map((mins) => (
              <button
                key={mins}
                onClick={() => setSelectedDuration(mins)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedDuration === mins
                    ? 'bg-jade-500 text-stone-100'
                    : 'bg-stone-800 text-stone-400 hover:bg-stone-700'
                }`}
              >
                {mins} minutes
              </button>
            ))}
          </div>
        </div>
        
        {/* Quick Practices */}
        <div className="space-y-6">
          {quickPractices.map((practice) => (
            <div 
              key={practice.id}
              className="bg-stone-800/30 rounded-xl overflow-hidden border border-jade-500/10 hover:border-jade-500/30 transition-all"
            >
              <div className="grid md:grid-cols-3">
                <div className="md:col-span-1">
                  <img 
                    src={practice.image} 
                    alt={practice.title} 
                    className="h-full w-full object-cover" 
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-xs bg-stone-700 px-2 py-0.5 rounded-full text-stone-300 mb-2 inline-block">
                        {practice.category}
                      </span>
                      <h3 className="text-xl font-serif text-gold-500">{practice.title}</h3>
                    </div>
                    <div className="flex items-center text-stone-400">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-sm">{selectedDuration} min</span>
                    </div>
                  </div>
                  
                  <p className="text-stone-300 mb-4">{practice.description}</p>
                  
                  <div className="mb-6">
                    <p className="text-stone-400 text-sm mb-2">Benefits:</p>
                    <div className="flex flex-wrap gap-2">
                      {practice.benefits.map((benefit, i) => (
                        <span 
                          key={i}
                          className="text-xs bg-stone-700/50 px-2 py-1 rounded-full text-stone-300"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-stone-400 text-sm">
                      Available durations: {practice.durations.join(', ')} min
                    </div>
                    <button 
                      onClick={() => startPractice(practice.id)}
                      className="px-4 py-2 bg-jade-500 hover:bg-jade-600 text-stone-100 rounded-lg transition-colors"
                    >
                      Begin Practice
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Daily Goal */}
        <div className="mt-8 bg-stone-800/30 rounded-xl p-6 border border-jade-500/10">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-5 h-5 text-gold-500" />
            <h2 className="text-xl font-serif text-gold-500">Daily Goal</h2>
          </div>
          <p className="text-stone-300 mb-6">
            Complete at least 15 minutes of practice each day to maintain your streak and make steady progress.
          </p>
          <div className="w-full h-2 bg-stone-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gold-500"
              style={{ width: `${(selectedDuration / 15) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-stone-400 text-sm">Today's progress</span>
            <span className="text-stone-400 text-sm">{selectedDuration}/15 minutes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickPractice;