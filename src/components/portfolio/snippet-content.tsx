import { lazy } from 'react';
import { useLocation } from 'react-router-dom';

const OriginGallery = lazy(() => import('@/pages/OriginGallery'));
const OriginStudy = lazy(() => import('@/pages/OriginStudy'));
const MendeleySampleWork = lazy(() => import('@/pages/MendeleySampleWork'));
const ProductDesignIdentity = lazy(() => import('@/pages/ProductDesignIdentity'));
const Cybermon = lazy(() => import('@/pages/Cybermon'));

export function SnippetContent() {
  const { pathname, search } = useLocation();
  const snippet = new URLSearchParams(search).get('snippet');
  if (pathname === '/work/origin-markets') {
    if (snippet === 'gallery') return <OriginGallery />;
    if (['design-process', 'documentation', 'funding-matrix-redesign'].includes(snippet ?? '')) return <OriginStudy studySlug={snippet ?? ''} />;
  }
  if (pathname === '/work/mendeley' && snippet === 'sample-work') return <MendeleySampleWork />;
  if (pathname === '/work/secure-code-warrior') {
    if (snippet === 'product-design-identity') return <ProductDesignIdentity />;
    if (snippet === 'cybermon') return <Cybermon />;
  }
  return null;
}