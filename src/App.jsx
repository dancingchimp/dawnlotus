// src/App.jsx
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AppProvider } from './context/AppContext';

// Layout Components
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import LoadingScreen from './components/LoadingScreen';

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

// New Components
import DaoistFoundationPractices from './components/practice/DaoistFoundationPractices';
import PracticeSession from './components/practice/PracticeSession';
import { samplePractices } from './data/samplePractices';

// Placeholder page for Meditation
const Meditation = () => (
  <div className="min-h-screen bg-stone-900 pt-24 px-4">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-serif text-gold-500 mb-8">Meditation</h1>
      <p className="text-stone-300">
        This page will contain meditation resources. Coming soon!
      </p>
    </div>
  </div>
);

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

  // Sample practice renderer for demo purposes
  const MeridianFlowSession = () => (
    <PracticeSession practice={samplePractices.find(p => p.id === 'meridian-flow-sequence')} />
  );
  
  const FiveElementsSession = () => (
    <PracticeSession practice={samplePractices.find(p => p.id === 'five-elements-balance')} />
  );
  
  const FoundationSession = () => (
    <PracticeSession practice={samplePractices.find(p => p.id === 'foundation-practice')} />
  );

  return (
    <HashRouter>
      <AppProvider>
        <AuthProvider>
          <div className="min-h-screen bg-stone-900 text-stone-100 flex flex-col">
            <Navigation />
            
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                
                {/* Practice Routes */}
                <Route path="/practice" element={<Practice />} />
                <Route path="/practice/:practiceId" element={<PracticeDetail />} />
                <Route path="/practice/daoist-foundations" element={<DaoistFoundationPractices />} />
                <Route path="/practice/meridian-flow" element={<MeridianFlowSession />} />
                <Route path="/practice/five-elements" element={<FiveElementsSession />} />
                <Route path="/practice/foundation" element={<FoundationSession />} />
                
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
        </AuthProvider>
      </AppProvider>
    </HashRouter>
  );
}

export default App;