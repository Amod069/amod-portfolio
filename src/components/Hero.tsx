"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { profile } from "@/content/profile";

const ease = [0.2, 0.8, 0.2, 1] as const;

export default function Hero({ onAsk }: { onAsk: () => void }) {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-32 md:grid-cols-12 md:items-center md:px-10 md:pt-40">
      <div className="md:col-span-6">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-base text-muted">
          {profile.name} · {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease }}
          className="display mt-5 text-[clamp(1.6rem,2.6vw,2.2rem)] font-medium text-slate"
        >
          Data work from two sides: two years reporting ad-tech revenue at Media.net, and a year of building models at NCI — forecasting, carbon-aware scheduling, text classification, an LLM agent.
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22, duration: 0.6, ease }} className="mt-6 text-lg text-muted">
          Each project below starts with the question it answered.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34, duration: 0.6, ease }} className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={onAsk}
            className="rounded-md bg-signal px-5 py-2.5 text-base font-medium text-white transition-colors hover:bg-[#185633]"
          >
            Ask my CV a question
          </button>
          <a href="#projects" className="rounded-md border border-line px-5 py-2.5 text-base font-medium text-slate transition-colors hover:border-slate">
            See the projects
          </a>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }} className="mt-6 text-sm text-muted">
          {profile.availability}, Dublin or hybrid.
        </motion.p>
      </div>

      <motion.figure
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease }}
        className="md:col-span-6"
      >
        <div className="overflow-hidden rounded-lg border border-line bg-surface p-2">
          <Image
            src="/figures/co2_by_hour_season.webp"
            alt="Line chart of mean CO₂ intensity of the Irish grid by hour of day, one line per season. Intensity peaks around 5–6 am and is lowest around midday to early afternoon."
            width={1400}
            height={778}
            priority
            className="h-auto w-full rounded"
          />
        </div>
        <figcaption className="mt-3 text-sm text-muted">
          Mean CO₂ intensity of the Irish grid by hour and season, from 21,241 hours of EirGrid data. From the carbon-aware scheduling project below.
        </figcaption>
      </motion.figure>
    </section>
  );
}
