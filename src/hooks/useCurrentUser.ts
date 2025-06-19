import { useQuickLoginContext } from '../core/useQuickLoginContext.ts';

export const useCurrentUser = () => {
  const { user } = useQuickLoginContext();
  return user;
};
