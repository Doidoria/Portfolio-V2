// src/components/sections/Skills.tsx
import { skillGroups } from '@/src/data/profile';

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-6 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 id="skills-title" className="text-2xl font-bold tracking-[-0.02em]">
          기술
        </h2>
        <p className="mt-2 text-muted">실제로 써 본 곳과 함께 적었습니다.</p>

        <div className="mt-10 grid gap-12 lg:grid-cols-3 lg:gap-10">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="border-b border-ink/80 pb-2 text-[0.9375rem] font-bold text-spring">{group.title}</h3>
              <dl>
                {group.rows.map((row) => (
                  <div key={row.name} className="border-b border-line py-3.5">
                    <dt className="font-medium">{row.name}</dt>
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
