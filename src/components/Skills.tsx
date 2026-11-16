import { skills, certifications } from "@/content/profile";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <h2 className="text-3xl font-medium text-slate">Skills</h2>
      <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
        {skills.map((g) => (
          <div key={g.group} className="border-t border-line pt-4">
            <dt className="text-base font-medium text-slate">{g.group}</dt>
            <dd className="mt-2 text-base leading-relaxed text-slate/80">{g.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-12 border-t border-line pt-4">
        <h3 className="text-base font-medium text-slate">Certifications</h3>
        <p className="measure mt-2 leading-relaxed text-slate/80">{certifications.join("; ")}</p>
      </div>
    </section>
  );
}
