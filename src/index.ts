import { QuickLoginConfig } from './types';
import { QuickLoginProvider } from './core/QuickLoginProvider';

/**
 * Creates a {@link QuickLoginProvider} with the provided configuration.
 * @param {QuickLoginConfig} config - Configuration object for authentication
 * @returns {QuickLoginProvider}
 */
export function initializeQuickLogin(config: QuickLoginConfig): QuickLoginProvider {
  return QuickLoginProvider.initialize(config);
}
