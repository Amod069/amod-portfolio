# amod-portfolio

Personal portfolio of Amod V. Aher (Dublin). Live at https://amod-portfolio-six.vercel.app.

## Stack
- Next.js 16 (App Router, TypeScript, Turbopack), Tailwind v4, Motion (`motion/react`), Vercel AI SDK v7 with `@ai-sdk/anthropic`.
- Fonts: Instrument Sans (everything) and Instrument Serif italic (project "question" lines only), self-hosted via `@fontsource-variable/instrument-sans` and `@fontsource/instrument-serif`. Google Fonts is not used.

## Where things live
- `src/content/profile.ts` — single source of truth for all copy: profile, projects, experience, skills, LinkedIn post URNs. Edit here, not in components.
- `src/content/knowledge.ts` — builds the chatbot's knowledge pack from profile.ts. Add extra detail there, not in the route.
- `src/app/api/chat/route.ts` — streaming chat endpoint. Model name is the `MODEL` constant. Needs `ANTHROPIC_API_KEY`.
- `src/lib/rate-limit.ts` — in-memory per-IP limit (soft; swap for Upstash if needed).
- `src/components/` — one file per section. `Hero.tsx` shows the real CO₂-by-hour figure.

## Design rules
- Light only. Palette tokens in `globals.css`: mist #F2F4F0 (base), mist-2, surface (white), line, slate #1E2622 (text), muted; two accents with meaning — `signal` (grid green #1F6A3E: data, links, primary action) and `decision` (saffron #D8731E: the headline numbers). Don't add new colours; no dark mode.
- Copy voice: factual. Describe what Amod has done, never what he is (no "ML engineer", no adjectives about himself, no slogans). Section titles are plain nouns.
- Real figures from the projects (public/figures/*.webp, from the carbon repo) are the visuals. No decorative canvases or gradients.
- Motion is deliberate: one hero load sequence, viewport reveals on project rows only. Respect `prefers-reduced-motion`.
- Projects lead with a proof metric.
- LinkedIn embeds load with the page at native size (504px wide, per-post height); hackathon win first.

## Commands
- `npm run dev` · `npm run build` · `npm run lint`
- Deploys automatically from `main` via Vercel.
