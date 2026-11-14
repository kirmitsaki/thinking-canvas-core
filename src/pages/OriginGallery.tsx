import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import { ArrowLeft } from 'lucide-react';
import { PortfolioBreadcrumb } from '@/components/portfolio/breadcrumb';
import { getProject, pageMeta, projectImage } from '@/data/projects';
import { NdaNotice } from '@/components/portfolio/nda-notice';

const screens = [
  'origin-marketplace',
  'origin-funding-matrix',
  'origin-funding-matrix-grid',
  'origin-funding-matrix-search',
  'origin-funding-matrix-saved_searches',
  'origin-documentation',
  'origin-documentation-1',
  'origin-structured_notes',
];

export default function OriginGallery() {
  const meta = pageMeta('Origin Markets · Sample work', 'A gallery of Origin Markets product screens designed by Rachel Kirmitsaki.', 'article');
  return <><Seo title={meta.title} description={meta.description} path="/work/origin-markets/gallery" ogType={meta.ogType} /><main className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16">
    <header className="pb-12 pt-10 md:pt-14">
      <div className="mb-6"><NdaNotice /></div>
      <PortfolioBreadcrumb items={[{ label: 'Portfolio', to: '/work' }, { label: 'Origin Markets', to: '/work/origin-markets' }, { label: 'Sample work' }]} trailing={<p className="label-quiet">{getProject('origin-markets').dates}</p>} />
      <h1 className="mt-8 max-w-[900px] page-title">Sample work</h1>
      <p className="standfirst mt-6 max-w-[720px]">A selection of product screens from across the Origin platform.</p>
    </header>
    <div className="grid gap-8 pb-12 md:grid-cols-2 md:pb-16">
      {screens.map(key => <figure key={key}><img loading="lazy" src={projectImage(key).url} alt={projectImage(key).alt} className="h-auto w-full rounded-[10px]" /><figcaption className="caption mt-3">{projectImage(key).alt}</figcaption></figure>)}
    </div>
    <div className="hairline-top pt-8"><Link to="/work/origin-markets" className="accent-link inline-flex items-center gap-2"><ArrowLeft size={14} />Back to Origin Markets</Link></div>
  </main></>;
}
