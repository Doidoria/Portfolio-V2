// src/components/ui/TextLink.tsx
import Link from 'next/link';
import type { ReactNode } from 'react';

const base =
  'inline-flex items-center gap-1.5 rounded-md border border-ink/25 px-4 py-2.5 text-[0.9375rem] font-medium text-ink transition-colors hover:border-spring hover:text-spring';

/** 외부 링크: 새 탭으로 열린다는 걸 스크린리더에도 알린다 */
export function ExternalButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
      {children}
      <span className="sr-only">(새 탭에서 열림)</span>
    </a>
  );
}

export function InternalButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className={base}>
      {children}
    </Link>
  );
}
