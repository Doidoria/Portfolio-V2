"use client";

import { motion, Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
    },
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-[#030303] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1ee8b8]/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 max-w-4xl"
      >
        {/* 구직 중 상태를 알리는 Pulse 뱃지 */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-[#1ee8b8]"></span>
              <span className="relative inline-flex w-2 h-2 rounded-full bg-[#1ee8b8]"></span>
            </span>
            <span className="text-sm font-medium text-gray-300">현재 - 구직중</span>
          </div>
        </motion.div>

        <motion.p variants={itemVariants} className="mb-6 text-lg md:text-xl font-medium tracking-[0.2em] text-[#1ee8b8]">
          FRONTEND DEVELOPER & WEB PUBLISHER
        </motion.p>
        
        <motion.h1 variants={itemVariants} className="mb-8 text-5xl font-extrabold tracking-tight text-white md:text-8xl">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Yoon Tae Hyun</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="max-w-2xl mx-auto mb-12 text-lg text-gray-400 md:text-2xl font-light leading-relaxed">
          웹 접근성과 반응형 웹을 준수하며, 사용자를 생각하는 직관적인 UI/UX와 확장성 있는 아키텍처를 설계합니다.
        </motion.p>

        {/* 깃허브 & 노션 링크 버튼 */}
        <motion.div variants={itemVariants} className="flex justify-center gap-4">
          <a 
            href="https://github.com/Doidoria" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" className="fill-current">
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
            GitHub
          </a>
          <a 
            href="https://www.notion.so/232c4a9f87e28088b545e8361ac0ad02" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50" className="fill-current">
              <path d="M44.62 13.13c-.23-.21-.52-.33-.83-.33-.02 0-.05.01-.08.01l-29.86 1.92c-.63.04-1.13.58-1.13 1.21v28.75c0 .34.14.65.38.88.25.23.57.35.91.33l29.86-1.93C44.51 43.93 45 43.4 45 42.76V14.02C45 13.68 44.87 13.36 44.62 13.13zM38.11 20.92c-.6.19-.79.2-.79.2v17.24c-1.02.55-1.86.81-2.74.81-1.07 0-1.68-.24-2.5-1.5-1.74-2.69-7.41-11.81-7.41-11.81v11.45l2.23.47c0 0-.06 1.3-2.01 1.45-1.71.13-5.44.32-5.44.32 0-.47.1-1.12.84-1.31.35-.09 1.4-.37 1.4-.37V22.42h-2.24c0-1.03.3-1.83 1.38-1.91l5.79-.33 7.73 11.92V21.49l-2.24-.19c0-.93.9-1.5 1.67-1.58l5.04-.28C38.82 20.09 38.79 20.7 38.11 20.92zM4.98 8.54l5.74 5.74v29.54L5.6 37.66c-.41-.58-.62-1.25-.62-1.96V8.54zM42.72 10.91l-29.06 1.83c-.99.07-1.95-.3-2.65-.99L6.24 6.97l27.19-1.89c.81-.07 1.62.17 2.28.66L42.72 10.91z"></path>
            </svg>
            Notion
          </a>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20 group"
        aria-label="Scroll to projects"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <ChevronDown className="w-10 h-10 text-gray-500 group-hover:text-[#1ee8b8] transition-colors duration-300" />
        </motion.div>
      </motion.button>
    </section>
  );
}