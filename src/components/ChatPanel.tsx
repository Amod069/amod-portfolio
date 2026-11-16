"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { profile } from "@/content/profile";

const suggestions = [
  "What did Amod do at Media.net?",
  "Explain the decision-focused M5 project in plain terms.",
  "Has he built anything with LLM agents?",
  "When is he available and for what roles?",
];

function textOf(parts: { type: string; text?: string }[]) {
  return parts.filter((p) => p.type === "text").map((p) => p.text ?? "").join("");
}

export default function ChatPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const transport = useMemo(() => new DefaultChatTransport({ api: "/api/chat" }), []);
  const { messages, sendMessage, status, error } = useChat({ transport });
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const ask = (text: string) => {
    const t = text.trim();
    if (!t || busy) return;
    sendMessage({ text: t });
    setInput("");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            aria-label="Close chat"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate/40 backdrop-blur-[2px]"
          />
          <motion.aside
            role="dialog"
            aria-label="Ask about Amod's CV"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-line bg-mist shadow-2xl"
          >
            <header className="flex items-start justify-between gap-4 border-b border-line p-5">
              <div>
                <h2 className="text-lg font-medium text-slate">Ask my CV</h2>
                <p className="mt-1 text-sm text-muted">Answers come only from what is on this site and in {profile.shortName}&rsquo;s CV.</p>
              </div>
              <button onClick={onClose} className="rounded-full px-3 py-1 text-sm text-muted hover:bg-mist-2 hover:text-slate">
                Close
              </button>
            </header>

            <div ref={listRef} className="flex-1 space-y-4 overflow-y-auto p-5">
              {messages.length === 0 && (
                <div>
                  <p className="text-sm text-muted">Try one of these:</p>
                  <ul className="mt-3 space-y-2">
                    {suggestions.map((s) => (
                      <li key={s}>
                        <button onClick={() => ask(s)} className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-left text-sm text-slate transition-colors hover:border-signal hover:text-signal">
                          {s}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {messages.map((m) => (
                <div key={m.id} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                  <div
                    className={
                      m.role === "user"
                        ? "max-w-[85%] rounded-2xl rounded-br-sm bg-signal px-4 py-2.5 text-sm text-white"
                        : "max-w-[90%] whitespace-pre-wrap rounded-2xl rounded-bl-sm bg-surface px-4 py-2.5 text-sm leading-relaxed text-slate border border-line"
                    }
                  >
                    {textOf(m.parts)}
                  </div>
                </div>
              ))}

              {status === "submitted" && <p className="text-sm text-muted">Thinking…</p>}
              {error && <p className="text-sm text-decision">{error.message || "Something went wrong. Try again in a moment."}</p>}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                ask(input);
              }}
              className="border-t border-line p-4"
            >
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about experience, projects, availability…"
                  maxLength={1200}
                  className="flex-1 rounded-full border border-line bg-surface px-4 py-2.5 text-sm text-slate placeholder:text-muted focus:border-signal"
                />
                <button type="submit" disabled={busy || !input.trim()} className="rounded-full bg-signal px-4 py-2.5 text-sm font-medium text-white disabled:opacity-40">
                  Send
                </button>
              </div>
              <p className="mt-2 text-xs text-muted">Runs on Claude. Conversations are not saved on this site.</p>
            </form>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
