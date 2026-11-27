// src/components/sections/Hero.tsx
import ArchitectureDiagram from '@/src/components/hero/ArchitectureDiagram';
import CopyEmailButton from '@/src/components/ui/CopyEmailButton';
import { ExternalButton } from '@/src/components/ui/TextLink';
import { profile } from '@/src/data/profile';

export default function Hero() {
  return (
    <section aria-labelledby="hero-name" className="mx-auto max-w-6xl px-5 pb-20 pt-14 sm:px-8 lg:pt-20">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
        <div>
          <h1 id="hero-name" className="text-[3.5rem] font-bold leading-none tracking-[-0.04em] sm:text-[5rem]">
            {profile.name}
          </h1>
          <p className="mt-5 text-2xl font-medium tracking-[-0.01em] sm:text-[1.75rem]">{profile.role}</p>

          <p className="mt-8 max-w-[34em] text-lg leading-[1.8] text-ink/85">
            Spring Boot로 인증과 REST API를 만들고, Docker와 Jenkins로 직접 배포해 서버를 운영해 봤습니다. 화면은 Next.js와
            React로 함께 만듭니다.
          </p>

          <p className="mt-6 flex items-center gap-2.5 text-[0.9375rem] text-muted">
            <span className="h-2 w-2 rounded-full bg-spring" aria-hidden />
            구직 중이며 바로 출근할 수 있습니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CopyEmailButton email={profile.email} />
            <ExternalButton href={profile.github}>GitHub</ExternalButton>
            <ExternalButton href={profile.notion}>Notion 이력서</ExternalButton>
          </div>
        </div>

        <figure className="rounded-md border border-line bg-surface/70 p-4 sm:p-6">
          <ArchitectureDiagram />
          <figcaption className="mt-4 border-t border-line pt-4 text-[0.9375rem] leading-relaxed text-muted">
            <span className="font-medium text-ink">Hangle 운영 구조.</span> 소형 EC2 한 대에 컨테이너 5개를 올리고 서비스별
            메모리 상한을 조정해, 평상시 메모리 사용률을 75%에서 43%로 낮췄습니다.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
