/** Readable distance excludes the visible area; short stories are already read. */
export function readingProgress(scrollTop: number, scrollHeight: number, viewportHeight: number) {
  const distance = scrollHeight - viewportHeight;
  if (distance <= 0) return 100;
  return Math.min(100, Math.max(0, scrollTop / distance * 100));
}