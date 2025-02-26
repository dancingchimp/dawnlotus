// src/components/common/StudyButton.jsx

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const studyOptions = [
  { 
    label: 'Daoist Yoga', 
    path: '/daoist-yoga',
    chinese: '道瑜伽',
    description: 'Integrating Western asanas with Daoist energy principles'
  },
  { 
    label: 'Nei Gong', 
    path: '/qigong',
    chinese: '內功',
    description: 'Internal energy cultivation and meditation practices'
  },
  { 
    label: 'Tai Chi', 
    path: '/tai-chi',
    chinese: '太極',
    description: 'Moving meditation through traditional form practice'
  }
];

function StudyButton() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-stone-900 px-4 py-2 rounded-lg font-medium transition-colors"
      >
        <span>Study Daoist Yoga</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-0 mt-2 w-72 bg-stone-800 rounded-lg shadow-xl overflow-hidden transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="p-2">
          {studyOptions.map((option) => (
            <Link
              key={option.path}
              to={option.path}
              className="block rounded-md p-3 hover:bg-stone-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-full bg-jade-500/10 flex items-center justify-center text-jade-500 font-chinese">
                  {option.chinese.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-gold-500 font-medium">{option.label}</span>
                    <span className="text-stone-500 text-sm font-chinese">{option.chinese}</span>
                  </div>
                  <p className="text-stone-400 text-sm mt-1">{option.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Quick Access Section */}
        <div className="bg-stone-900/50 p-2">
          <Link
            to="/daoist-yoga/practice"
            className="flex items-center justify-between rounded-md p-2 hover:bg-stone-700 transition-colors text-jade-500 text-sm"
            onClick={() => setIsOpen(false)}
          >
            <span>Begin Practice Session</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StudyButton;