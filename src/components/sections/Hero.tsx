// src/components/sections/Hero.tsx
import CopyEmailButton from '@/src/components/ui/CopyEmailButton';
import { ExternalButton } from '@/src/components/ui/TextLink';
import { profile } from '@/src/data/profile';
import type { CSSProperties } from 'react';

const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

// Hangle 인증 흐름: 실제 순서가 있는 과정이라 번호를 붙인다
const loginFlow = [
  '로그인 성공 시 Access Token을 HttpOnly 쿠키로 발급',
  'Refresh Token은 Redis에 만료시간과 함께 저장',
  '요청마다 JWT 필터가 토큰과 역할 권한을 확인',
  '만료되면 Refresh Token으로 자동 재발급',
];

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="mx-auto max-w-6xl px-5 pb-20 pt-14 sm:px-8 lg:pb-24 lg:pt-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
        <div>
          <p
            style={delay(0)}
            className="animate-rise inline-flex items-center gap-2 rounded-sm bg-brand-soft px-3.5 py-1.5 text-[0.9375rem] font-bold text-brand"
          >
            <span className="h-[7px] w-[7px] rounded-full bg-brand" aria-hidden />
            구직 중, 바로 출근 가능
          </p>
          <h1
            id="hero-title"
            style={delay(90)}
            className="animate-rise mt-6 text-[2.25rem] font-bold leading-[1.3] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]"
          >
            인증부터 배포까지
            <br />
            서버를 직접 운영해 본
            <br />
            개발자 {profile.name}입니다
          </h1>
          <p style={delay(180)} className="animate-rise mt-7 max-w-[30em] text-lg leading-[1.75] text-muted">
            Spring Boot로 로그인 인증과 REST API를 만들고, Docker와 Jenkins로 배포해 운영했습니다. 화면은 Next.js와
            React로 함께 만듭니다.
          </p>
          <div style={delay(260)} className="animate-rise mt-8 flex flex-wrap gap-2.5">
            <CopyEmailButton email={profile.email} />
            <ExternalButton href={profile.github}>GitHub</ExternalButton>
            <ExternalButton href={profile.notion}>Notion 이력서</ExternalButton>
          </div>
        </div>

        <div style={delay(200)} className="animate-rise rounded-lg bg-subtle p-6 sm:p-8">
          <h2 className="mb-5 text-base font-bold">Hangle에서 로그인이 처리되는 순서</h2>
          <ol className="space-y-2.5">
            {loginFlow.map((step, i) => {
              const isLast = i === loginFlow.length - 1;
              return (
                <li
                  key={step}
                  // 로그인 흐름 순서대로 하나씩 나타남
                  style={delay(450 + i * 140)}
                  className={`animate-rise flex items-center gap-4 rounded-md px-5 py-4 ${isLast ? 'bg-brand text-on-brand' : 'bg-surface'}`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-sm font-bold ${
                      isLast ? 'bg-on-brand/15' : 'bg-brand-soft text-brand'
                    }`}
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <span className={isLast ? 'font-bold' : ''}>{step}</span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
