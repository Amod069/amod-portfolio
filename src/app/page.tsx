"use client";

import { useCallback, useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import LinkedInPosts from "@/components/LinkedInPosts";
import Contact from "@/components/Contact";
import ChatPanel from "@/components/ChatPanel";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const openChat = useCallback(() => setChatOpen(true), []);

  return (
    <>
      <Nav onAsk={openChat} />
      <main id="top">
        <Hero onAsk={openChat} />
        <Projects />
        <Experience />
        <Skills />
        <LinkedInPosts />
      </main>
      <Contact />
      <ChatPanel open={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}
