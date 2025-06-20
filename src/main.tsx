import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QuickLoginButton } from './components/QuickLoginButton/QuickLoginButton';
import { QuickLoginProvider } from './core/QuickLoginProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QuickLoginProvider>
      <QuickLoginButton />
    </QuickLoginProvider>
  </StrictMode>,
);
