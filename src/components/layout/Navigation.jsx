// src/components/layout/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { User, Menu, X, ChevronDown, BarChart } from 'lucide-react';

const navItems = [
  { path: '/practice', label: '修練', english: 'Practice' },
  { path: '/theory', label: '理論', english: 'Theory' },
  { path: '/meditation', label: '靜坐', english: 'Meditation' },
  { path: '/about', label: '關於', english: 'About' },
];

function Navigation({ currentUser }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Add scroll listener with increased sensitivity for mobile
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSubmenuOpen && !event.target.closest('.daoist-yoga-menu')) {
        setIsSubmenuOpen(false);
      }
      if (isProfileMenuOpen && !event.target.closest('.profile-menu')) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSubmenuOpen, isProfileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSubmenuOpen(false);
    setIsProfileMenuOpen(false);
  }, [location]);

  // Sample user data - in a real app this would come from context or props
  const user = currentUser || {
    displayName: 'Harmony Seeker',
    level: 2,
    nextMilestone: 'Channel Opening Phase',
    lastPractice: '2025-02-24'
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-stone-900/90 backdrop-blur-md shadow-md shadow-black/30' 
          : 'bg-stone-900/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-chinese text-gold-400">和門</span>
            <span className="text-lg font-serif text-stone-100">Harmony Gate</span>
          </Link>

          <div className="flex items-center">
            {/* Study Buttons - Simplified for Mobile */}
            <div className="flex space-x-1 sm:space-x-2 mr-2 sm:mr-6">
              {/* On mobile, use a simple button with dropdown */}
              <div className="md:hidden relative group daoist-yoga-menu">
                <button 
                  className="bg-gold-700 hover:bg-gold-600 text-stone-100 px-3 py-2 
                          rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsSubmenuOpen(!isSubmenuOpen);
                  }}
                >
                  <span className="flex items-center">
                    Study
                    <ChevronDown 
                      className={`h-4 w-4 ml-1 transition-transform duration-300 ${isSubmenuOpen ? 'rotate-180' : ''}`}
                    />
                  </span>
                </button>
                
                {/* Mobile Dropdown Menu - Includes all options */}
                {isSubmenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-stone-800/95 backdrop-blur-sm rounded-lg shadow-lg py-1 z-50">
                    <div className="border-b border-stone-700 pb-1 mb-1">
                      <span className="block px-4 py-1 text-xs font-medium text-stone-500">Daoist Yoga</span>
                      <Link 
                        to="/daoist-yoga-curriculum"
                        className="block px-4 py-2 text-sm text-stone-300 hover:bg-jade-700 hover:text-jade-300"
                        onClick={() => setIsSubmenuOpen(false)}
                      >
                        Curriculum Overview
                      </Link>
                      <Link 
                        to="/practice/foundation"
                        className="block px-4 py-2 text-sm text-stone-300 hover:bg-jade-700 hover:text-jade-300"
                        onClick={() => setIsSubmenuOpen(false)}
                      >
                        Foundation Practice
                      </Link>
                    </div>
                    
                    <div className="border-b border-stone-700 pb-1 mb-1">
                      <span className="block px-4 py-1 text-xs font-medium text-stone-500">Nei Gong</span>
                      <Link 
                        to="/neigong"
                        className="block px-4 py-2 text-sm text-stone-300 hover:bg-jade-700 hover:text-jade-300"
                        onClick={() => setIsSubmenuOpen(false)}
                      >
                        Study Nei Gong
                      </Link>
                    </div>
                    
                    <div>
                      <span className="block px-4 py-1 text-xs font-medium text-stone-500">Tai Chi</span>
                      <Link 
                        to="/taichi"
                        className="block px-4 py-2 text-sm text-stone-300 hover:bg-jade-700 hover:text-jade-300"
                        onClick={() => setIsSubmenuOpen(false)}
                      >
                        Study Tai Chi
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Desktop version with separate buttons */}
              <div className="hidden md:flex md:space-x-2">
                <div className="relative group daoist-yoga-menu">
                  <button 
                    className="bg-gold-700 hover:bg-gold-600 text-stone-100 px-3 py-2 
                            rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 whitespace-nowrap"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsSubmenuOpen(!isSubmenuOpen);
                    }}
                  >
                    <span className="flex items-center">
                      Study Daoist Yoga
                      <ChevronDown 
                        className={`h-4 w-4 ml-1 transition-transform duration-300 ${isSubmenuOpen ? 'rotate-180' : ''}`}
                      />
                    </span>
                  </button>
                  
                  {/* Desktop Dropdown Menu */}
                  {isSubmenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-stone-800/95 backdrop-blur-sm rounded-lg shadow-lg py-1 z-50">
                      <Link 
                        to="/daoist-yoga-curriculum"
                        className="block px-4 py-2 text-sm text-stone-300 hover:bg-jade-700 hover:text-jade-300"
                        onClick={() => setIsSubmenuOpen(false)}
                      >
                        Curriculum Overview
                      </Link>
                      <Link 
                        to="/practice/foundation"
                        className="block px-4 py-2 text-sm text-stone-300 hover:bg-jade-700 hover:text-jade-300"
                        onClick={() => setIsSubmenuOpen(false)}
                      >
                        Foundation Practice
                      </Link>
                    </div>
                  )}
                </div>
                
                <Link 
                  to="/neigong"
                  className="bg-jade-700 hover:bg-jade-600 text-stone-100 px-3 py-2 
                          rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap"
                >
                  Study Nei Gong
                </Link>
                <Link 
                  to="/taichi"
                  className="bg-stone-700 hover:bg-stone-600 text-stone-100 px-3 py-2 
                          rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap"
                >
                  Study Tai Chi
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(({ path, label, english }) => (
                <Link
                  key={path}
                  to={path}
                  className={`group flex flex-col items-center transition-colors duration-300 ${
                    location.pathname === path ? 'text-gold-400' : 'text-stone-300 hover:text-gold-300'
                  }`}
                >
                  <span className="text-sm font-chinese">{label}</span>
                  <span className="text-xs tracking-wide">{english}</span>
                  <span 
                    className={`h-0.5 w-0 bg-gold-400 transition-all duration-300 ${
                      location.pathname === path ? 'w-full' : 'group-hover:w-full'
                    }`} 
                  />
                </Link>
              ))}
            </div>

            {/* User Profile Button */}
            <div className="relative profile-menu ml-4">
              <button
                className="flex items-center gap-2 text-stone-300 hover:text-gold-300 px-3 py-2 rounded-lg transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsProfileMenuOpen(!isProfileMenuOpen);
                }}
              >
                <div className="w-8 h-8 rounded-full bg-jade-700 flex items-center justify-center">
                  <User className="h-5 w-5 text-jade-300" />
                </div>
                <span className="hidden md:block text-sm">{user.displayName}</span>
              </button>

              {/* Profile Dropdown */}
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-stone-800/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden z-50">
                  <div className="p-4 border-b border-stone-700">
                    <p className="text-gold-400 font-medium">{user.displayName}</p>
                    <div className="flex items-center gap-1 mt-1 text-sm">
                      <span className="text-jade-300">Level {user.level}</span>
                      <span className="text-stone-500 mx-1">•</span>
                      <span className="text-stone-300">{user.nextMilestone}</span>
                    </div>
                    <div className="text-xs text-stone-400 mt-1">
                      Last practice: {formatDate(user.lastPractice)}
                    </div>
                  </div>
                  
                  <div className="py-1">
                    <Link 
                      to="/profile"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-stone-300 hover:bg-jade-700 hover:text-jade-300"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      <User className="h-4 w-4" />
                      <span>View Profile</span>
                    </Link>
                    <Link 
                      to="/progress"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-stone-300 hover:bg-jade-700 hover:text-jade-300"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      <BarChart className="h-4 w-4" />
                      <span>Practice Progress</span>
                    </Link>
                  </div>
                  
                  <div className="p-3 bg-stone-900/30 border-t border-stone-700">
                    <button
                      className="w-full bg-jade-700 hover:bg-jade-600 text-stone-100 py-2 rounded-lg text-sm transition-colors"
                      onClick={() => {
                        navigate('/practice/recommended');
                        setIsProfileMenuOpen(false);
                      }}
                    >
                      Begin Recommended Practice
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
                if (isSubmenuOpen) setIsSubmenuOpen(false);
                if (isProfileMenuOpen) setIsProfileMenuOpen(false);
              }}
              className="md:hidden ml-2 p-2 rounded-md text-stone-300 hover:text-gold-300 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 max-h-screen'
            : 'opacity-0 -translate-y-4 max-h-0 overflow-hidden pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-stone-800/95 backdrop-blur-md shadow-lg">
          {/* User Profile Section in Mobile */}
          <div className="flex items-center gap-3 p-3 mb-3 bg-stone-800 rounded-lg">
            <div className="w-10 h-10 rounded-full bg-jade-700 flex items-center justify-center">
              <User className="h-5 w-5 text-jade-300" />
            </div>
            <div>
              <p className="text-gold-400 font-medium">{user.displayName}</p>
              <div className="flex items-center text-xs">
                <span className="text-jade-300">Level {user.level}</span>
                <span className="text-stone-500 mx-1">•</span>
                <span className="text-stone-300">{user.nextMilestone}</span>
              </div>
            </div>
          </div>
          
          {/* Quick Profile Actions */}
          <div className="flex gap-2 mb-4">
            <Link
              to="/profile"
              className="flex-1 flex items-center justify-center gap-1 bg-stone-700 hover:bg-stone-600 text-stone-300 py-2 rounded-lg text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <User className="h-4 w-4" />
              <span>Profile</span>
            </Link>
            <Link
              to="/progress"
              className="flex-1 flex items-center justify-center gap-1 bg-stone-700 hover:bg-stone-600 text-stone-300 py-2 rounded-lg text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <BarChart className="h-4 w-4" />
              <span>Progress</span>
            </Link>
          </div>
          
          {/* Main Nav Items */}
          <div className="pt-2 border-t border-stone-700">
            {navItems.map(({ path, label, english }) => (
              <Link
                key={path}
                to={path}
                className={`block px-3 py-2 rounded-md text-base ${
                  location.pathname === path
                    ? 'bg-jade-700 text-gold-300'
                    : 'text-stone-300 hover:bg-jade-800 hover:text-gold-300'
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
              className="block px-3 py-2 rounded-md text-base text-stone-300 hover:bg-jade-800 hover:text-jade-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Foundation Practice
            </Link>
            <Link
              to="/practice/recommended"
              className="block px-3 py-2 rounded-md text-base text-jade-300 hover:bg-jade-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Recommended Practice
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;