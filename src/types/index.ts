// src/types/index.ts

export type TechStack = 
  | 'React' 
  | 'Next.js' 
  | 'Node.js' 
  | 'JavaScript' 
  | 'TypeScript' 
  | 'HTML/CSS' 
  | 'Tailwind CSS'
  | 'Zustand'     
  | 'Firebase'    
  | 'Vite'        
  | 'Spring Boot' 
  | 'Docker'      
  | 'Jenkins'
  | 'AWS EC2'
  | 'Spring Security'
  | 'JPA'
  | 'MySQL'
  | 'Redis'
  | 'GitHub Actions';

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  detailedDesc: string[];
  thumbnail: string;
  techStacks: TechStack[];
  links: {
    github?: string; // 비공개 레포는 생략
    live?: string;
    ppt?: string;
  };
  period: string;
}