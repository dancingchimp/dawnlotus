// src/pages/Progress.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import UserProgressTracker from '../components/user/UserProgressTracker';
import { useAuth } from '../context/AuthContext'; // If using AuthContext

function Progress() {
  // Get current user data from auth context
  const { currentUser } = useAuth();

  // Mock user data for development/testing (would be replaced by currentUser in production)
  const userData = currentUser || {
    displayName: 'Harmony Seeker',
    userLevel: 2,
    nextMilestone: 'Channel Opening Phase',
    overview: {
      totalPractices: 48,
      totalHours: 29.5,
      currentStreak: 6,
      longestStreak: 14,
      consistency: 78,
      lastPractice: '2025-02-24',
      completedSequences: 9,
    },
    developmentPhases: [
      {
        id: 'physical-foundation',
        name: 'Physical Foundation',
        chinese: '身體基礎',
        description: 'Establishing proper structure and alignment',
        progress: 85,
        completed: true,
        icon: 'Layers',
        milestones: [
          { name: 'Basic Alignment Mastery', completed: true },
          { name: 'Core Stability Development', completed: true },
          { name: 'Foundational Flexibility', completed: true },
          { name: 'Joint Mobility', completed: true }
        ]
      },
      {
        id: 'energy-awareness',
        name: 'Energy Awareness',
        chinese: '能量覺知',
        description: 'Developing sensitivity to subtle energy',
        progress: 60,
        completed: false,
        icon: 'Zap',
        milestones: [
          { name: 'Breath Cultivation', completed: true },
          { name: 'Lower Dantian Formation', completed: true },
          { name: 'Energy Sensation', completed: true },
          { name: 'Micro-Circulation', completed: false }
        ]
      },
      {
        id: 'channel-opening',
        name: 'Channel Opening',
        chinese: '經絡打開',
        description: 'Opening primary meridian pathways',
        progress: 15,
        completed: false,
        current: true,
        icon: 'Wind',
        milestones: [
          { name: 'Central Channel Activation', completed: true },
          { name: 'Arm Meridian Opening', completed: false },
          { name: 'Leg Meridian Opening', completed: false },
          { name: 'Governing/Conception Vessel Balance', completed: false }
        ]
      }
    ]
  };
  
  return (
    <div className="min-h-screen bg-stone-900 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-chinese text-3xl text-gold-400 mb-4">修練進度</h2>
          <h1 className="text-4xl font-serif text-stone-100 mb-6">
            Your Practice Journey
          </h1>
          <p className="text-xl text-stone-200 max-w-3xl mx-auto">
            Track your development through the stages of Daoist Yoga practice,
            from physical foundation to energy cultivation and spiritual refinement.
          </p>
        </div>
        
        <UserProgressTracker userData={userData} />
        
        {/* Practice Suggestions Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-stone-800/30 border border-jade-400 rounded-xl p-6">
            <h3 className="text-2xl font-serif text-gold-400 mb-4">Next Steps</h3>
            <p className="text-stone-200 mb-6">
              Based on your current progress in the Channel Opening phase, 
              these practices will help you develop further:
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-stone-800/50 rounded-lg border border-jade-400/20">
                <div className="w-12 h-12 bg-jade-700 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-jade-300">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-jade-300">Central Channel Meditation</h4>
                  <p className="text-stone-300 text-sm">15 minutes - Focus on central axis connection</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-stone-800/50 rounded-lg border border-jade-400/20">
                <div className="w-12 h-12 bg-jade-700 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-jade-300">
                    <path d="M2 12h20"></path>
                    <path d="M12 2v20"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-jade-300">Arm Meridian Practice</h4>
                  <p className="text-stone-300 text-sm">20 minutes - Opening Lung and Large Intestine channels</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Link 
                to="/practice/recommended"
                className="inline-block w-full bg-jade-600 hover:bg-jade-500 text-stone-100 py-3 px-4 rounded-lg text-center transition-colors"
              >
                Begin Recommended Practice
              </Link>
            </div>
          </div>
          
          <div className="bg-stone-800/30 border border-gold-400 rounded-xl p-6">
            <h3 className="text-2xl font-serif text-gold-400 mb-4">Practice Log</h3>
            <p className="text-stone-200 mb-6">
              Record your practice sessions to track progress and receive personalized recommendations.
            </p>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-stone-300 text-sm">Practice Type</label>
                <select className="bg-stone-700 border border-stone-600 text-stone-200 rounded-lg p-2">
                  <option>-- Select Practice Type --</option>
                  <option>Foundation Sequence</option>
                  <option>Meridian Flow</option>
                  <option>Five Elements</option>
                  <option>Standing Meditation</option>
                  <option>Custom Practice</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-stone-300 text-sm">Practice Duration (minutes)</label>
                <input 
                  type="number" 
                  min="5" 
                  max="120" 
                  className="bg-stone-700 border border-stone-600 text-stone-200 rounded-lg p-2"
                  placeholder="Duration in minutes"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-stone-300 text-sm">Notes & Sensations</label>
                <textarea 
                  className="bg-stone-700 border border-stone-600 text-stone-200 rounded-lg p-2 h-20"
                  placeholder="Describe any energy sensations or insights from your practice..."
                ></textarea>
              </div>
            </div>
            <div className="mt-6">
              <Link 
                to="/log-practice"
                className="inline-block w-full bg-gold-700 hover:bg-gold-600 text-stone-100 py-3 px-4 rounded-lg text-center transition-colors"
              >
                Log Practice Session
              </Link>
            </div>
          </div>
        </div>
        
        {/* Practice History Preview */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-serif text-gold-400">Recent Practice History</h3>
            <Link 
              to="/practice-history"
              className="text-jade-300 hover:text-jade-400 transition-colors text-sm"
            >
              View All
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-800/30 border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <h4 className="text-jade-300">Foundation Sequence</h4>
                <span className="text-stone-400 text-sm">Feb 24, 2025</span>
              </div>
              <div className="text-stone-300 text-sm mb-3">35 minutes</div>
              <p className="text-stone-200 text-sm italic mb-3">
                "Lower dantian field stabilizing, beginning to form coherent boundary"
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-jade-700 text-jade-300 px-2 py-1 rounded-full">
                  Lower Dantian +5%
                </span>
                <span className="text-xs bg-jade-700 text-jade-300 px-2 py-1 rounded-full">
                  Breath Coordination +3%
                </span>
              </div>
            </div>
            
            <div className="bg-stone-800/30 border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <h4 className="text-jade-300">Morning Energy Cultivation</h4>
                <span className="text-stone-400 text-sm">Feb 23, 2025</span>
              </div>
              <div className="text-stone-300 text-sm mb-3">45 minutes</div>
              <p className="text-stone-200 text-sm italic mb-3">
                "First sensation of energy movement along central channel"
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-jade-700 text-jade-300 px-2 py-1 rounded-full">
                  Central Channel +5%
                </span>
                <span className="text-xs bg-jade-700 text-jade-300 px-2 py-1 rounded-full">
                  Channel Opening +6%
                </span>
              </div>
            </div>
            
            <div className="bg-stone-800/30 border border-stone-700 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <h4 className="text-jade-300">Breath Work + Eight Brocades</h4>
                <span className="text-stone-400 text-sm">Feb 22, 2025</span>
              </div>
              <div className="text-stone-300 text-sm mb-3">25 minutes</div>
              <p className="text-stone-200 text-sm italic mb-3">
                "Eight Brocades practice helped identify blockage in right arm meridian"
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-jade-700 text-jade-300 px-2 py-1 rounded-full">
                  Breath Coordination +8%
                </span>
                <span className="text-xs bg-jade-700 text-jade-300 px-2 py-1 rounded-full">
                  Energy Sensitivity +2%
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Development Path Reminder */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-serif text-gold-400 mb-4">Your Daoist Yoga Development Path</h3>
          <div className="max-w-2xl mx-auto flex items-center justify-between p-4 bg-stone-800/30 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-jade-600/20 flex items-center justify-center text-jade-300">1</div>
              <div className="text-stone-200">Physical Foundation</div>
            </div>
            <div className="h-0.5 w-12 bg-jade-400"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-jade-600/20 flex items-center justify-center text-jade-300">2</div>
              <div className="text-stone-200">Energy Awareness</div>
            </div>
            <div className="h-0.5 w-12 bg-jade-400"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-600/30 flex items-center justify-center text-gold-300">3</div>
              <div className="text-gold-300 font-medium">Channel Opening</div>
            </div>
            <div className="h-0.5 w-12 bg-stone-600"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center text-stone-500">4</div>
              <div className="text-stone-500">Energy Circulation</div>
            </div>
          </div>
          <p className="mt-6 text-stone-300 italic">
            "The path of transformation begins with physical foundation and gradually shifts toward subtler energy work.
            Each stage builds upon the last."
          </p>
        </div>
      </div>
    </div>
  );
}

export default Progress;