// src/components/sections/FeaturedProject.tsx
import { featuredProject as project, otherProjects } from '@/src/data/projects';
import { ExternalButton, InternalButton } from '@/src/components/ui/TextLink';
import ProjectTile from '@/src/components/project/ProjectTile';
import ProjectImage from '@/src/components/project/ProjectImage';
import Reveal from '@/src/components/ui/Reveal';

export default function FeaturedProject() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-16 bg-subtle">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <h2 id="projects-title" className="text-[1.75rem] font-bold tracking-[-0.02em] sm:text-4xl">
          대표 프로젝트
        </h2>

        <Reveal>
          <article className="mt-8 grid grid-cols-1 gap-8 rounded-lg bg-surface p-5 sm:p-8 lg:grid-cols-2 lg:gap-10 lg:p-10">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-[#1b2433]">
              <ProjectImage
                project={project}
                alt="Hangle 메인 화면. 추천 대회와 인기 데이터셋 목록"
                sizes="(max-width: 1024px) 100vw, 540px"
                imageClassName="object-cover object-left-top transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            <div>
              <p className="text-[0.9375rem] font-bold text-brand">
                {project.team} / {project.period}
              </p>
              <h3 className="mt-2 text-4xl font-bold tracking-[-0.02em]">{project.title}</h3>
              <p className="mt-3 text-lg text-muted">{project.summary}</p>

              <ul className="mt-6 list-disc space-y-1.5 pl-5 marker:text-brand">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              {project.stats && (
                <dl className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="rounded-md bg-subtle px-5 py-4">
                      <dt className="text-sm text-muted">{stat.label}</dt>
                      <dd className="mt-1 text-2xl font-bold">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              <div className="mt-6 flex flex-wrap gap-2.5">
                <InternalButton href={`/projects/${project.id}`} variant="dark">
                  맡은 일과 문제 해결 보기
                </InternalButton>
                {project.links.github && <ExternalButton href={project.links.github}>GitHub</ExternalButton>}
              </div>
            </div>
          </article>
        </Reveal>

        <h2 className="mt-20 text-[1.75rem] font-bold tracking-[-0.02em]">그 밖의 프로젝트</h2>
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {otherProjects.map((p, i) => (
            <li key={p.id}>
              <Reveal delay={i * 90} className="h-full">
                <ProjectTile project={p} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
