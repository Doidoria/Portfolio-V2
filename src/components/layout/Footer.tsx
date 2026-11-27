"use client";

import { useState } from 'react';
import { Mail, Copy, Check } from "lucide-react";

export default function Footer() {
  const [isCopied, setIsCopied] = useState(false);
  const email = "shth15926@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      // 2초 후에 원래 상태(주소 복사)로 되돌림
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("이메일 복사 실패:", err);
    }
  };

  return (
    <footer className="w-full py-16 text-center border-t border-white/5 bg-[#030303] mt-20">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold text-white">Let&apos;s work together.</h2>
        <p className="text-gray-400 font-light mb-4">
          새로운 도전을 기다리고 있습니다. 언제든 편하게 연락 주세요.
        </p>
        
        {/* 액션 버튼 그룹 */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* 1. 메일 앱으로 바로 열기 버튼 */}
          <a 
            href={`mailto:${email}`}
            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-colors duration-300"
            title="메일 앱으로 열기"
          >
            <Mail className="w-4 h-4" />
            <span>메일 보내기</span>
          </a>

          {/* 2. 이메일 주소 복사 버튼 */}
          <button 
            onClick={handleCopy}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              isCopied 
                ? "bg-[#1ee8b8] text-black border border-transparent" 
                : "bg-white text-black hover:bg-gray-200 border border-transparent"
            }`}
            title="이메일 주소 복사"
          >
            {isCopied ? (
              <>
                <Check className="w-4 h-4" />
                <span>복사 완료!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>주소 복사</span>
              </>
            )}
          </button>
        </div>

        <p className="text-sm text-gray-600 mt-12">
          © {new Date().getFullYear()} Yoon Tae Hyun. All rights reserved.
        </p>
      </div>
    </footer>
  );
}