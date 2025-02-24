// src/App.jsx with Taijiquan route added
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Practice from './pages/Practice';
import PracticeDetail from './pages/PracticeDetail';
import About from './pages/About';
import Theory from './pages/Theory';
import NeiGongStudy from './components/education/NeiGongStudy';
import TaiChiStudy from './components/education/TaiChiStudy';

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

// NotFound page
const NotFound = () => (
  <div className="min-h-screen bg-stone-900 pt-24 px-4 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-serif text-gold-500 mb-4">Page Not Found</h1>
      <p className="text-stone-300 mb-8">The path you seek lies elsewhere.</p>
      <a 
        href="#/"
        className="btn-jade px-6 py-3 inline-block"
      >
        Return to Path
      </a>
    </div>
  </div>
);

// Home page component
const Home = () => {
  return (
    <div>
      <Hero />
      <div className="section-elegant bg-stone-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-chinese text-3xl text-gold-500 mb-4 reveal">修練之道</h2>
          <h3 className="text-4xl font-serif text-stone-100 mb-8 reveal reveal-delay-1">The Path of Practice</h3>
          <p className="text-stone-300 max-w-3xl mx-auto mb-12 reveal reveal-delay-2">
            Our approach integrates traditional Daoist principles with modern yoga practices,
            creating a comprehensive system for physical development, energy cultivation,
            and spiritual growth.
          </p>
          
          <div className="flex justify-center reveal reveal-delay-3">
            <a 
              href="#/practice"
              className="btn-jade px-8 py-4 text-lg font-semibold"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-jade-600/0 via-stone-100/30 to-jade-600/0 
                            translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              Explore Practices
            </a>
          </div>
        </div>
      </div>
    </div>
  );
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
        <Navigation />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/practice/:practiceId" element={<PracticeDetail />} />
            <Route path="/theory" element={<Theory />} />
            <Route path="/meditation" element={<Meditation />} />
            <Route path="/neigong" element={<NeiGongStudy />} />
            <Route path="/taichi" element={<TaiChiStudy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;