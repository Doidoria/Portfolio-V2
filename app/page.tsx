import Hero from '@/src/components/sections/Hero';
import ProjectList from '@/src/components/sections/ProjectList';
import Footer from '@/src/components/layout/Footer';

export default function Home() {
  return (
    <main className="bg-[#030303] min-h-screen selection:bg-[#1ee8b8]/30 selection:text-white">
      <Hero />
      <ProjectList />
      <Footer />
    </main>
  );
}