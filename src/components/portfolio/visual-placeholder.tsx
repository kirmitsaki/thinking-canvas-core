import { Image } from 'lucide-react';
import { cn } from '@/lib/utils';
export function VisualPlaceholder({ title, className }: { title: string; className?: string }) {
  return <div role="img" aria-label={`Visual placeholder: ${title}`} className={cn('visual-placeholder flex aspect-[16/9] items-center justify-center p-6', className)}><div className="text-center"><Image size={24} strokeWidth={1} className="mx-auto mb-4 text-camel" aria-hidden="true" /><p className="subsection-title text-muted-foreground">{title}</p><p className="label-quiet mt-3">Visual to come</p></div></div>;
}
