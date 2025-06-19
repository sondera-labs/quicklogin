import { useQuickLoginContext } from '../core/QuickLoginProvider';

export const useCurrentUser = () => {
  const { user } = useQuickLoginContext();
  return user;
}; 