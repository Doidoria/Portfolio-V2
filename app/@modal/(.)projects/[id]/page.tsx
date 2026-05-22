import Image from 'next/image';
import { notFound } from 'next/navigation';
import Modal from '@/src/components/ui/Modal';
import { projectsData } from '@/src/data/projects';

export default async function InterceptedProjectModal({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.id === resolvedParams.id);

  if (!project) return notFound();

  return (
    <Modal>
      <div className="w-full">
        
        {/* 모달 썸네일 */}
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 1024px"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f10] to-transparent" />
        </div>
        
        {/* 모달 내용 */}
        <div className="p-8 md:p-12 -mt-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{project.title}</h2>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStacks.map((tech) => (
              <span key={tech} className="px-3 py-1 text-sm font-medium text-[#1ee8b8] bg-[#1ee8b8]/10 rounded-full border border-[#1ee8b8]/20">
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-4 mb-10">
            {project.detailedDesc.map((desc, i) => (
              <p key={i} className="text-gray-300 text-lg leading-relaxed">{desc}</p>
            ))}
          </div>

          {/* 링크 버튼 */}
          <div className="flex gap-4">
            <a href={project.links.github} target="_blank" rel="noreferrer" className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
              GitHub Repo
            </a>
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noreferrer" className="px-6 py-3 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Live Site
              </a>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}