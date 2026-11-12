import { cn } from '@/lib/utils';

export function ProjectLabels({ labels, className }: { labels: string[]; className?: string }) {
  const items = labels.flatMap(label => label.split('·').map(item => item.trim())).filter(Boolean);
  return <ul aria-label="Project labels" className={cn('flex flex-wrap gap-2', className)}>
    {items.map(item => <li key={item} className="label-pill">{item}</li>)}
  </ul>;
}