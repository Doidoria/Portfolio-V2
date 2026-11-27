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
  stack: string[];
  thumbnail: string;
  links: ProjectLinks;
  overview: string[];
  contributions: Contribution[];
  troubleshooting: Troubleshooting[];
  apis?: ApiEndpoint[];
}
