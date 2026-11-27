// src/components/sections/ProjectIndex.tsx
import Link from 'next/link';
import { otherProjects } from '@/src/data/projects';

export default function ProjectIndex() {
  return (
    <section aria-labelledby="others-title" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 id="others-title" className="text-2xl font-bold tracking-[-0.02em]">
          그 밖의 프로젝트
        </h2>
        <p className="mt-2 text-muted">개인 프로젝트입니다. 이름을 누르면 상세 내용을 볼 수 있습니다.</p>

        <ul className="mt-8 border-t border-ink/80">
          {otherProjects.map((project) => (
            <li key={project.id} className="border-b border-line">
              <Link
                href={`/projects/${project.id}`}
                className="group grid gap-x-8 gap-y-1 py-6 transition-colors hover:bg-surface/60 md:grid-cols-[9rem_minmax(0,1fr)_minmax(0,16rem)] md:px-3"
              >
                <span className="text-[0.9375rem] tabular-nums text-muted">{project.period}</span>
                <span>
                  <span className="text-xl font-bold group-hover:text-spring">{project.title}</span>
                  <span className="mt-1 block text-ink/85">{project.summary}</span>
                </span>
                <span className="text-[0.9375rem] text-muted md:text-right">{project.backend}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
