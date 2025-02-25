// src/components/user/ProfileAccessButton.jsx
// Quick access button for user profile and progress tracking

import React, { useState, useEffect, useRef } from 'react';
import { User, BarChart, Activity, Clock, CalendarDays } from 'lucide-react';

function ProfileAccessButton({ userData = {}, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Default user data if not provided
  const user = {
    displayName: userData.displayName || 'Harmony Seeker',
    level: userData.level || 2,
    nextMilestone: userData.nextMilestone || 'Channel Opening Phase',
    lastPractice: userData.lastPractice || new Date().toISOString(),
    currentStreak: userData.currentStreak || 6,
    ...userData
  };

  // Handle clicking outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Handle navigation
  const handleNavigation = (path) => {
    setIsOpen(false);
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Button */}
      <button
        className="flex items-center gap-2 text-stone-300 hover:text-gold-300 px-3 py-2 rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open user profile menu"
      >
        <div className="w-10 h-10 rounded-full bg-jade-700 flex items-center justify-center">
          <User className="h-5 w-5 text-jade-300" />
        </div>
        <div className="hidden md:block text-left">
          <div className="text-sm font-medium text-gold-300">{user.displayName}</div>
          <div className="text-xs text-jade-300">Level {user.level}</div>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-stone-800 rounded-xl shadow-xl border border-jade-500/20 overflow-hidden z-50">
          {/* Header with user info */}
          <div className="p-4 bg-gradient-to-r from-stone-800 to-jade-900 border-b border-jade-600/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-jade-700 flex items-center justify-center">
                <User className="h-6 w-6 text-jade-300" />
              </div>
              <div>
                <p className="text-gold-300 font-medium">{user.displayName}</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-jade-300 text-sm">Level {user.level}</span>
                  <span className="text-stone-500 mx-1">•</span>
                  <span className="text-stone-300 text-sm">{user.nextMilestone}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Summary */}
          <div className="grid grid-cols-2 gap-0.5 bg-stone-900/50 p-0.5">
            <div className="bg-stone-800 p-3 flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-jade-400" />
              <div>
                <div className="text-xs text-stone-400">Current Streak</div>
                <div className="text-sm text-gold-300">{user.currentStreak} days</div>
              </div>
            </div>
            <div className="bg-stone-800 p-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-jade-400" />
              <div>
                <div className="text-xs text-stone-400">Last Practice</div>
                <div className="text-sm text-stone-300">{formatDate(user.lastPractice)}</div>
              </div>
            </div>
          </div>
          
          {/* Navigation Options */}
          <div className="py-2">
            <button 
              className="w-full text-left px-4 py-3 flex items-center gap-3 text-stone-300 hover:bg-jade-700 hover:text-jade-300 transition-colors"
              onClick={() => handleNavigation('/profile')}
            >
              <User className="w-5 h-5" />
              <span>View Profile</span>
            </button>
            <button 
              className="w-full text-left px-4 py-3 flex items-center gap-3 text-stone-300 hover:bg-jade-700 hover:text-jade-300 transition-colors"
              onClick={() => handleNavigation('/progress')}
            >
              <BarChart className="w-5 h-5" />
              <span>Practice Progress</span>
            </button>
            <button 
              className="w-full text-left px-4 py-3 flex items-center gap-3 text-stone-300 hover:bg-jade-700 hover:text-jade-300 transition-colors"
              onClick={() => handleNavigation('/log-practice')}
            >
              <Activity className="w-5 h-5" />
              <span>Log New Practice</span>
            </button>
          </div>
          
          {/* Start Practice Button */}
          <div className="p-3 bg-gradient-to-r from-stone-800 to-jade-800 border-t border-jade-600/20">
            <button
              className="w-full bg-jade-600 hover:bg-jade-500 text-stone-100 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
              onClick={() => handleNavigation('/practice/recommended')}
            >
              <Activity className="w-4 h-4" />
              Begin Recommended Practice
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileAccessButton;