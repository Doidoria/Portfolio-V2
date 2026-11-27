import type { Metadata } from 'next';
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';
import '@fontsource/ibm-plex-mono/latin-400.css';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://yoonth.xyz'),
  title: {
    default: '윤태현 | 백엔드 중심 풀스택 개발자',
    template: '%s | 윤태현 포트폴리오',
  },
  description:
    'Spring Boot로 인증과 REST API를 만들고 Docker, Jenkins로 직접 배포·운영해 본 풀스택 개발자 윤태현의 포트폴리오입니다.',
  keywords: [
    '윤태현',
    '풀스택 개발자',
    '백엔드 개발자',
    'Spring Boot',
    'Spring Security',
    'JWT',
    'Next.js',
    '포트폴리오',
  ],
  authors: [{ name: '윤태현' }],
  alternates: { canonical: '/' },
  openGraph: {
    url: '/',
    title: '윤태현 | 백엔드 중심 풀스택 개발자',
    description: 'Spring Boot, Next.js 풀스택 개발자 포트폴리오',
    siteName: '윤태현 포트폴리오',
    locale: 'ko_KR',
    type: 'website',
  },
};

// 첫 페인트 전에 테마를 정해 흰 화면 → 검은 화면 깜빡임을 막는다.
// 저장된 선택이 있으면 그것을, 없으면 OS 설정을 따른다.
// 'js' 클래스는 스크롤 등장 애니메이션용: JS가 꺼져 있으면 내용을 숨기지 않는다.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;var r=document.documentElement;r.classList.add('js');r.classList.toggle('dark',d);r.style.colorScheme=d?'dark':'light';}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // 스크립트가 html의 class를 서버 렌더 결과와 다르게 바꾸므로 경고를 끈다
    <html lang="ko" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-bg text-ink antialiased transition-colors duration-300">{children}</body>
    </html>
  );
}
