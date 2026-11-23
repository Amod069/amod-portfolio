# amod-portfolio

Personal portfolio of Amod V. Aher (Dublin). Redesigned with the Hallmark design skill; the stamp at the top of globals.css records the decisions and waivers. Live at https://amodaher.dev.

## Stack
- Next.js 16 (App Router, TypeScript, Turbopack), Tailwind v4, Motion (`motion/react`), Vercel AI SDK v7 with `@ai-sdk/anthropic`.
- Fonts: Instrument Sans (everything) and Instrument Serif italic (project "question" lines only), self-hosted via `@fontsource-variable/instrument-sans` and `@fontsource/instrument-serif`. Google Fonts is not used.

## Where things live
- `src/content/profile.ts` — single source of truth for all copy: profile, projects, experience, skills, LinkedIn post URNs. Edit here, not in components.
- `src/content/knowledge.ts` — builds the chatbot's knowledge pack from profile.ts. Add extra detail there, not in the route.
- `src/app/api/chat/route.ts` — streaming chat endpoint. Model name is the `MODEL` constant. Needs `ANTHROPIC_API_KEY`.
- `src/lib/rate-limit.ts` — in-memory per-IP limit (soft; swap for Upstash if needed).
- `src/components/` — one file per section. `Character.tsx` is the illustrated Amod in the hero (blinks, follows the cursor, waves, opens the chat). `LinkedInPosts.tsx` renders the post cards.
- `src/app/tokens.css` / `base.css` — Hallmark tokens and base rules; every colour and font goes through a token.

## Design rules
- Light only. Palette tokens in `globals.css`: mist #F2F4F0 (base), mist-2, surface (white), line, slate #1E2622 (text), muted; two accents with meaning — `signal` (grid green #1F6A3E: data, links, primary action) and `decision` (saffron #D8731E: the headline numbers). Don't add new colours; no dark mode.
- Copy voice: factual. Describe what Amod has done, never what he is (no "ML engineer", no adjectives about himself, no slogans). Section titles are plain nouns.
- Visuals: the character in the hero (waived Hallmark gate 80 at the owner's request) and the real project figures (public/figures/*.webp). No decorative canvases or gradients.
- Motion is deliberate: one hero load sequence, viewport reveals on the project case and the LinkedIn cards (staggered), hover lift on cards. Respect `prefers-reduced-motion`.
- Projects lead with a proof metric. Carbon and Laya have short videos (public/videos/*.mp4 + .jpg posters, 1280×720, silent) made with the brag-slim workflow; `ProjectVideo.tsx` plays them while on screen and pauses off screen, no autoplay under reduced motion.
- Laya's agent ran on gpt-4o-mini via GitHub Models (not Claude), and it sends updates itself, asking a person only when unsure. Keep the copy and chat knowledge consistent with that.
- LinkedIn posts are cards, not embeds: a 4:3 photo (public/linkedin/*.webp, cropped from Amod's post screenshots), a title, a one-line summary, a link to the post. Same size; the Give(a)Go hackathon win first.

## Commands
- `npm run dev` · `npm run build` · `npm run lint`
- Deploys automatically from `main` via Vercel.
