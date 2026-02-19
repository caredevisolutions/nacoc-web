import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check local storage for persistent login
    const storedAuth = localStorage.getItem('nacoc_admin_auth');
    if (storedAuth === 'true') {
      setIsAdmin(true);
    }
    setIsLoading(false);
  }, []);

  const login = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsAdmin(true);
      localStorage.setItem('nacoc_admin_auth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('nacoc_admin_auth');
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
