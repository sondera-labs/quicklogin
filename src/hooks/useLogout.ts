import { useQuickLoginContext } from '../core/QuickLoginProvider';

export const useLogout = () => {
  const { logout } = useQuickLoginContext();
  return logout;
}; 