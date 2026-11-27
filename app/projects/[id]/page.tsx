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
import ArchitectureDiagram from '@/src/components/project/ArchitectureDiagram';
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
    // openGraph는 layout 값과 병합되지 않고 통째로 대체되므로 공통 항목을 다시 적는다
    openGraph: {
      title: `${project.title} | 윤태현 포트폴리오`,
      description: project.summary,
      url: `/projects/${project.id}`,
      siteName: '윤태현 포트폴리오',
      locale: 'ko_KR',
      type: 'article',
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  const sectionTitle = 'text-2xl font-extrabold tracking-[-0.02em]';

  return (
    <>
      <SiteHeader />
      <main>
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-8">
          <Link
            href="/#projects"
            className="inline-flex rounded-lg px-3 py-2 text-[0.9375rem] font-medium text-muted transition-colors -ml-3 hover:bg-field hover:text-ink"
          >
            프로젝트 목록으로
          </Link>

          <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className="text-[0.9375rem] font-bold text-brand">
                {project.team} / {project.period}
              </p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">{project.title}</h1>
              <p className="mt-4 text-lg text-muted">{project.summary}</p>
              <div className="mt-8">
                <ProjectMeta project={project} />
              </div>
              <div className="mt-6">
                <ProjectLinks project={project} />
              </div>
            </div>
            <div className="space-y-5">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-[#dfe5ee]">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} 화면`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover object-left-top"
                />
              </div>
              {project.overview.map((p) => (
                <p key={p} className="text-ink/85">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

        <section aria-labelledby="work-title" className="border-t border-line">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">
            <div>
              <h2 id="work-title" className={`${sectionTitle} mb-6`}>
                맡은 일
              </h2>
              <ContributionList contributions={project.contributions} />
            </div>
            {project.apis && project.apis.length > 0 && (
              <div>
                <h2 className={`${sectionTitle} mb-6`}>직접 만든 API</h2>
                <ApiTable apis={project.apis} caption={`${project.title} 담당 API`} />
              </div>
            )}
          </div>
        </section>

        {project.hasArchitecture && (
          <section aria-labelledby="arch-section-title" className="border-t border-line">
            <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
              <h2 id="arch-section-title" className={sectionTitle}>
                운영 구조
              </h2>
              <p className="mt-2 text-muted">EC2 한 대에서 Docker Compose로 컨테이너 5개를 함께 운영했습니다.</p>
              <figure className="mt-8 rounded-[24px] border border-line p-4 sm:p-8">
                <div className="mx-auto max-w-3xl">
                  <ArchitectureDiagram />
                </div>
              </figure>
            </div>
          </section>
        )}

        {project.troubleshooting.length > 0 && (
          <section aria-labelledby="trouble-title" className="bg-subtle">
            <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
              <h2 id="trouble-title" className={`${sectionTitle} mb-8`}>
                문제 해결
              </h2>
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {project.troubleshooting.map((t) => (
                  <TroubleshootingBlock key={t.title} item={t} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <div className="pt-16">
        <Contact />
      </div>
    </>
  );
}
