// src/data/projects.ts
import type { Project } from '@/src/types';

export const projectsData: Project[] = [
  {
    id: 'hangle',
    title: 'Hangle',
    summary: 'CSV를 제출하면 Python 스크립트가 자동 채점하고 리더보드에 반영하는 머신러닝 대회 플랫폼',
    period: '2025.10 - 2025.12',
    team: '5인 팀, 팀장',
    backend: 'Spring Boot REST API, MySQL, Redis, Docker Compose로 EC2 단일 서버 운영',
    tag: 'Spring Boot + React',
    highlights: [
      'JWT 인증 필터와 Redis Refresh Token, OAuth2 로그인',
      'USER, MANAGER, ADMIN 역할별 API 접근 권한',
      'Docker Compose 5개 컨테이너, Jenkins 배포 자동화',
    ],
    stats: [
      { label: '평상시 메모리 사용률', value: '75% → 43%' },
      { label: '운영 서버', value: 'EC2 한 대' },
    ],
    stack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JPA',
      'MySQL',
      'Redis',
      'Spring AI',
      'React',
      'Docker',
      'Jenkins',
      'Nginx',
      'AWS EC2',
    ],
    thumbnail: '/images/projects/hangle.png',
    links: {
      github: 'https://github.com/Doidoria/Hangle-PROJECT',
      ppt: 'https://docs.google.com/presentation/d/e/2PACX-1vSg1h9NvZNjzSKujmwQxGmT5QqN6h0Y2nqCdztCroEf7TVdp_FwLXbFe5L9KzNstQ/pub?start=false&loop=false&delayms=3000',
    },
    overview: [
      '코리아IT아카데미 빅데이터UI 과정의 5인 팀 프로젝트입니다. 사용자가 예측 결과 CSV를 제출하면 서버가 Python 채점 스크립트(F1, MAE, RMSE, AUC, ACC)를 실행해 점수를 저장하고 리더보드 순위를 다시 계산합니다.',
      '팀장으로 Jira 스프린트와 GitHub 이슈로 일정을 관리했고, 인증·보안 백엔드와 배포 인프라 전체를 맡았습니다. 2025년 12월 최종 발표까지 AWS EC2에서 운영했고, 지금은 비용 때문에 서버를 내렸습니다.',
    ],
    contributions: [
      {
        area: '백엔드',
        items: [
          'Spring Security 필터 체인에 JWT 인증 필터 구현. Access Token은 HttpOnly 쿠키로 발급하고, Refresh Token은 Redis에 만료시간(TTL)과 함께 저장',
          'Access Token 만료 시 필터에서 Refresh Token으로 재발급하고, Refresh Token 잔여시간이 5분 미만이면 새 토큰으로 교체',
          '카카오·네이버·구글 OAuth2 로그인, 휴대폰 본인인증(PortOne) API 연동',
          'USER, MANAGER, ADMIN 역할별로 API 접근 권한을 나누고, 인증 실패(401)·권한 없음(403) 응답 핸들러 작성',
          'Spring AI와 Ollama로 사용자용·개발자용 챗봇 API 구현. 개발자용은 Swagger(OpenAPI) 문서를 벡터 검색해 관련 API를 알려줌',
          'Swagger로 API 명세를 문서화해 프론트엔드와 요청 형식을 맞춤',
        ],
      },
      {
        area: '인프라',
        items: [
          'Nginx+React, Spring Boot, MySQL, Redis, Ollama 5개 컨테이너를 Docker Compose로 구성',
          'Jenkins 파이프라인으로 GitHub push 후 이미지 빌드와 재배포 자동화',
          'AWS EC2 보안 그룹, 포트, 환경변수 설정',
        ],
      },
      {
        area: '프론트엔드',
        items: ['로그인·회원가입, 마이프로필, 사용자 설정, 챗봇 위젯 화면'],
      },
    ],
    troubleshooting: [
      {
        title: 'EC2 한 대(RAM 약 2GB)에서 컨테이너가 반복 종료됨',
        problem:
          '무료 크레딧 안에서 운영하려고 소형 EC2 한 대에 컨테이너 5개를 올렸습니다. 챗봇 호출이나 배포 빌드가 겹치면 메모리가 한계에 닿아 컨테이너가 계속 꺼졌습니다.',
        cause:
          '각 프로세스가 기본 설정대로 메모리를 잡았습니다. LLM 모델, JVM 힙, MySQL 버퍼 풀이 동시에 올라갔고, Jenkins가 EC2에서 직접 React와 Gradle 빌드를 돌린 것도 부담을 키웠습니다.',
        solution: [
          'MySQL 컨테이너 메모리 1GB 제한, `innodb-buffer-pool-size=256M`, `max-connections=50`',
          'Spring Boot 힙 상한 `JAVA_TOOL_OPTIONS=-Xmx384m`',
          'Ollama 동시 추론을 `OLLAMA_NUM_PARALLEL=1`로 제한',
          '`healthcheck`와 `depends_on: service_healthy`로 기동 순서를 고정하고 `restart: always`로 자동 복구',
        ],
        result:
          '평상시 메모리 사용률을 75%에서 43%로 낮췄고, 추가 비용 없이 최종 발표까지 단일 인스턴스로 운영했습니다.',
        next: '빌드는 Jenkins 서버에서 하고 EC2에는 완성된 이미지만 배포하거나, 챗봇을 별도 서버로 분리하겠습니다.',
      },
      {
        title: '팀원 중도 이탈로 대회 목록 기능이 멈춤',
        problem:
          '개발 도중 팀원 한 명이 빠지면서 대회 목록 페이지 작업이 비었고, 다른 조보다 늦게 시작해 일정 여유도 없었습니다.',
        cause:
          '기능 단위로만 업무를 나눠 한 명이 빠지면 기능 전체가 멈추는 구조였고, API 형식이 문서로 정리되지 않아 인수인계가 어려웠습니다.',
        solution: [
          '남은 작업을 Jira 이슈 4개로 나눠 담당자와 기한을 다시 정함',
          'Swagger 문서로 API 명세를 공유해 화면 작업자가 바로 붙을 수 있게 함',
          'GitHub 이슈 보드로 진행 상황을 매일 확인',
        ],
        result: '프론트엔드와 백엔드 사이의 요청 형식 확인이 줄었고, 일정 지연 없이 12월 최종 배포를 마쳤습니다.',
      },
    ],
    // TODO(태현): 시연 영상을 public/videos/hangle-demo.mp4 로 넣고 아래 주석을 풀면 상세 페이지에 플레이어가 나온다
    // demo: {
    //   src: '/videos/hangle-demo.mp4',
    //   poster: '/images/projects/hangle.png',
    //   caption: '로그인부터 CSV 제출, 자동 채점, 리더보드 반영까지',
    // },
    hasArchitecture: true,
    apis: [
      { method: 'POST', path: '/api/user/login', desc: 'JWT 로그인' },
      { method: 'POST', path: '/api/auth/signup', desc: '회원가입' },
      { method: 'GET', path: '/api/user/validate', desc: '토큰 검증' },
      { method: 'GET', path: '/login/oauth2/code/{provider}', desc: 'OAuth2 로그인 콜백' },
      { method: 'POST', path: '/api/auth/logout', desc: '로그아웃, Refresh Token 삭제' },
      { method: 'POST', path: '/api/v1/chat/user', desc: '사용자용 챗봇' },
      { method: 'POST', path: '/api/v1/chat/dev', desc: '개발자용 챗봇' },
      { method: 'GET', path: '/api/chat/docs', desc: 'Swagger 문서 벡터 검색' },
    ],
  },
  {
    // TODO(태현): 문제 해결의 '원인' 문장이 실제와 맞는지 확인
    // TODO(태현): 베타 테스트가 끝나면 화면 캡처(thumbnail), DB·배포 구성, 문제 해결 사례를 채우고 status를 지우기
    id: 'yes-care',
    title: "Ye's Care",
    summary: '병원 동행 서비스와 이를 운영하는 관리자·매니저용 대시보드',
    period: '2026.03 - 진행 중',
    team: '1인 풀스택 (기획 협의, 프론트엔드, 백엔드, 배포)',
    backend: 'Spring Boot REST API, JWT 인증',
    tag: 'Spring Boot + Next.js',
    status: '베타 테스트 준비 중',
    highlights: [
      '관리자·매니저 대시보드와 역할별 접근 제어',
      'Spring Boot 공통 응답 형식과 전역 처리',
      '지인을 통해 실제 사용 예정인 서비스',
    ],
    stack: ['Java', 'Spring Boot', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    links: {},
    overview: [
      '병원 동행 서비스와 이를 운영하는 관리자·매니저용 대시보드입니다. 지인을 통해 실제 사용될 예정이며, 지금은 베타 테스트를 준비하고 있습니다.',
      '기획 방향은 대표님과 협의해 정했고, 화면과 API, 배포까지 혼자 맡고 있습니다. 비공개 저장소라 코드와 화면은 일부만 공개합니다.',
    ],
    contributions: [
      {
        area: '백엔드',
        items: ['Spring Boot REST API 설계와 구현', '`ResponseBodyAdvice` 기반 공통 응답 래퍼로 API 응답 형식 통일'],
      },
      {
        area: '프론트엔드',
        items: [
          'Next.js 미들웨어에서 JWT를 확인해 `/admin`, `/manager` 경로 접근 제한',
          '승인·거절 처리 후 통계 카드와 목록이 새로고침 없이 갱신되는 매니저 관리 화면',
        ],
      },
    ],
    troubleshooting: [
      {
        title: 'Boolean을 반환하는 API에서 ClassCastException 발생',
        problem:
          '공통 응답 래퍼를 적용한 뒤 `ResponseEntity<Boolean>`을 반환하는 API를 호출하면 `ClassCastException`이 났습니다.',
        cause:
          '`GlobalResponseWrapper`가 모든 응답 본문을 공통 응답 객체로 감싸면서, Boolean 응답에서 선언된 반환 타입과 실제 본문 타입이 맞지 않게 됐습니다.',
        solution: ['`supports()`에서 Boolean을 반환하는 메서드는 감싸지 않도록 제외'],
        result: 'Boolean 응답 API가 정상 동작하고, 나머지 API는 공통 응답 형식을 그대로 유지합니다.',
      },
    ],
  },
  {
    id: 'do-tai-kun',
    title: 'DoTaiKun',
    summary: '마인크래프트 서버 공식 웹사이트. 공지 게시판, 건축 콘테스트 투표, 운영진 전용 관리 화면',
    period: '2026.03 - 2026.04',
    team: '개인 프로젝트',
    backend: 'Firebase Auth, Firestore, Storage',
    tag: 'React + Firebase',
    highlights: [
      '운영진 전용 공지·콘테스트 관리 화면',
      'Firestore로 투표 집계와 중복 투표 방지',
      '모바일·태블릿 반응형',
    ],
    stack: ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'Firebase', 'React Router'],
    thumbnail: '/images/projects/dotaikun.png',
    links: {
      github: 'https://github.com/Doidoria/DoTaiKun-WEB',
      live: 'https://do-tai-kun-web.vercel.app/',
    },
    overview: [
      '운영 중인 마인크래프트 서버 유저에게 공지와 업데이트 소식을 전하고, 건축 콘테스트 투표를 받기 위해 만든 사이트입니다.',
      '운영진은 Firebase Auth로 로그인해 이미지가 포함된 공지를 올리고, 유저는 로그인 없이 콘테스트에 투표합니다.',
    ],
    contributions: [
      {
        area: '백엔드',
        items: [
          'Firebase Auth 이메일 로그인으로 운영진 전용 공지·콘테스트 관리 화면 분리',
          '공지 이미지를 Firebase Storage에 올리고 다운로드 URL을 게시글에 저장',
          '투표 수는 Firestore `increment`로 누적하고, 접속 IP를 기록해 중복 투표를 막음',
        ],
      },
      {
        area: '프론트엔드',
        items: [
          'React Router로 소식, 커뮤니티, 콘테스트 페이지 구성',
          '카테고리 필터, 검색, 더 보기 방식의 게시판 목록',
          '모바일·태블릿 반응형 레이아웃',
        ],
      },
    ],
    troubleshooting: [],
  },
  {
    id: 'cafe-kiosk',
    title: 'Cafe Kiosk',
    summary: '고객용 키오스크에서 주문하면 사장님 관리 화면에 바로 뜨는 카페 주문 시스템',
    period: '2025.11 - 2025.12',
    team: '개인 프로젝트',
    backend: 'Firestore 실시간 구독, Firebase Storage',
    tag: 'Next.js + Firebase',
    highlights: [
      '주문이 관리 화면에 새로고침 없이 반영',
      '메뉴 등록·품절 처리, 당일 매출 집계',
      'Zustand 장바구니 상태 관리',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Firebase'],
    thumbnail: '/images/projects/kiosk.png',
    links: {
      github: 'https://github.com/Doidoria/Cafe_Kiosk',
      live: 'https://cafe-kiosk.vercel.app/',
    },
    overview: [
      '고객용 키오스크 화면과 사장님용 관리 화면을 하나의 Next.js 앱으로 만들었습니다. 키오스크에서 결제하면 Firestore 실시간 구독으로 관리 화면 주문 목록이 새로고침 없이 갱신됩니다.',
      '관리 화면에서 메뉴 등록·수정·품절 처리와 당일 매출, 인기 메뉴 집계를 볼 수 있습니다.',
    ],
    contributions: [
      {
        area: '백엔드',
        items: [
          '주문, 메뉴 컬렉션 구조 설계와 메뉴 이미지 Storage 업로드',
          '`onSnapshot` 구독으로 관리 화면 주문 목록 실시간 반영',
          '무료 플랜 저장 용량을 넘지 않도록 영업 마감 시 당일 주문을 일괄 삭제하는 기능',
        ],
      },
      {
        area: '프론트엔드',
        items: [
          'HOT/ICE, 사이즈, 샷 추가 옵션 선택과 수량 조절',
          'Zustand로 장바구니 전역 상태 관리',
          '결제 후 당일 순번 주문번호를 보여주고 5초 뒤 첫 화면으로 복귀',
        ],
      },
    ],
    troubleshooting: [
      {
        title: '옵션 없는 디저트를 결제하면 주문 저장이 실패함',
        problem: '디저트처럼 옵션이 없는 메뉴를 장바구니에 담아 결제하면 Firestore 저장 단계에서 에러가 났습니다.',
        cause: '장바구니 항목에 `options: undefined`가 그대로 들어갔고, Firestore는 undefined 값을 받지 않습니다.',
        solution: ['옵션이 있을 때만 `options` 필드를 객체에 추가하도록 분기 처리'],
        result: '메뉴 종류와 관계없이 결제가 정상 저장됩니다.',
      },
    ],
  },
  {
    id: 'do-ai',
    title: 'DoAi',
    summary: 'OpenAI API를 연결한 채팅형 웹 애플리케이션',
    period: '2025.07 - 2025.09',
    team: '개인 프로젝트',
    backend: 'OpenAI API 호출',
    tag: 'React',
    highlights: ['채팅 입력과 대화 목록 화면', 'OpenAI API 요청·응답 연동'],
    stack: ['React', 'JavaScript', 'HTML/CSS'],
    thumbnail: '/images/projects/doai.png',
    links: {
      github: 'https://github.com/Doidoria/DoAiGPT',
      live: 'https://do-ai-gpt-fn.vercel.app/',
    },
    overview: [
      'OpenAI API로 대화형 응답을 받아 보여주는 채팅 화면입니다. 질문 입력부터 응답 표시까지의 흐름을 React로 직접 구현했습니다.',
    ],
    contributions: [
      {
        area: '프론트엔드',
        items: ['채팅 입력과 대화 목록 화면', 'OpenAI API 요청·응답 연동'],
      },
    ],
    troubleshooting: [],
  },
];

export const featuredProject = projectsData[0];
export const otherProjects = projectsData.slice(1);

export function getProject(id: string): Project | undefined {
  return projectsData.find((p) => p.id === id);
}
