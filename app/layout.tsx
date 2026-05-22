import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Lighthouse SEO 100점을 위한 완벽한 메타 데이터 세팅
export const metadata: Metadata = {
  title: "윤태현 | Frontend Developer Portfolio",
  description: "윤태현의 포트폴리오 사이트입니다. 웹 퍼블리싱, 반응형 웹, 웹 접근성을 고려한 UI/UX를 개발합니다.",
  keywords: ["윤태현", "웹퍼블리셔", "웹접근성", "반응형사이트", "HTML5", "WEB", "Frontend", "Next.js"],
  authors: [{ name: "윤태현" }],
  openGraph: {
    title: "윤태현 | Frontend Developer",
    description: "웹 접근성과 반응형을 고려한 프론트엔드 포트폴리오",
    url: "https://doidoria.github.io", // 또는 나중에 발급받을 vercel 주소
    siteName: "Yoon Tae Hyun Portfolio",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
  modal, 
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode; 
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.className} bg-[#030303] text-white antialiased`}>
        {children}
        {modal}
      </body>
    </html>
  );
}