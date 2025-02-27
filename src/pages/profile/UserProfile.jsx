// src/pages/profile/UserProfile.jsx
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import PracticeProgress from '../../components/profile/PracticeProgress';
import { User, Calendar, Award, Settings, BookOpen } from 'lucide-react';

const UserProfile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('progress');
  
  // Mock user data based on screenshot
  const userData = {
    name: user?.name || "Harmony Seeker",
    level: 2,
    phase: "Channel Opening",
    lastPractice: "Feb 23",
    completedSessions: 28,
    totalMinutes: 840,
    currentStreak: 4,
    longestStreak: 12
  };
  
  // Mock practice recommendations
  const recommendedPractices = [
    {
      id: 1,
      title: "Standing Foundation",
      category: "Daoist Yoga",
      duration: "20 min",
      level: "Beginner",
      description: "Standing postures to develop rooted stability and energy awareness."
    },
    {
      id: 2,
      title: "Ba Duan Jin",
      category: "QiGong",
      duration: "15 min",
      level: "Beginner",
      description: "Eight Brocades sequence for overall health and energy circulation."
    },
    {
      id: 3,
      title: "Microcosmic Orbit",
      category: "Meditation",
      duration: "10 min",
      level: "Intermediate",
      description: "Guided energy circulation through the central channel."
    }
  ];
  
  // Render tab content based on active tab
  const renderTabContent = () => {
    switch(activeTab) {
      case 'progress':
        return <PracticeProgress userData={userData} />;
      case 'history':
        return (
          <div className="bg-stone-800/30 rounded-xl p-6 border border-jade-500/10">
            <h3 className="text-xl font-serif text-gold-500 mb-4">Practice History</h3>
            <div className="text-stone-300 text-center py-8">
              <Calendar className="w-16 h-16 mx-auto mb-4 text-jade-500 opacity-40" />
              <p>Your practice history will be displayed here.</p>
              <p className="text-stone-400 text-sm mt-2">Continue your practice journey to see your statistics.</p>
            </div>
          </div>
        );
      case 'achievements':
        return (
          <div className="bg-stone-800/30 rounded-xl p-6 border border-jade-500/10">
            <h3 className="text-xl font-serif text-gold-500 mb-4">Achievements</h3>
            <div className="text-stone-300 text-center py-8">
              <Award className="w-16 h-16 mx-auto mb-4 text-gold-500 opacity-40" />
              <p>Your achievements will be displayed here as you progress.</p>
              <p className="text-stone-400 text-sm mt-2">Complete practices regularly to earn recognition.</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="bg-stone-800/30 rounded-xl p-6 border border-jade-500/10">
            <h3 className="text-xl font-serif text-gold-500 mb-4">Account Settings</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-stone-300 mb-2">Display Name</label>
                <input 
                  type="text" 
                  defaultValue={userData.name}
                  className="w-full bg-stone-700 border border-stone-600 rounded-lg px-4 py-2 text-stone-300 focus:outline-none focus:ring-2 focus:ring-jade-500"
                />
              </div>
              <div>
                <label className="block text-stone-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  defaultValue="user@example.com"
                  className="w-full bg-stone-700 border border-stone-600 rounded-lg px-4 py-2 text-stone-300 focus:outline-none focus:ring-2 focus:ring-jade-500"
                />
              </div>
              <div>
                <label className="block text-stone-300 mb-2">Practice Reminders</label>
                <select className="w-full bg-stone-700 border border-stone-600 rounded-lg px-4 py-2 text-stone-300 focus:outline-none focus:ring-2 focus:ring-jade-500">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>None</option>
                </select>
              </div>
              <div className="pt-4">
                <button className="bg-jade-500 hover:bg-jade-600 text-stone-100 px-6 py-2 rounded-lg transition-colors">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        );
      default:
        return <PracticeProgress userData={userData} />;
    }
  };
  
  return (
    <div className="min-h-screen bg-stone-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Profile Header */}
        <div className="bg-stone-800/30 rounded-xl p-6 mb-8 border border-jade-500/10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Profile Avatar */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-jade-500/10 flex items-center justify-center">
                <User className="w-12 h-12 text-jade-500" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-stone-900 font-bold">
                {userData.level}
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-serif text-gold-500 mb-1">{userData.name}</h1>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div>
                  <p className="text-stone-400 text-sm">Level</p>
                  <p className="text-stone-300">{userData.level}</p>
                </div>
                <div>
                  <p className="text-stone-400 text-sm">Phase</p>
                  <p className="text-stone-300">{userData.phase}</p>
                </div>
                <div>
                  <p className="text-stone-400 text-sm">Last practice</p>
                  <p className="text-stone-300">{userData.lastPractice}</p>
                </div>
              </div>
            </div>
            
            {/* Practice Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-jade-500">{userData.completedSessions}</p>
                <p className="text-stone-400 text-xs">Sessions</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-jade-500">{userData.totalMinutes}</p>
                <p className="text-stone-400 text-xs">Minutes</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-jade-500">{userData.currentStreak}</p>
                <p className="text-stone-400 text-xs">Day Streak</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex mb-6 border-b border-stone-700 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('progress')}
            className={`px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'progress' 
                ? 'text-jade-500 border-b-2 border-jade-500' 
                : 'text-stone-400 hover:text-stone-300'
            }`}
          >
            Progress
          </button>
          <button 
            onClick={() => setActiveTab('history')}
            className={`px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'history' 
                ? 'text-jade-500 border-b-2 border-jade-500' 
                : 'text-stone-400 hover:text-stone-300'
            }`}
          >
            History
          </button>
          <button 
            onClick={() => setActiveTab('achievements')}
            className={`px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'achievements' 
                ? 'text-jade-500 border-b-2 border-jade-500' 
                : 'text-stone-400 hover:text-stone-300'
            }`}
          >
            Achievements
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'settings' 
                ? 'text-jade-500 border-b-2 border-jade-500' 
                : 'text-stone-400 hover:text-stone-300'
            }`}
          >
            Settings
          </button>
        </div>
        
        {/* Tab Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            {renderTabContent()}
          </div>
          
          {/* Sidebar - Recommended Practices */}
          <div className="md:col-span-1">
            <div className="bg-stone-800/30 rounded-xl p-6 border border-jade-500/10">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-jade-500" />
                <h3 className="text-xl font-serif text-gold-500">Recommended for You</h3>
              </div>
              <div className="space-y-4">
                {recommendedPractices.map(practice => (
                  <div 
                    key={practice.id} 
                    className="bg-stone-700/30 rounded-lg p-4 border border-stone-700 hover:border-jade-500/30 transition-all cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-jade-400 font-medium">{practice.title}</h4>
                      <span className="text-xs bg-stone-700 px-2 py-0.5 rounded-full text-stone-400">
                        {practice.duration}
                      </span>
                    </div>
                    <p className="text-stone-400 text-sm mb-2">{practice.category} · {practice.level}</p>
                    <p className="text-stone-300 text-sm">{practice.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <a 
                  href="/practice" 
                  className="inline-block text-jade-500 hover:text-jade-400 text-sm font-medium transition-colors"
                >
                  View All Practices →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;