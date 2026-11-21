import { useSyncExternalStore } from 'react';

// Share the browser preference listener across navigation links and section tabs.
const subscribers = new Set<() => void>();
let media: MediaQueryList | undefined;
const notify = () => subscribers.forEach(subscriber => subscriber());
const snapshot = () => media?.matches ?? window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function subscribe(subscriber: () => void) {
  if (!media) {
    media = window.matchMedia('(prefers-reduced-motion: reduce)');
    media.addEventListener('change', notify);
  }
  subscribers.add(subscriber);
  return () => {
    subscribers.delete(subscriber);
    if (!subscribers.size) {
      media?.removeEventListener('change', notify);
      media = undefined;
    }
  };
}

export function useReducedMotion() {
  return useSyncExternalStore(subscribe, snapshot, () => true);
}