import type { Metadata } from 'next';
import '@fontsource/gothic-a1/korean-400.css';
import '@fontsource/gothic-a1/korean-500.css';
import '@fontsource/gothic-a1/korean-700.css';
import '@fontsource/gothic-a1/korean-800.css';
import '@fontsource/gothic-a1/latin-400.css';
import '@fontsource/gothic-a1/latin-500.css';
import '@fontsource/gothic-a1/latin-700.css';
import '@fontsource/gothic-a1/latin-800.css';
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
  keywords: ['윤태현', '풀스택 개발자', '백엔드 개발자', 'Spring Boot', 'Spring Security', 'JWT', 'Next.js', '포트폴리오'],
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
