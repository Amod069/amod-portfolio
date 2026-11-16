"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/profile";

const links = [
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#beyond", label: "Beyond the code" },
  { href: "#contact", label: "Contact" },
];

export default function Nav({ onAsk }: { onAsk: () => void }) {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid ? "border-b border-line bg-ink/85 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="wide text-lg font-bold text-text">
          {profile.shortName}
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted transition-colors hover:text-text">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={onAsk} className="rounded-full border border-decision/60 px-4 py-1.5 text-sm font-medium text-decision transition-colors hover:bg-decision hover:text-ink">
          Ask my CV
        </button>
      </nav>
    </header>
  );
}
