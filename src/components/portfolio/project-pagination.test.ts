import { describe, expect, it } from 'vitest';
import { adjacentProjects } from './project-pagination';

describe('case-study pagination', () => {
  it('follows portfolio order around Origin', () => {
    const { previous, next } = adjacentProjects('origin-markets');
    expect(previous?.slug).toBe('secure-code-warrior');
    expect(next?.slug).toBe('mendeley');
  });
  it('does not invent neighbours beyond the portfolio endpoints', () => {
    expect(adjacentProjects('secure-code-warrior').previous).toBeUndefined();
    expect(adjacentProjects('mds-quostar').next).toBeUndefined();
  });
});