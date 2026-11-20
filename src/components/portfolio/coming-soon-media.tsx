import { cn } from '@/lib/utils';

export function ComingSoonHint({ name, industry, className }: { name: string; industry?: string; className?: string }) {
  return <div className={cn('flex min-w-0 flex-wrap items-baseline justify-between gap-x-6 gap-y-1 coming-soon-hint rounded-[10px] border border-dashed border-border px-5 py-4 opacity-70', className)}>
    <p className="min-w-0 font-serif text-lg text-muted-foreground">
      {name}{industry && <span className="ml-2 text-sm italic">· {industry}</span>}
    </p>
    <p className="label-quiet">Case study coming soon</p>
  </div>;
}
