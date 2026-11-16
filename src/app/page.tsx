"use client";

import { useState } from "react";
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
  const openChat = () => setChatOpen(true);

  return (
    <main id="top">
      <Nav onAsk={openChat} />
      <Hero onAsk={openChat} />
      <Projects />
      <Experience />
      <Skills />
      <LinkedInPosts />
      <Contact />
      <ChatPanel open={chatOpen} onClose={() => setChatOpen(false)} />
    </main>
  );
}
