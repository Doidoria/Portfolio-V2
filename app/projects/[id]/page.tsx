import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '@/src/components/sections/SiteHeader';
import Contact from '@/src/components/sections/Contact';
import {
  ApiTable,
  ContributionList,
  ProjectLinks,
  ProjectMeta,
  TroubleshootingBlock,
} from '@/src/components/project/ProjectParts';
import { getProject, projectsData } from '@/src/data/projects';

interface Props {
  params: Promise<{ id: string }>;
}

// 프로젝트 데이터가 정적이라 빌드 시 전부 생성하고, 목록에 없는 id는 404
export const dynamicParams = false;

export function generateStaticParams(): { id: string }[] {
  return projectsData.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: { url: `/projects/${project.id}` },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 pb-24 pt-10 sm:px-8">
        <Link href="/#projects" className="text-[0.9375rem] text-muted underline-offset-4 hover:text-ink hover:underline">
          프로젝트 목록으로
        </Link>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
          <div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] sm:text-5xl">{project.title}</h1>
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
            <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-line bg-surface">
              <Image
                src={project.thumbnail}
                alt={`${project.title} 화면`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        <section aria-labelledby="work-title" className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
          <div>
            <h2 id="work-title" className="mb-6 text-2xl font-bold tracking-[-0.02em]">
              맡은 일
            </h2>
            <ContributionList contributions={project.contributions} />
          </div>
          {project.apis && project.apis.length > 0 && (
            <div>
              <h2 className="mb-6 text-2xl font-bold tracking-[-0.02em]">직접 만든 API</h2>
              <ApiTable apis={project.apis} caption={`${project.title} 담당 API`} />
            </div>
          )}
        </section>

        {project.troubleshooting.length > 0 && (
          <section aria-labelledby="trouble-title" className="mt-20">
            <h2 id="trouble-title" className="mb-6 text-2xl font-bold tracking-[-0.02em]">
              문제 해결
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {project.troubleshooting.map((t) => (
                <TroubleshootingBlock key={t.title} item={t} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Contact />
    </>
  );
}
