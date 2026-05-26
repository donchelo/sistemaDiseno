import { default as React, ReactNode } from 'react';
interface ContextualLinkProps {
    to: string;
    variant?: 'subtle' | 'accent' | 'inline';
    trackingLabel?: string;
    children?: ReactNode;
    className?: string;
    ariaLabel?: string;
}
/**
 * ContextualLink - Componente para enlaces internos contextuales sutiles
 *
 * Optimizado para SEO con anchor text semántico y tracking automático
 * Diseño hipermegaminimalista que respeta el sistema de colores AI4U
 *
 * @example
 * <ContextualLink to="/servicios" variant="accent" trackingLabel="home_to_services">
 *   Conoce nuestros servicios de IA
 * </ContextualLink>
 */
declare const ContextualLink: React.FC<ContextualLinkProps>;
export default ContextualLink;
