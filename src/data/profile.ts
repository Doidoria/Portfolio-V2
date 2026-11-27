// src/data/profile.ts

export const profile = {
  name: '윤태현',
  role: '백엔드 중심 풀스택 개발자',
  email: 'shth15926@gmail.com',
  github: 'https://github.com/Doidoria',
  notion: 'https://www.notion.so/232c4a9f87e28088b545e8361ac0ad02',
} as const;

export interface SkillRow {
  name: string;
  usage: string;
}

export interface SkillGroup {
  title: string;
  rows: SkillRow[];
}

/** 기술은 숙련도 막대 대신 '어디서 무엇에 썼는지'로 보여준다 */
export const skillGroups: SkillGroup[] = [
  {
    title: '백엔드',
    rows: [
      { name: 'Java, Spring Boot', usage: 'Hangle REST API. Controller, Service, Repository 계층과 DTO 분리' },
      { name: 'Spring Security, JWT', usage: 'Hangle 인증 필터, 쿠키 기반 Access Token, 역할별 접근 권한' },
      { name: 'JPA, MySQL', usage: 'Hangle 사용자, 대회, 제출, 리더보드 엔티티와 조회' },
      { name: 'Redis', usage: 'Refresh Token을 만료시간과 함께 저장하고 로그아웃 시 삭제' },
      { name: 'OAuth2', usage: '카카오, 네이버, 구글 로그인 연동' },
      { name: 'Spring AI', usage: 'Ollama 모델 연결, Swagger 문서 벡터 검색 챗봇' },
      { name: 'Firebase', usage: 'DoTaiKun, Cafe Kiosk의 Auth, Firestore, Storage' },
    ],
  },
  {
    title: '프론트엔드',
    rows: [
      { name: 'TypeScript, Next.js', usage: 'Cafe Kiosk, 이 포트폴리오 (App Router)' },
      { name: 'React', usage: 'Hangle 로그인·설정 화면, DoTaiKun, DoAi' },
      { name: 'Tailwind CSS', usage: '대부분의 개인 프로젝트 스타일링' },
      { name: 'Zustand', usage: 'Cafe Kiosk 장바구니 상태' },
    ],
  },
  {
    title: '인프라, 협업',
    rows: [
      { name: 'Docker, Docker Compose', usage: 'Hangle 컨테이너 5개 구성, 메모리 상한과 healthcheck 설정' },
      { name: 'Jenkins', usage: 'GitHub push 후 빌드와 재배포 자동화' },
      { name: 'AWS EC2, Nginx', usage: 'Hangle 운영 서버, 정적 파일 서빙과 API 프록시' },
      { name: 'Vercel', usage: 'Next.js, React 프로젝트 배포' },
      { name: 'Swagger, Jira, GitHub', usage: 'API 명세 공유, 스프린트와 이슈 관리' },
    ],
  },
];
