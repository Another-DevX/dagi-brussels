import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppState {
  exampleState: string;
  setExampleState: React.Dispatch<React.SetStateAction<string>>;
}

const TokenContext = createContext<AppState | undefined>(undefined);

const TokenProvider = ({ children }: { children: ReactNode }) => {
  const [exampleState, setExampleState] = useState<string>('ETH ');

  return (
    <TokenContext.Provider value={{ exampleState, setExampleState }}>
      {children}
    </TokenContext.Provider>
  );
};

const useTokenContext = () => {
  const context = useContext(TokenContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export { TokenProvider, useTokenContext };
