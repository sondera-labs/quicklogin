import { useQuickLoginContext } from '../core/useQuickLoginContext.ts';

export const useQuickLogin = () => {
  const { login, logout, isAuthenticated, isLoading, user } = useQuickLoginContext();
  return { login, logout, isAuthenticated, isLoading, user };
};
