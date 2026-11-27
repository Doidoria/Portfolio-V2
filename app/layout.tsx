import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Lighthouse SEO 100점을 위한 완벽한 메타 데이터 세팅
export const metadata: Metadata = {
  title: "윤태현 | Full-stack Developer Portfolio",
  description: "풀스택 개발자 윤태현의 포트폴리오입니다. Spring Boot와 Next.js로 인증, 결제, 관리자 시스템을 갖춘 웹 서비스를 개발합니다.",
  keywords: ["윤태현", "풀스택 개발자", "백엔드", "Spring Boot", "Next.js", "TypeScript", "포트폴리오"],
  authors: [{ name: "윤태현" }],
  openGraph: {
    title: "윤태현 | Full-stack Developer",
    description: "Spring Boot · Next.js 풀스택 개발자 포트폴리오",
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