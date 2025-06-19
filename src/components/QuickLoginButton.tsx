import { CSSProperties } from 'react';
import { useQuickLoginContext } from '../core/useQuickLoginContext.ts';

interface QuickLoginButtonProps {
  className?: string;
  style?: CSSProperties;
  color?: string;
}

export const QuickLoginButton = (props: QuickLoginButtonProps) => {
  const { login, isLoading } = useQuickLoginContext();

  return (
    <button
      onClick={login}
      disabled={isLoading}
      style={{
        padding: '0.75em 1.5em',
        fontSize: '1rem',
        borderRadius: 6,
        background: '#2d72fc',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        ...props.style,
      }}
      {...props}
    >
      {isLoading ? 'Signing in...' : 'Sign in with QuickLogin'}
    </button>
  );
};
