"use client";

import { motion } from "motion/react";
import { featuredProjects, earlierProjects, type Project } from "@/content/profile";

function FeatureRow({ p, index }: { p: Project; index: number }) {
  const flip = index % 2 === 1;
  const accent = p.accent === "signal" ? "text-signal" : "text-decision";
  const rule = p.accent === "signal" ? "bg-signal" : "bg-decision";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className={`grid gap-8 border-t border-line py-14 md:grid-cols-12 md:gap-12 ${flip ? "" : ""}`}
    >
      <div className={`md:col-span-5 ${flip ? "md:order-2" : ""}`}>
        <p className="text-sm text-muted">
          {p.period} · {p.context}
        </p>
        <p className={`display mt-5 text-[clamp(3rem,8vw,5.5rem)] font-bold ${accent}`}>{p.metric.value}</p>
        <p className="measure mt-2 text-base text-text/80">{p.metric.label}</p>
        <div className={`mt-6 h-0.5 w-16 ${rule}`} />
      </div>

      <div className={`md:col-span-7 ${flip ? "md:order-1" : ""}`}>
        <h3 className="wide text-2xl font-bold leading-tight text-text md:text-3xl">{p.title}</h3>
        <p className="measure mt-4 text-lg italic leading-relaxed text-text/75">{p.question}</p>
        <p className="measure mt-4 leading-relaxed text-text/85">{p.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <li key={s} className="rounded-full border border-line px-3 py-1 text-sm text-muted">
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex gap-5 text-sm font-medium">
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noreferrer" className={`${accent} underline-offset-4 hover:underline`}>
              Code on GitHub
            </a>
          )}
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer" className={`${accent} underline-offset-4 hover:underline`}>
              Live demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <h2 className="wide text-3xl font-bold text-text md:text-4xl">Work that had to be right</h2>
      <p className="measure mt-4 text-lg text-muted">
        Four projects from the last year. Each one leads with the number that mattered, then the question it answered.
      </p>

      <div className="mt-12">
        {featuredProjects.map((p, i) => (
          <FeatureRow key={p.slug} p={p} index={i} />
        ))}
      </div>

      <div className="mt-8 border-t border-line pt-10">
        <h3 className="text-xl font-semibold text-text">Earlier</h3>
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {earlierProjects.map((e) => (
            <li key={e.title}>
              <p className="text-sm text-muted">{e.years}</p>
              <a href={e.repo} target="_blank" rel="noreferrer" className="mt-1 block font-semibold text-text underline-offset-4 hover:underline">
                {e.title}
              </a>
              <p className="mt-2 text-sm leading-relaxed text-text/75">{e.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
