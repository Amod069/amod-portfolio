import { profile } from "@/content/profile";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <h2 className="text-3xl font-medium text-slate">Contact</h2>
      <p className="measure mt-3 text-lg text-slate/90">{profile.availability}, Dublin or hybrid.</p>
      <ul className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-lg font-medium">
        <li>
          <a href={`mailto:${profile.email}`} className="text-signal underline-offset-4 hover:underline">
            {profile.email}
          </a>
        </li>
        <li>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-slate underline-offset-4 hover:underline">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-slate underline-offset-4 hover:underline">
            GitHub
          </a>
        </li>
      </ul>
      <p className="mt-16 text-sm text-muted">
        Built with Next.js and the Vercel AI SDK. The chat assistant runs on Claude and answers only from what is on this page and in the CV.
      </p>
    </section>
  );
}
