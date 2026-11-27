import { ogContentType, ogSize, renderOgImage } from '@/src/lib/og';

export const alt = '윤태현, 백엔드 중심 풀스택 개발자 포트폴리오';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    kicker: '포트폴리오',
    title: '인증부터 배포까지 서버를 직접 운영해 본 개발자',
    description: 'Spring Boot로 로그인 인증과 REST API를 만들고, Docker와 Jenkins로 배포해 운영했습니다.',
    tags: ['Spring Boot', 'Spring Security', 'JPA', 'Redis', 'Docker', 'Next.js'],
  });
}
