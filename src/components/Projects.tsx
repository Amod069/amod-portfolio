"use client";

import { motion } from "motion/react";
import { featuredProjects, earlierProjects, type Project } from "@/content/profile";
import ProjectVideo from "./ProjectVideo";

/** One project: the case on the left (question, number, write-up, link), its video on the right. */
function Case({ p, first }: { p: Project; first: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`grid gap-10 py-[var(--space-3xl)] md:grid-cols-12 md:items-center md:gap-10 ${first ? "" : "border-t border-line"}`}
    >
      <div className="md:col-span-5">
        <p className="text-sm text-muted">
          {p.period}, {p.context}
        </p>
        <h3 className="mt-3 text-ink" style={{ fontSize: "var(--text-2xl)", lineHeight: 1.15 }}>
          {p.title}
        </h3>
        <p className="question mt-5 text-ink-2">{p.question}</p>
        <p
          className={`num mt-8 ${p.accent === "signal" ? "text-signal" : "text-decision"}`}
          style={{ fontSize: "var(--text-display-s)", lineHeight: 1, fontWeight: 500 }}
        >
          {p.metric.value}
        </p>
        <p className="mt-2 max-w-[38ch] text-ink-2">{p.metric.label}</p>
        <p className="mt-6 max-w-[58ch] leading-relaxed text-ink">{p.summary}</p>
        <p className="mt-6 text-sm text-muted">{p.stack.join(", ")}</p>
        <div className="mt-4 flex gap-6 font-medium">
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noreferrer" className="text-signal">
              Code on GitHub
            </a>
          )}
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer" className="text-signal">
              Live demo
            </a>
          )}
        </div>
      </div>
      <div className="min-w-0 md:col-span-7">{p.video && <ProjectVideo {...p.video} />}</div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="container pb-[var(--section-gap-s)] pt-[var(--space-3xl)]">
      <h2 className="section-head text-ink">Projects</h2>
      <p className="lead mt-4 text-muted">Four from the last year, each led by the number that mattered.</p>

      <div className="mt-4">
        {featuredProjects.map((p, i) => (
          <Case key={p.slug} p={p} first={i === 0} />
        ))}
      </div>

      <div className="mt-6 border-t border-line pt-[var(--space-2xl)]">
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
