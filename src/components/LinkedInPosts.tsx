"use client";

import { useEffect, useRef, useState } from "react";
import { linkedinPosts, profile } from "@/content/profile";

const NATIVE_W = 504;

/**
 * One official LinkedIn embed. LinkedIn lays the post out at 504px wide and a fixed height,
 * so the iframe stays at that size and is scaled down to the column's width: never cropped,
 * never wider than the screen.
 */
function Post({ urn, height, title }: { urn: string; height: number; title: string }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setScale(Math.min(1, entry.contentRect.width / NATIVE_W));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <figure className="mb-8 min-w-0 break-inside-avoid">
      <div
        ref={boxRef}
        className="relative w-full max-w-[504px] overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface"
        style={{ height: Math.round(height * scale) }}
      >
        <iframe
          src={`https://www.linkedin.com/embed/feed/update/${urn}`}
          title={title}
          loading="lazy"
          allowFullScreen
          width={NATIVE_W}
          height={height}
          className="absolute left-0 top-0 origin-top-left border-0"
          style={{ width: NATIVE_W, height, transform: `scale(${scale})` }}
        />
      </div>
      <figcaption className="mt-3 text-sm text-ink-2">{title}</figcaption>
    </figure>
  );
}

export default function LinkedInPosts() {
  return (
    <section id="linkedin" className="bg-mist-2">
      <div className="container py-[var(--section-gap-s)]">
        <h2 className="section-head text-ink">On LinkedIn</h2>
        <p className="lead mt-4 text-muted">
          A hackathon win and the Dublin events since, as posted at the time.{" "}
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-signal">
            Profile on LinkedIn
          </a>
        </p>
        <div className="mt-12 gap-10 md:columns-2 md:[column-gap:var(--space-xl)]">
          {linkedinPosts.map((p) => (
            <Post key={p.urn} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
