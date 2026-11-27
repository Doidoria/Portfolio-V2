// src/components/hero/ArchitectureDiagram.tsx
// Hangle 실제 운영 구조(README 기준)를 그린 서버 컴포넌트. 애니메이션은 CSS만 사용한다.
import type { CSSProperties } from 'react';

interface NodeProps {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  note?: string;
  delay: number;
  emphasis?: boolean;
  /** note가 설정값·경로 같은 코드일 때만 고정폭 글꼴 */
  code?: boolean;
}

const delayStyle = (ms: number): CSSProperties => ({ ['--d' as string]: `${ms}ms` });

function Node({ x, y, w, h, title, note, delay, emphasis = false, code = false }: NodeProps) {
  const cx = x + w / 2;
  return (
    <g className="arch-node" style={delayStyle(delay)}>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={4}
        className={emphasis ? 'fill-spring-soft stroke-spring' : 'fill-surface stroke-ink/70'}
        strokeWidth={emphasis ? 1.75 : 1}
      />
      <text
        x={cx}
        y={note ? y + h / 2 - 4 : y + h / 2 + 5}
        textAnchor="middle"
        className="fill-ink font-sans"
        fontSize={14}
        fontWeight={500}
      >
        {title}
      </text>
      {note && (
        <text x={cx} y={y + h / 2 + 15} textAnchor="middle" className={`fill-muted ${code ? 'font-mono' : 'font-sans'}`} fontSize={code ? 11 : 12}>
          {note}
        </text>
      )}
    </g>
  );
}

function Wire({ d, delay }: { d: string; delay: number }) {
  return (
    <path
      d={d}
      className="arch-wire stroke-ink/60"
      style={delayStyle(delay)}
      fill="none"
      strokeWidth={1.25}
      markerEnd="url(#arrow)"
    />
  );
}

export default function ArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 560 420"
      role="img"
      aria-labelledby="arch-title arch-desc"
      className="h-auto w-full"
    >
      <title id="arch-title">Hangle 배포 구조도</title>
      <desc id="arch-desc">
        GitHub push가 Jenkins를 거쳐 AWS EC2로 배포됩니다. EC2 안의 Docker Compose에서 Nginx와 React가 Spring Boot API로
        요청을 넘기고, Spring Boot는 MySQL, Redis, Ollama 챗봇, Python 채점 스크립트를 호출합니다.
      </desc>
      <defs>
        <marker id="arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L8,4 L0,8 z" className="fill-ink/60" />
        </marker>
      </defs>

      {/* 배포 파이프라인 */}
      <Node x={10} y={14} w={140} h={46} title="GitHub push" delay={0} />
      <Wire d="M150,37 H206" delay={150} />
      <Node x={210} y={14} w={140} h={46} title="Jenkins" note="이미지 빌드" delay={250} />
      <Wire d="M350,37 H430 V112" delay={400} />
      <text x={438} y={84} className="fill-muted font-sans arch-node" style={delayStyle(500)} fontSize={12}>
        재배포
      </text>

      {/* EC2 경계 */}
      <g className="arch-node" style={delayStyle(500)}>
        <rect x={10} y={116} width={540} height={292} rx={6} className="fill-none stroke-ink/40" strokeDasharray="5 4" />
        <text x={26} y={140} className="fill-muted font-sans" fontSize={12}>
          AWS EC2 한 대 (RAM 약 2GB), Docker Compose
        </text>
      </g>

      {/* 요청 흐름 */}
      <Node x={34} y={164} w={190} h={56} title="Nginx + React" note="/api/* 프록시" delay={650} />
      <Wire d="M224,192 H290" delay={800} />
      <Node x={294} y={164} w={232} h={56} title="Spring Boot API" note="JWT 필터, 힙 384MB" delay={900} emphasis />

      {/* Spring Boot → 저장소와 외부 프로세스 */}
      <Wire d="M410,220 V256 H89 V292" delay={1050} />
      <Wire d="M410,256 H218 V292" delay={1100} />
      <Wire d="M410,256 H347 V292" delay={1150} />
      <Wire d="M410,256 H476 V292" delay={1200} />

      <Node x={34} y={296} w={110} h={56} title="MySQL" note="buffer 256M" code delay={1250} />
      <Node x={163} y={296} w={110} h={56} title="Redis" note="Refresh Token" delay={1300} />
      <Node x={292} y={296} w={110} h={56} title="Ollama" note="동시 추론 1" delay={1350} />
      <Node x={421} y={296} w={110} h={56} title="Python 채점" note="F1, RMSE 등" delay={1400} />

      <text x={26} y={388} className="fill-muted font-sans arch-node" style={delayStyle(1500)} fontSize={12}>
        컨테이너 5개, healthcheck 후 순서대로 기동, 장애 시 자동 재시작
      </text>
    </svg>
  );
}
