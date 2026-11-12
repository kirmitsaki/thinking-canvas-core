import { describe, it as test } from 'node:test';
import { strict as assert } from 'node:assert';
import { navigationScrollBehavior } from './navigation-scroll';

describe('portfolio navigation scrolling', () => {
  test('links within the current page scroll smoothly', () => {
    assert.equal(navigationScrollBehavior('/about', '/about', false), 'smooth');
  });
  test('new pages and case-study subpages open instantly', () => {
    assert.equal(navigationScrollBehavior('/', '/about', false), 'instant');
    assert.equal(navigationScrollBehavior('/', '/work/origin-markets', false), 'instant');
    assert.equal(navigationScrollBehavior('/work/origin-markets', '/work/mendeley', false), 'instant');
  });
  test('reduced motion disables same-page scrolling animation', () => {
    assert.equal(navigationScrollBehavior('/about', '/about', true), 'instant');
  });
});