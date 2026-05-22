// src/data/projects.ts
import { Project } from '@/src/types';

export const projectsData: Project[] = [
  {
    id: 'cafe-kiosk',
    title: 'Cafe Kiosk',
    shortDesc: 'Next.js와 Firebase 기반 실시간 O2O 카페 키오스크',
    detailedDesc: [
      '고객용 키오스크 결제와 사장님용 어드민 페이지를 실시간으로 연동한 O2O 플랫폼입니다.',
      'Zustand를 활용해 장바구니 전역 상태를 가볍게 관리하고, Firebase onSnapshot으로 0.1초대 실시간 주문 동기화를 구현했습니다.',
      '옵션 데이터 분기 처리 및 당일 데이터 일괄 삭제 로직을 통해 결제 에러를 방지하고 유지보수성을 확보했습니다.'
    ],
    thumbnail: '/images/projects/kiosk.png',
    techStacks: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Firebase'],
    links: {
      github: 'https://github.com/Doidoria/Cafe_Kiosk?tab=readme-ov-file',
      live: 'https://cafe-kiosk.vercel.app/'
    },
    period: '2023.10 - 2023.12'
  },
  {
    id: 'do-tai-kun',
    title: 'DoTaiKun',
    shortDesc: 'React와 Vite 기반 게임 커뮤니티 웹사이트',
    detailedDesc: [
      '다양한 디바이스 환경에 맞춰 완벽하게 동작하는 반응형 커뮤니티 웹 애플리케이션입니다.',
      'Glassmorphism(글래스모피즘) UI와 Scroll-triggered 애니메이션을 적용하여 고급스러운 사용자 경험(UX)을 제공합니다.',
      'React Router를 활용한 SPA 라우팅 및 클라이언트 사이드 데이터 페이징 처리로 성능을 최적화했습니다.'
    ],
    thumbnail: '/images/projects/dotaikun.png',
    techStacks: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    links: {
      github: 'https://github.com/Doidoria/DoTaiKun-WEB',
      live: 'https://do-tai-kun-web.vercel.app/'
    },
    period: '2023.07 - 2023.09'
  },
  {
    id: 'do-ai',
    title: 'DoAi',
    shortDesc: 'Web GPT-Ai Site Coding',
    detailedDesc: [
      'OpenAI API를 활용하여 챗봇 인터페이스를 구현한 웹 애플리케이션입니다.',
      '사용자 친화적인 UI와 자연스러운 인터랙션을 제공하는 데 초점을 맞추었습니다.'
    ],
    thumbnail: '/images/projects/doai.png',
    techStacks: ['React', 'JavaScript', 'HTML/CSS'],
    links: {
      github: 'https://github.com/Doidoria/DoAiGPT',
      live: 'https://do-ai-gpt-fn.vercel.app/'
    },
    period: '2023.04 - 2023.06'
  },
  {
    id: 'hangle',
    title: 'Hangle',
    shortDesc: 'Spring Boot와 React 기반 머신러닝 대회 플랫폼',
    detailedDesc: [
      '머신러닝 모델 제출부터 자동 채점, 리더보드 반영까지 전 과정을 제공하는 풀스택 서비스형 웹 플랫폼입니다.',
      '프론트엔드 UI 구현은 물론, JWT 기반 인증 및 OAuth2 챗봇 API 등 백엔드 로직까지 직접 설계하고 개발했습니다.',
      'Docker, Jenkins, AWS EC2를 활용한 CI/CD 배포 자동화 파이프라인을 직접 구축하여 인프라 역량을 입증했습니다.'
    ],
    thumbnail: '/images/projects/hangle.png',
    techStacks: ['React', 'Spring Boot', 'Docker', 'Jenkins', 'AWS EC2'],
    links: {
      github: 'https://github.com/Doidoria/Hangle-PROJECT',
      ppt: 'https://docs.google.com/presentation/d/e/2PACX-1vSg1h9NvZNjzSKujmwQxGmT5QqN6h0Y2nqCdztCroEf7TVdp_FwLXbFe5L9KzNstQ/pub?start=false&loop=false&delayms=3000'
    },
    period: '2023.01 - 2023.03'
  },
];