// src/components/layout/Navigation.jsx - Final updated structure

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

function Navigation({ isScrolled }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDaoistYogaDropdown, setShowDaoistYogaDropdown] = useState(false);
  const [showTheoryDropdown, setShowTheoryDropdown] = useState(false);
  const location = useLocation();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setShowDaoistYogaDropdown(false);
        setShowTheoryDropdown(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdowns when changing routes
  useEffect(() => {
    setShowDaoistYogaDropdown(false);
    setShowTheoryDropdown(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

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

          {/* Main Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Practice Button (Golden) */}
            <div className="relative dropdown-container">
              <button
                onClick={() => {
                  setShowDaoistYogaDropdown(!showDaoistYogaDropdown);
                  setShowTheoryDropdown(false);
                }}
                className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-stone-900 px-5 py-2 
                         rounded-lg font-medium transition-colors"
              >
                <span>Practice</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    showDaoistYogaDropdown ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Practice Dropdown */}
              {showDaoistYogaDropdown && (
                <div className="absolute right-0 mt-2 w-60 bg-stone-800 rounded-lg shadow-xl overflow-hidden">
                  <Link 
                    to="/daoist-yoga" 
                    className="block p-3 hover:bg-stone-700 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-8 h-8 rounded-full bg-jade-500/10 flex items-center justify-center text-jade-500 font-chinese">
                        道
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-gold-500">Daoist Yoga</span>
                          <span className="text-stone-500 text-sm font-chinese">道瑜伽</span>
                        </div>
                        <p className="text-stone-400 text-xs mt-1">Physical postures with energy cultivation</p>
                      </div>
                    </div>
                  </Link>
                  <Link 
                    to="/nei-gong" 
                    className="block p-3 hover:bg-stone-700 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-8 h-8 rounded-full bg-jade-500/10 flex items-center justify-center text-jade-500 font-chinese">
                        內
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-gold-500">Nei Gong</span>
                          <span className="text-stone-500 text-sm font-chinese">內功</span>
                        </div>
                        <p className="text-stone-400 text-xs mt-1">Internal energy development practices</p>
                      </div>
                    </div>
                  </Link>
                  <Link 
                    to="/tai-chi" 
                    className="block p-3 hover:bg-stone-700 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-8 h-8 rounded-full bg-jade-500/10 flex items-center justify-center text-jade-500 font-chinese">
                        太
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-gold-500">Tai Chi</span>
                          <span className="text-stone-500 text-sm font-chinese">太極</span>
                        </div>
                        <p className="text-stone-400 text-xs mt-1">Moving meditation through form practice</p>
                      </div>
                    </div>
                  </Link>
                  <Link 
                    to="/meditation" 
                    className="block p-3 hover:bg-stone-700 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-8 h-8 rounded-full bg-jade-500/10 flex items-center justify-center text-jade-500 font-chinese">
                        靜
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-gold-500">Meditation</span>
                          <span className="text-stone-500 text-sm font-chinese">靜坐</span>
                        </div>
                        <p className="text-stone-400 text-xs mt-1">Seated meditation practices</p>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Theory Button (Green) */}
            <div className="relative dropdown-container">
              <button
                onClick={() => {
                  setShowTheoryDropdown(!showTheoryDropdown);
                  setShowDaoistYogaDropdown(false);
                }}
                className="flex items-center gap-2 bg-jade-500 hover:bg-jade-600 text-stone-100 px-5 py-2 
                         rounded-lg font-medium transition-colors"
              >
                <span>Theory</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    showTheoryDropdown ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Theory Dropdown */}
              {showTheoryDropdown && (
                <div className="absolute right-0 mt-2 w-60 bg-stone-800 rounded-lg shadow-xl overflow-hidden">
                  <Link 
                    to="/theory" 
                    className="block p-3 hover:bg-stone-700 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-gold-500">Daoist Principles</span>
                      <span className="text-stone-500 text-sm font-chinese">道家原理</span>
                    </div>
                  </Link>
                  <Link 
                    to="/energy-cultivation" 
                    className="block p-3 hover:bg-stone-700 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-gold-500">Energy Cultivation</span>
                      <span className="text-stone-500 text-sm font-chinese">氣功修煉</span>
                    </div>
                  </Link>
                  <Link 
                    to="/blog" 
                    className="block p-3 hover:bg-stone-700 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-gold-500">Wisdom Teachings</span>
                      <span className="text-stone-500 text-sm font-chinese">智慧教導</span>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* About Button (Gray) */}
            <Link
              to="/about"
              className="bg-stone-700 hover:bg-stone-600 text-stone-100 px-5 py-2 
                       rounded-lg font-medium transition-colors"
            >
              About
            </Link>
          </div>

          {/* User Profile */}
          <div className="hidden md:flex items-center">
            <Link to="/profile" className="flex items-center gap-2 text-stone-300 hover:text-gold-500 transition-colors">
              <div className="w-8 h-8 rounded-full bg-jade-500/10 flex items-center justify-center text-jade-500">
                <span className="font-chinese">心</span>
              </div>
              <span className="text-sm">Harmony Seeker</span>
            </Link>
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
          {/* Mobile Practice Section */}
          <div className="px-3 py-2 font-medium text-gold-500">
            Practice
          </div>
          <Link
            to="/daoist-yoga"
            className="block px-3 py-2 rounded-md text-base text-stone-300 hover:bg-stone-700"
          >
            <span className="font-chinese">道瑜伽</span>
            <span className="ml-2 text-sm">(Daoist Yoga)</span>
          </Link>
          <Link
            to="/nei-gong"
            className="block px-3 py-2 rounded-md text-base text-stone-300 hover:bg-stone-700"
          >
            <span className="font-chinese">內功</span>
            <span className="ml-2 text-sm">(Nei Gong)</span>
          </Link>
          <Link
            to="/tai-chi"
            className="block px-3 py-2 rounded-md text-base text-stone-300 hover:bg-stone-700"
          >
            <span className="font-chinese">太極</span>
            <span className="ml-2 text-sm">(Tai Chi)</span>
          </Link>
          <Link
            to="/meditation"
            className="block px-3 py-2 rounded-md text-base text-stone-300 hover:bg-stone-700"
          >
            <span className="font-chinese">靜坐</span>
            <span className="ml-2 text-sm">(Meditation)</span>
          </Link>
          
          {/* Mobile Theory Section */}
          <div className="px-3 py-2 font-medium text-jade-500 border-t border-stone-700 mt-2 pt-4">
            Theory
          </div>
          <Link
            to="/theory"
            className="block px-3 py-2 rounded-md text-base text-stone-300 hover:bg-stone-700"
          >
            Daoist Principles
          </Link>
          <Link
            to="/energy-cultivation"
            className="block px-3 py-2 rounded-md text-base text-stone-300 hover:bg-stone-700"
          >
            Energy Cultivation
          </Link>
          <Link
            to="/blog"
            className="block px-3 py-2 rounded-md text-base text-stone-300 hover:bg-stone-700"
          >
            Wisdom Teachings
          </Link>
          
          {/* Mobile About */}
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base text-stone-300 hover:bg-stone-700 border-t border-stone-700 mt-2 pt-4"
          >
            About
          </Link>
          
          {/* Mobile Profile */}
          <Link
            to="/profile"
            className="block px-3 py-2 rounded-md text-base text-stone-300 hover:bg-stone-700 mt-4 flex items-center"
          >
            <div className="w-6 h-6 rounded-full bg-jade-500/10 flex items-center justify-center text-jade-500 mr-2">
              <span className="font-chinese">心</span>
            </div>
            <span>Harmony Seeker</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;