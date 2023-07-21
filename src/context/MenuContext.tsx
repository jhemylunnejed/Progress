"use client"

import React, { createContext, useEffect, useState, ReactNode } from 'react';

export interface MenuContextValue {
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuContext = createContext<MenuContextValue>({
  clicked: false,
  setClicked: () => {},
});

// Define the Socket.IO context provider component
export const MenuContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <MenuContext.Provider value={{ clicked, setClicked }}>
      {children}
    </MenuContext.Provider>
  );
};
