"use client";

import { useState } from "react";
import { linkedinPosts, profile } from "@/content/profile";

/** Official LinkedIn post embeds, mounted only when the visitor asks for them, so the page stays fast. */
function PostCard({ urn, height, title }: { urn: string; height: number; title: string }) {
  const [open, setOpen] = useState(false);
  const src = `https://www.linkedin.com/embed/feed/update/${urn}`;

  return (
    <div className="flex w-[320px] shrink-0 flex-col overflow-hidden rounded-2xl border border-line bg-surface snap-start md:w-[400px]">
      {open ? (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allowFullScreen
          className="w-full bg-white"
          style={{ height: Math.min(height, 720) }}
        />
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="flex h-[360px] flex-col items-start justify-end p-6 text-left transition-colors hover:bg-ink-2"
        >
          <span className="text-sm text-muted">LinkedIn post</span>
          <span className="mt-1 text-lg font-semibold text-text">{title}</span>
          <span className="mt-4 text-sm font-medium text-signal">Show post</span>
        </button>
      )}
    </div>
  );
}

export default function LinkedInPosts() {
  return (
    <section id="beyond" className="bg-ink-2">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <h2 className="wide text-3xl font-bold text-text md:text-4xl">Beyond the code</h2>
        <p className="measure mt-4 text-lg text-muted">
          Hackathons, places and the occasional win, as I posted them at the time.{" "}
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-signal underline-offset-4 hover:underline">
            Follow along on LinkedIn
          </a>
          .
        </p>
      </div>
      <div className="mx-auto max-w-6xl overflow-x-auto px-6 pb-24 md:px-10">
        <div className="flex snap-x gap-5">
          {linkedinPosts.map((p) => (
            <PostCard key={p.urn} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
