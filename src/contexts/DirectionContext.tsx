import React, { createContext, useContext, useState } from 'react';

type Direction = 'ltr' | 'rtl';

interface DirectionContextType {
  direction: Direction;
  toggleDirection: () => void;
}

const DirectionContext = createContext<DirectionContextType | undefined>(undefined);

export const DirectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [direction, setDirection] = useState<Direction>('ltr');

  const toggleDirection = () => {
    setDirection((prev) => (prev === 'ltr' ? 'rtl' : 'ltr'));
  };

  return (
    <DirectionContext.Provider value={{ direction, toggleDirection }}>
      {children}
    </DirectionContext.Provider>
  );
};

export const useDirection = () => {
  const context = useContext(DirectionContext);
  if (context === undefined) {
    throw new Error('useDirection must be used within a DirectionProvider');
  }
  return context;
};
