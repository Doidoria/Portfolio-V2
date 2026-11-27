// src/components/sections/SiteHeader.tsx
import Link from 'next/link';
import { profile } from '@/src/data/profile';

const nav = [
  { href: '/#projects', label: '프로젝트' },
  { href: '/#skills', label: '기술' },
  { href: '/#contact', label: '연락처' },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link href="/" className="font-bold">
          {profile.name}
        </Link>
        <nav aria-label="주요 메뉴">
          <ul className="flex gap-5 text-[0.9375rem] text-muted sm:gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
