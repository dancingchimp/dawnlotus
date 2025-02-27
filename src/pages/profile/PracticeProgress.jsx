// src/components/profile/PracticeProgress.jsx
import React from 'react';

const PracticeProgress = ({ userData }) => {
  // Mock progress data
  const progressStages = [
    { id: 1, name: "Foundation", description: "Establishing basic postures and breathing" },
    { id: 2, name: "Channel Opening", description: "Opening energy pathways for circulation", current: true },
    { id: 3, name: "Energy Building", description: "Accumulating and storing vital energy" },
    { id: 4, name: "Flow & Integration", description: "Creating continuous energy movement" },
    { id: 5, name: "Refinement", description: "Transforming energy to higher states" }
  ];
  
  // Practice stats by category
  const practiceStats = [
    { 
      category: "Daoist Yoga", 
      sessions: 12, 
      minutes: 360, 
      progress: 35,
      color: "bg-jade-500"
    },
    { 
      category: "QiGong", 
      sessions: 8, 
      minutes: 240, 
      progress: 25,
      color: "bg-gold-500"
    },
    { 
      category: "Meditation", 
      sessions: 8, 
      minutes: 240, 
      progress: 20,
      color: "bg-emerald-500"
    }
  ];
  
  // Recent activity feed
  const recentActivity = [
    { 
      id: 1,
      date: "Feb 23",
      practice: "Morning Flow",
      category: "Daoist Yoga",
      duration: "30 min",
      achievement: "Completed 10th session"
    },
    { 
      id: 2,
      date: "Feb 22",
      practice: "Ba Duan Jin",
      category: "QiGong",
      duration: "15 min",
      achievement: null
    },
    { 
      id: 3,
      date: "Feb 21",
      practice: "Energy Circulation",
      category: "Meditation",
      duration: "20 min",
      achievement: "Started meditation journey"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Progress Path */}
      <div className="bg-stone-800/30 rounded-xl p-6 border border-jade-500/10">
        <h3 className="text-xl font-serif text-gold-500 mb-4">Your Path</h3>
        
        {/* Progress timeline */}
        <div className="relative">
          {/* Horizontal progress line */}
          <div className="absolute top-6 left-4 right-4 h-0.5 bg-stone-700"></div>
          <div className="absolute top-6 left-4 h-0.5 bg-jade-500" style={{ width: `${(userData.level - 1) * 25}%` }}></div>
          
          {/* Progress stages */}
          <div className="grid grid-cols-5 relative">
            {progressStages.map((stage, index) => (
              <div key={stage.id} className="flex flex-col items-center text-center px-1">
                <div className={`w-5 h-5 rounded-full mb-4 flex items-center justify-center z-10 
                                ${index < userData.level ? 'bg-jade-500' : 
                                 index === userData.level - 1 ? 'bg-jade-500 ring-2 ring-jade-500/30 ring-offset-2 ring-offset-stone-800' : 
                                 'bg-stone-700'}`}>
                  {index < userData.level && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-stone-900" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <h4 className={`text-sm font-medium ${stage.current ? 'text-jade-500' : 'text-stone-300'}`}>{stage.name}</h4>
                <p className="text-xs text-stone-400 mt-1 hidden md:block">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Current phase details */}
        <div className="mt-8 bg-stone-700/30 p-4 rounded-lg border border-jade-500/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className="text-jade-500 font-medium">Currently in {userData.phase} Phase</h4>
              <p className="text-stone-300 text-sm mt-1">
                Focus on opening energy channels through specific postures and breathing techniques.
              </p>
            </div>
            <a 
              href="/practice" 
              className="px-4 py-2 bg-jade-500 hover:bg-jade-600 text-stone-100 rounded-lg 
                       transition-colors text-sm whitespace-nowrap"
            >
              Continue Practice
            </a>
          </div>
        </div>
      </div>
      
      {/* Practice Statistics */}
      <div className="bg-stone-800/30 rounded-xl p-6 border border-jade-500/10">
        <h3 className="text-xl font-serif text-gold-500 mb-4">Practice Statistics</h3>
        
        <div className="space-y-6">
          {practiceStats.map((stat, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${stat.color}`}></div>
                  <h4 className="text-stone-300 font-medium">{stat.category}</h4>
                </div>
                <div className="text-stone-400 text-sm">
                  {stat.sessions} sessions · {stat.minutes} minutes
                </div>
              </div>
              <div className="w-full h-2 bg-stone-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${stat.color}`}
                  style={{ width: `${stat.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="bg-stone-800/30 rounded-xl p-6 border border-jade-500/10">
        <h3 className="text-xl font-serif text-gold-500 mb-4">Recent Activity</h3>
        
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div 
              key={activity.id}
              className="bg-stone-700/30 p-4 rounded-lg border border-stone-700 flex flex-col md:flex-row md:items-center gap-3 justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-stone-400 text-xs">{activity.date}</p>
                  <p className="text-jade-400 font-medium">{activity.practice}</p>
                </div>
                <p className="text-stone-300 text-sm">{activity.category} · {activity.duration}</p>
              </div>
              {activity.achievement && (
                <div className="bg-gold-500/10 text-gold-400 text-xs px-3 py-1 rounded-full">
                  {activity.achievement}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeProgress;