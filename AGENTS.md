# Architecture

- Origin Markets uses dedicated lazy-loaded overview, gallery and study pages with shared project data; this preserves its distinct case-study layout without changing other portfolios.
- Scope Origin overview presentation under `.origin-editorial`; its editorial layouts must not change shared case-study or portfolio styling.
- Other case studies use `.case-study-editorial` with existing narrative sections and shared typography tokens; this extends the Origin template without altering portfolio cards or requiring research sections on simpler projects.
- Cross-project image pointers are re-uploaded to this project and paired with local optimised images so the portfolio also works on GitHub Pages.
- Origin sample-work uploads use CDN pointers with local optimised fallbacks and explicit image dimensions so static hosting and lazy-loaded layouts remain stable.
- Mendeley detail content is lazy-loaded within a single Sample work page with URL-backed tabs; previous detail URLs redirect to the matching tab to preserve shared links.
- Case-study closing navigation uses shared ProjectPagination and portfolio order, honouring each project's custom destination; this keeps previous/next links consistent with the listing.
- Share anchor alignment through `scrollToSection`, loading only preceding images and cancelling pending work on navigation; this keeps saved links and rapid tab clicks stable without eagerly loading entire case studies.
- Use React state directly for this static portfolio; no query provider is needed without remote data requests.
