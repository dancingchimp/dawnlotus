// src/App.jsx
import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

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

// Import context if it exists
// import { AuthProvider } from './context/AuthContext';
// import { AppProvider } from './context/AppContext';

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

// Lazily import new components to prevent build issues if they don't exist yet
const DaoistYogaCurriculum = React.lazy(() => 
  import('./components/education/DaoistYogaCurriculum')
    .catch(() => ({ default: () => <div>Component loading...</div> }))
);

const DaoistFoundationPractices = React.lazy(() => 
  import('./components/practice/DaoistFoundationPractices')
    .catch(() => ({ default: () => <div>Component loading...</div> }))
);

const PracticeSession = React.lazy(() => 
  import('./components/practice/PracticeSession')
    .catch(() => ({ default: () => <div>Component loading...</div> }))
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading for demonstration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Import sample practices data if it exists
  const [samplePractices, setSamplePractices] = useState([]);
  
  useEffect(() => {
    const loadPractices = async () => {
      try {
        const module = await import('./data/samplePractices');
        setSamplePractices(module.default || []);
      } catch (error) {
        console.warn('Sample practices data not found');
        setSamplePractices([]);
      }
    };
    
    loadPractices();
  }, []);
  
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

  if (isLoading) {
    return <LoadingScreen />;
  }

  // Practice session rendering components
  const MeridianFlowSession = () => {
    const practice = samplePractices.find(p => p.id === 'meridian-flow-sequence');
    if (!practice) return <div>Practice not found</div>;
    
    return (
      <React.Suspense fallback={<LoadingScreen />}>
        <PracticeSession practice={practice} />
      </React.Suspense>
    );
  };
  
  const FiveElementsSession = () => {
    const practice = samplePractices.find(p => p.id === 'five-elements-balance');
    if (!practice) return <div>Practice not found</div>;
    
    return (
      <React.Suspense fallback={<LoadingScreen />}>
        <PracticeSession practice={practice} />
      </React.Suspense>
    );
  };
  
  const FoundationSession = () => {
    const practice = samplePractices.find(p => p.id === 'foundation-practice');
    if (!practice) return <div>Practice not found</div>;
    
    return (
      <React.Suspense fallback={<LoadingScreen />}>
        <PracticeSession practice={practice} />
      </React.Suspense>
    );
  };

  return (
    <HashRouter>
      <div className="min-h-screen bg-stone-900 text-stone-100 flex flex-col">
        <Navigation />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* Practice Routes */}
            <Route path="/practice" element={<Practice />} />
            <Route path="/practice/:practiceId" element={<PracticeDetail />} />
            
            {/* Special practice routes with React.Suspense */}
            <Route path="/practice/daoist-foundations" element={
              <React.Suspense fallback={<LoadingScreen />}>
                <DaoistFoundationPractices />
              </React.Suspense>
            } />
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
            <Route path="/daoist-yoga-curriculum" element={
              <React.Suspense fallback={<LoadingScreen />}>
                <DaoistYogaCurriculum />
              </React.Suspense>
            } />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;