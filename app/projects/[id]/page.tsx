import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projectsData } from '@/src/data/projects';

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.id === resolvedParams.id);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#030303] text-white pt-24 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="relative w-full h-64 md:h-[500px] rounded-3xl overflow-hidden mb-12">
        <Image src={project.thumbnail} alt={project.title} 
          fill 
          sizes="(max-width: 768px) 100vw, 1024px" 
          className="object-cover object-top" />
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold mb-6">{project.title}</h1>
      
      <div className="flex flex-wrap gap-2 mb-12">
        {project.techStacks.map((tech) => (
          <span key={tech} className="px-4 py-2 text-sm font-medium text-[#1ee8b8] bg-[#1ee8b8]/10 rounded-full border border-[#1ee8b8]/20">
            {tech}
          </span>
        ))}
      </div>

      <div className="space-y-6 mb-12">
        {project.detailedDesc.map((desc, i) => (
          <p key={i} className="text-gray-300 text-xl leading-relaxed">{desc}</p>
        ))}
      </div>

      <div className="flex gap-4">
        <a href={project.links.github} target="_blank" rel="noreferrer" className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors">
          GitHub Repo
        </a>
      </div>
    </main>
  );
}