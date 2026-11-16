import { Link, useSearchParams } from 'react-router-dom';
import Seo from '@/components/Seo';
import { ArrowLeft } from 'lucide-react';
import { PortfolioBreadcrumb } from '@/components/portfolio/breadcrumb';
import { getProject, pageMeta } from '@/data/projects';
import { NdaNotice } from '@/components/portfolio/nda-notice';
import { ProjectPagination } from '@/components/portfolio/project-pagination';
import { SectionDivider } from '@/components/portfolio/section-divider';
import { usePortfolioHeaderHeight } from '@/lib/portfolio-header-height';
import dashboards from '@/assets/origin-sample-work/Cards_-_Dashboards_Various.webp.asset.json';
import dataCards from '@/assets/origin-sample-work/Cards_-_Data.webp.asset.json';
import tradeBlotter from '@/assets/origin-sample-work/Documentation_-_Trade_Blotter.webp.asset.json';
import tradeTimeline from '@/assets/origin-sample-work/Documentation_-_Trade_Timeline.webp.asset.json';
import comments from '@/assets/origin-sample-work/Documentation_-_TSG_-_Click_Comment.png.asset.json';
import editMode from '@/assets/origin-sample-work/Documentation_-_TSG_-_Edit_Mode.png.asset.json';
import fundingMatrix from '@/assets/origin-sample-work/Funding_Matrix_-_before_and_after.webp.asset.json';
import levelsStats from '@/assets/origin-sample-work/Levels_Input_-_Stats.png.asset.json';
import syndicatePricer from '@/assets/origin-sample-work/Syndicate_Pricer_-_before_and_after.webp.asset.json';

const documentation = [
  { asset: tradeBlotter, title: 'Trade blotter', width: 1920, height: 541 },
  { asset: tradeTimeline, title: 'Trade timeline', width: 1920, height: 1151 },
  { asset: editMode, title: 'Editing inputs', width: 1920, height: 595 },
  { asset: comments, title: 'Comments and collaboration', width: 1920, height: 790 },
];

// The CDN handles hosted previews; local copies also support GitHub Pages.
const localImages = import.meta.glob<string>('../assets/origin-sample-work/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
});

function useLocalImage(event: React.SyntheticEvent<HTMLImageElement>) {
  const image = event.currentTarget;
  const filename = decodeURIComponent(image.src.split('/').pop() ?? '').replace(/\.[^.]+$/, '.webp');
  const fallback = localImages[`../assets/origin-sample-work/${filename}`];
  if (fallback && image.dataset.localFallback !== 'true') {
    image.dataset.localFallback = 'true';
    image.src = fallback;
  }
}

export default function OriginGallery() {
  usePortfolioHeaderHeight();
  const [params] = useSearchParams();
  const snippet = params.has('snippet');
  const meta = pageMeta('Origin Markets · Sample work', 'A gallery of Origin Markets product screens designed by Rachel Kirmitsaki.', 'article');
  return <><Seo title={meta.title} description={meta.description} path="/work/origin-markets/gallery" ogType={meta.ogType} /><main className="case-study-editorial relative z-10 mx-auto max-w-[1200px] px-6 pb-16">
    <header className="pb-12">
      <PortfolioBreadcrumb items={[{ label: 'Portfolio', to: '/work' }, { label: 'Origin Markets', to: '/work/origin-markets' }, { label: 'Sample work' }]} trailing={<p className="label-quiet">{getProject('origin-markets').dates}</p>} />
      <h1 className="mt-8 max-w-[900px] page-title">Sample work</h1>
      <p className="standfirst mt-6 max-w-[720px]">A selection of product screens from across the Origin platform.</p>
    </header>
    <div className="sample-work-tabs py-3"><NdaNotice /></div>
    <section aria-labelledby="dashboards-data" className="py-12 md:py-16">
      <h2 id="dashboards-data" className="section-title mb-8 md:mb-12">Dashboards and data</h2>
      <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:gap-12">
        <figure>
          <img loading="lazy" decoding="async" onError={useLocalImage} src={dashboards.url} alt="Dashboard cards for activity, trades, programmes and issuer coverage." width={1651} height={1920} className="h-auto w-full rounded-lg" />
          <figcaption className="caption mt-5">Dashboard cards</figcaption>
        </figure>
        <figure className="mx-auto w-full max-w-[520px]">
          <img loading="lazy" decoding="async" onError={useLocalImage} src={dataCards.url} alt="Data cards showing curves, pricing levels and trade tables." width={784} height={1920} className="h-auto w-full rounded-lg" />
          <figcaption className="caption mt-5">Data cards</figcaption>
        </figure>
      </div>
    </section>
    <SectionDivider />
    <section aria-labelledby="pricing-funding" className="py-12 md:py-16">
      <h2 id="pricing-funding" className="section-title mb-8 md:mb-12">Pricing and funding</h2>
      <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-12">
        <figure className="mx-auto w-full max-w-[563px]">
          <img loading="lazy" decoding="async" onError={useLocalImage} src={fundingMatrix.url} alt="Funding Matrix search and grid interfaces, before and after." width={563} height={1920} className="h-auto w-full rounded-lg" />
          <figcaption className="caption mt-5">Funding Matrix — before and after</figcaption>
        </figure>
        <div className="grid gap-10 md:gap-16">
          <figure>
            <img loading="lazy" decoding="async" onError={useLocalImage} src={syndicatePricer.url} alt="Syndicate Pricer before and after, with curve analysis and pricing controls." width={1920} height={1342} className="h-auto w-full rounded-lg" />
            <figcaption className="caption mt-5">Syndicate Pricer — before and after</figcaption>
          </figure>
          <figure>
            <img loading="lazy" decoding="async" onError={useLocalImage} src={levelsStats.url} alt="Levels input interface and statistics widgets." width={1920} height={693} className="h-auto w-full rounded-lg" />
            <figcaption className="caption mt-5">Levels input and statistics</figcaption>
          </figure>
        </div>
      </div>
    </section>
    <SectionDivider />
    <section aria-labelledby="documentation" className="py-12 md:py-16">
      <h2 id="documentation" className="section-title mb-8 md:mb-12">Documentation and collaboration</h2>
      <div className="grid gap-12 md:gap-16">
        {documentation.map(({ asset, title, width, height }) => (
          <figure key={asset.asset_id}>
            <img loading="lazy" decoding="async" onError={useLocalImage} src={asset.url} alt={title} width={width} height={height} className="h-auto w-full rounded-lg" />
            <figcaption className="caption mt-5">{title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
    {!snippet && <><div className="flex justify-center pt-12 pb-12 md:pb-16"><Link to="/work/origin-markets" className="accent-link inline-flex items-center gap-2"><ArrowLeft size={14} />Back to Origin Markets</Link></div>
    <ProjectPagination slug="origin-markets" /></>}
  </main></>;
}
