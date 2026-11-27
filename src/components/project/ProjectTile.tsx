// src/components/project/ProjectTile.tsx
import Link from 'next/link';
import type { Project } from '@/src/types';
import ProjectImage from '@/src/components/project/ProjectImage';

export default function ProjectTile({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group flex h-full flex-col rounded-lg bg-surface p-4 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(15,20,30,0.10)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-media">
        <ProjectImage
          project={project}
          sizes="(max-width: 640px) 100vw, 560px"
          imageClassName="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {project.status && (
          <span className="absolute left-3 top-3 rounded-sm bg-brand px-2 py-1 text-xs font-bold text-on-brand">
            {project.status}
          </span>
        )}
      </div>
      <div className="px-2 pb-2 pt-4">
        <p className="text-sm text-muted">
          {project.period}, {project.tag}
        </p>
        <h3 className="mt-1 text-[1.375rem] font-bold group-hover:text-brand">{project.title}</h3>
        <p className="mt-1.5 text-[0.9375rem] text-muted">{project.summary}</p>
      </div>
    </Link>
  );
}
