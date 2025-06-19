import { createContext, useContext } from 'react';
import { QuickLoginContextValue } from '../types.ts';

const defaultQLContext: QuickLoginContextValue = {
  login: async () => {},
  logout: () => {},
  isAuthenticated: false,
  user: undefined,
  isLoading: false,
};

export const QuickLoginContext = createContext<QuickLoginContextValue>(defaultQLContext);

export const useQuickLoginContext = () => {
  const context = useContext(QuickLoginContext);
  if (!context) throw new Error('useQuickLoginContext must be used within a QuickLoginProvider');
  return context;
};
