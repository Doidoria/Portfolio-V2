# 윤태현 포트폴리오 (Portfolio-V2)

백엔드 중심 풀스택 개발자 윤태현의 포트폴리오 사이트입니다. Spring Boot로 만든 인증·API와 Docker, Jenkins 운영 경험을 중심으로 프로젝트를 정리했습니다.

## 기술

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4
- 글꼴: Pretendard(npm 패키지, 동적 서브셋), IBM Plex Mono(코드 표기)
- 라이트/다크 모드: OS 설정을 따르고 헤더 버튼으로 전환, 선택은 브라우저에 저장
- 링크 미리보기 이미지: `next/og`로 메인과 프로젝트별 이미지를 빌드 시 생성
- 배포: Vercel

## 구조

```
app/
  layout.tsx              메타데이터, 글꼴
  page.tsx                메인 (소개, 대표 프로젝트, 그 밖의 프로젝트, 기술, 연락처)
                          상세 내용(맡은 일, API, 문제 해결)은 프로젝트 상세 페이지에 있음
  projects/[id]/page.tsx  프로젝트 상세 (빌드 시 정적 생성)
src/
  data/projects.ts        프로젝트 내용 (여기만 고치면 화면에 반영)
  data/profile.ts         연락처, 기술 목록
  components/
    project/              프로젝트 타일, 맡은 일, API 표, 문제 해결, Hangle 구조도
    sections/             메인 페이지 구역
  types/index.ts          데이터 타입
```

모든 페이지는 서버 컴포넌트이고, 클라이언트 컴포넌트는 이메일 복사 버튼 하나입니다.

## 프로젝트 추가하기

`src/data/projects.ts`의 `projectsData` 배열에 항목을 추가합니다. 첫 번째 항목이 대표 프로젝트로 크게 보입니다. 설명 문자열 안에서 `` `값` ``처럼 백틱으로 감싼 부분은 코드 글꼴로 표시됩니다.

## 시연 영상 넣기

1. 영상을 `public/videos/hangle-demo.mp4`로 저장합니다 (MP4, H.264, 1080p 이하, 30초~1분 권장).
2. `src/data/projects.ts`의 Hangle 항목에서 `demo` 주석을 풉니다.
3. Hangle 상세 페이지에 플레이어가 나타납니다.

## 실행

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```
