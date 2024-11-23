import React, { createContext, useContext, useState } from 'react';

type HeaderVisibilityContextType = {
  isHeaderVisible: boolean;
  setHeaderVisible: (visible: boolean) => void;
};

const HeaderVisibilityContext = createContext<HeaderVisibilityContextType | undefined>(undefined);

export const HeaderVisibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isHeaderVisible, setHeaderVisible] = useState(false);

  return (
    <HeaderVisibilityContext.Provider value={{ isHeaderVisible, setHeaderVisible }}>
      {children}
    </HeaderVisibilityContext.Provider>
  );
};

export const useHeaderVisibility = () => {
  const context = useContext(HeaderVisibilityContext);
  if (!context) {
    throw new Error('useHeaderVisibility must be used within a HeaderVisibilityProvider');
  }
  return context;
};
