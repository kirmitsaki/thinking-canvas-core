import { act, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { useReducedMotion } from './reduced-motion';
import { usePortfolioHeaderHeight } from './portfolio-header-height';

afterEach(() => vi.unstubAllGlobals());

describe('shared browser observers', () => {
  it('shares one motion listener, updates every consumer and removes it after the final consumer', () => {
    let changed: (() => void) | undefined;
    const media = {
      matches: false,
      addEventListener: vi.fn((_event: string, listener: () => void) => { changed = listener; }),
      removeEventListener: vi.fn(),
    };
    vi.stubGlobal('matchMedia', vi.fn(() => media));
    const first = renderHook(useReducedMotion);
    const second = renderHook(useReducedMotion);
    expect(media.addEventListener).toHaveBeenCalledTimes(1);
    expect(first.result.current).toBe(false);
    act(() => { media.matches = true; changed?.(); });
    expect(first.result.current).toBe(true);
    expect(second.result.current).toBe(true);
    first.unmount();
    expect(media.removeEventListener).not.toHaveBeenCalled();
    second.unmount();
    expect(media.removeEventListener).toHaveBeenCalledTimes(1);
    const remounted = renderHook(useReducedMotion);
    expect(media.addEventListener).toHaveBeenCalledTimes(2);
    remounted.unmount();
  });

  it('shares one header observer and keeps it active until the final consumer leaves', () => {
    const observe = vi.fn();
    const disconnect = vi.fn();
    let resized: (() => void) | undefined;
    vi.stubGlobal('ResizeObserver', class {
      constructor(callback: () => void) { resized = callback; }
      observe = observe;
      disconnect = disconnect;
    });
    const header = document.createElement('header');
    header.className = 'portfolio-header';
    document.body.append(header);
    const bounds = vi.spyOn(header, 'getBoundingClientRect');
    bounds.mockReturnValue({ height: 100 } as DOMRect);
    const first = renderHook(usePortfolioHeaderHeight);
    const second = renderHook(usePortfolioHeaderHeight);
    expect(observe).toHaveBeenCalledTimes(1);
    expect(observe).toHaveBeenCalledWith(header);
    bounds.mockReturnValue({ height: 120 } as DOMRect);
    act(() => resized?.());
    expect(document.documentElement.style.getPropertyValue('--portfolio-header-height')).toBe('120px');
    first.unmount();
    expect(disconnect).not.toHaveBeenCalled();
    second.unmount();
    expect(disconnect).toHaveBeenCalledTimes(1);
    header.remove();
    bounds.mockRestore();
  });

  it('keeps the existing header offset in snippet documents without a site header', () => {
    vi.stubGlobal('ResizeObserver', class { observe() {} disconnect() {} });
    const hook = renderHook(usePortfolioHeaderHeight);
    expect(document.documentElement.style.getPropertyValue('--portfolio-header-height')).toBe('80px');
    hook.unmount();
  });
});