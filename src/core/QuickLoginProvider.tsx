import { ReactNode, useCallback, useState } from 'react';
import { QuickLoginUser } from '../types.ts';
import { QuickLoginContext } from './useQuickLoginContext.ts';

interface QuickLoginProviderProps {
  children: ReactNode;
}

export const QuickLoginProvider = (props: QuickLoginProviderProps) => {
  const [user, setUser] = useState<QuickLoginUser>();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async () => {
    setIsLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    setUser({ did: 'did:ethr:0xABC123', address: '0xABC123' });
    setIsAuthenticated(true);
    setIsLoading(false);
  }, []);

  const logout = useCallback(() => {
    setUser(undefined);
    setIsAuthenticated(false);
  }, []);

  return (
    <QuickLoginContext.Provider value={{ user, isAuthenticated, isLoading, login, logout }}>
      {props.children}
    </QuickLoginContext.Provider>
  );
};
