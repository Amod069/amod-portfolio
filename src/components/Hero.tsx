"use client";

import { motion } from "motion/react";
import Character from "./Character";
import { profile } from "@/content/profile";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero({ onAsk }: { onAsk: () => void }) {
  return (
    <section className="container grid items-center gap-10 pb-12 pt-28 md:min-h-[100svh] md:grid-cols-12 md:gap-8 md:pb-8 md:pt-[88px]">
      <div className="md:col-span-5">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="text-ink"
        >
          Hi, I&rsquo;m Amod.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.6, ease }}
          className="lead mt-6 text-ink-2"
        >
          {profile.heroLine}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.6, ease }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <button onClick={onAsk} className="btn-primary rounded-[var(--radius-card)] px-5 py-3 text-base font-medium">
            Ask my CV a question
          </button>
          <a href="#projects" className="btn-secondary rounded-[var(--radius-card)] px-5 py-3 text-base font-medium no-underline">
            See the projects
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.8, ease }}
        className="relative mx-auto w-full max-w-[520px] md:col-span-7 md:max-w-[min(600px,66svh)]"
      >
        <button
          onClick={onAsk}
          className="bubble absolute left-0 top-[2%] z-[var(--z-raised)] rounded-[var(--radius-card)] border border-line bg-surface px-4 py-3 text-left text-base text-ink md:-left-6"
        >
          Ask me about my work
          <span aria-hidden="true" className="absolute -bottom-[7px] right-8 h-3 w-3 rotate-45 border-b border-r border-line bg-surface" />
        </button>
        <Character onAsk={onAsk} />
      </motion.div>
    </section>
  );
}
