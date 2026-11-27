// src/components/ui/TextLink.tsx
import Link from 'next/link';
import type { ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'dark';

const base =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-base font-bold transition-colors';

export const buttonStyles: Record<ButtonVariant, string> = {
  primary: `${base} bg-brand text-white hover:bg-brand-dark`,
  secondary: `${base} bg-field text-[#333d4b] hover:bg-line`,
  dark: `${base} bg-ink text-white hover:bg-[#333d4b]`,
};

/** 외부 링크: 새 탭으로 열린다는 걸 스크린리더에도 알린다 */
export function ExternalButton({
  href,
  children,
  variant = 'secondary',
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={buttonStyles[variant]}>
      {children}
      <span className="sr-only">(새 탭에서 열림)</span>
    </a>
  );
}

export function InternalButton({
  href,
  children,
  variant = 'secondary',
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
}) {
  return (
    <Link href={href} className={buttonStyles[variant]}>
      {children}
    </Link>
  );
}
