import { useQuickLoginContext } from '../core/useQuickLoginContext.ts';

export const useLogout = () => {
  const { logout } = useQuickLoginContext();
  return logout;
};
