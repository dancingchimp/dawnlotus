// src/components/practice/PracticeSession.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, ChevronLeft, ChevronRight, Info } from 'lucide-react';

function PracticeSession({ practice }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(practice?.sequence[0]?.duration || 60);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    let timer;
    if (isPlaying && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0 && currentStep < practice.sequence.length - 1) {
      // Move to next pose when timer reaches zero
      setCurrentStep(prev => prev + 1);
      setTimeRemaining(practice.sequence[currentStep + 1].duration);
    }

    return () => clearInterval(timer);
  }, [isPlaying, timeRemaining, currentStep, practice]);

  // Reset timer when changing steps manually
  useEffect(() => {
    setTimeRemaining(practice.sequence[currentStep].duration);
  }, [currentStep, practice]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleNext = () => {
    if (currentStep < practice.sequence.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-stone-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Practice Header */}
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <Link to="/practice" className="text-stone-400 hover:text-jade-400 mr-4">
              <ChevronLeft className="h-6 w-6" />
            </Link>
            <div>
              <h1 className="text-3xl font-serif text-gold-500">{practice.title}</h1>
              <p className="text-stone-400 font-chinese">{practice.chinese}</p>
            </div>
          </div>
                      <div className="flex flex-wrap gap-3 mt-2">
              <span className="px-3 py-1 bg-jade-500/20 text-jade-400 rounded-full text-sm">
                {practice.level}
              </span>
              <span className="px-3 py-1 bg-gold-500/20 text-gold-400 rounded-full text-sm">
                {practice.duration}
              </span>
              <span className="px-3 py-1 bg-stone-700/50 text-stone-300 rounded-full text-sm">
                {practice.category === 'daoist-yoga' ? 'Daoist Yoga' : 
                 practice.category === 'qigong' ? 'Qigong' : 'Meditation'}
              </span>
            </div>
          </div>
        
        {/* Practice Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Left Column: Current Pose */}
          <div className="md:col-span-2">
            <div className="bg-stone-800/30 rounded-xl overflow-hidden">
              {/* Pose Image */}
              <div className="relative aspect-video">
                <img 
                  src={practice.sequence[currentStep].image || "/api/placeholder/800/450"}
                  alt={practice.sequence[currentStep].name}
                  className="w-full h-full object-cover"
                />
                
                {/* Timer Overlay */}
                <div className="absolute top-4 right-4 bg-stone-900/80 text-stone-100 px-4 py-2 rounded-lg
                              backdrop-blur-sm">
                  <span className="font-mono text-xl">{formatTime(timeRemaining)}</span>
                </div>
                
                {/* Info Button */}
                <button 
                  className="absolute top-4 left-4 p-2 bg-stone-900/80 rounded-full text-jade-400
                           hover:text-jade-300 transition-colors backdrop-blur-sm"
                  onClick={() => setShowInfo(!showInfo)}
                >
                  <Info className="w-5 h-5" />
                </button>
              </div>
              
              {/* Pose Info */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h2 className="text-2xl font-serif text-gold-500">
                      {practice.sequence[currentStep].name}
                    </h2>
                    <p className="text-stone-400 font-chinese text-sm">
                      {practice.sequence[currentStep].chinese}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <button 
                      className="p-2 rounded-full bg-stone-800 text-stone-300 hover:text-jade-400
                               transition-colors disabled:opacity-50 disabled:hover:text-stone-300"
                      onClick={handlePrev}
                      disabled={currentStep === 0}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    
                    <button 
                      className="p-3 rounded-full bg-jade-500/20 text-jade-400 hover:bg-jade-500/30
                               transition-colors"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                    </button>
                    
                    <button 
                      className="p-2 rounded-full bg-stone-800 text-stone-300 hover:text-jade-400
                               transition-colors disabled:opacity-50 disabled:hover:text-stone-300"
                      onClick={handleNext}
                      disabled={currentStep === practice.sequence.length - 1}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                
                {/* Instructions */}
                <div className="text-stone-300 mb-6">
                  {practice.sequence[currentStep].instructions}
                </div>
                
                {/* Energy Focus */}
                {showInfo && (
                  <div className="bg-stone-800/50 rounded-lg p-4 border-l-2 border-jade-500">
                    <h3 className="text-jade-400 font-medium mb-2">Energy Focus</h3>
                    <p className="text-stone-300">
                      {practice.sequence[currentStep].energyFocus}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Right Column: Sequence Overview */}
          <div>
            <div className="bg-stone-800/30 rounded-xl p-6 border border-jade-500/10 mb-8">
              <h3 className="text-xl font-serif text-gold-500 mb-4">Sequence Overview</h3>
              <div className="space-y-3">
                {practice.sequence.map((pose, index) => (
                  <button
                    key={index}
                    className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors
                             text-left ${
                      currentStep === index
                        ? 'bg-jade-500/20 text-jade-400'
                        : 'text-stone-300 hover:bg-stone-800/50'
                    }`}
                    onClick={() => setCurrentStep(index)}
                  >
                    <div className="w-8 h-8 flex items-center justify-center bg-stone-800 rounded-full
                                   shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{pose.name}</div>
                      <div className="text-xs opacity-80">{formatTime(pose.duration)}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Energy Principles */}
            <div className="bg-stone-800/30 rounded-xl p-6 border border-jade-500/10">
              <h3 className="text-xl font-serif text-gold-500 mb-4">Practice Principles</h3>
              <div className="space-y-4 text-stone-300">
                <p>
                  This practice focuses on the integration of physical postures with energy awareness.
                  Key principles to maintain throughout:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-jade-500 font-bold mt-1">•</span>
                    <span>Maintain awareness of breath in each posture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-jade-500 font-bold mt-1">•</span>
                    <span>Feel the connection between physical alignment and energy pathways</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-jade-500 font-bold mt-1">•</span>
                    <span>Notice areas of tension and consciously release them</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-jade-500 font-bold mt-1">•</span>
                    <span>Allow energy cultivation to emerge naturally, without forcing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Practice Description */}
        <div className="bg-stone-800/30 rounded-xl p-8 border border-jade-500/10 mb-12">
          <h3 className="text-2xl font-serif text-gold-500 mb-4">About This Practice</h3>
          <div className="text-stone-300 space-y-4">
            <p>{practice.description}</p>
            <p>{practice.energyDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PracticeSession;