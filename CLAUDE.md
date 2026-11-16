# amod-portfolio

Personal portfolio of Amod V. Aher (ML engineer, Dublin). Live at https://amodaher.vercel.app.

## Stack
- Next.js 16 (App Router, TypeScript, Turbopack), Tailwind v4, Motion (`motion/react`), Vercel AI SDK v7 with `@ai-sdk/anthropic`.
- Font: Bricolage Grotesque, self-hosted via `@fontsource-variable/bricolage-grotesque` (Google Fonts is not used).

## Where things live
- `src/content/profile.ts` — single source of truth for all copy: profile, projects, experience, skills, LinkedIn post URNs. Edit here, not in components.
- `src/content/knowledge.ts` — builds the chatbot's knowledge pack from profile.ts. Add extra detail there, not in the route.
- `src/app/api/chat/route.ts` — streaming chat endpoint. Model name is the `MODEL` constant. Needs `ANTHROPIC_API_KEY`.
- `src/lib/rate-limit.ts` — in-memory per-IP limit (soft; swap for Upstash if needed).
- `src/components/` — one file per section. `GridSignal.tsx` is the animated hero canvas.

## Design rules
- Palette tokens in `globals.css`: ink / surface / line / text / muted; two accents with meaning — `signal` (teal, data) and `decision` (amber, cost/decisions/CTAs). Don't add new colours.
- Motion is deliberate: one hero load sequence, viewport reveals on project rows only. Respect `prefers-reduced-motion`.
- Projects lead with a proof metric. Keep copy plain and specific; no marketing voice.
- LinkedIn embeds mount only on click (performance).

## Commands
- `npm run dev` · `npm run build` · `npm run lint`
- Deploys automatically from `main` via Vercel.
