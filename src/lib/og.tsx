// src/lib/og.tsx
// 링크 미리보기(OG) 이미지 공통 렌더러. opengraph-image.tsx에서 빌드 시 한 번 생성된다.
import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

const fontDir = join(process.cwd(), 'node_modules/pretendard/dist/public/static');

interface OgContent {
  /** 위쪽 작은 줄 (예: '대표 프로젝트') */
  kicker: string;
  title: string;
  description: string;
  tags: string[];
}

export async function renderOgImage({ kicker, title, description, tags }: OgContent): Promise<ImageResponse> {
  // ImageResponse(satori)는 woff2를 읽지 못하므로 otf를 쓴다
  const [regular, bold] = await Promise.all([
    readFile(join(fontDir, 'Pretendard-Regular.otf')),
    readFile(join(fontDir, 'Pretendard-Bold.otf')),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#ffffff',
          color: '#191f28',
          fontFamily: 'Pretendard',
          wordBreak: 'keep-all',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 18, height: 18, borderRadius: 4, background: '#2b5fe0' }} />
            <span style={{ fontWeight: 700 }}>윤태현</span>
            <span style={{ color: '#4e5968' }}>백엔드 중심 풀스택 개발자</span>
          </div>
          <span style={{ color: '#4e5968' }}>yoonth.xyz</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 30, fontWeight: 700, color: '#2b5fe0' }}>{kicker}</span>
          <span style={{ marginTop: 12, fontSize: 76, fontWeight: 700, letterSpacing: -2, lineHeight: 1.15 }}>
            {title}
          </span>
          <span style={{ marginTop: 20, fontSize: 32, color: '#4e5968', lineHeight: 1.45, maxWidth: 1000 }}>
            {description}
          </span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 24,
                padding: '8px 16px',
                borderRadius: 6,
                background: '#f2f4f6',
                color: '#333d4b',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: 'Pretendard', data: regular, style: 'normal', weight: 400 },
        { name: 'Pretendard', data: bold, style: 'normal', weight: 700 },
      ],
    },
  );
}
