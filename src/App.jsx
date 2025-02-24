// src/App.jsx
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Navigation from './components/layout/Navigation';
import Hero from './components/Hero';
import Footer from './components/layout/Footer';
import NotFound from './pages/NotFound';
import LoadingScreen from './components/LoadingScreen';

// Placeholder pages - you'll replace these with your actual pages later
const About = () => (
  <div className="min-h-screen bg-stone-900 pt-24 px-4">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-serif text-gold-500 mb-8">About Harmony Gate</h1>
      <p className="text-stone-300 mb-4">
        Harmony Gate represents a modern approach to traditional Daoist practice, 
        integrating physical movement, energy work, and spiritual cultivation.
      </p>
      <p className="text-stone-300">
        Our approach bridges Western yoga postures with Eastern energy principles,
        creating a balanced path for transformation and growth.
      </p>
    </div>
  </div>
);

const Practice = () => (
  <div className="min-h-screen bg-stone-900 pt-24 px-4">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-serif text-gold-500 mb-8">Practice</h1>
      <p className="text-stone-300">
        This page will contain our practice library. Coming soon!
      </p>
    </div>
  </div>
);

const Theory = () => (
  <div className="min-h-screen bg-stone-900 pt-24 px-4">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-serif text-gold-500 mb-8">Theory</h1>
      <p className="text-stone-300">
        This page will contain theoretical foundations of Daoist practice. Coming soon!
      </p>
    </div>
  </div>
);

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

// Home page component
const Home = () => (
  <div>
    <Hero />
    <div className="py-24 bg-stone-900 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-chinese text-3xl text-gold-500 mb-4">修練之道</h2>
        <h3 className="text-4xl font-serif text-stone-100 mb-8">The Path of Practice</h3>
        <p className="text-stone-300 max-w-3xl mx-auto">
          Our content is currently under development. Soon you'll be able to access
          a complete library of Daoist yoga practices, theory, and meditation resources.
        </p>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-stone-900 text-stone-100">
        <Navigation isScrolled={false} />
        
        <main className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/theory" element={<Theory />} />
            <Route path="/meditation" element={<Meditation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;