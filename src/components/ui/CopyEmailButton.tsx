'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';

type CopyState = 'idle' | 'copied' | 'failed';

export default function CopyEmailButton({ email, className = '' }: { email: string; className?: string }) {
  const [state, setState] = useState<CopyState>('idle');
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setState('copied');
    } catch {
      // 클립보드 권한이 없는 환경(일부 인앱 브라우저 등)
      setState('failed');
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setState('idle'), 2400);
  };

  const label =
    state === 'copied' ? '이메일 주소를 복사했습니다' : state === 'failed' ? '복사 실패, 주소를 직접 선택하세요' : '이메일 주소 복사';

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2.5 text-[0.9375rem] font-medium text-paper transition-colors hover:bg-spring ${className}`}
    >
      {state === 'copied' ? <Check className="h-4 w-4" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
      <span aria-live="polite">{label}</span>
    </button>
  );
}
