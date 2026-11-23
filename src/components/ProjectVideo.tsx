"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A short project video: silent loop that plays while on screen and pauses off screen.
 * Clicking it shows the controls (including sound). With reduced motion it never autoplays;
 * the poster shows with a play button instead.
 */
export default function ProjectVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [controls, setControls] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduced(rm);
    if (rm) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.4 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <figure className="min-w-0">
      <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface">
        <video
          ref={ref}
          src={src}
          poster={poster}
          muted={!controls}
          loop
          playsInline
          preload="none"
          controls={controls || reduced}
          aria-label={label}
          onClick={() => setControls(true)}
          className="block aspect-video w-full cursor-pointer bg-mist-2"
        />
      </div>
      <figcaption className="mt-2 text-sm text-muted">
        {label}. {controls || reduced ? "Use the controls for sound." : "Click the video for sound and controls."}
      </figcaption>
    </figure>
  );
}
