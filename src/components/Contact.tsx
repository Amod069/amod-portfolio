import { profile } from "@/content/profile";

/** Colophon footer: the plain contact, then credits as one paragraph. */
export default function Contact() {
  return (
    <footer id="contact" className="container pb-[var(--space-2xl)] pt-[var(--section-gap-s)]">
      <h2 className="section-head text-ink">Contact</h2>
      <p className="lead mt-4 text-ink-2">{profile.availability}, Dublin or hybrid.</p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-block whitespace-nowrap font-medium text-signal"
        style={{ fontSize: "clamp(1.05rem, 4.6vw, 1.953rem)", lineHeight: 1.2 }}
      >
        {profile.email}
      </a>
      <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-lg">
        <li>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-ink">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-ink">
            GitHub
          </a>
        </li>
      </ul>
      <p className="mt-[var(--space-3xl)] max-w-[72ch] border-t border-line pt-6 text-sm leading-relaxed text-muted">
        {profile.name}, {profile.location}. Built with Next.js and the Vercel AI SDK; the chat assistant runs on Claude and
        answers only from this page and the CV. Project figures are from the carbon-aware scheduling project, using EirGrid
        and Open-Meteo data. The illustration is drawn from photographs of Amod.
      </p>
    </footer>
  );
}
