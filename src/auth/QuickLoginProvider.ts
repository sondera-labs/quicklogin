import { QuickLoginConfig } from '../types';

let _instance: QuickLoginProvider | null = null;

export class QuickLoginProvider {
  private config: QuickLoginConfig;

  private constructor(config: QuickLoginConfig) {
    if (!config || !config.clientId || !config.redirectUri) {
      throw new Error('Invalid configuration for QuickLoginProvider');
    }
    this.config = config;
  }

  static getInstance() {
    if (!_instance) throw new Error('QuickLoginProvider not initialized');
    return _instance;
  }

  static initialize(config: QuickLoginConfig) {
    if (!_instance) _instance = new QuickLoginProvider(config);
    return _instance;
  }

  public signIn() {}

  public signOut() {}
}
