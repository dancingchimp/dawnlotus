// src/context/AuthContext.jsx

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  register: () => {}
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (credentials) => {
    // Mock login function
    console.log('Login attempt with:', credentials);
    
    // For demonstration purposes, always succeed login
    setUser({
      id: 'user-123',
      name: 'Demo User',
      email: credentials?.email || 'user@example.com',
      role: 'user'
    });
    setIsAuthenticated(true);
    return Promise.resolve({ success: true });
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    return Promise.resolve({ success: true });
  };

  const register = (userInfo) => {
    // Mock register function
    console.log('Register attempt with:', userInfo);
    
    // For demonstration purposes
    setUser({
      id: 'user-' + Math.floor(Math.random() * 1000),
      name: userInfo.name || 'New User',
      email: userInfo.email,
      role: 'user'
    });
    setIsAuthenticated(true);
    return Promise.resolve({ success: true });
  };

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    register
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