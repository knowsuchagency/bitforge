---
name: bitforge-design
description: Use this skill to generate well-branded interfaces and assets for Bitforge, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Bitforge's visual identity is **neobrutalist with 8-bit terminal vibes**: monospace everywhere (JetBrains Mono + Departure Mono for display), one bright orange accent (`#FF6B1A`) on warm near-black or warm cream surfaces, hard edges (radius 0 by default), hard-offset shadows on paper (`6px 6px 0 0 ink`), soft glow halos on dark, ASCII punctuation as decoration (`>`, `##`, `$`, `→`, `·`, `_`).

Brand vocabulary uses metallurgy metaphors: *forge* (workspace), *anvil* (worker), *vault* (storage), *wire* (network), *stamp* (immutable build hash), *mount* (source). Avoid generic terms like "sandbox", "container", or "transaction" as primary copy.

If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand. The single source of truth for tokens is `colors_and_type.css`. Spec cards in `preview/` show every primitive in isolation. UI kits in `ui_kits/marketing/` and `ui_kits/docs/` demonstrate composition.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
