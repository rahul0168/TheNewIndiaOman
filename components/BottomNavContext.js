import React, { createContext, useState, useContext } from 'react';

const BottomNavContext = createContext();

export const useBottomNav = () => useContext(BottomNavContext);

export const BottomNavProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <BottomNavContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </BottomNavContext.Provider>
  );
};
