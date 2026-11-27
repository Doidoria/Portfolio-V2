// src/components/sections/SiteHeader.tsx
import Link from 'next/link';
import { profile } from '@/src/data/profile';

const nav = [
  { href: '/#projects', label: '프로젝트' },
  { href: '/#skills', label: '기술' },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/70 bg-white/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="text-lg font-extrabold">
          {profile.name}
        </Link>
        <nav aria-label="주요 메뉴">
          <ul className="flex items-center gap-1 text-[0.9375rem] font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="rounded-lg px-3 py-2 text-muted transition-colors hover:bg-field hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#contact" className="ml-1 rounded-lg bg-ink px-4 py-2 text-white transition-colors hover:bg-[#333d4b]">
                연락하기
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
