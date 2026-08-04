import type { IconType } from 'react-icons';
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaAws } from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiSupabase,
  SiPostman,
  SiVercel,
  SiRender,
  SiRedux,
  SiExpress,
  SiJsonwebtokens,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiMui,
} from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { VscVscode } from 'react-icons/vsc';
import { TbBrandReact } from 'react-icons/tb';

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: IconType;
  color: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  blurb: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'frontend',
    blurb: 'Pixel-perfect, accessible and animated interfaces.',
    skills: [
      { name: 'React', level: 95, icon: FaReact, color: '#61DAFB' },
      { name: 'Next.js', level: 88, icon: SiNextdotjs, color: '#fff' },
      { name: 'Redux Toolkit', level: 90, icon: SiRedux, color: '#764ABC' },
      { name: 'JavaScript', level: 93, icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', level: 88, icon: SiTypescript, color: '#3178C6' },
      { name: 'HTML5', level: 96, icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', level: 93, icon: SiCss, color: '#1572B6' },
      { name: 'Tailwind CSS', level: 95, icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Bootstrap', level: 88, icon: SiBootstrap, color: '#7952B3' },
      { name: 'Material UI', level: 86, icon: SiMui, color: '#007FFF' },
    ],
  },
  {
    title: 'Backend',
    icon: 'backend',
    blurb: 'Robust, secure and well-structured server-side code.',
    skills: [
      { name: 'Node.js', level: 92, icon: FaNodeJs, color: '#339933' },
      { name: 'Express.js', level: 90, icon: SiExpress, color: '#fff' },
      { name: 'REST API', level: 91, icon: TbBrandReact, color: '#2563EB' },
      { name: 'JWT Auth', level: 89, icon: SiJsonwebtokens, color: '#fff' },
      { name: 'Authentication', level: 87, icon: SiJsonwebtokens, color: '#2563EB' },
    ],
  },
  {
    title: 'Database',
    icon: 'database',
    blurb: 'Modeling data for scale, integrity and speed.',
    skills: [
      { name: 'MongoDB', level: 92, icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', level: 85, icon: GrMysql, color: '#4479A1' },
      { name: 'Supabase', level: 84, icon: SiSupabase, color: '#3FCF8E' },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: 'tools',
    blurb: 'Shipping with a modern, automated workflow.',
    skills: [
      { name: 'Git', level: 93, icon: FaGitAlt, color: '#F05032' },
      { name: 'GitHub', level: 93, icon: FaGithub, color: '#fff' },
      { name: 'Postman', level: 90, icon: SiPostman, color: '#FF6C37' },
      { name: 'Docker', level: 78, icon: FaDocker, color: '#2496ED' },
      { name: 'AWS', level: 75, icon: FaAws, color: '#FF9900' },
      { name: 'Vercel', level: 90, icon: SiVercel, color: '#fff' },
      { name: 'Render', level: 85, icon: SiRender, color: '#46E3B7' },
      { name: 'VS Code', level: 96, icon: VscVscode, color: '#007ACC' },
    ],
  },
];
