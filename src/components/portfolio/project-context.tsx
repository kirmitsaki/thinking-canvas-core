import { Building2, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ProjectContext({ industry, field, className }: { industry: string; field: string; className?: string }) {
  return <ul aria-label="Project context" className={cn('flex flex-wrap items-center gap-x-5 gap-y-3', className)}>
    <li className="caption flex min-w-0 items-center gap-2 text-foreground">
      <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-dashed border-camel text-accent"><Building2 size={14} aria-hidden="true" /></span>
      {industry}
    </li>
    <li className="caption flex min-w-0 items-center gap-2 text-foreground">
      <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-dashed border-camel text-forest"><Layers size={14} aria-hidden="true" /></span>
      {field}
    </li>
  </ul>;
}