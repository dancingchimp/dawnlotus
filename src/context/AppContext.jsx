// src/context/AppContext.jsx

import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext({
  isLoading: false,
  setIsLoading: () => {},
});

export function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const value = {
    isLoading,
    setIsLoading,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}