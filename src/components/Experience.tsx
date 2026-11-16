import { experience } from "@/content/profile";

export default function Experience() {
  return (
    <section id="experience" className="bg-mist-2">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <h2 className="text-3xl font-medium text-slate">Experience</h2>
        <p className="measure mt-3 text-lg text-muted">Most recent first.</p>

        <ol className="relative mt-12 border-l border-line">
          {experience.map((e) => (
            <li key={e.role + e.period} className="relative pb-12 pl-8 last:pb-0 md:pl-12">
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-signal" aria-hidden />
              <p className="text-sm text-muted">{e.period}</p>
              <h3 className="mt-1 text-xl font-medium text-slate md:text-2xl">{e.role}</h3>
              <p className="text-base text-muted">{e.org}</p>
              <ul className="measure mt-4 space-y-2">
                {e.points.map((pt) => (
                  <li key={pt} className="leading-relaxed text-slate/90">
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
