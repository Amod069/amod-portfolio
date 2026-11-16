"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { featuredProjects, earlierProjects, type Project } from "@/content/profile";

function FeatureRow({ p, index }: { p: Project; index: number }) {
  const flip = index % 2 === 1;
  const accent = p.accent === "signal" ? "text-signal" : "text-decision";

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      className="grid gap-8 border-t border-line py-14 md:grid-cols-12 md:gap-12"
    >
      <div className={`md:col-span-4 ${flip ? "md:order-2" : ""}`}>
        <p className="text-sm text-muted">
          {p.period} · {p.context}
        </p>
        <p className={`display mt-4 text-[clamp(2.6rem,6vw,4.5rem)] font-medium ${accent}`}>{p.metric.value}</p>
        <p className="measure mt-1 text-base text-slate/80">{p.metric.label}</p>
      </div>

      <div className={`md:col-span-8 ${flip ? "md:order-1" : ""}`}>
        <h3 className="text-2xl font-medium leading-tight text-slate md:text-[1.75rem]">{p.title}</h3>
        <p className="question measure mt-4 text-slate/80">{p.question}</p>
        <p className="measure mt-4 leading-relaxed text-slate/90">{p.summary}</p>

        {p.figures && (
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {p.figures.map((f) => (
              <figure key={f.src}>
                <div className="overflow-hidden rounded-md border border-line bg-surface p-1.5">
                  <Image src={f.src} alt={f.alt} width={1400} height={900} className="h-auto w-full rounded-sm" />
                </div>
                <figcaption className="mt-2 text-sm text-muted">{f.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}

        <p className="mt-5 text-sm text-muted">{p.stack.join(" · ")}</p>
        <div className="mt-4 flex gap-5 text-sm font-medium">
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noreferrer" className="text-signal underline-offset-4 hover:underline">
              Code on GitHub
            </a>
          )}
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer" className="text-signal underline-offset-4 hover:underline">
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
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <h2 className="text-3xl font-medium text-slate">Projects</h2>
      <p className="measure mt-3 text-lg text-muted">Four projects from the last year. Each one leads with the number that mattered.</p>

      <div className="mt-10">
        {featuredProjects.map((p, i) => (
          <FeatureRow key={p.slug} p={p} index={i} />
        ))}
      </div>

      <div className="mt-6 border-t border-line pt-10">
        <h3 className="text-xl font-medium text-slate">Earlier</h3>
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {earlierProjects.map((e) => (
            <li key={e.title}>
              <p className="text-sm text-muted">{e.years}</p>
              <a href={e.repo} target="_blank" rel="noreferrer" className="mt-1 block font-medium text-slate underline-offset-4 hover:underline">
                {e.title}
              </a>
              <p className="mt-2 text-sm leading-relaxed text-slate/80">{e.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
