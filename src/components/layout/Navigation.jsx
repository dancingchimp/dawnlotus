// src/components/layout/Navigation.jsx

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/practice', label: '修練', english: 'Practice' },
  { path: '/theory', label: '理論', english: 'Theory' },
  { path: '/meditation', label: '靜坐', english: 'Meditation' },
  { path: '/about', label: '關於', english: 'About' },
];

function Navigation({ isScrolled }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
      </div>
    </nav>
  );
}

export default Navigation;