// src/context/AuthContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  register: () => {},
  updateProgress: () => {},
  completeSession: () => {}
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Try to load user data from localStorage on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem('harmonyGateUser');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('harmonyGateUser');
      }
    }
  }, []);
  
  // Save user data to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('harmonyGateUser', JSON.stringify(user));
    }
  }, [user]);

  const login = (credentials) => {
    // Mock login function
    console.log('Login attempt with:', credentials);
    
    // For demonstration purposes, create a mock user with progress data
    const mockUser = {
      id: 'user-123',
      name: credentials?.name || 'Harmony Seeker',
      email: credentials?.email || 'user@example.com',
      role: 'user',
      createdAt: new Date().toISOString(),
      // Progress data
      level: 2,
      phase: "Channel Opening",
      lastPractice: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      completedSessions: 28,
      totalMinutes: 840,
      currentStreak: 4,
      longestStreak: 12,
      // Category progress
      categoryProgress: {
        daoistYoga: {
          sessions: 12,
          minutes: 360,
          progress: 35
        },
        qigong: {
          sessions: 8,
          minutes: 240,
          progress: 25
        },
        meditation: {
          sessions: 8,
          minutes: 240,
          progress: 20
        }
      },
      // User preferences
      preferences: {
        practiceReminders: true,
        reminderTime: "07:00",
        darkMode: true,
        language: "en",
        notifyAchievements: true,
        notifyUpdates: true
      },
      // Recent activity
      recentActivity: [
        { 
          id: 1,
          date: new Date(Date.now() - 86400000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          practice: "Morning Flow",
          category: "Daoist Yoga",
          duration: "30 min",
          achievement: "Completed 10th session"
        },
        { 
          id: 2,
          date: new Date(Date.now() - 86400000 * 2).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          practice: "Ba Duan Jin",
          category: "QiGong",
          duration: "15 min",
          achievement: null
        },
        { 
          id: 3,
          date: new Date(Date.now() - 86400000 * 3).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          practice: "Energy Circulation",
          category: "Meditation",
          duration: "20 min",
          achievement: "Started meditation journey"
        }
      ],
      // Achievements
      achievements: [
        {
          id: 1,
          title: 'First Step',
          description: 'Complete your first practice session',
          category: 'practice',
          achieved: true,
          achievedDate: '2024-02-01',
          progress: 100,
          reward: 'Level 1 access'
        },
        {
          id: 2,
          title: 'Consistent Practitioner',
          description: 'Practice for 7 consecutive days',
          category: 'practice',
          achieved: false,
          progress: 57, // 4/7 days
          reward: 'Streak badge'
        },
        {
          id: 3,
          title: 'Channel Opener',
          description: 'Complete 15 Daoist Yoga sessions',
          category: 'progress',
          achieved: false,
          progress: 80, // 12/15 sessions
          reward: 'Channel Opening certificate'
        }
      ]
    };
    
    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('harmonyGateUser', JSON.stringify(mockUser));
    
    return Promise.resolve({ success: true });
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('harmonyGateUser');
    return Promise.resolve({ success: true });
  };

  const register = (userInfo) => {
    // Mock register function
    console.log('Register attempt with:', userInfo);
    
    // Create a new user with initial progress data
    const newUser = {
      id: 'user-' + Math.floor(Math.random() * 1000),
      name: userInfo.name || 'New Seeker',
      email: userInfo.email,
      role: 'user',
      createdAt: new Date().toISOString(),
      // Initial progress data
      level: 1,
      phase: "Foundation",
      lastPractice: null,
      completedSessions: 0,
      totalMinutes: 0,
      currentStreak: 0,
      longestStreak: 0,
      // Empty category progress
      categoryProgress: {
        daoistYoga: {
          sessions: 0,
          minutes: 0,
          progress: 0
        },
        qigong: {
          sessions: 0,
          minutes: 0,
          progress: 0
        },
        meditation: {
          sessions: 0,
          minutes: 0,
          progress: 0
        }
      },
      // Default preferences
      preferences: {
        practiceReminders: true,
        reminderTime: "07:00",
        darkMode: true,
        language: "en",
        notifyAchievements: true,
        notifyUpdates: true
      },
      // Empty recent activity
      recentActivity: [],
      // Initial achievement (first step not yet achieved)
      achievements: [
        {
          id: 1,
          title: 'First Step',
          description: 'Complete your first practice session',
          category: 'practice',
          achieved: false,
          progress: 0,
          reward: 'Level 1 access'
        }
      ]
    };
    
    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem('harmonyGateUser', JSON.stringify(newUser));
    
    return Promise.resolve({ success: true });
  };
  
  // Update user progress with new data
  const updateProgress = (progressData) => {
    if (!user) return;
    
    setUser((prevUser) => {
      const updatedUser = {
        ...prevUser,
        ...progressData
      };
      
      localStorage.setItem('harmonyGateUser', JSON.stringify(updatedUser));
      return updatedUser;
    });
  };
  
  // Record a completed practice session
  const completeSession = (sessionData) => {
    if (!user) return;
    
    const { 
      practice, 
      category, 
      duration, // in minutes 
      achievement = null
    } = sessionData;
    
    setUser((prevUser) => {
      // Calculate updated values
      const lastPractice = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const completedSessions = prevUser.completedSessions + 1;
      const totalMinutes = prevUser.totalMinutes + duration;
      
      // Update streak (simplified logic - assumes daily check)
      const lastPracticeDate = prevUser.lastPractice ? new Date(prevUser.lastPractice) : null;
      const today = new Date();
      const isConsecutiveDay = lastPracticeDate && 
        (today.getDate() === lastPracticeDate.getDate() + 1 || 
         (today.getDate() === 1 && lastPracticeDate.getDate() === new Date(lastPracticeDate.getFullYear(), 
                                                                        lastPracticeDate.getMonth() + 1, 0).getDate()));
      
      const currentStreak = isConsecutiveDay ? prevUser.currentStreak + 1 : 1;
      const longestStreak = Math.max(currentStreak, prevUser.longestStreak);
      
      // Update category progress
      const categoryKey = category.toLowerCase().replace(/\s+/g, '');
      const updatedCategoryProgress = {
        ...prevUser.categoryProgress,
        [categoryKey]: {
          sessions: (prevUser.categoryProgress[categoryKey]?.sessions || 0) + 1,
          minutes: (prevUser.categoryProgress[categoryKey]?.minutes || 0) + duration,
          progress: Math.min(100, ((prevUser.categoryProgress[categoryKey]?.sessions || 0) + 1) * 5) // Simplified progress calculation
        }
      };
      
      // Add to recent activity
      const newActivity = {
        id: Date.now(),
        date: lastPractice,
        practice,
        category,
        duration: `${duration} min`,
        achievement
      };
      
      const recentActivity = [newActivity, ...prevUser.recentActivity].slice(0, 10); // Keep only last 10
      
      // Update achievements
      const updatedAchievements = [...prevUser.achievements];
      
      // Check for First Step achievement
      if (completedSessions === 1) {
        const firstStepIndex = updatedAchievements.findIndex(a => a.title === 'First Step');
        if (firstStepIndex !== -1) {
          updatedAchievements[firstStepIndex] = {
            ...updatedAchievements[firstStepIndex],
            achieved: true,
            achievedDate: new Date().toISOString().split('T')[0],
            progress: 100
          };
        }
      }
      
      // Check for streak achievement
      const streakAchievementIndex = updatedAchievements.findIndex(a => a.title === 'Consistent Practitioner');
      if (streakAchievementIndex !== -1) {
        updatedAchievements[streakAchievementIndex] = {
          ...updatedAchievements[streakAchievementIndex],
          progress: Math.min(100, (currentStreak / 7) * 100),
          achieved: currentStreak >= 7,
          ...(currentStreak >= 7 && { achievedDate: new Date().toISOString().split('T')[0] })
        };
      }
      
      // Check for category-specific achievements
      if (category === 'Daoist Yoga') {
        const channelAchievementIndex = updatedAchievements.findIndex(a => a.title === 'Channel Opener');
        if (channelAchievementIndex !== -1) {
          const sessions = updatedCategoryProgress.daoistYoga.sessions;
          updatedAchievements[channelAchievementIndex] = {
            ...updatedAchievements[channelAchievementIndex],
            progress: Math.min(100, (sessions / 15) * 100),
            achieved: sessions >= 15,
            ...(sessions >= 15 && { achievedDate: new Date().toISOString().split('T')[0] })
          };
        }
      }
      
      // Simplified level progression
      let level = prevUser.level;
      let phase = prevUser.phase;
      
      // Level up based on total sessions (very simplified)
      if (completedSessions >= 50 && level < 3) {
        level = 3;
        phase = "Energy Building";
      } else if (completedSessions >= 25 && level < 2) {
        level = 2;
        phase = "Channel Opening";
      }
      
      const updatedUser = {
        ...prevUser,
        lastPractice,
        completedSessions,
        totalMinutes,
        currentStreak,
        longestStreak,
        categoryProgress: updatedCategoryProgress,
        recentActivity,
        achievements: updatedAchievements,
        level,
        phase
      };
      
      localStorage.setItem('harmonyGateUser', JSON.stringify(updatedUser));
      return updatedUser;
    });
    
    return Promise.resolve({ success: true });
  };

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    register,
    updateProgress,
    completeSession
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;