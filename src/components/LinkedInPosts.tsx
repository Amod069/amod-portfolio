"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { linkedinPosts, profile } from "@/content/profile";

const ease = [0.16, 1, 0.3, 1] as const;

/** LinkedIn posts as equal cards: one photo in the same 4:3 frame, a title, a one-line summary, a link to the post. */
export default function LinkedInPosts() {
  return (
    <section id="linkedin" className="bg-mist-2">
      <div className="container py-[var(--section-gap-s)]">
        <h2 className="section-head text-ink">On LinkedIn</h2>
        <p className="lead mt-4 text-muted">
          A hackathon win and the Dublin events since.{" "}
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-signal">
            Profile on LinkedIn
          </a>
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-[repeat(2,minmax(0,1fr))] lg:grid-cols-[repeat(4,minmax(0,1fr))]">
          {linkedinPosts.map((p, i) => (
            <motion.li
              key={p.urn}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.09, duration: 0.55, ease }}
              className="min-w-0"
            >
              <a
                href={`https://www.linkedin.com/feed/update/${p.urn}`}
                target="_blank"
                rel="noreferrer"
                className="li-card group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface text-ink no-underline"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-mist-2">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="li-photo object-cover"
                  />
                  {p.tag && (
                    <span className="absolute left-3 top-3 rounded-[var(--radius-card)] bg-slate px-2.5 py-1 text-sm font-medium text-mist">
                      {p.tag}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-ink" style={{ fontSize: "var(--text-md)", lineHeight: 1.3, fontWeight: 500 }}>
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-2">{p.summary}</p>
                  <span className="mt-4 text-sm font-medium text-signal">Read the post on LinkedIn</span>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
