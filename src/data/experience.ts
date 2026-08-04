export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Internship';
  current: boolean;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  tech: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: 'MERN Stack Developer',
    company: 'TechVerse Solutions',
    period: '2023 — Present',
    location: 'Remote',
    type: 'Full-time',
    current: true,
    summary:
      'Leading full-stack development on client products across real-estate, e-commerce and HR tech.',
    responsibilities: [
      'Architected and shipped 6+ production web apps using React, Node.js, Express and MongoDB.',
      'Built reusable component libraries that cut UI delivery time by 40%.',
      'Designed secure REST APIs with JWT auth, role-based access and rate limiting.',
      'Mentored 2 junior developers and led weekly code reviews.',
    ],
    achievements: [
      'Reduced API response time by 55% through query optimization and caching.',
      'Improved Lighthouse performance score from 62 to 96 on the flagship product.',
      'Delivered a property management platform serving 1.2k+ active users.',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux Toolkit', 'Tailwind CSS', 'AWS'],
  },
  {
    role: 'Full Stack Developer',
    company: 'PixelForge Studio',
    period: '2022 — 2023',
    location: 'Hybrid · Pune, India',
    type: 'Full-time',
    current: false,
    summary: 'Delivered end-to-end features for agency clients across e-commerce and SaaS.',
    responsibilities: [
      'Developed 12+ responsive landing pages and dashboards with React and TypeScript.',
      'Integrated Stripe payments and third-party APIs (Twilio, SendGrid, Mapbox).',
      'Collaborated with designers in Figma to ship pixel-perfect UIs.',
    ],
    achievements: [
      'Launched an e-commerce platform that grew client revenue by 30% in Q3.',
      'Automated deployment pipeline, reducing release time from 2h to 12min.',
    ],
    tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Vercel'],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'BrightWave Labs',
    period: '2022 — 2022',
    location: 'Remote',
    type: 'Internship',
    current: false,
    summary: 'First professional role building components and fixing UI bugs on a SaaS dashboard.',
    responsibilities: [
      'Built 20+ reusable React components following an established design system.',
      'Fixed 60+ UI bugs and improved cross-browser compatibility.',
      'Wrote unit tests with Jest and React Testing Library.',
    ],
    achievements: [
      'Selected as top intern out of 14 and offered a full-time role.',
    ],
    tech: ['React', 'JavaScript', 'CSS', 'Jest'],
  },
];
