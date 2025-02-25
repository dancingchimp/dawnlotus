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
import Profile from './pages/Profile';
import Progress from './pages/Progress';
import LogPractice from './pages/LogPractice';
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

// Placeholder page for Meditation
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