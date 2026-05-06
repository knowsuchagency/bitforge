# Bitforge Design System

> A workbench where agents build, ship, and recover — without breaking prod.

A design system for **Bitforge** (`>bitforge`) — a developer-tooling brand for a stamped, sandboxed agent workbench. The brand voice is **neobrutalist with 8-bit terminal vibes**: monospace everywhere, hard edges, ASCII punctuation, terminal greens with a single bright orange accent, hard-offset shadows on cream paper for docs and a warm near-black surface with radial glow for the canonical product.

## Sources

The visual direction was sketched from two reference screenshots provided as inspiration:
- `uploads/Screenshot 2026-05-06 at 11.04.32 AM.png` — dark-mode hero with terminal panel
- `uploads/Screenshot 2026-05-06 at 11.04.41 AM.png` — paper neobrutalist architecture diagram

All brand naming, copywriting, and product framing for Bitforge is original to this design system. Visual primitives (orange accent, paper neobrutalism, terminal-panel card) are inspired by the references but applied to a Bitforge-specific concept.

## Index

| File / folder | What's there |
|---|---|
| `colors_and_type.css` | All design tokens — colors, type scale, spacing, radii, shadows, motion. |
| `preview/` | 25 spec cards (wordmark, type, color, radii, shadows, components). |
| `ui_kits/marketing/` | `>bitforge` marketing home — nav, hero, forge terminal, install, features. |
| `ui_kits/docs/` | Bitforge docs page — three-piece architecture diagram on paper. |
| `SKILL.md` | Skill manifest for downloading as a packaged design skill. |
| `uploads/` | Original reference screenshots. |

---

## CONTENT FUNDAMENTALS

**Voice**: developer-to-developer, plain, declarative. Confident, slightly dry, never cute. Reads like a clear commit message.

**Casing**: Sentence case for everything except `## EYEBROW LABELS` (uppercase mono, wide tracking) and inline code/badges (lowercase). Headlines never use Title Case.

**Person**: Imperative ("Roll back any build") or system-as-subject ("Bitforge gives every agent its own anvil…"). Avoid "you can" — say "you do" or just say it.

**Sentence length**: Short. Punchy. Periods over commas.

**Punctuation as decoration**: ASCII is type. `>` opens the wordmark and shell prompts. `##` opens headings. `$` opens commands. `→` ends CTAs. `·` separates metadata. `@b1f04ge` denotes a stamp ref.

**Original copy examples**:
- Hero tagline: *"A workbench where agents build, ship, and recover — without breaking prod."*
- Hero body: *"Bitforge gives every agent its own anvil: a stamped, sandboxed workspace that mounts your repos, datasets, and docs as one filesystem."*
- Feature: *"Every build is a stamp · Every artifact pinned to a hash you can pull back at any time"*
- CTA: *"Open the forge →"* / *"Read the docs →"*

**Terminology**: *forge* (the workspace), *anvil* (a worker), *vault* (versioned storage), *wire* (mediated network), *stamp* (an immutable build hash), *mount* (a source bound into the forge). Lean into the metallurgy metaphor — never "sandbox", "container", or "transaction" as primary terms.

**Emoji**: never. Unicode glyphs (`>`, `→`, `·`, `✓`, `_`) yes — they're part of the type system.

---

## VISUAL FOUNDATIONS

**Two surfaces, one system.**
1. **Dark / canonical** — `#0A0908` near-black warmed with an orange tint, used for the product, marketing home, terminals.
2. **Paper** — `#F2EEE4` warm cream with a faint 16px grid, used for docs and diagrams.

**Color**: One brand orange (`#FF6B1A`). Terminal-palette semantics (green=live, amber=warn, red=error, blue=info, purple=rare second accent). No gradients on UI chrome. The only "gradient" is the radial orange glow behind the wordmark on the dark home.

**Type**: Monospace everywhere. **JetBrains Mono** for body, UI, code. **Departure Mono** as the 8-bit display face for the wordmark and big hero numbers.

**Spacing**: Strict 4px grid, terminal-density.

**Borders**: 1px hairline default, 2px primary cards, 3px emphasis. On paper: 2px ink with hard offset shadow.

**Shadows**:
- Paper: `box-shadow: 6px 6px 0 0 ink` (no blur). Classic neobrutalism.
- Dark: subtle glow halos for hot states only. Never brutal-shadows on dark.

**Backgrounds**: Solid fills. Dark gets one radial orange glow. Paper gets a 16px grid. No photography. Diagrams *are* the imagery.

**Animation**: Snappy and stepped. `cubic-bezier(0.2, 0.7, 0.3, 1)` for hover/press. `steps(4, end)` on progress bars. Status dots pulse opacity at 1.6s. The wordmark cursor blinks via `steps(2)`. No bounces, slides, or parallax.

**Hover**: Primary buttons brighten + soft orange glow. Secondary outlined buttons swap border to white. Paper buttons translate -1px and shadow grows to 5×5.

**Press**: Paper buttons translate +2px and shadow shrinks to 2×2. Dark buttons darken to `--bf-orange-deep`.

**Radius**: 0 by default. 2px inputs, 4px chips, 6px reserved for paper cards. Pill (`9999px`) is **status dots only**.

**Transparency / blur**: Avoided. Flat and opaque.

**Cards**:
- *Dark panel*: 2px hairline border, no shadow, no radius. Optional window-chrome header with traffic lights.
- *Paper card*: 2px ink border, brutal shadow, colored eyebrow tile, bold title, optional chip row.

---

## ICONOGRAPHY

**Lucide** at `1.6` stroke weight, `24×24` viewBox, `stroke="currentColor"`. The brand icon set is anvil/forge/stamp/plug — drawn as outline glyphs in the same low-stroke style.

**Status dots** are filled circles 6–11px with optional glow. Not icons — semantic primitives.

**ASCII as glyphs**: `>`, `##`, `$`, `→`, `·`, `+`, `~`, `@`, `_` are typographic primitives in the same mono face as body text, color-coded (orange for `>`, `##`, `$`, `@`; green for `+`; faded fg for `#` comments).

**No emoji ever.**

`preview/iconography.html` shows the 12-icon working set.

---

## CAVEATS & ASKS

- **Fonts are substitutions.** **JetBrains Mono** + **Departure Mono** load remotely. If Bitforge has licensed brand faces, drop them in `fonts/` and update `colors_and_type.css`.
- **No source assets.** No logo SVG, no Figma, no codebase — Bitforge is a fresh brand. The wordmark uses `>bitforge_` set in Departure Mono with a blinking cursor; if you want a vector mark, point me at the direction (geometric/woodcut/pixel-art).
- **Two surfaces only.** Marketing home + docs page. The actual product UI (the workbench, the build viewer, the diff approver) is unbuilt.
- **Iconography is Lucide-substituted.**

**Tell me what to fix.** Want me to design the actual product UI? Add a CLI/TUI mock? Try a wordmark variant (geometric block letters? pixel-art?)? Iterate copy in a new direction?
