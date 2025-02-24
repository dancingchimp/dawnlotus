// src/App.jsx
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';

// Simplified Navigation Component (inline for now)
const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#/" className="flex items-center space-x-2">
            <span className="text-2xl font-chinese text-gold-500">和門</span>
            <span className="text-lg font-serif text-stone-100">Harmony Gate</span>
          </a>

          {/* Simple Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#/about" className="text-stone-300 hover:text-gold-400">About</a>
            <a href="#/practice" className="text-stone-300 hover:text-gold-400">Practice</a>
            <a href="#/theory" className="text-stone-300 hover:text-gold-400">Theory</a>
            <a href="#/meditation" className="text-stone-300 hover:text-gold-400">Meditation</a>
          </div>
          
          {/* Mobile Menu Button (non-functional for simplicity) */}
          <button className="md:hidden p-2 text-stone-300 hover:text-gold-500">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

// Simplified Footer Component (inline for now)
const Footer = () => {
  return (
    <footer className="bg-stone-900 border-t border-jade-500/10 mt-auto py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="text-2xl font-chinese text-gold-500">和門</span>
          <span className="text-lg font-serif text-stone-100">Harmony Gate</span>
        </div>
        <p className="text-stone-500 text-sm">
          © {new Date().getFullYear()} Harmony Gate. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// Placeholder pages
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

// NotFound page
const NotFound = () => (
  <div className="min-h-screen bg-stone-900 pt-24 px-4 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-serif text-gold-500 mb-4">Page Not Found</h1>
      <p className="text-stone-300 mb-8">The path you seek lies elsewhere.</p>
      <a 
        href="#/"
        className="bg-jade-500 hover:bg-jade-600 text-stone-100 px-6 py-3 
                 rounded-lg transition-all duration-300 inline-block"
      >
        Return to Path
      </a>
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
      <div className="min-h-screen bg-stone-900 text-stone-100 flex flex-col">
        <Navigation />
        
        <main className="flex-grow">
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