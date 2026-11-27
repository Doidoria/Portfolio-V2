import { notFound } from 'next/navigation';
import { getProject, projectsData } from '@/src/data/projects';
import { ogContentType, ogSize, renderOgImage } from '@/src/lib/og';

export const alt = '윤태현 포트폴리오 프로젝트';
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams(): { id: string }[] {
  return projectsData.map((p) => ({ id: p.id }));
}

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  return renderOgImage({
    kicker: project.status ? `${project.team}, ${project.status}` : project.team,
    title: project.title,
    description: project.summary,
    tags: project.stack.slice(0, 6),
  });
}
