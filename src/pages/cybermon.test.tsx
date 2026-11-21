import { cleanup, render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';
import Cybermon from '@/pages/Cybermon';

afterEach(cleanup);

// jsdom has no ResizeObserver, which the page's header-height hook needs.
class ResizeObserverStub { observe() {} unobserve() {} disconnect() {} }
globalThis.ResizeObserver ??= ResizeObserverStub as unknown as typeof ResizeObserver;

function renderPage() {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={['/work/secure-code-warrior/cybermon?snippet=cybermon']}>
        <Cybermon />
      </MemoryRouter>
    </HelmetProvider>
  );
}

function sectionText(container: HTMLElement, year: string) {
  const section = container.querySelector(`section[id="${year}"]`);
  expect(section).not.toBeNull();
  return (section as HTMLElement).textContent ?? '';
}

describe('Cybermon event blocks', () => {
  it('orders each event as date, title, subtitle, paragraphs, then goals', () => {
    const { container } = renderPage();
    const events = [
      {
        year: '2024',
        date: '7 OCTOBER 2024',
        title: 'Cybermon 2024',
        subtitle: 'Four weeks, four monsters, one Cyberhero.',
        paragraph: 'Inspired by Pokémon',
        goal: 'Raise awareness of common software vulnerabilities',
      },
      {
        year: '2025',
        date: '6 OCTOBER 2025',
        title: 'Cybermon 2025',
        subtitle: 'The Age of AI: Four bosses, four AI security threats, one mission. Beat the boss.',
        paragraph: 'This year, the focus shifted to AI and Large Language Model (LLM) security',
        goal: 'Raise awareness of AI security vulnerabilities',
      },
      {
        year: '2026',
        date: '5 OCTOBER 2026',
        title: 'Cybermon 2026',
        subtitle: 'Built by AI. Secured by You. Four Cybermon, four weeks, one global community.',
        paragraph: 'Under the theme Built by AI. Secured by You.',
        goal: 'Raise awareness of vulnerabilities in AI-generated code',
      },
    ];
    for (const event of events) {
      const text = sectionText(container, event.year);
      const marks = [event.date, event.title, event.subtitle, event.paragraph, 'Goals', event.goal]
        .map(value => text.indexOf(value));
      marks.forEach((position, index) => {
        expect(position, `${event.year} ${[event.date, event.title, event.subtitle, event.paragraph, 'Goals', event.goal][index]}`).toBeGreaterThanOrEqual(0);
        if (index > 0) expect(position).toBeGreaterThan(marks[index - 1]);
      });
    }
  });

  it('drops the how-it-worked section and the campaign-aimed-to filler', () => {
    const { container } = renderPage();
    const text = container.textContent ?? '';
    expect(text).not.toContain('How did it work');
    expect(text).not.toContain('The campaign aimed to');
    expect(text).not.toContain('Objectives');
  });

  it('shows every goal for 2024 without repeating them under Objectives', () => {
    const { container } = renderPage();
    const text = sectionText(container, '2024');
    for (const goal of [
      'Raise awareness of common software vulnerabilities',
      'Encourage secure coding practices',
      'Increase participation in security training',
      'Make learning more engaging through gamification',
      "Strengthen the organisation’s security culture",
    ]) {
      expect(text, goal).toContain(goal);
    }
  });
});
