import { CSSProperties } from 'react';
import { useQuickLoginContext } from '../../core/useQuickLoginContext.ts';
import '../../index.css';
import './QuickLoginButton.css';
import { TypographyP } from '../ui/Typography.tsx';
import LogoLightTheme from '../../assets/logos/black-tbg.png';
import LogoDarkTheme from '../../assets/logos/white-tbg.png';
import { LoaderCircle } from 'lucide-react';

interface QuickLoginButtonProps {
  className?: string;
  style?: CSSProperties;
  theme?: 'light' | 'dark';
}

export const QuickLoginButton = (props: QuickLoginButtonProps) => {
  const { login, isLoading } = useQuickLoginContext();

  return (
    <div className='sondera-quicklogin'>
      <button
        className='sondera-quicklogin ql-button'
        onClick={login}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <LoaderCircle className='sondera-quicklogin ql-loader' />
        ) : (
          <img
            className='sondera-quicklogin ql-logo'
            src={props.theme && props.theme == 'light' ? LogoLightTheme : LogoDarkTheme}
          />
        )}
        <TypographyP className='ql-button-text'>Sign in with QuickLogin</TypographyP>
      </button>
    </div>
  );
};
