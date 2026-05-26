import { default as React } from 'react';
interface SEOHeadProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    structuredData?: object;
    noIndex?: boolean;
    noFollow?: boolean;
}
declare const SEOHead: React.FC<SEOHeadProps>;
export default SEOHead;
