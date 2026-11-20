import { describe, expect, it } from 'vitest';
import { readingProgress } from './reading-progress';

describe('reading progress', () => {
  it('starts at zero', () => expect(readingProgress(0, 3000, 1000)).toBe(0));
  it('uses the relevant visible area', () => expect(readingProgress(1000, 3000, 1000)).toBe(50));
  it('reaches 100 at the end', () => expect(readingProgress(2000, 3000, 1000)).toBe(100));
  it('handles content shorter than the visible area', () => expect(readingProgress(0, 500, 1000)).toBe(100));
  it('clamps overscroll', () => {
    expect(readingProgress(-50, 3000, 1000)).toBe(0);
    expect(readingProgress(2500, 3000, 1000)).toBe(100);
  });
});