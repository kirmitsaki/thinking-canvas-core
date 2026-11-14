import { describe, expect, it } from 'vitest';
import { adjacentProjects } from './project-pagination';

describe('case-study pagination', () => {
  it('follows portfolio order around Origin and keeps the Morpho destination', () => {
    const { previous, next } = adjacentProjects('origin-markets');
    expect(previous?.slug).toBe('secure-code-warrior');
    expect(next?.linkTo).toBe('/work/origin-markets/design-system');
  });
  it('does not invent neighbours beyond the portfolio endpoints', () => {
    expect(adjacentProjects('secure-code-warrior').previous).toBeUndefined();
    expect(adjacentProjects('jobme').next).toBeUndefined();
  });
});