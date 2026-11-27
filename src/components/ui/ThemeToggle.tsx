'use client';

import { Moon, Sun } from 'lucide-react';

/**
 * 라이트/다크 전환 버튼.
 * 현재 테마는 layout의 인라인 스크립트가 <html class="dark">로 이미 정해 두므로,
 * 상태를 따로 두지 않고 아이콘도 CSS(dark:)로만 바꾼다. → 서버/클라이언트 렌더 결과가 같아 hydration 불일치가 없다.
 */
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.classList.contains('dark') ? 'light' : 'dark';
    root.classList.toggle('dark', next === 'dark');
    root.style.colorScheme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // 저장소를 쓸 수 없는 환경(사생활 보호 모드 등)에서는 이번 방문에만 적용
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="라이트 모드와 다크 모드 전환"
      title="라이트 모드와 다크 모드 전환"
      className="flex h-10 w-10 items-center justify-center rounded-md text-muted transition-colors hover:bg-field hover:text-ink"
    >
      <Moon className="h-[18px] w-[18px] dark:hidden" aria-hidden />
      <Sun className="hidden h-[18px] w-[18px] dark:block" aria-hidden />
    </button>
  );
}
