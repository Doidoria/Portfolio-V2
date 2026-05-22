"use client";

import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useState } from 'react';
import { X } from 'lucide-react';

export default function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();
  
  // 1. 모달의 렌더링 상태를 제어할 로컬 state 생성
  const [isOpen, setIsOpen] = useState(true);

  // 2. 닫기 버튼을 누르면 즉시 라우팅하는 대신, 상태만 false로 변경
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence
      onExitComplete={() => {
        router.back();
      }}
    >
      {isOpen && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          {/* 배경 (Backdrop) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} // 닫힐 때 부드럽게 페이드아웃
            transition={{ duration: 0.4 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* 모달 창 본체 */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }} // 닫힐 때 미세하게 작아지며 스르륵 내려감
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#030303] rounded-3xl border border-white/10 shadow-2xl z-10"
          >
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 z-50 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}