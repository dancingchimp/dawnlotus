// src/components/user/UserProgressTracker.jsx
// User progression tracking system for Harmony Gate

import React, { useState } from 'react';
import { Battery, ArrowRight, Clock, Calendar, BarChart, CheckCircle2, CircleDashed, Layers, Zap, Activity, Wind, Heart } from 'lucide-react';

const UserProgressTracker = () => {
  const [activeView, setActiveView] = useState('overview');
  
      // User progression data with clear developmental milestones
  const userData = {
    userLevel: 2,
    nextMilestone: 'Channel Opening Phase',
    displayName: 'Harmony Seeker',
    overview: {
      totalPractices: 48,
      totalHours: 29.5,
      currentStreak: 6,
      longestStreak: 14,
      consistency: 78, // percentage
      lastPractice: '2025-02-24', // yesterday
      completedSequences: 9,
    },
    developmentPhases: [
      {
        id: 'physical-foundation',
        name: 'Physical Foundation',
        chinese: '身體基礎',
        description: 'Establishing proper structure and alignment',
        progress: 85, // percentage completed
        completed: true,
        icon: Layers,
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
        icon: Zap,
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
        icon: Wind,
        milestones: [
          { name: 'Central Channel Activation', completed: true },
          { name: 'Arm Meridian Opening', completed: false },
          { name: 'Leg Meridian Opening', completed: false },
          { name: 'Governing/Conception Vessel Balance', completed: false }
        ]
      },
      {
        id: 'energy-circulation',
        name: 'Energy Circulation',
        chinese: '能量循環',
        description: 'Developing free flow of qi throughout system',
        progress: 0,
        completed: false,
        icon: Activity,
        milestones: [
          { name: 'Small Circulation', completed: false },
          { name: 'Grand Circulation', completed: false },
          { name: 'Five Element Balance', completed: false },
          { name: 'Organ Energy Harmonization', completed: false }
        ]
      },
      {
        id: 'spiritual-refinement',
        name: 'Spiritual Refinement',
        chinese: '精神提煉',
        description: 'Refining energy toward higher vibration',
        progress: 0,
        completed: false,
        icon: Heart,
        milestones: [
          { name: 'Jing to Qi Transformation', completed: false },
          { name: 'Qi to Shen Refinement', completed: false },
          { name: 'Three Dantian Integration', completed: false },
          { name: 'Spiritual Awareness Expansion', completed: false }
        ]
      }
    ],
    skills: [
      { 
        name: 'Foundation Alignment', 
        chinese: '基礎對齊',
        level: 5, // Mastered
        maxLevel: 5,
        progress: 100,
        phase: 'physical-foundation',
        lastImprovement: '2025-01-15',
        description: 'Proper structural alignment in foundational postures'
      },
      { 
        name: 'Breath Coordination', 
        chinese: '呼吸協調',
        level: 4, 
        maxLevel: 5,
        progress: 30,
        phase: 'energy-awareness',
        lastImprovement: '2025-02-22',
        description: 'Coordination of breath with movement and energy direction'
      },
      { 
        name: 'Lower Dantian Formation', 
        chinese: '下丹田形成',
        level: 2, 
        maxLevel: 5,
        progress: 45,
        phase: 'energy-awareness',
        lastImprovement: '2025-02-24',
        description: 'Formation and filling of the lower energy center (15% capacity)'
      },
      { 
        name: 'Channel Opening', 
        chinese: '經絡打開',
        level: 1, 
        maxLevel: 5,
        progress: 60,
        phase: 'channel-opening',
        lastImprovement: '2025-02-18',
        description: 'Opening and clearing of primary meridian pathways'
      },
      { 
        name: 'Energy Sensitivity', 
        chinese: '能量敏感度',
        level: 3, 
        maxLevel: 5,
        progress: 20,
        phase: 'energy-awareness',
        lastImprovement: '2025-02-15',
        description: 'Awareness and sensitivity to subtle energy movements'
      },
      { 
        name: 'Central Channel Activation', 
        chinese: '中脈激活',
        level: 1, 
        maxLevel: 5,
        progress: 25,
        phase: 'channel-opening',
        lastImprovement: '2025-02-20',
        description: 'Opening and activation of the central energy pathway'
      }
    ],
    recentPractices: [
      {
        date: '2025-02-24',
        duration: 35,
        name: 'Foundation Sequence + Standing Meditation',
        improvements: ['Lower Dantian Formation +5%', 'Breath Coordination +3%'],
        notes: 'Lower dantian field stabilizing, beginning to form coherent boundary'
      },
      {
        date: '2025-02-23',
        duration: 45,
        name: 'Morning Energy Cultivation',
        improvements: ['Central Channel Activation +5%', 'Channel Opening +6%'],
        notes: 'First sensation of energy movement along central channel'
      },
      {
        date: '2025-02-22',
        duration: 25,
        name: 'Breath Work + Eight Brocades',
        improvements: ['Breath Coordination +8%', 'Energy Sensitivity +2%'],
        notes: 'Eight Brocades practice helped identify blockage in right arm meridian'
      },
      {
        date: '2025-02-21',
        duration: 30,
        name: 'Standing Post Practice',
        improvements: ['Lower Dantian Formation +4%', 'Energy Sensitivity +3%'],
        notes: 'Standing for 15 minutes with stable sensation in lower dantian'
      }
    ],
    recommendations: [
      {
        name: 'Central Channel Meditation',
        focus: 'Channel Opening',
        description: 'Focus on the central energy pathway to further development',
        duration: 20,
        level: 'Intermediate',
        benefits: ['Accelerate Central Channel opening', 'Prepare for Small Circulation practice']
      },
      {
        name: 'Lower Dantian Consolidation',
        focus: 'Lower Dantian Formation',
        description: 'Strengthen and expand the Lower Dantian field',
        duration: 15,
        level: 'Beginner-Intermediate',
        benefits: ['Increase Dantian capacity to 20%', 'Stabilize energy storage']
      }
    ]
  };
  
  // Navigation options
  const views = [
    { id: 'overview', name: 'Overview', icon: Battery },
    { id: 'development', name: 'Development Path', icon: Layers },
    { id: 'skills', name: 'Skills', icon: BarChart },
    { id: 'history', name: 'History', icon: Calendar },
    { id: 'recommendations', name: 'Next Steps', icon: ArrowRight },
  ];
  
  // Format date string
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Get active phase
  const activePhase = userData.developmentPhases.find(phase => phase.current);

  return (
    <div className="bg-stone-800/30 rounded-xl border border-jade-500/10 overflow-hidden">
              {/* Navigation Tabs */}
      <div className="flex overflow-x-auto border-b border-stone-700">
        {views.map(view => (
          <button
            key={view.id}
            className={`flex items-center gap-2 px-4 py-3 text-sm transition-colors whitespace-nowrap
              ${activeView === view.id 
                ? 'bg-stone-800 text-gold-400 border-b-2 border-gold-400' 
                : 'text-stone-300 hover:text-gold-300 hover:bg-stone-800'}`}
            onClick={() => setActiveView(view.id)}
          >
            <view.icon className="w-4 h-4" />
            <span>{view.name}</span>
          </button>
        ))}
      </div>
      
      {/* Content Area */}
      <div className="p-6">
        {/* Overview Section */}
        {activeView === 'overview' && (
          <div className="space-y-6">
            {/* Development Level Banner */}
            <div className="bg-gradient-to-r from-jade-800 to-gold-800 p-4 rounded-lg border border-jade-400">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-stone-200 mb-1">Welcome, <span className="text-gold-300">{userData.displayName}</span></p>
                  <h3 className="text-gold-400 font-serif mb-1">Development Level {userData.userLevel}</h3>
                  <p className="text-stone-200">Current focus: <span className="text-jade-300">{userData.nextMilestone}</span></p>
                </div>
                <div className="flex items-center gap-2">
                  {activePhase && (
                    <div className="bg-stone-800/50 px-3 py-1 rounded-full flex items-center gap-2">
                      <activePhase.icon className="w-4 h-4 text-jade-500" />
                      <span className="text-jade-500 text-sm">{activePhase.progress}% Complete</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-stone-800/50 p-4 rounded-lg border border-stone-700">
                <div className="flex items-center gap-2 text-stone-400 text-sm mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Total Practice</span>
                </div>
                <div className="text-2xl font-serif text-jade-400">{userData.overview.totalHours} hrs</div>
                <div className="text-stone-300 text-sm">{userData.overview.totalPractices} sessions</div>
              </div>
              
              <div className="bg-stone-800/50 p-4 rounded-lg border border-stone-700">
                <div className="flex items-center gap-2 text-stone-400 text-sm mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>Current Streak</span>
                </div>
                <div className="text-2xl font-serif text-gold-400">{userData.overview.currentStreak} days</div>
                <div className="text-stone-300 text-sm">Longest: {userData.overview.longestStreak} days</div>
              </div>
              
              <div className="bg-stone-800/50 p-4 rounded-lg border border-stone-700">
                <div className="flex items-center gap-2 text-stone-400 text-sm mb-1">
                  <BarChart className="w-4 h-4" />
                  <span>Consistency</span>
                </div>
                <div className="text-2xl font-serif text-jade-400">{userData.overview.consistency}%</div>
                <div className="text-stone-300 text-sm">Last: {formatDate(userData.overview.lastPractice)}</div>
              </div>
              
              <div className="bg-stone-800/50 p-4 rounded-lg border border-stone-700">
                <div className="flex items-center gap-2 text-stone-400 text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Sequences</span>
                </div>
                <div className="text-2xl font-serif text-gold-400">{userData.overview.completedSequences}</div>
                <div className="text-stone-300 text-sm">Full sequences completed</div>
              </div>
            </div>
            
            {/* Current Phase Highlight */}
            {activePhase && (
              <div className="bg-stone-800/50 p-6 rounded-lg border border-jade-400">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-jade-700 rounded-lg">
                    <activePhase.icon className="w-6 h-6 text-jade-300" />
                  </div>
                  <div>
                    <h3 className="text-gold-400 font-serif">{activePhase.name}</h3>
                    <p className="text-stone-200 font-chinese">{activePhase.chinese}</p>
                  </div>
                </div>
                
                <p className="text-stone-200 mb-4">{activePhase.description}</p>
                
                <div className="mb-4">
                  <p className="text-stone-400 text-sm mb-1">Progress in current phase:</p>
                  <div className="w-full bg-stone-700 rounded-full h-2.5 mb-1">
                    <div 
                      className="bg-gradient-to-r from-jade-600 to-jade-400 h-2.5 rounded-full"
                      style={{ width: `${activePhase.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-stone-500 text-xs">
                    <span>Starting point</span>
                    <span>{activePhase.progress}% complete</span>
                  </div>
                </div>
                
                <h4 className="text-jade-300 mb-3">Current Phase Milestones:</h4>
                <div className="space-y-2">
                  {activePhase.milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center gap-2">
                      {milestone.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-jade-300" />
                      ) : (
                        <CircleDashed className="w-4 h-4 text-stone-400" />
                      )}
                      <span className={milestone.completed ? "text-stone-200" : "text-stone-400"}>
                        {milestone.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Recent Skills Progress */}
            <div>
              <h3 className="text-gold-400 font-serif mb-4">Key Skills Development</h3>
              <div className="space-y-4">
                {userData.skills
                  .filter(skill => skill.phase === activePhase.id || skill.progress > 0)
                  .slice(0, 3)
                  .map((skill, index) => (
                  <div key={index} className="bg-stone-800/50 p-4 rounded-lg border border-jade-500/50">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-jade-300">{skill.name}</h4>
                        <p className="text-stone-300 text-sm font-chinese">{skill.chinese}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-jade-700 px-2 py-1 rounded-full">
                        <Battery className="w-4 h-4 text-jade-300" />
                        <span className="text-jade-300 text-sm">Level {skill.level}/{skill.maxLevel}</span>
                      </div>
                    </div>
                    
                    <div className="mb-2">
                      <div className="w-full bg-stone-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-jade-600 to-jade-300 h-2 rounded-full"
                          style={{ width: `${skill.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-stone-300 text-xs">
                      <span>{skill.progress}% to next level</span>
                      <span>Last improved: {formatDate(skill.lastImprovement)}</span>
                    </div>
                  </div>
                ))}
                
                <div className="text-center">
                  <button
                    onClick={() => setActiveView('skills')}
                    className="inline-flex items-center gap-1 text-jade-500 hover:text-jade-400 transition-colors text-sm"
                  >
                    View all skills
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Recent Practices */}
            <div>
              <h3 className="text-gold-400 font-serif mb-4">Recent Practices</h3>
              <div className="space-y-3">
                {userData.recentPractices.slice(0, 2).map((practice, index) => (
                  <div key={index} className="bg-stone-800/50 p-4 rounded-lg border border-jade-500/50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-jade-300">{practice.name}</h4>
                      <div className="flex items-center gap-1 bg-stone-700 px-2 py-1 rounded-full">
                        <Clock className="w-3 h-3 text-stone-300" />
                        <span className="text-stone-300 text-xs">{practice.duration} min</span>
                      </div>
                    </div>
                    
                    <div className="text-stone-300 text-sm mb-2">{formatDate(practice.date)}</div>
                    
                    <div className="mb-2 text-stone-200 text-sm italic">
                      "{practice.notes}"
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {practice.improvements.map((improvement, i) => (
                        <span key={i} className="text-xs bg-jade-700 text-jade-300 px-2 py-1 rounded-full">
                          {improvement}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                
                <div className="text-center">
                  <button
                    onClick={() => setActiveView('history')}
                    className="inline-flex items-center gap-1 text-jade-500 hover:text-jade-400 transition-colors text-sm"
                  >
                    View practice history
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Recommendations Preview */}
            <div>
              <h3 className="text-gold-400 font-serif mb-4">Recommended Next Practice</h3>
              <div className="bg-stone-800/50 p-4 rounded-lg border border-jade-400">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-jade-300">{userData.recommendations[0].name}</h4>
                  <div className="flex items-center gap-1 bg-stone-700 px-2 py-1 rounded-full">
                    <Clock className="w-3 h-3 text-stone-300" />
                    <span className="text-stone-300 text-xs">{userData.recommendations[0].duration} min</span>
                  </div>
                </div>
                
                <p className="text-stone-200 text-sm mb-3">{userData.recommendations[0].description}</p>
                
                <div className="mb-3">
                  <span className="text-xs bg-gold-800 text-gold-300 px-2 py-1 rounded-full">
                    Focus: {userData.recommendations[0].focus}
                  </span>
                </div>
                
                <div className="space-y-1 mb-4">
                  {userData.recommendations[0].benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-stone-200 text-sm">
                      <CheckCircle2 className="w-3 h-3 text-jade-300" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-jade-600 hover:bg-jade-500 text-stone-100 py-2 rounded-lg transition-colors">
                  Begin Practice
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Development Path Section */}
        {activeView === 'development' && (
          <div className="space-y-6">
            <h3 className="text-gold-400 font-serif mb-4">Daoist Yoga Development Path</h3>
            <p className="text-stone-200 mb-6">
              Your journey through Daoist Yoga practice follows a natural progression from physical preparation 
              to energy cultivation and spiritual refinement. Each phase builds upon the previous 
              and prepares for the next level of development.
            </p>
            
            <div className="space-y-6">
              {userData.developmentPhases.map((phase, index) => {
                // Determine connection line styling
                const connectionLineClass = index === userData.developmentPhases.length - 1 
                  ? "hidden" 
                  : phase.completed 
                    ? "absolute left-6 top-16 bottom-0 w-0.5 bg-jade-500/50" 
                    : phase.current 
                      ? "absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-jade-500/50 to-stone-700/30" 
                      : "absolute left-6 top-16 bottom-0 w-0.5 bg-stone-700/30";
                
                // Determine phase card styling
                const phaseCardClass = phase.completed 
                  ? "bg-stone-800/50 border-jade-500/50" 
                  : phase.current 
                    ? "bg-stone-800/80 border-jade-500/30" 
                    : "bg-stone-800/20 border-stone-700/50";
                
                // Determine icon background
                const iconBgClass = phase.completed 
                  ? "bg-jade-500 text-stone-900" 
                  : phase.current 
                    ? "bg-jade-500/20 text-jade-500" 
                    : "bg-stone-700/50 text-stone-500";
                
                return (
                  <div key={index} className="relative">
                    <div className={connectionLineClass}></div>
                    <div className={`p-5 rounded-lg border ${phaseCardClass}`}>
                      <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-full z-10 ${iconBgClass}`}>
                          <phase.icon className="w-5 h-5" />
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className={phase.current || phase.completed ? "text-gold-500" : "text-stone-500"}>
                                {phase.name}
                              </h4>
                              <p className={phase.current || phase.completed ? "text-stone-400 font-chinese text-sm" : "text-stone-600 font-chinese text-sm"}>
                                {phase.chinese}
                              </p>
                            </div>
                            
                            <div className="flex items-center gap-1 px-2 py-1 rounded-full text-sm">
                              {phase.completed ? (
                                <span className="text-jade-500">Completed</span>
                              ) : (
                                <span className={phase.current ? "text-jade-400" : "text-stone-500"}>
                                  {phase.progress}% Complete
                                </span>
                              )}
                            </div>
                          </div>
                          
                          <p className={phase.current || phase.completed ? "text-stone-300 my-2" : "text-stone-500 my-2"}>
                            {phase.description}
                          </p>
                          
                          {/* Progress bar */}
                          <div className="mb-3">
                            <div className="w-full bg-stone-700 rounded-full h-1.5">
                              <div 
                                className={phase.completed 
                                  ? "bg-jade-500 h-1.5 rounded-full" 
                                  : "bg-gradient-to-r from-jade-600 to-jade-400 h-1.5 rounded-full"}
                                style={{ width: `${phase.progress}%` }}
                              ></div>
                            </div>
                          </div>
                          
                          {/* Milestones */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                            {phase.milestones.map((milestone, i) => (
                              <div key={i} className="flex items-center gap-2">
                                {milestone.completed ? (
                                  <CheckCircle2 className="w-4 h-4 text-jade-500 shrink-0" />
                                ) : (
                                  <CircleDashed className="w-4 h-4 text-stone-500 shrink-0" />
                                )}
                                <span className={milestone.completed 
                                  ? (phase.current || phase.completed) ? "text-stone-300" : "text-stone-400" 
                                  : "text-stone-500"}>
                                  {milestone.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        
        {/* Skills Section */}
        {activeView === 'skills' && (
          <div className="space-y-6">
            <h3 className="text-gold-500 font-serif mb-4">Cultivation Skills</h3>
            <p className="text-stone-300 mb-6">
              These specific abilities represent your development in key aspects of Daoist Yoga practice. 
              Each skill contributes to your overall progress through the developmental phases.
            </p>
            
            <div className="space-y-4">
              {userData.skills.map((skill, index) => {
                // Find the phase this skill belongs to
                const phase = userData.developmentPhases.find(p => p.id === skill.phase);
                
                return (
                  <div key={index} className="bg-stone-800/50 p-4 rounded-lg border border-stone-700">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-jade-500">{skill.name}</h4>
                        <p className="text-stone-400 text-sm font-chinese">{skill.chinese}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <phase.icon className="w-3 h-3 text-stone-400" />
                          <span className="text-stone-400 text-xs">{phase.name} Phase</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-jade-500/10 px-2 py-1 rounded-full">
                        <Battery className="w-4 h-4 text-jade-500" />
                        <span className="text-jade-500 text-sm">Level {skill.level}/{skill.maxLevel}</span>
                      </div>
                    </div>
                    
                    <p className="text-stone-300 text-sm mb-3">{skill.description}</p>
                    
                    <div className="mb-2">
                      <div className="w-full bg-stone-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-jade-500 to-jade-400 h-2 rounded-full"
                          style={{ width: `${skill.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-stone-400 text-xs">
                      <span>{skill.progress}% to next level</span>
                      <span>Last improved: {formatDate(skill.lastImprovement)}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        
        {/* History Section */}
        {activeView === 'history' && (
          <div className="space-y-6">
            <h3 className="text-gold-500 font-serif mb-4">Practice History</h3>
            <p className="text-stone-300 mb-6">
              Your record of consistent practice forms the foundation for energetic development. 
              Each session contributes to your overall progress on the path.
            </p>
            
            <div className="space-y-4">
              {userData.recentPractices.map((practice, index) => (
                <div key={index} className="bg-stone-800/50 p-4 rounded-lg border border-stone-700">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-jade-500">{practice.name}</h4>
                    <div className="flex items-center gap-1 bg-stone-700/50 px-2 py-1 rounded-full">
                      <Clock className="w-3 h-3 text-stone-400" />
                      <span className="text-stone-400 text-xs">{practice.duration} min</span>
                    </div>
                  </div>
                  
                  <div className="text-stone-400 text-sm mb-3">{formatDate(practice.date)}</div>
                  
                  <div className="mb-3 text-stone-300 text-sm italic">
                    "{practice.notes}"
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {practice.improvements.map((improvement, i) => (
                      <span key={i} className="text-xs bg-jade-500/10 text-jade-400 px-2 py-1 rounded-full">
                        {improvement}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center text-stone-400 mt-6">
              <p>Complete practice history is available in your account dashboard.</p>
            </div>
          </div>
        )}
        
        {/* Recommendations Section */}
        {activeView === 'recommendations' && (
          <div className="space-y-6">
            <h3 className="text-gold-500 font-serif mb-4">Recommended Next Steps</h3>
            <p className="text-stone-300 mb-6">
              Based on your current development phase and recent practice history, 
              these recommendations will help you progress most effectively.
            </p>
            
            <div className="space-y-4">
              {userData.recommendations.map((recommendation, index) => (
                <div key={index} className="bg-stone-800/50 p-5 rounded-lg border border-jade-500/20">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-jade-500">{recommendation.name}</h4>
                    <div className="flex items-center gap-1 bg-stone-700/50 px-2 py-1 rounded-full">
                      <Clock className="w-3 h-3 text-stone-400" />
                      <span className="text-stone-400 text-xs">{recommendation.duration} min</span>
                    </div>
                  </div>
                  
                  <p className="text-stone-300 text-sm mb-3">{recommendation.description}</p>
                  
                  <div className="mb-3">
                    <span className="text-xs bg-gold-500/20 text-gold-400 px-2 py-1 rounded-full">
                      Focus: {recommendation.focus}
                    </span>
                  </div>
                  
                  <div className="space-y-1 mb-4">
                    {recommendation.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-stone-300 text-sm">
                        <CheckCircle2 className="w-3 h-3 text-jade-500" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-jade-500 hover:bg-jade-600 text-stone-100 py-2 rounded-lg transition-colors">
                    Begin Practice
                  </button>
                </div>
              ))}
              
              <div className="bg-stone-800/30 p-5 rounded-lg border border-stone-700">
                <h4 className="text-gold-500 mb-3">Development Focus Reminder</h4>
                <p className="text-stone-300 text-sm mb-4">
                  Your current development focus is on <span className="text-jade-400">Channel Opening</span>. 
                  Prioritize practices that help open the central channel and primary meridians.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-stone-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-jade-500" />
                    <span>Maintain consistent lower dantian cultivation</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-jade-500" />
                    <span>Focus on breath coordination to direct qi</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-jade-500" />
                    <span>Pay special attention to any sensations along the central channel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProgressTracker;