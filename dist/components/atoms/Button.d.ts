import { ReactNode } from 'react';
import { ButtonProps as MuiButtonProps } from '@mui/material';
interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
    variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'minimal' | 'industrial';
    size?: 'small' | 'medium' | 'large';
    children?: ReactNode;
    label?: string;
    href?: string;
    target?: string;
    component?: any;
    to?: any;
    className?: string;
    sx?: any;
}
export declare const Button: ({ children, variant, size, label, className, sx, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
