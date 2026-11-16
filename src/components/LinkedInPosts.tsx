import { linkedinPosts, profile } from "@/content/profile";

/**
 * Official LinkedIn post embeds at their native size (504px wide, per-post height).
 * Two across on wide screens; a horizontal scroll row on narrow ones.
 */
export default function LinkedInPosts() {
  return (
    <section id="linkedin" className="bg-mist-2">
      <div className="mx-auto max-w-6xl px-6 pt-20 md:px-10">
        <h2 className="text-3xl font-medium text-slate">On LinkedIn</h2>
        <p className="measure mt-3 text-lg text-muted">
          Hackathons, places and updates, as posted at the time.{" "}
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-signal underline-offset-4 hover:underline">
            Profile on LinkedIn
          </a>
          .
        </p>
      </div>
      <div className="mx-auto max-w-6xl overflow-x-auto px-6 pb-20 pt-10 md:px-10">
        <div className="flex snap-x gap-6 md:grid md:grid-cols-2 md:justify-items-start">
          {linkedinPosts.map((p) => (
            <figure key={p.urn} className="w-[504px] shrink-0 snap-start overflow-hidden rounded-lg border border-line bg-surface">
              <iframe
                src={`https://www.linkedin.com/embed/feed/update/${p.urn}`}
                title={p.title}
                loading="lazy"
                allowFullScreen
                width={504}
                height={p.height}
                className="block w-[504px] bg-white"
                style={{ height: p.height }}
              />
              <figcaption className="px-4 py-3 text-sm text-muted">{p.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
