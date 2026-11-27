// src/components/project/ProjectParts.tsx
// 프로젝트 상세 페이지 블록들 (서버 컴포넌트)
import type { ApiEndpoint, Contribution, Project, Troubleshooting } from '@/src/types';
import { ExternalButton } from '@/src/components/ui/TextLink';

/** 데이터 문자열 안의 `코드`를 <code>로 바꿔 렌더링 (설정값, 필드명 등) */
export function Rich({ text }: { text: string }) {
  const parts = text.split('`');
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <code key={i} className="rounded-md bg-field px-1.5 py-0.5 font-mono text-[0.85em] text-ink">
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
    <dl className="divide-y divide-line rounded-2xl bg-subtle px-5 text-[0.9375rem]">
      {rows.map((row) => (
        <div key={row.label} className="grid gap-0.5 py-3.5 sm:grid-cols-[3.5rem_1fr] sm:gap-4">
          <dt className="font-bold text-muted">{row.label}</dt>
          <dd>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ContributionList({ contributions }: { contributions: Contribution[] }) {
  return (
    <div className="space-y-4">
      {contributions.map((group) => (
        <div key={group.area} className="rounded-[20px] border border-line p-6">
          <h3 className="mb-3 text-base font-extrabold text-brand">{group.area}</h3>
          <ul className="list-disc space-y-2 pl-5 marker:text-brand">
            {group.items.map((item) => (
              <li key={item}>
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
  GET: 'bg-field text-muted',
  POST: 'bg-brand-soft text-brand',
  PUT: 'bg-field text-ink',
  PATCH: 'bg-field text-ink',
  DELETE: 'bg-field text-ink',
};

export function ApiTable({ apis, caption }: { apis: ApiEndpoint[]; caption: string }) {
  return (
    <div className="overflow-x-auto rounded-[20px] border border-line" tabIndex={0} role="region" aria-label={caption}>
      <table className="w-full min-w-[520px] border-collapse text-left text-[0.9375rem]">
        <caption className="sr-only">{caption}</caption>
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
              <td className="w-24 py-3 pl-5">
                <span className={`rounded-md px-2 py-0.5 font-mono text-xs font-bold ${methodColor[api.method]}`}>
                  {api.method}
                </span>
              </td>
              <td className="whitespace-nowrap py-3 pr-4 font-mono text-[0.8125rem]">{api.path}</td>
              <td className="py-3 pr-5 text-muted">{api.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** 문제 → 원인 → 해결 → 결과 순서로 보여 준다 */
export function TroubleshootingBlock({ item }: { item: Troubleshooting }) {
  const steps: { label: string; body: React.ReactNode }[] = [
    { label: '문제', body: <p><Rich text={item.problem} /></p> },
    { label: '원인', body: <p><Rich text={item.cause} /></p> },
    {
      label: '해결',
      body: (
        <ul className="list-disc space-y-1.5 pl-5 marker:text-brand">
          {item.solution.map((s) => (
            <li key={s}>
              <Rich text={s} />
            </li>
          ))}
        </ul>
      ),
    },
  ];
  if (item.next) steps.push({ label: '다시 한다면', body: <p className="text-muted">{item.next}</p> });

  return (
    <article className="rounded-[24px] bg-white p-6 sm:p-8">
      <h3 className="text-xl font-extrabold leading-snug">{item.title}</h3>
      <dl className="mt-5 space-y-4">
        {steps.map((step) => (
          <div key={step.label} className="grid gap-1 sm:grid-cols-[5.5rem_1fr] sm:gap-4">
            <dt className="font-bold text-muted">{step.label}</dt>
            <dd>{step.body}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-6 rounded-2xl bg-brand-soft px-5 py-4">
        <p className="text-sm font-bold text-brand">결과</p>
        <p className="mt-1 font-bold">{item.result}</p>
      </div>
    </article>
  );
}

export function ProjectLinks({ project }: { project: Project }) {
  const { github, live, ppt } = project.links;
  if (!github && !live && !ppt) return null;
  return (
    <div className="flex flex-wrap gap-2.5">
      {github && (
        <ExternalButton href={github} variant="dark">
          GitHub 저장소
        </ExternalButton>
      )}
      {live && <ExternalButton href={live}>사이트 열기</ExternalButton>}
      {ppt && <ExternalButton href={ppt}>발표 자료</ExternalButton>}
    </div>
  );
}
