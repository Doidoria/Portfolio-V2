// src/components/project/ProjectImage.tsx
import Image from 'next/image';
import type { Project } from '@/src/types';

/** 화면 캡처가 있으면 이미지, 없으면(비공개·진행 중 프로젝트) 제목으로 만든 대체 썸네일 */
export default function ProjectImage({
  project,
  sizes,
  alt,
  priority = false,
  imageClassName = 'object-cover object-top',
}: {
  project: Project;
  sizes: string;
  alt?: string;
  priority?: boolean;
  imageClassName?: string;
}) {
  if (!project.thumbnail) {
    return (
      <div className="absolute inset-0 flex flex-col items-start justify-end bg-brand-soft p-6" aria-hidden>
        <span className="text-2xl font-bold text-brand sm:text-3xl">{project.title}</span>
        <span className="mt-1 text-sm text-brand/80">화면은 베타 테스트 후 공개 예정</span>
      </div>
    );
  }
  return (
    <Image
      src={project.thumbnail}
      alt={alt ?? `${project.title} 화면`}
      fill
      priority={priority}
      sizes={sizes}
      className={imageClassName}
    />
  );
}
