// src/components/practice/RecommendedPractice.jsx
import React from 'react';
import { Clock, Calendar, Award } from 'lucide-react';

const RecommendedPractice = ({ userData }) => {
  // Mock recommended practices based on user level
  const recommendedPractices = [
    {
      id: 1,
      title: "Channel Opening Sequence",
      category: "Daoist Yoga",
      level: "Level 2",
      duration: "25 min",
      description: "A sequence focused on opening the key energy channels in your body, particularly targeting the central and governing vessels.",
      benefits: ["Improved energy flow", "Reduced tension", "Enhanced body awareness"],
      image: "/api/placeholder/400/200" // Placeholder image
    },
    {
      id: 2,
      title: "Microcosmic Orbit",
      category: "Meditation",
      level: "Level 2",
      duration: "15 min",
      description: "A guided meditation to develop awareness and circulation of energy through the central channel.",
      benefits: ["Energy balancing", "Mental clarity", "Spiritual connection"],
      image: "/api/placeholder/400/200" // Placeholder image
    },
    {
      id: 3,
      title: "Standing Foundation",
      category: "QiGong",
      level: "Level 1-2",
      duration: "10 min",
      description: "Zhan Zhuang practice to develop your energetic root and build a stable energy field.",
      benefits: ["Grounding", "Energy accumulation", "Structural alignment"],
      image: "/api/placeholder/400/200" // Placeholder image
    }
  ];
  
  // Daily practice calendar - mock data showing 7 days of the week
  const dailyCalendar = [
    { day: 'Mon', practiced: true },
    { day: 'Tue', practiced: true },
    { day: 'Wed', practiced: true },
    { day: 'Thu', practiced: true },
    { day: 'Fri', practiced: false, isToday: true },
    { day: 'Sat', practiced: false },
    { day: 'Sun', practiced: false }
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="md:col-span-8 space-y-8">
            {/* Welcome Message */}
            <div className="bg-stone-800/30 rounded-xl p-6 border border-jade-500/10">
              <h1 className="text-2xl font-serif text-gold-500 mb-2">Welcome back, {userData.name}</h1>
              <p className="text-stone-300">Continue your journey through the {userData.phase} phase.</p>
              
              {/* Daily Streak */}
              <div className="mt-6 bg-stone-700/30 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg text-jade-400 font-medium">Current Streak: {userData.currentStreak} days</h3>
                    <p className="text-stone-400 text-sm">Longest streak: {userData.longestStreak} days</p>
                  </div>
                  <span className="bg-jade-500/10 text-jade-500 text-xs px-3 py-1 rounded-full">
                    Level {userData.level}
                  </span>
                </div>
                
                {/* Weekly calendar */}
                <div className="flex justify-between">
                  {dailyCalendar.map((day, index) => (
                    <div 
                      key={index} 
                      className={`text-center w-10 py-2 rounded-lg ${
                        day.isToday ? 'border-2 border-jade-500/50' : ''
                      }`}
                    >
                      <p className="text-stone-400 text-xs mb-1">{day.day}</p>
                      <div className={`w-6 h-6 mx-auto rounded-full flex items-center justify-center ${
                        day.practiced 
                          ? 'bg-jade-500 text-stone-900' 
                          : 'bg-stone-700 text-stone-500'
                      }`}>
                        {day.practiced ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : ''}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Recommended Practices */}
            <div>
              <h2 className="text-2xl font-serif text-gold-500 mb-6">Recommended for Today</h2>
              <div className="space-y-6">
                {recommendedPractices.map(practice => (
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
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs bg-stone-700 px-2 py-0.5 rounded-full text-stone-300">
                                {practice.category}
                              </span>
                              <span className="text-xs bg-jade-500/10 px-2 py-0.5 rounded-full text-jade-400">
                                {practice.level}
                              </span>
                            </div>
                            <h3 className="text-xl font-serif text-gold-500">{practice.title}</h3>
                          </div>
                          <div className="flex items-center text-stone-400">
                            <Clock className="w-4 h-4 mr-1" />
                            <span className="text-sm">{practice.duration}</span>
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
                        
                        <div className="flex justify-end">
                          <a 
                            href={`/practice/${practice.id}`}
                            className="px-4 py-2 bg-jade-500 hover:bg-jade-600 text-stone-100 rounded-lg transition-colors"
                          >
                            Begin Practice
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="md:col-span-4 space-y-8">
            {/* Progress Summary */}
            <div className="bg-stone-800/30 rounded-xl p-6 border border-jade-500/10">
              <h3 className="text-xl font-serif text-gold-500 mb-4">Your Progress</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-stone-300">Overall Progress</p>
                    <p className="text-jade-500 font-medium">Level {userData.level}</p>
                  </div>
                  <div className="w-full h-2 bg-stone-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-jade-500" 
                      style={{ width: `${userData.level * 20}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-stone-300">Daoist Yoga</p>
                    <p className="text-stone-400 text-sm">12 sessions</p>
                  </div>
                  <div className="w-full h-2 bg-stone-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-jade-500" 
                      style={{ width: '35%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-stone-300">QiGong</p>
                    <p className="text-stone-400 text-sm">8 sessions</p>
                  </div>
                  <div className="w-full h-2 bg-stone-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gold-500" 
                      style={{ width: '25%' }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-stone-300">Meditation</p>
                    <p className="text-stone-400 text-sm">8 sessions</p>
                  </div>
                  <div className="w-full h-2 bg-stone-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500" 
                      style={{ width: '20%' }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-stone-700">
                <a 
                  href="/profile"
                  className="text-jade-500 hover:text-jade-400 text-sm font-medium transition-colors flex items-center justify-center gap-1"
                >
                  View Detailed Progress
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Next Achievement */}
            <div className="bg-stone-800/30 rounded-xl p-6 border border-jade-500/10">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-gold-500" />
                <h3 className="text-xl font-serif text-gold-500">Next Achievement</h3>
              </div>
              
              <div className="bg-stone-700/30 p-4 rounded-lg border border-gold-500/10">
                <h4 className="text-gold-400 font-medium mb-2">Channel Opener</h4>
                <p className="text-stone-300 text-sm mb-4">
                  Complete 15 Daoist Yoga sessions to open the main energy channels.
                </p>
                <div className="w-full h-2 bg-stone-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gold-500" 
                    style={{ width: '80%' }}
                  ></div>
                </div>
                <p className="text-stone-400 text-xs mt-2 text-right">12/15 sessions</p>
              </div>
              
              <div className="mt-4 text-center">
                <a 
                  href="/profile/achievements"
                  className="text-gold-500 hover:text-gold-400 text-sm font-medium transition-colors"
                >
                  View All Achievements
                </a>
              </div>
            </div>
            
            {/* Practice Reminder */}
            <div className="bg-gradient-to-br from-jade-500/20 to-gold-500/20 rounded-xl p-6 border border-jade-500/20">
              <h3 className="text-xl font-serif text-gold-500 mb-3">Daily Reminder</h3>
              <p className="text-stone-300 mb-4">
                Consistency is key to progress. Even a short daily practice creates lasting transformation.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-stone-400 text-sm">Today's goal: 15 min</span>
                <a 
                  href="/practice/quick"
                  className="px-4 py-2 bg-jade-500 hover:bg-jade-600 text-stone-100 rounded-lg text-sm transition-colors"
                >
                  Quick Practice
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedPractice;