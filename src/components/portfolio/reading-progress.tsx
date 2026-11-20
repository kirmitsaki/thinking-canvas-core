import { useEffect, useRef } from 'react';
import { readingProgress } from '@/lib/reading-progress';

export function ReadingProgress({ snippet = false }: { snippet?: boolean }) {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const element = bar.current;
      if (!element) return;
      const headerHeight = document.querySelector('.portfolio-header')?.getBoundingClientRect().height ?? 0;
      // Stop at the case study's end, not at the site footer below it.
      const content = document.querySelector('main');
      const contentEnd = content ? content.getBoundingClientRect().bottom + window.scrollY : document.documentElement.scrollHeight;
      const height = snippet ? document.documentElement.scrollHeight : contentEnd;
      const value = readingProgress(window.scrollY, height - headerHeight, window.innerHeight - headerHeight);
      element.setAttribute('aria-valuenow', String(Math.round(value)));
      element.style.setProperty('--reading-progress', String(value / 100));
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    document.addEventListener('load', schedule, true);
    update();
    return () => {
      window.cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      document.removeEventListener('load', schedule, true);
    };
  }, [snippet]);
  return <div ref={bar} className="reading-progress" role="progressbar" aria-label="Reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0}><div className="reading-progress-fill" /></div>;
}