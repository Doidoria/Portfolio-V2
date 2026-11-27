// src/components/sections/FeaturedProject.tsx
import Image from 'next/image';
import { featuredProject as project } from '@/src/data/projects';
import {
  ApiTable,
  ContributionList,
  ProjectLinks,
  ProjectMeta,
  TroubleshootingBlock,
} from '@/src/components/project/ProjectParts';

export default function FeaturedProject() {
  return (
    <section id="projects" aria-labelledby="featured-title" className="scroll-mt-6 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 className="text-[0.9375rem] font-medium text-muted">대표 프로젝트</h2>

        <div className="mt-4 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
          <div>
            <h3 id="featured-title" className="text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
              {project.title}
            </h3>
            <p className="mt-4 max-w-[34em] text-lg leading-[1.8]">{project.summary}</p>
            <div className="mt-8">
              <ProjectMeta project={project} />
            </div>
            <div className="mt-8">
              <ProjectLinks project={project} />
            </div>
          </div>

          <div className="space-y-5">
            {project.overview.map((p) => (
              <p key={p} className="max-w-[38em] text-ink/85">
                {p}
              </p>
            ))}
            <div className="relative mt-2 aspect-[16/9] overflow-hidden rounded-md border border-line bg-surface">
              <Image
                src={project.thumbnail}
                alt="Hangle 메인 화면. 추천 대회와 인기 데이터셋 목록"
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
          <div>
            <h3 className="mb-6 text-2xl font-bold tracking-[-0.02em]">맡은 일</h3>
            <ContributionList contributions={project.contributions} />
          </div>
          <div>
            <h3 className="mb-6 text-2xl font-bold tracking-[-0.02em]">직접 만든 API</h3>
            {project.apis && <ApiTable apis={project.apis} caption="인증, 챗봇 영역 (전체 25개 중 담당분)" />}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="mb-6 text-2xl font-bold tracking-[-0.02em]">문제 해결</h3>
          <div className="grid gap-6 lg:grid-cols-2">
            {project.troubleshooting.map((t) => (
              <TroubleshootingBlock key={t.title} item={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
