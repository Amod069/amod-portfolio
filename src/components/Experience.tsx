import { experience } from "@/content/profile";

export default function Experience() {
  return (
    <section id="experience" className="bg-mist-2">
      <div className="container grid gap-10 py-[var(--section-gap-s)] md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <h2 className="section-head text-ink md:sticky md:top-28">Experience</h2>
        </div>
        <ol className="md:col-span-8">
          {experience.map((e) => (
            <li key={e.role + e.period} className="grid gap-x-8 gap-y-2 border-t border-line py-8 first:border-t-0 first:pt-0 md:grid-cols-8">
              <p className="text-sm text-muted md:col-span-2">{e.period}</p>
              <div className="min-w-0 md:col-span-6">
                <h3 className="text-ink">{e.role}</h3>
                <p className="mt-1 text-ink-2">{e.org}</p>
                <ul className="mt-4 space-y-3">
                  {e.points.map((pt) => (
                    <li key={pt} className="max-w-[62ch] leading-relaxed text-ink">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
