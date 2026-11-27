// src/types/index.ts

export type WorkArea = '백엔드' | '프론트엔드' | '인프라';

export interface Contribution {
  area: WorkArea;
  items: string[];
}

export interface Troubleshooting {
  title: string;
  problem: string;
  cause: string;
  solution: string[];
  result: string;
  /** 다시 한다면 바꿀 점 (선택) */
  next?: string;
}

export interface ApiEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  desc: string;
}

export interface ProjectLinks {
  github?: string; // 비공개 레포는 생략
  live?: string;
  ppt?: string;
}

export interface DemoVideo {
  /** public 폴더 기준 경로 (예: '/videos/hangle-demo.mp4') */
  src: string;
  /** 재생 전 보여 줄 이미지 (선택) */
  poster?: string;
  /** 영상 설명 한 줄 */
  caption: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  /** 목록에 보이는 한 줄 설명 */
  summary: string;
  period: string;
  /** 예: '5인 팀, 팀장' / '개인 프로젝트' */
  team: string;
  /** 서버 구조 한 줄 (예: 'Spring Boot REST API + MySQL') */
  backend: string;
  /** 목록 타일에 보이는 짧은 기술 표기 (예: 'Next.js + Firebase') */
  tag: string;
  /** 메인에서 보여 줄 핵심 3줄 */
  highlights: string[];
  /** 대표 프로젝트 수치 타일 (선택) */
  stats?: Stat[];
  stack: string[];
  /** 화면 캡처 경로. 없으면 제목으로 만든 대체 썸네일을 보여 준다 */
  thumbnail?: string;
  /** 진행 중인 프로젝트 표시 (예: '진행 중', '베타 테스트 중') */
  status?: string;
  links: ProjectLinks;
  overview: string[];
  contributions: Contribution[];
  troubleshooting: Troubleshooting[];
  apis?: ApiEndpoint[];
  /** 시연 영상. 있으면 상세 페이지 상단에 플레이어가 나온다 */
  demo?: DemoVideo;
  /** 상세 페이지에 서버 구조도를 보여 줄지 (Hangle) */
  hasArchitecture?: boolean;
}
