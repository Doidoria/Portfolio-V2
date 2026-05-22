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
  | 'AWS EC2';

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  detailedDesc: string[];
  thumbnail: string;
  techStacks: TechStack[];
  links: {
    github: string;
    live?: string;
    ppt?: string;
  };
  period: string;
}