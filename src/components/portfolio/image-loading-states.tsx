import { useEffect } from 'react';
import dimensions from '@/data/loading-image-dimensions.json';

const sizes: Record<string, number[]> = dimensions;
const fileSizes = new Map<string, number[] | null>();
for (const [file, size] of Object.entries(sizes)) {
  if (!file.startsWith('../assets/')) continue;
  const name = file.split('/').pop();
  if (!name) continue;
  const existing = fileSizes.get(name);
  fileSizes.set(name, existing === null || (existing && existing.join() !== size.join()) ? null : size);
}

/** Observe both initial and lazy content without wrapping or restyling images. */
export function ImageLoadingStates() {
  useEffect(() => {
    const tracked = new Map<HTMLImageElement, () => void>();
    const prepare = (image: HTMLImageElement) => {
      const path = new URL(image.currentSrc || image.src, window.location.href).pathname;
      const name = decodeURIComponent(path.split('/').pop() ?? '').replace(/-[\w-]{8}(?=\.[^.]+$)/, '');
      const size = sizes[path] ?? sizes[path.replace('/src/assets/', '../assets/')] ?? fileSizes.get(name);
      if (size && !image.hasAttribute('width') && !image.hasAttribute('height')) {
        image.width = size[0];
        image.height = size[1];
      }
      image.toggleAttribute('data-image-loading', !image.complete);
      if (tracked.has(image)) return;
      const finish = () => image.removeAttribute('data-image-loading');
      image.addEventListener('load', finish);
      image.addEventListener('error', finish);
      tracked.set(image, () => {
        image.removeEventListener('load', finish);
        image.removeEventListener('error', finish);
        image.removeAttribute('data-image-loading');
      });
    };
    const scan = (root: ParentNode) => root.querySelectorAll('img').forEach(prepare);
    scan(document);
    const observer = new MutationObserver(records => {
      for (const record of records) {
        if (record.type === 'attributes' && record.target instanceof HTMLImageElement) prepare(record.target);
        for (const node of record.addedNodes) {
          if (node instanceof HTMLImageElement) prepare(node);
          if (node instanceof Element) scan(node);
        }
      }
      for (const [image, cleanup] of tracked) {
        if (!image.isConnected) { cleanup(); tracked.delete(image); }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['src', 'srcset'] });
    return () => { observer.disconnect(); tracked.forEach(cleanup => cleanup()); };
  }, []);
  return null;
}