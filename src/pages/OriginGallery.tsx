import { Link, useSearchParams } from 'react-router-dom';
import Seo from '@/components/Seo';
import { ArrowLeft } from 'lucide-react';
import { SnippetHeader } from '@/components/portfolio/snippet-header';
import { pageMeta, projectImage } from '@/data/projects';
import { ProjectPagination } from '@/components/portfolio/project-pagination';
import { SectionDivider } from '@/components/portfolio/section-divider';
import { usePortfolioHeaderHeight } from '@/lib/portfolio-header-height';
import dashboards from '@/assets/origin-sample-work/Cards_-_Dashboards_Various.webp.asset.json';
import dataCards from '@/assets/origin-sample-work/Cards_-_Data.webp.asset.json';
import tradeBlotter from '@/assets/origin-sample-work/Documentation_-_Trade_Blotter.webp.asset.json';
import tradeTimeline from '@/assets/origin-sample-work/Documentation_-_Trade_Timeline.webp.asset.json';
import comments from '@/assets/origin-sample-work/Documentation_-_TSG_-_Click_Comment.webp.asset.json';
import editMode from '@/assets/origin-sample-work/Documentation_-_TSG_-_Edit_Mode.webp.asset.json';
import fundingMatrix from '@/assets/origin-sample-work/Funding_Matrix.webp.asset.json';
import levelsStats from '@/assets/origin-sample-work/Levels_Input_-_Stats.webp.asset.json';
import syndicatePricer from '@/assets/origin-sample-work/Syndicate_Pricer_-_before_and_after.webp.asset.json';

type GalleryImage = { asset: { asset_id: string; url: string }; title: string; alt?: string; width: number; height: number };

const sections: { id: string; title: string; images: GalleryImage[] }[] = [
  { id: 'dashboards-data', title: 'Dashboards and data', images: [
    { asset: dashboards, title: 'Dashboard cards', alt: 'Dashboard cards for activity, trades, programmes and issuer coverage.', width: 1920, height: 1278 },
    { asset: dataCards, title: 'Data cards', alt: 'Data cards showing curves, pricing levels and trade tables.', width: 1920, height: 980 },
  ] },
  { id: 'pricing-funding', title: 'Pricing and funding', images: [
    { asset: fundingMatrix, title: 'Funding Matrix', alt: 'Funding Matrix interface.', width: 1920, height: 1886 },
    { asset: syndicatePricer, title: 'Syndicate Pricer — before and after', alt: 'Syndicate Pricer before and after, with curve analysis and pricing controls.', width: 1920, height: 1400 },
    { asset: levelsStats, title: 'Levels input and statistics', alt: 'Levels input interface and statistics widgets.', width: 1920, height: 690 },
  ] },
  { id: 'documentation', title: 'Documentation and collaboration', images: [
    { asset: tradeBlotter, title: 'Trade blotter', width: 1920, height: 538 },
    { asset: tradeTimeline, title: 'Trade timeline', width: 1920, height: 1150 },
    { asset: editMode, title: 'Editing inputs', width: 1920, height: 592 },
    { asset: comments, title: 'Comments and collaboration', width: 1920, height: 787 },
  ] },
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
  return <><Seo title={meta.title} description={meta.description} path="/work/origin-markets/gallery" ogType={meta.ogType} /><main className="case-study-editorial relative z-10 mx-auto max-w-[960px] px-6 pb-16">
    <SnippetHeader title="Across the Origin platform" subtitle="A selection of product screens showcasing dashboards, market data, pricing and documentation workflows." image={projectImage('origin-sample-work')} />
    {sections.map((section, index) => (
      <div key={section.id}>
        {index > 0 && <SectionDivider />}
        <section aria-labelledby={section.id} className="py-12 md:py-16">
          <h2 id={section.id} className="section-title">{section.title}</h2>
          <div className="mt-10 grid gap-12 md:gap-16">
            {section.images.map(({ asset, title, alt, width, height }) => (
              <figure key={asset.asset_id} className="w-full">
                <div className="overflow-hidden rounded-lg"><img loading="lazy" decoding="async" onError={useLocalImage} src={asset.url} alt={alt ?? title} width={width} height={height} className="nda-blur h-auto w-full" /></div>
                <figcaption className="caption mt-5">{title}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    ))}
    {!snippet && <><div className="flex justify-center pt-12 pb-12 md:pb-16"><Link to="/work/origin-markets" className="accent-link inline-flex items-center gap-2"><ArrowLeft size={14} />Back to Origin Markets</Link></div>
    <ProjectPagination slug="origin-markets" /></>}
  </main></>;
}
