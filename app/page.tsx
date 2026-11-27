import SiteHeader from '@/src/components/sections/SiteHeader';
import Hero from '@/src/components/sections/Hero';
import FeaturedProject from '@/src/components/sections/FeaturedProject';
import ProjectIndex from '@/src/components/sections/ProjectIndex';
import Skills from '@/src/components/sections/Skills';
import Contact from '@/src/components/sections/Contact';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <FeaturedProject />
        <ProjectIndex />
        <Skills />
      </main>
      <Contact />
    </>
  );
}
