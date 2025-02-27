// src/components/layout/Layout.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Layout({ children }) {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-stone-900/90 backdrop-blur-sm border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <span className="text-jade-500 font-chinese text-2xl">和門</span>
              <span className="text-stone-100 font-serif text-lg">Harmony Gate</span>
            </Link>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link 
                to="/practice" 
                className={`transition-colors ${isActive('/practice') ? 'text-jade-500' : 'text-stone-300 hover:text-stone-100'}`}
              >
                Practice
              </Link>
              <Link 
                to="/theory" 
                className={`transition-colors ${isActive('/theory') ? 'text-jade-500' : 'text-stone-300 hover:text-stone-100'}`}
              >
                Theory
              </Link>
              <Link 
                to="/meditation" 
                className={`transition-colors ${isActive('/meditation') ? 'text-jade-500' : 'text-stone-300 hover:text-stone-100'}`}
              >
                Meditation
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors ${isActive('/about') ? 'text-jade-500' : 'text-stone-300 hover:text-stone-100'}`}
              >
                About
              </Link>
            </nav>
            
            {/* Login/Profile */}
            <div>
              <Link 
                to="/profile" 
                className="bg-jade-500/10 hover:bg-jade-500/20 text-jade-500 px-4 py-2 rounded-lg transition-colors"
              >
                Profile
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-stone-900 border-t border-stone-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <span className="text-jade-500 font-chinese text-2xl">和門</span>
                <span className="text-stone-100 font-serif text-lg">Harmony Gate</span>
              </Link>
              <p className="text-stone-400 text-sm">
                Where ancient Daoist wisdom merges with modern yoga practice.
              </p>
            </div>
            
            <div>
              <h4 className="text-gold-500 font-serif mb-4">Practice</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/daoist-yoga" className="text-stone-300 hover:text-stone-100 transition-colors">
                    Daoist Yoga
                  </Link>
                </li>
                <li>
                  <Link to="/nei-gong" className="text-stone-300 hover:text-stone-100 transition-colors">
                    Nei Gong
                  </Link>
                </li>
                <li>
                  <Link to="/tai-chi" className="text-stone-300 hover:text-stone-100 transition-colors">
                    Tai Chi
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-gold-500 font-serif mb-4">Theory</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/theory" className="text-stone-300 hover:text-stone-100 transition-colors">
                    Foundations
                  </Link>
                </li>
                <li>
                  <Link to="/energy-cultivation" className="text-stone-300 hover:text-stone-100 transition-colors">
                    Energy Cultivation
                  </Link>
                </li>
                <li>
                  <Link to="/meditation" className="text-stone-300 hover:text-stone-100 transition-colors">
                    Meditation
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-gold-500 font-serif mb-4">Contact</h4>
              <p className="text-stone-300 mb-2">
                info@harmonicgateway.com
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-stone-400 hover:text-stone-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-stone-400 hover:text-stone-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-stone-400 hover:text-stone-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-stone-800 text-center text-stone-500 text-sm">
            <p>© {new Date().getFullYear()} Harmony Gate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;