// src/components/sections/Skills.tsx
import { skillGroups } from '@/src/data/profile';

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <h2 id="skills-title" className="text-[1.75rem] font-extrabold tracking-[-0.02em]">
          기술
        </h2>
        <p className="mt-2 text-muted">실제로 써 본 곳과 함께 적었습니다.</p>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-lg border border-line p-6">
              <h3 className="text-base font-extrabold text-brand">{group.title}</h3>
              <dl className="mt-3 divide-y divide-line">
                {group.rows.map((row) => (
                  <div key={row.name} className="py-3">
                    <dt className="font-bold">{row.name}</dt>
                    <dd className="mt-0.5 text-[0.9375rem] leading-relaxed text-muted">{row.usage}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
