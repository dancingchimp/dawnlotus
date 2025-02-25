// src/components/layout/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/practice', label: '修練', english: 'Practice' },
  { path: '/theory', label: '理論', english: 'Theory' },
  { path: '/meditation', label: '靜坐', english: 'Meditation' },
  { path: '/about', label: '關於', english: 'About' },
];

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const location = useLocation();

  // Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-stone-900/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-chinese text-gold-500">和門</span>
            <span className="text-lg font-serif text-stone-100">Harmony Gate</span>
          </Link>

          <div className="flex items-center">
            {/* Study Buttons - Visible on all screen sizes */}
            <div className="flex space-x-2 mr-6">
              <div className="relative group">
                <button 
                  className="bg-gold-500 hover:bg-gold-600 text-stone-900 px-3 py-2 
                          rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1"
                  onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                >
                  <span className="hidden sm:inline">Study</span> Daoist Yoga
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 transition-transform duration-300 ${isSubmenuOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isSubmenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-stone-800 rounded-lg shadow-lg py-1 z-50">
                    <Link 
                      to="/daoist-yoga-curriculum"
                      className="block px-4 py-2 text-sm text-stone-300 hover:bg-jade-500/20 hover:text-jade-400"
                      onClick={() => setIsSubmenuOpen(false)}
                    >
                      Curriculum Overview
                    </Link>
                    <Link 
                      to="/practice/foundation"
                      className="block px-4 py-2 text-sm text-stone-300 hover:bg-jade-500/20 hover:text-jade-400"
                      onClick={() => setIsSubmenuOpen(false)}
                    >
                      Foundation Practice
                    </Link>
                    <Link 
                      to="/practice/meridian-flow"
                      className="block px-4 py-2 text-sm text-stone-300 hover:bg-jade-500/20 hover:text-jade-400"
                      onClick={() => setIsSubmenuOpen(false)}
                    >
                      Meridian Flow Sequence
                    </Link>
                    <Link 
                      to="/practice/five-elements"
                      className="block px-4 py-2 text-sm text-stone-300 hover:bg-jade-500/20 hover:text-jade-400"
                      onClick={() => setIsSubmenuOpen(false)}
                    >
                      Five Elements Balance
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                to="/neigong"
                className="bg-jade-500 hover:bg-jade-600 text-stone-100 px-3 py-2 
                        rounded-lg text-sm font-medium transition-all duration-300"
              >
                <span className="hidden sm:inline">Study</span> Nei Gong
              </Link>
              <Link 
                to="/taichi"
                className="bg-stone-700 hover:bg-stone-600 text-stone-100 px-3 py-2 
                        rounded-lg text-sm font-medium transition-all duration-300"
              >
                <span className="hidden sm:inline">Study</span> Tai Chi
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(({ path, label, english }) => (
                <Link
                  key={path}
                  to={path}
                  className={`group flex flex-col items-center transition-colors duration-300 ${
                    location.pathname === path ? 'text-gold-500' : 'text-stone-300 hover:text-gold-400'
                  }`}
                >
                  <span className="text-sm font-chinese">{label}</span>
                  <span className="text-xs tracking-wide">{english}</span>
                  <span 
                    className={`h-0.5 w-0 bg-gold-500 transition-all duration-300 ${
                      location.pathname === path ? 'w-full' : 'group-hover:w-full'
                    }`} 
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-stone-300 hover:text-gold-500 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-stone-800/90 backdrop-blur-md">
          {/* Study buttons included in mobile menu */}
          <div className="flex flex-col gap-2 mb-4">
            <span className="px-3 py-1 text-sm text-stone-400">Study Programs:</span>
            
            <Link
              to="/daoist-yoga-curriculum"
              className="block px-3 py-2 rounded-md text-base bg-gold-500/20 text-gold-500 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="font-chinese">道瑜伽</span>
              <span className="ml-1 text-sm">(Daoist Yoga)</span>
            </Link>
            
            <Link
              to="/neigong"
              className="block px-3 py-2 rounded-md text-base bg-jade-500/20 text-jade-400 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="font-chinese">內功</span>
              <span className="ml-1 text-sm">(Nei Gong)</span>
            </Link>
            
            <Link
              to="/taichi"
              className="block px-3 py-2 rounded-md text-base bg-stone-700/50 text-stone-300 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="font-chinese">太極</span>
              <span className="ml-1 text-sm">(Tai Chi)</span>
            </Link>
          </div>
          
          <div className="pt-2 border-t border-stone-700">
            {navItems.map(({ path, label, english }) => (
              <Link
                key={path}
                to={path}
                className={`block px-3 py-2 rounded-md text-base ${
                  location.pathname === path
                    ? 'bg-jade-500/20 text-gold-500'
                    : 'text-stone-300 hover:bg-jade-500/10 hover:text-gold-400'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-chinese">{label}</span>
                <span className="ml-2 text-sm">({english})</span>
              </Link>
            ))}
          </div>
          
          {/* Quick Access Practice Links */}
          <div className="pt-2 mt-2 border-t border-stone-700">
            <span className="px-3 py-1 text-sm text-stone-400">Quick Practice:</span>
            <Link
              to="/practice/foundation"
              className="block px-3 py-2 rounded-md text-base text-stone-300 hover:bg-jade-500/10 hover:text-jade-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Foundation Practice
            </Link>
            <Link
              to="/practice/meridian-flow"
              className="block px-3 py-2 rounded-md text-base text-stone-300 hover:bg-jade-500/10 hover:text-jade-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Meridian Flow Sequence
            </Link>
            <Link
              to="/practice/five-elements"
              className="block px-3 py-2 rounded-md text-base text-stone-300 hover:bg-jade-500/10 hover:text-jade-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Five Elements Balance
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;