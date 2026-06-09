## Concept

Treat the site as a three-part publication:

```text
HOME    →  Cover plate / colophon
WORK    →  Archive & features section
ABOUT   →  Perspective / profile section
```

Shared DNA across all three: a publication chrome (issue marker, folio numbers, section codes, hairline rails, mono micro-labels), a strict 12-col grid with deliberate asymmetry, no decorative color. Copy stays unchanged everywhere.

## Shared publication system (new primitives in `editorial.tsx`)

- `Folio` — top-right page marker, e.g. `№ 02 · WORK` / `№ 03 · ABOUT` / `№ 01 · COVER`
- `IssueMark` — small "Vol. 01 · MMXXVI" colophon tag
- `RuleLabel` — hairline rule + mono label (replaces the current `<span class="h-px w-10">` pattern)
- `ChapterMarker` — oversized tabular numeral (e.g. `01`, `02`) used as section openers on Work
- `Annotation` — right-margin mono note tying a label to a paragraph (editorial annotation)
- `MetaRail` — left or right vertical rail of metadata (role, region, year, discipline)
- `PullQuote` — italic serif (Instrument Serif) statement, full-width with hairline rules above/below
- `SectionBreak` — full-bleed hairline divider with section code, e.g. `— ARCHIVE · CONTINUED —`

All purely typographic / hairline-based. No new colors, no gradients.

## HOME — Cover plate

Restructure `Index.tsx` to feel like a publication cover, not a hero. Still single-screen, no scroll.

- Top bar: nav left, `IssueMark` ("Vol. 01 · MMXXVI · Portfolio") right
- Page frame: thin hairline inset rectangle anchored to viewport edges (architectural plate feel)
- Top-left small block: `RuleLabel` "Cover · 01" + role line ("Head of Product Design — B2B SaaS · Platforms")
- Centered/offset name: keep "Rachel / Kirmitsaki" composition but tighten — Kirmitsaki italic serif drops one baseline and indents to grid col 5
- Bottom-left: positioning statement (copy unchanged), max ~36ch, set tighter
- Bottom-right: "Explore the work →" as folio-style entry link with `№ 02` marker
- Environmental typography: replace the bottom "Product Design" wash with a faint vertical-set word ("PORTFOLIO") along the right edge, 2% opacity
- Motion: single slow fade-in of the hairline frame + 200ms stagger on name. Nothing else.

## WORK — Archive & features

Restructure `Work.tsx` as the feature/archive spread.

- Header band: `Folio` "№ 02 · Work", `RuleLabel` "Archive 2014—2026", short editorial standfirst (existing copy)
- Each project becomes a "feature entry" with:
  - Oversized `ChapterMarker` (`01`, `02`...) in tabular numerals at left rail
  - `MetaRail` directly under: role · year · region · discipline (mono, stacked)
  - Title set larger, serif italic for the company name, sans for the descriptor
  - One-line standfirst (existing copy)
  - Right-margin `Annotation` calling out the operational frame (e.g. "Governance · Observability · Risk")
- Between major entries: `SectionBreak` with codes (`— FEATURES —`, `— OPERATIONAL —`, `— EARLIER WORK —`) to give pacing/atmosphere
- One mid-page `PullQuote` lifted from existing standfirst copy (no new copy)
- Hairline rails between every entry; alternating asymmetric column starts (entry 1 from col 2, entry 2 from col 3, entry 3 from col 2…) for editorial rhythm

## ABOUT — Perspective / profile

Restructure `About.tsx` as the profile spread. Copy unchanged.

- Header: `Folio` "№ 03 · About", `RuleLabel` "Perspective", then the existing leading statement (kept verbatim) at current size
- Current Role block: convert to interview-style — left rail mono label `01 · Current Role`, narrow body column, right-margin `Annotation` with metadata ("Secure Code Warrior · EMEA + APAC · 2024—")
- Focus block: keep 6 items, but render as numbered editorial entries (`01`—`06`) along a single column with hairline rules between, each with a small `RuleLabel` underline; drop the 2-col staggered grid (Work is the asymmetric one; About is the column)
- Closing reflection: keep dark band but reframe as `PullQuote` on dark — full-width hairlines above/below, `RuleLabel` "Coda" overhead, attribution-style mono line below ("— R.K.")
- Bottom: small colophon (`IssueMark` + "End of section")

## Differentiation summary

```text
HOME    framed cover plate · centered + anchored · static
WORK    asymmetric archive · oversized numerals · feature rhythm
ABOUT   single-column interview · annotated · numbered focus list
```

Same chrome system, three distinct compositional logics.

## Technical notes

- All new primitives added to `src/components/editorial.tsx`; pages refactored to consume them.
- No new dependencies. Tailwind tokens only; any new tokens (e.g. `--rail-ink`) added to `index.css` as HSL.
- Motion: only a single fade-in on Home's frame via existing CSS; no framer-motion added.
- Responsive: rails and annotations collapse to inline mono labels under `md`.
- No copy changes anywhere.

## Out of scope

- Case study detail pages (chapters) — already match the system.
- Color palette changes, new imagery, gradients, icons.
- Functional/navigation changes.
