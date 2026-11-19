"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { featuredProjects, earlierProjects, type Project } from "@/content/profile";

/** The first project, opened as a case: the question, the number, the figures. */
function Case({ p }: { p: Project }) {
  const [lead, ...rest] = p.figures ?? [];
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="mt-14 grid gap-10 md:grid-cols-12 md:gap-8"
    >
      <div className="md:col-span-5">
        <p className="text-sm text-muted">
          {p.period}, {p.context}
        </p>
        <h3 className="mt-3 text-ink" style={{ fontSize: "var(--text-2xl)", lineHeight: 1.15 }}>
          {p.title}
        </h3>
        <p className="question mt-5 text-ink-2">{p.question}</p>
        <p className="num mt-8 text-decision" style={{ fontSize: "var(--text-display-s)", lineHeight: 1, fontWeight: 500 }}>
          {p.metric.value}
        </p>
        <p className="mt-2 max-w-[36ch] text-ink-2">{p.metric.label}</p>
        <p className="mt-6 max-w-[58ch] leading-relaxed text-ink">{p.summary}</p>
        <p className="mt-6 text-sm text-muted">{p.stack.join(", ")}</p>
        {p.repo && (
          <a href={p.repo} target="_blank" rel="noreferrer" className="mt-4 inline-block font-medium text-signal">
            Code on GitHub
          </a>
        )}
        {p.demo && (
          <a href={p.demo} target="_blank" rel="noreferrer" className="ml-6 mt-4 inline-block font-medium text-signal">
            Live demo
          </a>
        )}
      </div>

      <div className="grid min-w-0 gap-6 md:col-span-7">
        {lead && (
          <figure className="min-w-0">
            <div className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface p-2">
              <Image src={lead.src} alt={lead.alt} width={1400} height={778} className="h-auto w-full" />
            </div>
            <figcaption className="mt-2 text-sm text-muted">{lead.caption}</figcaption>
          </figure>
        )}
        {rest.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            {rest.map((f) => (
              <figure key={f.src} className="min-w-0">
                <div className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface p-1.5">
                  <Image src={f.src} alt={f.alt} width={1400} height={900} className="h-auto w-full" />
                </div>
                <figcaption className="mt-2 text-sm text-muted">{f.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

/** The other projects as an index: one row each, opening to the full write-up. */
function IndexRow({ p }: { p: Project }) {
  return (
    <li className="border-t border-line">
      <details className="group">
        <summary className="grid cursor-pointer list-none gap-x-8 gap-y-2 py-7 md:grid-cols-12 md:items-baseline [&::-webkit-details-marker]:hidden">
          <span className="text-sm text-muted md:col-span-2">{p.period}</span>
          <span className="md:col-span-6">
            <h3 className="text-ink" style={{ fontSize: "var(--text-title)", lineHeight: 1.25 }}>
              {p.title}
            </h3>
            <span className="mt-1 block text-sm text-muted">{p.context}</span>
          </span>
          <span className="md:col-span-3">
            <span className={`num block ${p.accent === "decision" ? "text-decision" : "text-signal"}`} style={{ fontSize: "var(--text-2xl)", lineHeight: 1, fontWeight: 500 }}>
              {p.metric.value}
            </span>
            <span className="mt-1 block text-sm text-ink-2">{p.metric.label}</span>
          </span>
          <span className="text-sm text-signal md:col-span-1 md:text-right">
            <span className="group-open:hidden">Read</span>
            <span className="hidden group-open:inline">Close</span>
          </span>
        </summary>
        <div className="grid gap-x-8 pb-10 md:grid-cols-12">
          <div className="md:col-span-8 md:col-start-3">
            <p className="question text-ink-2">{p.question}</p>
            <p className="mt-4 max-w-[62ch] leading-relaxed text-ink">{p.summary}</p>
            <p className="mt-4 text-sm text-muted">{p.stack.join(", ")}</p>
            {p.repo && (
              <a href={p.repo} target="_blank" rel="noreferrer" className="mt-3 inline-block font-medium text-signal">
                Code on GitHub
              </a>
            )}
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noreferrer" className="ml-6 mt-3 inline-block font-medium text-signal">
                Live demo
              </a>
            )}
          </div>
        </div>
      </details>
    </li>
  );
}

export default function Projects() {
  const [first, ...others] = featuredProjects;
  return (
    <section id="projects" className="container pb-[var(--section-gap-s)] pt-[var(--space-3xl)]">
      <h2 className="section-head text-ink">Projects</h2>
      <p className="lead mt-4 text-muted">Four from the last year, each led by the number that mattered.</p>

      <Case p={first} />

      <ul className="mt-[var(--space-3xl)] border-b border-line">
        {others.map((p) => (
          <IndexRow key={p.slug} p={p} />
        ))}
      </ul>

      <div className="mt-[var(--space-2xl)]">
        <h3 className="text-ink">Earlier</h3>
        <ul className="mt-6 grid gap-8 md:grid-cols-3">
          {earlierProjects.map((e) => (
            <li key={e.title} className="min-w-0">
              <p className="text-sm text-muted">{e.years}</p>
              <a href={e.repo} target="_blank" rel="noreferrer" className="mt-1 block font-medium text-ink">
                {e.title}
              </a>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{e.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
