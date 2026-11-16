import { experience } from "@/content/profile";

export default function Experience() {
  return (
    <section id="experience" className="bg-ink-2">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <h2 className="wide text-3xl font-bold text-text md:text-4xl">Where the data work came from</h2>
        <p className="measure mt-4 text-lg text-muted">
          Two years in a revenue-critical reporting seat, then a year of building models. Most recent first.
        </p>

        <ol className="relative mt-14 border-l border-line">
          {experience.map((e) => (
            <li key={e.role + e.period} className="relative pb-14 pl-8 last:pb-0 md:pl-12">
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-signal" aria-hidden />
              <p className="text-sm text-muted">{e.period}</p>
              <h3 className="mt-1 text-xl font-bold text-text md:text-2xl">{e.role}</h3>
              <p className="text-base text-text/70">{e.org}</p>
              <ul className="measure mt-4 space-y-2">
                {e.points.map((pt) => (
                  <li key={pt} className="leading-relaxed text-text/85">
                    {pt}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
