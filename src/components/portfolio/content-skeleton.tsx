export function ContentSkeleton() {
  return <div className="content-skeleton mx-auto w-full max-w-[960px] px-6 py-12" role="status" aria-label="Loading content">
    <div aria-hidden="true" className="grid gap-8 md:grid-cols-[2fr_1fr]">
      <div className="space-y-6">
        <div className="skeleton-surface h-10 w-3/4 rounded" />
        <div className="skeleton-surface h-6 w-full rounded" />
        <div className="skeleton-surface h-6 w-5/6 rounded" />
        <div className="skeleton-surface h-6 w-2/3 rounded" />
      </div>
      <div className="skeleton-surface aspect-[16/10] w-full rounded-lg" />
    </div>
    <div aria-hidden="true" className="skeleton-surface mt-16 aspect-[16/10] w-full rounded-lg" />
  </div>;
}