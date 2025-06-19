export interface QuickLoginConfig {
  clientId: string;
  redirectUri: string;
  network?: 'mainnet' | 'testnet';
}

export interface QuickLoginUser {
  did: string;
  address: string;
}

export interface QuickLoginContextValue {
  user: QuickLoginUser | undefined;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: () => Promise<void>;
  logout: () => void;
}
