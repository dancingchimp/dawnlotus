// src/App.jsx
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom';

// Layout Components
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import ProfileAccessButton from './components/user/ProfileAccessButton';

// Page Components
import Home from './pages/Home';
import Practice from './pages/Practice';
import PracticeDetail from './pages/PracticeDetail';
import About from './pages/About';
import Theory from './pages/Theory';
import NotFound from './pages/NotFound';

// Educational Components
import NeiGongStudy from './components/education/NeiGongStudy';
import TaiChiStudy from './components/education/TaiChiStudy';
import DaoistYogaCurriculum from './components/education/DaoistYogaCurriculum';

// Practice session components
import MeridianFlowSession from './components/practice/sessions/MeridianFlowSession';
import FiveElementsSession from './components/practice/sessions/FiveElementsSession';
import FoundationSession from './components/practice/sessions/FoundationSession';
import RecommendedPractice from './components/practice/sessions/RecommendedPractice';

// User profile components
import UserProgressTracker from './components/user/UserProgressTracker';

// Placeholder components for missing pages
const Meditation = () => (
  <div className="min-h-screen bg-stone-900 pt-24 px-4">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-serif text-gold-400 mb-8">Meditation</h1>
      <p className="text-stone-200">
        This page will contain meditation resources. Coming soon!
      </p>
    </div>
  </div>
);

// Simple Profile Component
const Profile = () => (
  <div className="min-h-screen bg-stone-900 py-24 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-chinese text-3xl text-gold-400 mb-4">個人信息</h2>
        <h1 className="text-4xl font-serif text-stone-100 mb-6">
          Your Profile
        </h1>
        <p className="text-stone-200 max-w-3xl mx-auto">
          Manage your account and track your journey on the Daoist path.
        </p>
      </div>
      
      <div className="text-center p-8 mb-8 bg-stone-800/50 rounded-xl">
        <p className="text-stone-300">
          Profile details and customization will be available in a future update.
        </p>
      </div>
      
      <div className="text-center">
        <button 
          onClick={() => window.location.href = '/#/progress'}
          className="bg-jade-600 hover:bg-jade-500 text-stone-100 px-6 py-3 
                   rounded-lg transition-colors inline-block"
        >
          View Your Progress
        </button>
      </div>
    </div>
  </div>
);

// Simple Log Practice Component
const LogPractice = () => (
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
      
      <div className="text-center p-8 mb-8 bg-stone-800/50 rounded-xl">
        <p className="text-stone-300">
          Practice logging will be available in a future update.
        </p>
      </div>
      
      <div className="text-center">
        <button 
          onClick={() => window.location.href = '/#/progress'}
          className="bg-jade-600 hover:bg-jade-500 text-stone-100 px-6 py-3 
                   rounded-lg transition-colors inline-block"
        >
          Return to Progress
        </button>
      </div>
    </div>
  </div>
);

// Progress Page Component - Using the UserProgressTracker component directly
const Progress = () => {
  // Mock user data for the progress page
  const userData = {
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
        icon: 'Layers'
      },
      {
        id: 'energy-awareness',
        name: 'Energy Awareness',
        chinese: '能量覺知',
        description: 'Developing sensitivity to subtle energy',
        progress: 60,
        completed: false,
        icon: 'Zap'
      },
      {
        id: 'channel-opening',
        name: 'Channel Opening',
        chinese: '經絡打開',
        description: 'Opening primary meridian pathways',
        progress: 15,
        completed: false,
        current: true,
        icon: 'Wind'
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
        
        <div className="bg-stone-800/30 rounded-xl border border-jade-400 p-8 mb-12">
          <h2 className="text-2xl font-serif text-gold-400 mb-4">Progress Dashboard</h2>
          <p className="text-stone-200 mb-6">
            You are currently in the <span className="text-jade-300">Channel Opening</span> phase 
            with <span className="text-jade-300">15%</span> completion.
          </p>
          
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-stone-800/50 p-4 rounded-lg border border-stone-700">
              <div className="text-sm text-stone-400 mb-1">Total Practice</div>
              <div className="text-2xl font-serif text-jade-400">29.5 hrs</div>
              <div className="text-stone-300 text-sm">48 sessions</div>
            </div>
            
            <div className="bg-stone-800/50 p-4 rounded-lg border border-stone-700">
              <div className="text-sm text-stone-400 mb-1">Current Streak</div>
              <div className="text-2xl font-serif text-gold-400">6 days</div>
              <div className="text-stone-300 text-sm">Longest: 14 days</div>
            </div>
            
            <div className="bg-stone-800/50 p-4 rounded-lg border border-stone-700">
              <div className="text-sm text-stone-400 mb-1">Consistency</div>
              <div className="text-2xl font-serif text-jade-400">78%</div>
              <div className="text-stone-300 text-sm">Last: Feb 24</div>
            </div>
            
            <div className="bg-stone-800/50 p-4 rounded-lg border border-stone-700">
              <div className="text-sm text-stone-400 mb-1">Sequences</div>
              <div className="text-2xl font-serif text-gold-400">9</div>
              <div className="text-stone-300 text-sm">Full sequences completed</div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-stone-300 mb-4">
              The full progress tracking system will be available in our next update.
            </p>
            <button 
              onClick={() => window.location.href = '/#/practice/recommended'}
              className="bg-jade-600 hover:bg-jade-500 text-stone-100 px-6 py-3 
                       rounded-lg transition-colors inline-block"
            >
              View Recommended Practice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mock user data provider until you implement auth context
const currentUser = {
  displayName: 'Harmony Seeker',
  level: 2,
  nextMilestone: 'Channel Opening Phase',
  lastPractice: '2025-02-24',
  currentStreak: 6
};

function App() {
  // Reveal animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;

      reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HashRouter>
      <div className="min-h-screen bg-stone-900 text-stone-100 flex flex-col">
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 bg-stone-900/90 backdrop-blur-md shadow-md shadow-black/30">
          <Navigation />
          <ProfileNavigator userData={currentUser} />
        </div>
        
        <main className="flex-grow pt-16"> {/* Added padding-top to account for fixed header */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* Practice Routes */}
            <Route path="/practice" element={<Practice />} />
            <Route path="/practice/:practiceId" element={<PracticeDetail />} />
            
            {/* Practice Session Routes */}
            <Route path="/practice/meridian-flow" element={<MeridianFlowSession />} />
            <Route path="/practice/five-elements" element={<FiveElementsSession />} />
            <Route path="/practice/foundation" element={<FoundationSession />} />
            <Route path="/practice/recommended" element={<RecommendedPractice />} />
            
            {/* User Routes */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/log-practice" element={<LogPractice />} />
            
            {/* Theory Route */}
            <Route path="/theory" element={<Theory />} />
            
            {/* Meditation Route */}
            <Route path="/meditation" element={<Meditation />} />
            
            {/* Educational Routes */}
            <Route path="/neigong" element={<NeiGongStudy />} />
            <Route path="/taichi" element={<TaiChiStudy />} />
            <Route path="/daoist-yoga-curriculum" element={<DaoistYogaCurriculum />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </HashRouter>
  );
}

// ProfileNavigator Component
function ProfileNavigator({ userData }) {
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    navigate(path);
  };
  
  return (
    <ProfileAccessButton 
      userData={userData} 
      onNavigate={handleNavigation} 
    />
  );
}

export default App;