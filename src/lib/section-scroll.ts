/** Align an anchor after preceding images load, without fetching the whole page. */
export function scrollToSection(target: HTMLElement, behavior: ScrollBehavior, onSettled?: () => void) {
  let cancelled = false;
  let timer = 0;
  let deadline = 0;
  const precedingImages = Array.from(document.querySelectorAll<HTMLImageElement>('main img'))
    .filter(image => Boolean(image.compareDocumentPosition(target) & Node.DOCUMENT_POSITION_FOLLOWING));
  const pending = precedingImages.filter(image => !image.complete);
  const cleanup = () => {
    cancelled = true;
    window.clearTimeout(timer);
    window.clearTimeout(deadline);
    window.removeEventListener('scroll', settle);
    pending.forEach(image => {
      image.removeEventListener('load', loaded);
      image.removeEventListener('error', loaded);
    });
  };
  const finish = () => {
    if (cancelled) return;
    cleanup();
    if (target.isConnected) target.scrollIntoView({ behavior: 'auto', block: 'start' });
    onSettled?.();
  };
  const settle = () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      if (pending.every(image => image.complete)) finish();
    }, 150);
  };
  const loaded = () => settle();
  pending.forEach(image => {
    image.addEventListener('load', loaded);
    image.addEventListener('error', loaded);
    image.loading = 'eager';
  });
  window.addEventListener('scroll', settle, { passive: true });
  deadline = window.setTimeout(finish, 4000);
  target.scrollIntoView({ behavior, block: 'start' });
  settle();
  return cleanup;
}