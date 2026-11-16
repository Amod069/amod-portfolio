import { skills, certifications } from "@/content/profile";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <h2 className="wide text-3xl font-bold text-text md:text-4xl">Tools I reach for</h2>
      <dl className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
        {skills.map((g) => (
          <div key={g.group} className="border-t border-line pt-5">
            <dt className="text-base font-semibold text-text">{g.group}</dt>
            <dd className="mt-3 text-base leading-relaxed text-text/75">{g.items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-14 border-t border-line pt-5">
        <h3 className="text-base font-semibold text-text">Certifications</h3>
        <p className="measure mt-3 leading-relaxed text-text/75">{certifications.join(" · ")}</p>
      </div>
    </section>
  );
}
