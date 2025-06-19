import { useQuickLoginContext } from '../core/QuickLoginProvider';

export const useQuickLogin = () => {
  const { login, logout, isAuthenticated, isLoading, error, user } = useQuickLoginContext();
  return { login, logout, isAuthenticated, isLoading, error, user };
}; 