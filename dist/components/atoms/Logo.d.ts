import { default as React } from 'react';
import { BoxProps } from '@mui/material';
interface LogoProps extends Omit<BoxProps, 'component'> {
    variant?: 'desktop' | 'mobile';
    light?: boolean;
    onClick?: () => void;
}
declare const Logo: React.FC<LogoProps>;
export default Logo;
