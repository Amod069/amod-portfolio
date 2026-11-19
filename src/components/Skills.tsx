import { skills, certifications } from "@/content/profile";

export default function Skills() {
  return (
    <section id="skills" className="container grid gap-10 py-[var(--section-gap-s)] md:grid-cols-12 md:gap-8">
      <div className="md:col-span-4">
        <h2 className="section-head text-ink">Skills</h2>
      </div>
      <div className="md:col-span-8">
        <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          {skills.map((g) => (
            <div key={g.group} className="min-w-0 border-t border-line pt-4">
              <dt className="font-medium text-ink">{g.group}</dt>
              <dd className="ml-0 mt-2 leading-relaxed text-ink-2">{g.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-10 border-t border-line pt-4">
          <h3 className="text-ink" style={{ fontSize: "var(--text-md)", fontWeight: 500 }}>
            Certifications
          </h3>
          <p className="mt-2 max-w-[62ch] leading-relaxed text-ink-2">{certifications.join("; ")}</p>
        </div>
      </div>
    </section>
  );
}
