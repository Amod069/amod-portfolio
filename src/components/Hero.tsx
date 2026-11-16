"use client";

import { motion } from "motion/react";
import GridSignal from "./GridSignal";
import { profile } from "@/content/profile";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.25 + i * 0.12, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] as const },
  }),
};

export default function Hero({ onAsk }: { onAsk: () => void }) {
  return (
    <section className="relative isolate min-h-[92svh] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <GridSignal />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink" />
      </div>

      <div className="mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-end px-6 pb-20 pt-32 md:px-10">
        <motion.p custom={0} variants={reveal} initial="hidden" animate="show" className="mb-6 text-base text-muted">
          {profile.name} · {profile.location}
        </motion.p>

        <motion.h1
          custom={1}
          variants={reveal}
          initial="hidden"
          animate="show"
          className="display max-w-5xl text-[clamp(2.6rem,7.5vw,6.5rem)] font-bold text-text"
        >
          Messy data in.
          <br />
          Decisions out.
        </motion.h1>

        <motion.p custom={2} variants={reveal} initial="hidden" animate="show" className="measure mt-8 text-lg leading-relaxed text-text/85 md:text-xl">
          ML engineer finishing an M.Sc. in AI in Dublin, after two years keeping ad-tech revenue reporting honest at Media.net. I build forecasting models that are judged on the cost of their decisions, and LLM agents that know when to hand off to a human.
        </motion.p>

        <motion.div custom={3} variants={reveal} initial="hidden" animate="show" className="mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={onAsk}
            className="rounded-full bg-decision px-6 py-3 text-base font-semibold text-ink transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Ask my CV a question
          </button>
          <a href="#projects" className="rounded-full border border-line px-6 py-3 text-base font-medium text-text transition-colors hover:border-signal hover:text-signal">
            See the work
          </a>
          <span className="ml-auto hidden text-sm text-muted md:inline">{profile.availability}</span>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4, duration: 1 }} className="mt-10 text-xs text-muted">
          Background: a week of simulated Irish wind generation (teal) and grid CO₂ intensity (amber), the two series from my carbon-aware scheduling project. Move the cursor to add wind.
        </motion.p>
      </div>
    </section>
  );
}
