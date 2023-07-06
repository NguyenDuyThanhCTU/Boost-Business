"use client";
import React, { createContext, useContext, useState } from "react";

export type StateContextType = {
  test: boolean;
  setTest: (test: boolean) => void;
};

type StateProviderProps = {
  children: React.ReactNode;
};

export const StateContext = createContext<StateContextType>({
  test: false,
  setTest: () => {},
});

export const StateProvider = ({ children }: StateProviderProps) => {
  const [test, setTest] = useState(false);
  return (
    <StateContext.Provider value={{ setTest, test }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
