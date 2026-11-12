import { cn } from '@/lib/utils';

export function ComingSoonMedia({ topics, className }: { topics: string[]; className?: string }) {
  return <div className={cn('flex min-h-[240px] w-full min-w-0 items-center justify-center border-b border-hairline bg-muted p-6', className)}>
    <div className="w-full min-w-0 max-w-[600px] border border-dashed border-border px-4 py-6 text-center md:px-6">
      <div className="flex items-center justify-center gap-3">
        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-camel" />
        <p className="label-quiet">Coming soon</p>
        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-camel" />
      </div>
      <ul aria-label="Case study topics" className="mt-5 flex flex-wrap justify-center gap-2">
        {topics.map(topic => <li key={topic} className="label-pill">{topic}</li>)}
      </ul>
    </div>
  </div>;
}

export function ComingSoonHint({ name, industry, className }: { name: string; industry?: string; className?: string }) {
  return <div className={cn('flex min-w-0 flex-wrap items-baseline justify-between gap-x-6 gap-y-1 coming-soon-hint rounded-[10px] border border-dashed border-border px-5 py-4 opacity-70', className)}>
    <p className="min-w-0 font-serif text-lg text-muted-foreground">
      {name}{industry && <span className="ml-2 text-sm italic">· {industry}</span>}
    </p>
    <p className="label-quiet">Case study coming soon</p>
  </div>;
}
