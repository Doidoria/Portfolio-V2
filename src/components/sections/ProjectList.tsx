// src/components/sections/ProjectList.tsx
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '@/src/data/projects';
import ProjectCard from '@/src/components/ui/ProjectCard';
import { TechStack } from '@/src/types';

const allStacks = ['All', ...Array.from(new Set(projectsData.flatMap(p => p.techStacks)))] as const;

export default function ProjectList() {
  const [filter, setFilter] = useState<string>('All');

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(project => project.techStacks.includes(filter as TechStack));

  // 인덱스에 따라 벤토 그리드 사이즈를 동적으로 결정하는 함수
  const getBentoSpan = (index: number) => {
    if (index === 0) return 'md:col-span-2 md:row-span-2'; // 첫 번째는 제일 크게
    if (index === 3 || index === 6) return 'md:col-span-2 md:row-span-1'; // 특정 인덱스는 가로로 길게
    return 'md:col-span-1 md:row-span-1';
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto min-h-screen">
      <div className="mb-20 text-left">
        <h2 className="text-4xl md:text-6xl font-semibold text-white mb-8 tracking-tighter">
          Selected Works
        </h2>
        
        {/* 미니멀한 필터 버튼 */}
        <div className="flex flex-wrap gap-2">
          {allStacks.map((stack) => (
            <button
              key={stack}
              onClick={() => setFilter(stack)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                filter === stack
                  ? 'bg-white text-black font-medium'
                  : 'bg-transparent text-gray-500 hover:text-white hover:bg-white/10'
              }`}
            >
              {stack}
            </button>
          ))}
        </div>
      </div>

      {/* 벤토 그리드 레이아웃 */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(300px,auto)] gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className={getBentoSpan(index)}
            >
              <ProjectCard project={project} isFeatured={index === 0} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}