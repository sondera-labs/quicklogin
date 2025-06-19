import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

export interface QuickLoginContextValue {
  user: any;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: () => Promise<void>;
  logout: () => void;
}

const QuickLoginContext = createContext<QuickLoginContextValue | undefined>(undefined);

interface QuickLoginProviderProps {
  children: ReactNode;
}

export const QuickLoginProvider: React.FC<QuickLoginProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // TODO: Implement actual login logic with Sondera Desktop
  const login = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Placeholder: Replace with real communication to Sondera Desktop
      // Simulate login
      await new Promise((res) => setTimeout(res, 1000));
      setUser({ id: "mock-user", address: "0x123..." });
      setIsAuthenticated(true);
    } catch (e: any) {
      setError(e.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  return <QuickLoginContext.Provider value={{ user, isAuthenticated, isLoading, error, login, logout }}>{children}</QuickLoginContext.Provider>;
};

export const useQuickLoginContext = () => {
  const ctx = useContext(QuickLoginContext);
  if (!ctx) throw new Error("useQuickLoginContext must be used within a QuickLoginProvider");
  return ctx;
};
