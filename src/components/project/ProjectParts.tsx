// src/components/project/ProjectParts.tsx
// 메인의 대표 프로젝트와 상세 페이지가 같이 쓰는 블록들 (서버 컴포넌트)
import type { ApiEndpoint, Contribution, Project, Troubleshooting } from '@/src/types';
import { ExternalButton } from '@/src/components/ui/TextLink';

/** 데이터 문자열 안의 `코드`를 <code>로 바꿔 렌더링 (설정값, 필드명 등) */
export function Rich({ text }: { text: string }) {
  const parts = text.split('`');
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <code key={i} className="rounded-sm bg-paper px-1 py-0.5 font-mono text-[0.85em]">
            {part}
          </code>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

export function ProjectMeta({ project }: { project: Project }) {
  const rows: { label: string; value: string }[] = [
    { label: '기간', value: project.period },
    { label: '구성', value: project.team },
    { label: '서버', value: project.backend },
    { label: '기술', value: project.stack.join(', ') },
  ];
  return (
    <dl className="divide-y divide-line border-y border-line text-[0.9375rem]">
      {rows.map((row) => (
        <div key={row.label} className="grid gap-0.5 py-3 sm:grid-cols-[4rem_1fr] sm:gap-6">
          <dt className="text-muted">{row.label}</dt>
          <dd>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ContributionList({ contributions }: { contributions: Contribution[] }) {
  return (
    <div className="space-y-8">
      {contributions.map((group) => (
        <div key={group.area}>
          <h4 className="mb-3 text-[0.9375rem] font-bold text-spring">{group.area}</h4>
          <ul className="space-y-2.5">
            {group.items.map((item) => (
              <li key={item} className="relative pl-5 before:absolute before:left-0 before:top-[0.8em] before:h-px before:w-2.5 before:bg-ink/50">
                <Rich text={item} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

const methodColor: Record<ApiEndpoint['method'], string> = {
  GET: 'text-muted',
  POST: 'text-spring',
  PUT: 'text-ink',
  PATCH: 'text-ink',
  DELETE: 'text-ink',
};

export function ApiTable({ apis, caption }: { apis: ApiEndpoint[]; caption: string }) {
  return (
    <div className="overflow-x-auto rounded-md border border-line bg-surface" tabIndex={0} role="region" aria-label={caption}>
      <table className="w-full min-w-[520px] border-collapse text-left text-[0.9375rem]">
        <caption className="border-b border-line px-4 py-3 text-left font-medium">{caption}</caption>
        <thead className="sr-only">
          <tr>
            <th scope="col">메서드</th>
            <th scope="col">경로</th>
            <th scope="col">설명</th>
          </tr>
        </thead>
        <tbody>
          {apis.map((api) => (
            <tr key={`${api.method} ${api.path}`} className="border-b border-line last:border-b-0">
              <td className={`w-20 py-2.5 pl-4 font-mono text-[0.8125rem] ${methodColor[api.method]}`}>{api.method}</td>
              <td className="whitespace-nowrap py-2.5 pr-4 font-mono text-[0.8125rem]">{api.path}</td>
              <td className="py-2.5 pr-4 text-muted">{api.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** 문제 → 원인 → 해결 → 결과는 실제 순서가 있는 흐름이라 왼쪽 세로선으로 이어서 보여준다 */
export function TroubleshootingBlock({ item }: { item: Troubleshooting }) {
  const steps: { label: string; body: React.ReactNode }[] = [
    { label: '문제', body: <p><Rich text={item.problem} /></p> },
    { label: '원인', body: <p><Rich text={item.cause} /></p> },
    {
      label: '해결',
      body: (
        <ul className="space-y-1.5">
          {item.solution.map((s) => (
            <li key={s}>
              <Rich text={s} />
            </li>
          ))}
        </ul>
      ),
    },
    { label: '결과', body: <p className="font-medium">{item.result}</p> },
  ];
  if (item.next) steps.push({ label: '다시 한다면', body: <p className="text-muted">{item.next}</p> });

  return (
    <article className="rounded-md border border-line bg-surface p-5 sm:p-7">
      <h4 className="mb-5 text-xl font-bold leading-snug">{item.title}</h4>
      <dl className="space-y-4 border-l-2 border-spring/60 pl-5">
        {steps.map((step) => (
          <div key={step.label} className="grid gap-1 sm:grid-cols-[6.5rem_1fr] sm:gap-4">
            <dt className="text-[0.9375rem] font-medium text-muted">{step.label}</dt>
            <dd>{step.body}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export function ProjectLinks({ project }: { project: Project }) {
  const { github, live, ppt } = project.links;
  if (!github && !live && !ppt) return null;
  return (
    <div className="flex flex-wrap gap-3">
      {github && <ExternalButton href={github}>GitHub 저장소</ExternalButton>}
      {live && <ExternalButton href={live}>사이트 열기</ExternalButton>}
      {ppt && <ExternalButton href={ppt}>발표 자료</ExternalButton>}
    </div>
  );
}
