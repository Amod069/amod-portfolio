"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/profile";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#linkedin", label: "On LinkedIn" },
  { href: "#contact", label: "Contact" },
];

/** Search-led bar: the wordmark, the sections, and a visible pill that opens the CV chat ("/" also opens it). */
export default function Nav({ onAsk }: { onAsk: () => void }) {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      const typing = t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
      if (e.key === "/" && !typing && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        onAsk();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, [onAsk]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[var(--z-sticky-nav)] transition-colors duration-300 ${
        solid ? "border-b border-line bg-mist/90 backdrop-blur" : "border-b border-transparent"
      }`}
    >
      <nav className="container flex h-[72px] items-center gap-8">
        <a href="#top" className="text-lg font-medium text-ink no-underline">
          {profile.shortName}
        </a>
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-ink-2 no-underline hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={onAsk}
          className="ml-auto flex min-w-0 items-center gap-6 rounded-[var(--radius-card)] border border-line bg-surface px-3 py-2 text-left text-sm text-ink-2 transition-colors hover:border-signal hover:text-ink md:w-[300px]"
        >
          <span className="whitespace-nowrap">Ask my CV</span>
          <kbd className="ml-auto hidden rounded border border-line px-1.5 text-xs text-muted sm:inline">/</kbd>
        </button>
      </nav>
    </header>
  );
}
