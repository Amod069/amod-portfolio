"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Amod's own illustration (public/amod-illustration.webp, transparent background).
 * Says hello with a small sway on load and on hover, floats gently, and leans toward the cursor.
 * The whole figure is a button that opens the CV chat.
 * Reduced motion: it stays still.
 */
export default function Character({ onAsk }: { onAsk: () => void }) {
  const leanRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let px = 0;
    let py = 0;
    const update = () => {
      raf = 0;
      const el = leanRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = (px - (r.left + r.width / 2)) / Math.max(window.innerWidth, 1);
      const dy = (py - (r.top + r.height / 2)) / Math.max(window.innerHeight, 1);
      const rot = Math.max(-3, Math.min(3, dx * 6));
      const tx = Math.max(-8, Math.min(8, dx * 16));
      const ty = Math.max(-6, Math.min(6, dy * 10));
      el.style.transform = `translate(${tx.toFixed(1)}px, ${ty.toFixed(1)}px) rotate(${rot.toFixed(2)}deg)`;
    };
    const onMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={onAsk}
      className="char group relative block w-full cursor-pointer rounded-[var(--radius-card)] focus-visible:outline-offset-4"
      aria-label="Open the chat to ask about Amod's work"
    >
      <div ref={leanRef} className="char-lean">
        <div className="char-float">
          <div className="char-hello">
            <Image
              src="/amod-illustration.webp"
              alt="Illustration of Amod waving, wearing glasses, an olive tee, a backpack and headphones round his neck"
              width={1000}
              height={955}
              priority
              className="h-auto w-full select-none"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </button>
  );
}
