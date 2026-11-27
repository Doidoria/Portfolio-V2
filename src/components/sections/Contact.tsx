// src/components/sections/Contact.tsx
import CopyEmailButton from '@/src/components/ui/CopyEmailButton';
import { profile } from '@/src/data/profile';

export default function Contact() {
  return (
    <footer id="contact" aria-labelledby="contact-title" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-[28px] bg-ink px-6 py-10 text-white sm:px-12 sm:py-14">
          <div>
            <h2 id="contact-title" className="text-2xl font-extrabold sm:text-[1.75rem]">
              함께 일할 기회를 기다리고 있습니다
            </h2>
            <p className="mt-2 text-[#b0b8c1]">
              면접 일정이나 과제 안내는{' '}
              <a href={`mailto:${profile.email}`} className="font-bold text-white underline underline-offset-4">
                {profile.email}
              </a>
              로 보내 주세요.
            </p>
            <p className="mt-4 flex gap-4 text-[0.9375rem]">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-[#b0b8c1] hover:text-white">
                GitHub<span className="sr-only">(새 탭에서 열림)</span>
              </a>
              <a href={profile.notion} target="_blank" rel="noopener noreferrer" className="text-[#b0b8c1] hover:text-white">
                Notion 이력서<span className="sr-only">(새 탭에서 열림)</span>
              </a>
            </p>
          </div>
          <CopyEmailButton email={profile.email} />
        </div>
        <p className="mt-8 text-sm text-muted">© {new Date().getFullYear()} 윤태현. Next.js로 만들고 Vercel로 배포했습니다.</p>
      </div>
    </footer>
  );
}
