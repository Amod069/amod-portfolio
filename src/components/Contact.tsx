import { profile } from "@/content/profile";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
      <h2 className="display text-[clamp(2.2rem,6vw,4.5rem)] font-bold text-text">Hiring for 2027? Let&rsquo;s talk.</h2>
      <p className="measure mt-6 text-lg text-text/80">
        {profile.availability}, in Dublin or hybrid. ML engineering, data science and LLM-application roles are the fit.
      </p>
      <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-lg font-medium">
        <li>
          <a href={`mailto:${profile.email}`} className="text-decision underline-offset-4 hover:underline">
            {profile.email}
          </a>
        </li>
        <li>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-text underline-offset-4 hover:underline">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-text underline-offset-4 hover:underline">
            GitHub
          </a>
        </li>
      </ul>
      <p className="mt-20 text-sm text-muted">
        Built with Next.js, Motion and the Vercel AI SDK. The chat assistant runs on Claude and only knows what is on this page and in my CV.
      </p>
    </section>
  );
}
