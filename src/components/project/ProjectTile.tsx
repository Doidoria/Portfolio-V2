// src/components/project/ProjectTile.tsx
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/src/types';

export default function ProjectTile({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group flex h-full flex-col rounded-lg bg-white p-4 transition-shadow hover:shadow-[0_8px_24px_rgba(25,31,40,0.08)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-[#dfe5ee]">
        <Image
          src={project.thumbnail}
          alt={`${project.title} 화면`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
          className="object-cover object-top"
        />
      </div>
      <div className="px-2 pb-2 pt-4">
        <p className="text-sm text-muted">
          {project.period}, {project.tag}
        </p>
        <h3 className="mt-1 text-[1.375rem] font-extrabold group-hover:text-brand">{project.title}</h3>
        <p className="mt-1.5 text-[0.9375rem] text-muted">{project.summary}</p>
      </div>
    </Link>
  );
}
