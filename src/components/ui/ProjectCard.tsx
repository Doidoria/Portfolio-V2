// src/components/ui/ProjectCard.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Project } from '@/src/types';

export default function ProjectCard({ 
  project, 
  className = '',
  isFeatured = false 
}: { 
  project: Project; 
  className?: string;
  isFeatured?: boolean;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Link href={`/projects/${project.id}`} className={`group block h-full ${className}`}>
      <div 
        onMouseMove={handleMouseMove}
        className="relative h-full w-full overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm transition-colors duration-500 hover:bg-white/[0.04]"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(255,255,255,0.1),
                transparent 80%
              )
            `,
          }}
        />

        <div className="flex flex-col h-full">
          <div className={`relative w-full overflow-hidden shrink-0 border-b border-white/5 ${
            isFeatured ? 'h-[50%] md:h-[75%]' : 'h-48 md:h-64'
          }`}>
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-0" />
          </div>

          <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">{project.title}</h3>
              <p className="text-gray-400 text-sm md:text-base line-clamp-2 leading-relaxed mb-6 font-light">
                {project.shortDesc}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.techStacks.slice(0, 3).map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
                  {tech}
                </span>
              ))}
              {project.techStacks.length > 3 && (
                <span className="px-3 py-1 text-xs font-medium text-gray-500 bg-transparent rounded-full border border-transparent">
                  +{project.techStacks.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}