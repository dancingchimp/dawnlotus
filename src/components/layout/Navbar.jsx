// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, User } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStudyOpen, setIsStudyOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to add background to navbar when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleStudy = () => setIsStudyOpen(!isStudyOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-stone-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-chinese text-gold-500">和門</span>
            <span className="text-lg font-serif text-stone-100">Harmony Gate</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {/* Study Dropdown - Gold Button */}
            <div className="relative">
              <button 
                onClick={toggleStudy}
                className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gold-500 text-stone-900 hover:bg-gold-400 
                         transition-all duration-300 font-medium"
              >
                <span>Study</span>
                <ChevronDown size={16} className={`transform transition-transform ${isStudyOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isStudyOpen && (
                <div className="absolute top-full mt-1 w-56 rounded-lg bg-stone-800/95 backdrop-blur-md 
                              border border-gold-500/20 shadow-xl overflow-hidden">
                  <div className="py-1">
                    <a 
                      href="/study/daoist-yoga" 
                      className="block px-4 py-3 text-stone-300 hover:bg-gold-500/10 hover:text-gold-500 
                               transition-colors duration-200"
                    >
                      <div className="font-medium">Daoist Yoga</div>
                      <div className="text-xs text-stone-400 mt-0.5">The integrated system</div>
                    </a>
                    <a 
                      href="/study/qigong" 
                      className="block px-4 py-3 text-stone-300 hover:bg-gold-500/10 hover:text-gold-500 
                               transition-colors duration-200"
                    >
                      <div className="font-medium">QiGong</div>
                      <div className="text-xs text-stone-400 mt-0.5">Energy cultivation</div>
                    </a>
                    <a 
                      href="/study/taijigong" 
                      className="block px-4 py-3 text-stone-300 hover:bg-gold-500/10 hover:text-gold-500 
                               transition-colors duration-200"
                    >
                      <div className="font-medium">TaijiGong</div>
                      <div className="text-xs text-stone-400 mt-0.5">Harmony in movement</div>
                    </a>
                    <a 
                      href="/study/meditation" 
                      className="block px-4 py-3 text-stone-300 hover:bg-gold-500/10 hover:text-gold-500 
                               transition-colors duration-200"
                    >
                      <div className="font-medium">Meditation</div>
                      <div className="text-xs text-stone-400 mt-0.5">Stillness practices</div>
                    </a>
                    <a 
                      href="/study/wisdom" 
                      className="block px-4 py-3 text-stone-300 hover:bg-gold-500/10 hover:text-gold-500 
                               transition-colors duration-200"
                    >
                      <div className="font-medium">Wisdom</div>
                      <div className="text-xs text-stone-400 mt-0.5">Sovereign Harmony teachings</div>
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            {/* Practice Button - Jade Button */}
            <a 
              href="/practice" 
              className="px-5 py-2 rounded-lg bg-jade-500 text-stone-100 hover:bg-jade-400 
                       transition-all duration-300 font-medium"
            >
              Practice
            </a>
            
            {/* Theory Link */}
            <a 
              href="/theory" 
              className="px-5 py-2 rounded-lg text-stone-300 hover:text-stone-100 
                       transition-colors duration-300"
            >
              Theory
            </a>
            
            {/* About Link */}
            <a 
              href="/about" 
              className="px-5 py-2 rounded-lg text-stone-300 hover:text-stone-100 
                       transition-colors duration-300"
            >
              About
            </a>
          </nav>
          
          {/* Profile Button */}
          <div className="flex items-center">
            <a 
              href="/profile" 
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-jade-500/10 hover:bg-jade-500/20 
                       text-jade-400 transition-colors duration-300"
            >
              <span className="hidden sm:inline text-sm">Harmony Seeker</span>
              <User size={18} />
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="ml-4 p-2 rounded-lg text-stone-300 hover:text-gold-500 md:hidden 
                       transition-colors duration-300 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-stone-800/95 backdrop-blur-md border-t border-stone-700/50 animate-fadeIn">
          <div className="py-3 px-2 max-h-[80vh] overflow-y-auto">
            <button 
              onClick={toggleStudy}
              className="flex items-center justify-between w-full px-4 py-3 text-stone-200 
                       hover:bg-gold-500/10 rounded-lg transition-colors"
            >
              <span className="font-medium">Study</span>
              <ChevronDown size={16} className={`transform transition-transform ${isStudyOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isStudyOpen && (
              <div className="pl-4 space-y-1 border-l-2 border-gold-500/20 ml-4 mt-2 mb-3">
                <a 
                  href="/study/daoist-yoga" 
                  className="block px-4 py-2.5 text-stone-400 hover:text-gold-500 rounded-lg transition-colors"
                  onClick={toggleMenu}
                >
                  Daoist Yoga
                </a>
                <a 
                  href="/study/qigong" 
                  className="block px-4 py-2.5 text-stone-400 hover:text-gold-500 rounded-lg transition-colors"
                  onClick={toggleMenu}
                >
                  QiGong
                </a>
                <a 
                  href="/study/taijigong" 
                  className="block px-4 py-2.5 text-stone-400 hover:text-gold-500 rounded-lg transition-colors"
                  onClick={toggleMenu}
                >
                  TaijiGong
                </a>
                <a 
                  href="/study/meditation" 
                  className="block px-4 py-2.5 text-stone-400 hover:text-gold-500 rounded-lg transition-colors"
                  onClick={toggleMenu}
                >
                  Meditation
                </a>
                <a 
                  href="/study/wisdom" 
                  className="block px-4 py-2.5 text-stone-400 hover:text-gold-500 rounded-lg transition-colors"
                  onClick={toggleMenu}
                >
                  Wisdom
                </a>
              </div>
            )}
            
            <a 
              href="/practice" 
              className="block px-4 py-3 text-stone-200 hover:bg-jade-500/10 hover:text-jade-400 
                       rounded-lg transition-colors"
              onClick={toggleMenu}
            >
              Practice
            </a>
            
            <a 
              href="/theory" 
              className="block px-4 py-3 text-stone-200 hover:bg-stone-700/50 
                       rounded-lg transition-colors"
              onClick={toggleMenu}
            >
              Theory
            </a>
            
            <a 
              href="/about" 
              className="block px-4 py-3 text-stone-200 hover:bg-stone-700/50 
                       rounded-lg transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
            
            <a 
              href="/profile" 
              className="block px-4 py-3 text-stone-200 hover:bg-jade-500/10 hover:text-jade-400 
                       rounded-lg transition-colors mt-2 border-t border-stone-700/50 pt-5"
              onClick={toggleMenu}
            >
              Profile
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;