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
