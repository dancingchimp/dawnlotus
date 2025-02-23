// src/components/layout/Layout.jsx

import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100">
      <Navigation isScrolled={scrolled} />
      
      <main className="relative">
        {/* Background Pattern */}
        <div className="fixed inset-0 bg-gradient-texture opacity-5 pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Layout;