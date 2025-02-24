// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// Constants for subscription types
export const SUBSCRIPTION_TYPES = {
  FREE: 'free',
  MONTHLY: 'monthly',
  ANNUAL: 'annual'
};

// Create the authentication context
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  // Initialize - check for existing session
  useEffect(() => {
    // Check localStorage for existing auth data
    const savedUser = localStorage.getItem('harmonygate_user');
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Failed to parse saved user data');
        localStorage.removeItem('harmonygate_user');
      }
    }
    setLoading(false);
  }, []);

  // Login function - would connect to backend in production
  const login = async (email, password) => {
    setLoading(true);
    setAuthError(null);
    
    try {
      // For demo purposes, we'll simulate a successful login
      // In production, this would be an API call
      const mockUserData = {
        id: 'user123',
        email,
        name: 'Demo User',
        subscription: SUBSCRIPTION_TYPES.FREE,
        subscriptionExpiry: null,
        joinDate: new Date().toISOString(),
        progressData: {}
      };
      
      // Store in local storage for persistence
      localStorage.setItem('harmonygate_user', JSON.stringify(mockUserData));
      setCurrentUser(mockUserData);
      return mockUserData;
    } catch (error) {
      setAuthError(error.message || 'Login failed');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Signup function
  const signup = async (email, password, name) => {
    setLoading(true);
    setAuthError(null);
    
    try {
      // For demo purposes, we'll simulate a successful signup
      const mockUserData = {
        id: 'user' + Math.floor(Math.random() * 1000),
        email,
        name,
        subscription: SUBSCRIPTION_TYPES.FREE,
        subscriptionExpiry: null,
        joinDate: new Date().toISOString(),
        progressData: {}
      };
      
      localStorage.setItem('harmonygate_user', JSON.stringify(mockUserData));
      setCurrentUser(mockUserData);
      return mockUserData;
    } catch (error) {
      setAuthError(error.message || 'Signup failed');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('harmonygate_user');
    setCurrentUser(null);
  };

  // Update subscription status
  const updateSubscription = (subscriptionType, expiryDate) => {
    if (!currentUser) return false;
    
    const updatedUser = {
      ...currentUser,
      subscription: subscriptionType,
      subscriptionExpiry: expiryDate
    };
    
    localStorage.setItem('harmonygate_user', JSON.stringify(updatedUser));
    setCurrentUser(updatedUser);
    return true;
  };

  // Check if user can access content
  const canAccessContent = (contentRequiredSubscription, releaseDate) => {
    if (!currentUser) return false;
    
    // Free users can only access free content
    if (currentUser.subscription === SUBSCRIPTION_TYPES.FREE) {
      return contentRequiredSubscription === SUBSCRIPTION_TYPES.FREE;
    }
    
    // Monthly subscribers can access free and monthly content
    if (currentUser.subscription === SUBSCRIPTION_TYPES.MONTHLY) {
      return contentRequiredSubscription !== SUBSCRIPTION_TYPES.ANNUAL;
    }
    
    // Annual subscribers can access all content, but only if it has been released
    if (currentUser.subscription === SUBSCRIPTION_TYPES.ANNUAL) {
      if (!releaseDate) return true;
      
      // Check if release date has passed
      const now = new Date();
      const contentReleaseDate = new Date(releaseDate);
      return now >= contentReleaseDate;
    }
    
    return false;
  };

  // Track user progress for a specific video
  const updateProgress = (videoId, percentComplete) => {
    if (!currentUser) return;
    
    const updatedProgressData = {
      ...currentUser.progressData,
      [videoId]: {
        percentComplete,
        lastWatched: new Date().toISOString()
      }
    };
    
    const updatedUser = {
      ...currentUser,
      progressData: updatedProgressData
    };
    
    localStorage.setItem('harmonygate_user', JSON.stringify(updatedUser));
    setCurrentUser(updatedUser);
  };

  // Value object to be provided by the context
  const value = {
    currentUser,
    loading,
    authError,
    login,
    signup,
    logout,
    updateSubscription,
    canAccessContent,
    updateProgress,
    SUBSCRIPTION_TYPES
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for using the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}