# ui_kits/marketing — &gt;bitforge home

Original Bitforge marketing home built on the Bitforge design system.

## Components
- `Nav` — wordmark + links + GitHub + white pill CTA
- `Hero` — pixel-display wordmark with blinking cursor, tagline, mono description, primary/ghost CTAs
- `TerminalPanel` — window-chrome card with traffic lights, FORGING indicator, WORKERS section (active workers with progress bars), MOUNTS section (color-bordered mount rows with source badges)
- `InstallCommand` — `$ brew install bitforge` row with working copy button
- `FeatureRow` — 4-up feature blurbs with green-tinted icons
- `Footer` — wordmark + footer links

## How to read it
`index.html` boots React + Babel and renders the full home. Edit `Components.jsx` for structure; `styles.css` for visuals — all design tokens are CSS vars at the top.
