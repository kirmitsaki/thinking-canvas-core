# Architecture

- Origin Markets uses dedicated lazy-loaded overview, gallery and study pages with shared project data; this preserves its distinct case-study layout without changing other portfolios.
- Scope Origin overview presentation under `.origin-editorial`; its editorial layouts must not change shared case-study or portfolio styling.
- Cross-project image pointers are re-uploaded to this project and paired with local optimised images so the portfolio also works on GitHub Pages.
- Mendeley detail content is lazy-loaded within a single Sample work page with URL-backed tabs; previous detail URLs redirect to the matching tab to preserve shared links.
- Case-study closing navigation uses shared ProjectPagination and portfolio order, honouring each project's custom destination; this keeps previous/next links consistent with the listing.
