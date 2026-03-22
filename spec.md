# Lexie Innovate

## Current State
New project. No existing frontend or backend.

## Requested Changes (Diff)

### Add
- Full editorial/media website frontend for "Lexie Innovate"
- Brand color: #e3ff00 (electric yellow-green) used for accents, active states, highlights, buttons
- Pages: Home, Discover, Article Detail, Category, About, Contact
- Fixed bottom navigation (mobile-app style)
- Sticky top header with logo and search
- Card-based article feed with reusable components
- AdSense-ready ad slot placeholders (top banner, in-content, sidebar, below-article)
- Centered max-width layout (~680px mobile feel, ~1100px desktop with sidebar)
- Dummy data in JS/TS for articles, categories, authors
- Dark/neutral editorial color scheme with #e3ff00 accents
- Category pills/filters: Founders, Products, Services, Global Markets, Innovation, Companies
- Featured hero article section on homepage
- Trending / Editor's Pick sections
- Article detail page with reading progress bar, author bio, related articles
- About page and Contact page
- Footer with links and newsletter CTA placeholder
- Smooth hover/tap transitions throughout

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Set up design tokens (colors, typography, spacing) via CSS variables in index.css
2. Create dummy data module (articles, categories, authors)
3. Build layout shell: AppLayout with sticky header, fixed bottom nav, footer
4. Build reusable components: ArticleCard (compact/featured), CategoryPill, SectionHeader, AdSlot
5. Build HomePage: hero, category filter, trending feed, editor picks, ad slots
6. Build DiscoverPage: search/filter, category grid, article feed
7. Build ArticleDetailPage: full article view, reading progress bar, in-content ad, related articles, author bio
8. Build CategoryPage: filtered article list by category
9. Build AboutPage and ContactPage
10. Wire up client-side routing between pages
11. Validate and fix any type/lint errors
