// src/pages/practice/PracticeDashboard.jsx
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import RecommendedPractice from '../../components/practice/RecommendedPractice';

const PracticeDashboard = () => {
  const { user } = useAuth();
  
  // Mock user data if not available from auth context
  const userData = user || {
    name: "Harmony Seeker",
    level: 2,
    phase: "Channel Opening",
    lastPractice: "Feb 23",
    completedSessions: 28,
    totalMinutes: 840,
    currentStreak: 4,
    longestStreak: 12
  };
  
  return (
    <div className="min-h-screen bg-stone-900 pt-16">
      <RecommendedPractice userData={userData} />
    </div>
  );
};

export default PracticeDashboard;