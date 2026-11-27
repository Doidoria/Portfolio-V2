// src/components/sections/Contact.tsx
import CopyEmailButton from '@/src/components/ui/CopyEmailButton';
import { ExternalButton } from '@/src/components/ui/TextLink';
import { profile } from '@/src/data/profile';

export default function Contact() {
  return (
    <footer id="contact" aria-labelledby="contact-title" className="scroll-mt-6 border-t border-ink/80 bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
          <div>
            <h2 id="contact-title" className="text-2xl font-bold tracking-[-0.02em]">
              연락처
            </h2>
            <p className="mt-3 max-w-[30em] text-ink/85">
              면접 일정이나 과제 안내는 이메일로 보내 주세요.
            </p>
          </div>
          <div>
            <a href={`mailto:${profile.email}`} className="text-2xl font-medium underline decoration-line decoration-2 underline-offset-[6px] hover:decoration-spring sm:text-3xl">
              {profile.email}
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              <CopyEmailButton email={profile.email} />
              <ExternalButton href={profile.github}>GitHub</ExternalButton>
              <ExternalButton href={profile.notion}>Notion 이력서</ExternalButton>
            </div>
          </div>
        </div>
        <p className="mt-16 text-sm text-muted">© {new Date().getFullYear()} 윤태현. Next.js로 만들고 Vercel로 배포했습니다.</p>
      </div>
    </footer>
  );
}
