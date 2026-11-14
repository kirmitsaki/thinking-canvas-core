import { Link, useParams } from 'react-router-dom';
import Seo from '@/components/Seo';
import NotFound from '@/pages/NotFound';
import { ArrowLeft } from 'lucide-react';
import { PortfolioBreadcrumb } from '@/components/portfolio/breadcrumb';
import { VisualPlaceholder } from '@/components/portfolio/visual-placeholder';
import { getProject, pageMeta, projectImage } from '@/data/projects';
import { getOriginStudy } from '@/data/origin-studies';
import { SectionDivider } from '@/components/portfolio/section-divider';
import { NdaNotice } from '@/components/portfolio/nda-notice';

export default function OriginStudy() {
  const { study: slug } = useParams();
  const study = slug ? getOriginStudy(slug) : undefined;
  if (!study) return <NotFound />;
  const meta = pageMeta(`Origin Markets · ${study.name}`, study.sections[0]?.paragraphs[0] ?? '', 'article');
  return <><Seo title={meta.title} description={meta.description} path={`/work/origin-markets/${slug}`} ogType={meta.ogType} /><main className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16">
    <header className="pb-12 pt-10 md:pt-14">
      <div className="mb-6"><NdaNotice /></div>
      <PortfolioBreadcrumb items={[{ label: 'Portfolio', to: '/work' }, { label: 'Origin Markets', to: '/work/origin-markets' }, { label: study.name }]} trailing={<p className="label-quiet">{getProject('origin-markets').dates}</p>} />
      <h1 className="mt-8 max-w-[900px] page-title">{study.displayTitle}</h1>
      {study.subtitle && <p className="standfirst mt-6 max-w-[720px]">{study.subtitle}</p>}
      {study.disciplines && <p className="label mt-6">{study.disciplines}</p>}
    </header>
    <article className="mx-auto max-w-[720px] pb-12 md:pb-16">
      {study.sections.map((section, index) => <section key={section.id} id={section.id} className={`scroll-mt-32 ${section.subheading ? 'mb-10 md:mb-12' : 'mb-14 md:mb-20'}`}>
        {index > 0 && <SectionDivider />}
        {section.title && <h2 className={section.subheading ? 'subsection-title' : 'card-title'}>{section.title}</h2>}
        {section.paragraphs.length > 0 && <div className="essay-prose mt-6 space-y-5">{section.paragraphs.map(text => { const lead = ["The challenge wasn't simply to remove friction. It was to preserve the confidence behind existing workflows while making the experience clearer and more efficient.", 'How can we make the platform more useful to the people using it?'].find(item => text.includes(item)); if (!lead) return <p key={text}>{text}</p>; const at = text.indexOf(lead); return <p key={text}>{text.slice(0, at)}<strong className="font-semibold">{lead}</strong>{text.slice(at + lead.length)}</p>; })}</div>}
        {section.groups && <dl className="mt-8 space-y-9">{section.groups.map(group => <div key={group.label} className={group.image ? 'grid grid-cols-[64px_minmax(0,1fr)] gap-x-5 md:grid-cols-[88px_minmax(0,1fr)] md:gap-x-7' : undefined}>
          {group.image && <img loading="lazy" src={projectImage(group.image).url} alt="" className="row-span-2 h-auto w-full max-w-[88px]" />}
          <dt className="label">{group.label}</dt><dd className="essay-prose mt-2">{group.text}{group.images && <div className="mt-6 grid grid-cols-3 items-center gap-2 md:gap-4">{group.images.map(key => <img loading="lazy" key={key} src={projectImage(key).url} alt={projectImage(key).alt} className="h-auto w-full max-w-[220px]" />)}</div>}</dd>
        </div>)}</dl>}
        {section.bullets && <ul className="essay-prose mt-5 list-disc space-y-2 pl-5">{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
        {section.closingParagraph && <p className="essay-prose mt-5">{section.closingParagraph}</p>}
        {section.quote && <blockquote className="pull-quote mt-10"><p>“{section.quote.text}”</p><cite className="caption mt-3 block not-italic">— {section.quote.attribution}</cite></blockquote>}
        {(section.image || section.images) && <figure className="mt-9 w-full"><div className="flex flex-col gap-6">{(section.images ?? (section.image ? [section.image] : [])).map(key => <img loading="lazy" key={key} src={projectImage(key).url} alt={projectImage(key).alt} className="h-auto w-full rounded-[10px]" />)}</div><figcaption className="caption mt-4">{section.caption}</figcaption></figure>}
        {section.visual && !section.image && !section.images && <figure className="mt-9 w-full"><VisualPlaceholder title={section.visual} /><figcaption className="caption mt-4">{section.caption}</figcaption></figure>}
      </section>)}
      {study.reflection && <section className="mb-14 md:mb-20"><SectionDivider /><h2 className="card-title">{study.reflection.title}</h2><div className="essay-prose mt-6 space-y-5">{study.reflection.paragraphs.map(text => { const lead = ['Complexity isn\'t always the enemy.', 'Look at the whole, not just the feature.', 'In financial markets, speed is trust.'].find(item => text.startsWith(item)); return <p key={text}>{lead ? <><strong className="font-semibold">{lead}</strong>{text.slice(lead.length)}</> : text}</p>; })}</div></section>}
      <div className="hairline-top pt-8"><Link to="/work/origin-markets" className="accent-link inline-flex items-center gap-2"><ArrowLeft size={14} />Back to Origin Markets</Link></div>
    </article>
  </main></>;
}