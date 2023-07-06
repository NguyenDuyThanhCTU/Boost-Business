"use client";
import React, { createContext, useContext, useState } from "react";

export type StateContextType = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  IsAlert: string;
  setIsAlert: (IsAlert: string) => void;
};

type StateProviderProps = {
  children: React.ReactNode;
};

export const StateContext = createContext<StateContextType>({
  isLoading: false,
  setIsLoading: () => {},
  IsAlert: "",
  setIsAlert: () => {},
});

export const StateProvider = ({ children }: StateProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [IsAlert, setIsAlert] = useState("");
  return (
    <StateContext.Provider
      value={{ isLoading, setIsLoading, IsAlert, setIsAlert }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
