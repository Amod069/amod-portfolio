# Amod V. Aher — portfolio

Interactive portfolio with a "Chat with my CV" assistant. Built with Next.js 16, Motion and the Vercel AI SDK; deployed on Vercel.

**Live:** https://amodaher.vercel.app

## Run locally

```bash
npm install
cp .env.example .env.local   # add your ANTHROPIC_API_KEY
npm run dev
```

## How the chat works

The assistant answers only from a knowledge pack generated from `src/content/profile.ts` (the same data that renders the site). The pack is passed as a cached system prompt to Claude Haiku 5.5 through a streaming route handler (`src/app/api/chat/route.ts`). A per-IP rate limit and message caps keep costs bounded. A retrieval (RAG) version is planned.

## Editing content

Everything the site says lives in `src/content/profile.ts`. Change it there and both the page and the chatbot update.
