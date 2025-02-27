// src/pages/profile/UserAchievements.jsx
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Award, ArrowLeft } from 'lucide-react';

const UserAchievements = () => {
  const { user } = useAuth();
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Mock user data if not available from auth context
  const userData = user || {
    name: "Harmony Seeker",
    level: 2,
    completedSessions: 28
  };
  
  // Achievement categories
  const categories = [
    { id: 'all', name: 'All Achievements' },
    { id: 'practice', name: 'Practice' },
    { id: 'progress', name: 'Progress' },
    { id: 'special', name: 'Special' }
  ];
  
  // Mock achievements data
  const achievements = [
    {
      id: 1,
      title: 'First Step',
      description: 'Complete your first practice session',
      category: 'practice',
      icon: '🌱',
      achieved: true,
      achievedDate: '2024-02-01',
      progress: 100,
      reward: 'Level 1 access'
    },
    {
      id: 2,
      title: 'Consistent Practitioner',
      description: 'Practice for 7 consecutive days',
      category: 'practice',
      icon: '🔥',
      achieved: false,
      progress: 57, // 4/7 days
      reward: 'Streak badge'
    },
    {
      id: 3,
      title: 'Channel Opener',
      description: 'Complete 15 Daoist Yoga sessions',
      category: 'progress',
      icon: '⚡',
      achieved: false,
      progress: 80, // 12/15 sessions
      reward: 'Channel Opening certificate'
    },
    {
      id: 4,
      title: 'Energy Explorer',
      description: 'Try all practice categories at least once',
      category: 'practice',
      icon: '🧭',
      achieved: true,
      achievedDate: '2024-02-15',
      progress: 100,
      reward: 'Practice variety badge'
    },
    {
      id: 5,
      title: 'QiGong Initiate',
      description: 'Complete 10 QiGong sessions',
      category: 'progress',
      icon: '🌀',
      achieved: false,
      progress: 80, // 8/10 sessions
      reward: 'QiGong fundamentals badge'
    },
    {
      id: 6,
      title: 'Early Riser',
      description: 'Complete 5 morning practices',
      category: 'special',
      icon: '🌅',
      achieved: true,
      achievedDate: '2024-02-10',
      progress: 100,
      reward: 'Morning practice guide'
    },
    {
      id: 7,
      title: 'Deep Diver',
      description: 'Complete a 30-minute meditation',
      category: 'progress',
      icon: '🌊',
      achieved: false,
      progress: 66, // 20/30 minutes
      reward: 'Advanced meditation techniques'
    },
    {
      id: 8,
      title: 'Level 2 Reached',
      description: 'Advance to Level 2 in your practice journey',
      category: 'progress',
      icon: '🏆',
      achieved: true,
      achievedDate: '2024-02-20',
      progress: 100,
      reward: 'Level 2 content access'
    }
  ];
  
  // Filter achievements based on active category
  const filteredAchievements = activeCategory === 'all' 
    ? achievements 
    : achievements.filter(a => a.category === activeCategory);
  
  // Sort achievements: achieved first, then by progress
  const sortedAchievements = [...filteredAchievements].sort((a, b) => {
    if (a.achieved && !b.achieved) return -1;
    if (!a.achieved && b.achieved) return 1;
    return b.progress - a.progress;
  });
  
  // Calculate overall stats
  const totalAchievements = achievements.length;
  const completedAchievements = achievements.filter(a => a.achieved).length;
  const completionPercentage = Math.round((completedAchievements / totalAchievements) * 100);

  return (
    <div className="min-h-screen bg-stone-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center mb-8">
          <a 
            href="/profile"
            className="flex items-center gap-2 text-stone-400 hover:text-stone-300 transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Profile</span>
          </a>
          
          <div>
            <h1 className="text-2xl font-serif text-gold-500">Achievements</h1>
            <p className="text-stone-400">
              Track your progress and earn recognition
            </p>
          </div>
        </div>
        
        {/* Achievement Summary */}
        <div className="bg-stone-800/30 rounded-xl p-6 border border-jade-500/10 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-xl font-serif text-gold-500 mb-2">Your Achievements</h2>
              <p className="text-stone-300">
                You've completed {completedAchievements} of {totalAchievements} achievements
              </p>
            </div>
            
            <div className="w-full md:w-1/3 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full border-4 border-gold-500/30 flex items-center justify-center">
                <span className="text-xl font-bold text-gold-500">{completionPercentage}%</span>
              </div>
              <div className="flex-1">
                <div className="w-full h-2 bg-stone-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gold-500"
                    style={{ width: `${completionPercentage}%` }}
                  ></div>
                </div>
                <p className="text-stone-400 text-sm mt-1">Overall completion</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Category Tabs */}
        <div className="flex overflow-x-auto mb-6 border-b border-stone-700">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-3 whitespace-nowrap transition-colors ${
                activeCategory === category.id
                  ? 'text-gold-500 border-b-2 border-gold-500'
                  : 'text-stone-400 hover:text-stone-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedAchievements.map(achievement => (
            <div 
              key={achievement.id}
              className={`bg-stone-800/30 rounded-xl p-6 border transition-all ${
                achievement.achieved
                  ? 'border-gold-500/30'
                  : 'border-stone-700'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl
                                bg-stone-800 border-2 border-stone-700">
                  {achievement.icon}
                </div>
                {achievement.achieved && (
                  <span className="bg-gold-500/10 text-gold-500 text-xs px-3 py-1 rounded-full">
                    Achieved
                  </span>
                )}
              </div>
              
              <h3 className={`text-lg font-medium mb-2 ${
                achievement.achieved ? 'text-gold-500' : 'text-stone-300'
              }`}>
                {achievement.title}
              </h3>
              
              <p className="text-stone-400 text-sm mb-4">{achievement.description}</p>
              
              {/* Progress bar */}
              <div className="w-full h-2 bg-stone-700 rounded-full overflow-hidden mb-2">
                <div 
                  className={`h-full ${achievement.achieved ? 'bg-gold-500' : 'bg-jade-500'}`}
                  style={{ width: `${achievement.progress}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between items-center text-xs">
                <span className="text-stone-500">
                  {achievement.achieved 
                    ? `Achieved on ${achievement.achievedDate}` 
                    : `${achievement.progress}% complete`}
                </span>
                <span className="text-stone-400">Reward: {achievement.reward}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserAchievements;