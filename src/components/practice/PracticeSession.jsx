// src/components/practice/PracticeSession.jsx
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Pause, SkipForward, Volume2, VolumeX } from 'lucide-react';

const PracticeSession = () => {
  // Session state
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  
  // Mock session data - in a real app this would come from an API or props
  const practiceSession = {
    id: 'channel-opening-sequence',
    title: 'Channel Opening Sequence',
    category: 'Daoist Yoga',
    duration: 1500, // 25 minutes in seconds
    level: 'Level 2',
    description: 'This practice focuses on opening key energy channels through targeted movements and breath work.',
    steps: [
      {
        id: 1,
        type: 'preparation',
        title: 'Preparation',
        description: 'Find a comfortable position where you can stand with your feet shoulder-width apart. Ensure your spine is straight but not rigid.',
        duration: 60, // 1 minute
        hasAudio: true
      },
      {
        id: 2,
        type: 'breathwork',
        title: 'Deep Abdominal Breathing',
        description: 'Begin by bringing awareness to your breath. Inhale deeply into your lower abdomen, allowing it to expand fully. Exhale slowly and completely.',
        duration: 120, // 2 minutes
        hasAudio: true
      },
      {
        id: 3,
        type: 'movement',
        title: 'Opening the Central Channel',
        description: 'Raise your arms slowly in front of you as you inhale, palms facing up. As you exhale, lower your arms and slightly bend your knees. Repeat 9 times.',
        duration: 180, // 3 minutes
        hasAudio: true
      },
      {
        id: 4,
        type: 'movement',
        title: 'Spinal Wave',
        description: 'Gently roll down through your spine, vertebra by vertebra. Allow your arms to hang heavy. Roll back up slowly, stacking each vertebra. Repeat 6 times.',
        duration: 180, // 3 minutes
        hasAudio: true
      },
      {
        id: 5,
        type: 'posture',
        title: 'Kidney Activation Pose',
        description: 'Step your feet wide apart. Bend your knees into a squat position, keeping your spine straight. Place your hands on your lower back. Hold for 1 minute.',
        duration: 60, // 1 minute
        hasAudio: true
      },
      {
        id: 6,
        type: 'movement',
        title: 'Spiraling Dragon',
        description: 'Stand with feet shoulder-width apart. Begin circular movements with your hips, gradually increasing the size of the circles. Allow the movement to spiral up through your spine.',
        duration: 180, // 3 minutes
        hasAudio: true
      },
      {
        id: 7,
        type: 'breathwork',
        title: 'Energy Direction',
        description: 'Return to standing. Place your hands on your lower abdomen. As you inhale, visualize energy gathering in your lower dantian. As you exhale, visualize it flowing up your spine.',
        duration: 120, // 2 minutes
        hasAudio: true
      },
      {
        id: 8,
        type: 'stillness',
        title: 'Standing Meditation',
        description: 'Stand quietly with feet shoulder-width apart, knees slightly bent. Allow your awareness to rest in your lower dantian. Feel the energy circulating through the channels you've opened.',
        duration: 300, // 5 minutes
        hasAudio: true
      },
      {
        id: 9,
        type: 'closure',
        title: 'Closing Integration',
        description: 'Rub your palms together until warm. Place them over your lower abdomen. Take three deep breaths, feeling the session's effects integrating throughout your body.',
        duration: 60, // 1 minute
        hasAudio: true
      }
    ]
  };

  // Get current step data
  const currentStepData = practiceSession.steps[currentStep];
  const totalSteps = practiceSession.steps.length;
  
  // Calculate progress through current step and overall practice
  const stepProgress = currentStepData ? (1 - timeRemaining / currentStepData.duration) * 100 : 0;
  const overallProgress = ((currentStep + stepProgress / 100) / totalSteps) * 100;
  
  // Format time remaining
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  };
  
  // Start or resume the session
  const startSession = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  // Pause the session
  const pauseSession = () => {
    setIsPaused(true);
  };
  
  // Skip to next step
  const skipToNextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      setTimeRemaining(practiceSession.steps[currentStep + 1].duration);
    } else {
      completeSession();
    }
  };
  
  // Complete the session
  const completeSession = () => {
    setIsActive(false);
    // In a real app, you would record completion in user's history
    alert('Congratulations! You have completed the practice session.');
  };
  
  // Leave the session
  const leaveSession = () => {
    if (isActive && !isPaused) {
      if (window.confirm('Are you sure you want to leave this session? Your progress will not be saved.')) {
        window.history.back();
      }
    } else {
      window.history.back();
    }
  };
  
  // Timer effect
  useEffect(() => {
    // Set initial time for first step
    if (currentStepData && timeRemaining === 0) {
      setTimeRemaining(currentStepData.duration);
    }
    
    let interval = null;
    
    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 1) {
            // Move to next step or complete session
            if (currentStep < totalSteps - 1) {
              setCurrentStep(currentStep + 1);
              return practiceSession.steps[currentStep + 1].duration;
            } else {
              completeSession();
              clearInterval(interval);
              return 0;
            }
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  }, [isActive, isPaused, currentStep, totalSteps, currentStepData]);

  return (
    <div className="min-h-screen bg-stone-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Session Header */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={leaveSession}
            className="flex items-center gap-2 text-stone-400 hover:text-stone-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Exit Session</span>
          </button>
          
          <div className="text-center">
            <h1 className="text-2xl font-serif text-gold-500">{practiceSession.title}</h1>
            <p className="text-stone-400">{practiceSession.category} · {practiceSession.level}</p>
          </div>
          
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 rounded-full bg-stone-800 text-stone-400 hover:text-stone-300 transition-colors"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>
        
        {/* Practice Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Step List */}
          <div className="md:col-span-1">
            <div className="bg-stone-800/30 rounded-xl p-6 border border-jade-500/10">
              <h2 className="text-lg font-serif text-gold-500 mb-4">Practice Flow</h2>
              
              <div className="space-y-2">
                {practiceSession.steps.map((step, index) => (
                  <div 
                    key={step.id}
                    className={`p-3 rounded-lg flex items-center gap-3 transition-colors ${
                      index === currentStep 
                        ? 'bg-jade-500/20 border border-jade-500/30' 
                        : index < currentStep 
                          ? 'bg-stone-800/50 text-stone-400' 
                          : 'bg-stone-800/30 text-stone-500'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center
                                  ${index === currentStep 
                                      ? 'bg-jade-500 text-stone-900' 
                                      : index < currentStep 
                                        ? 'bg-stone-700 text-stone-300' 
                                        : 'bg-stone-700 text-stone-500'
                                  }`}>
                      {index < currentStep ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        index + 1
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`truncate ${index === currentStep ? 'text-jade-400' : ''}`}>{step.title}</p>
                      <p className="text-xs text-stone-500">{formatTime(step.duration)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Current Step */}
          <div className="md:col-span-2">
            <div className="bg-stone-800/30 rounded-xl p-8 border border-jade-500/10 h-full flex flex-col">
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-stone-400 text-sm">Step {currentStep + 1} of {totalSteps}</span>
                  <span className="text-stone-400 text-sm">{formatTime(timeRemaining)} remaining</span>
                </div>
                <div className="w-full h-2 bg-stone-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-jade-500 transition-all duration-1000"
                    style={{ width: `${overallProgress}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Step Instruction */}
              <div className="flex-1 flex flex-col justify-center items-center text-center mb-6">
                <div className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center 
                               ${currentStepData?.type === 'movement' ? 'bg-gold-500/20 text-gold-500' : 
                                 currentStepData?.type === 'breathwork' ? 'bg-jade-500/20 text-jade-500' : 
                                 currentStepData?.type === 'stillness' ? 'bg-stone-700/50 text-stone-300' : 
                                 'bg-stone-700/30 text-stone-400'}`}>
                  {currentStepData?.type === 'movement' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : currentStepData?.type === 'breathwork' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  ) : currentStepData?.type === 'stillness' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                </div>
                <h2 className="text-2xl font-serif text-gold-500 mb-4">{currentStepData?.title}</h2>
                <p className="text-stone-300 max-w-2xl mx-auto mb-6">{currentStepData?.description}</p>
                
                {/* Step Timer */}
                <div className="w-32 h-32 rounded-full bg-stone-800 border-4 border-jade-500/30 flex items-center justify-center mb-8">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-stone-200">{formatTime(timeRemaining)}</p>
                    <p className="text-xs text-stone-500">remaining</p>
                  </div>
                </div>
              </div>
              
              {/* Controls */}
              <div className="flex justify-center items-center gap-6">
                {!isActive ? (
                  <button 
                    onClick={startSession}
                    className="w-14 h-14 rounded-full bg-jade-500 hover:bg-jade-600 text-stone-100 flex items-center justify-center transition-colors shadow-lg shadow-stone-900/50"
                  >
                    <Play className="w-6 h-6" />
                  </button>
                ) : isPaused ? (
                  <button 
                    onClick={startSession}
                    className="w-14 h-14 rounded-full bg-jade-500 hover:bg-jade-600 text-stone-100 flex items-center justify-center transition-colors shadow-lg shadow-stone-900/50"
                  >
                    <Play className="w-6 h-6" />
                  </button>
                ) : (
                  <button 
                    onClick={pauseSession}
                    className="w-14 h-14 rounded-full bg-stone-700 hover:bg-stone-600 text-stone-300 flex items-center justify-center transition-colors shadow-lg shadow-stone-900/50"
                  >
                    <Pause className="w-6 h-6" />
                  </button>
                )}
                
                <button 
                  onClick={skipToNextStep}
                  className="w-10 h-10 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-400 flex items-center justify-center transition-colors"
                >
                  <SkipForward className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeSession;