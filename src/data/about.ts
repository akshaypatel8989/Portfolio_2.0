export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 20, suffix: '+', label: 'Projects Completed' },
  { value: 2, suffix: '+', label: 'Years Experience' },
  { value: 10, suffix: '+', label: 'Happy Clients' },
];

export interface Highlight {
  title: string;
  description: string;
  icon: string;
}

export const aboutHighlights: Highlight[] = [
  {
    title: 'Clean Architecture',
    description: 'I structure code for longevity — modular, testable and easy to extend.',
    icon: 'layers',
  },
  {
    title: 'Performance First',
    description: 'Obsessed with Core Web Vitals, bundle size and runtime speed.',
    icon: 'gauge',
  },
  {
    title: 'Pixel Perfect',
    description: 'Designs translated to code with meticulous attention to detail.',
    icon: 'ruler',
  },
  {
    title: 'Always Learning',
    description: 'Continuously exploring new tools, patterns and best practices.',
    icon: 'sparkles',
  },
];

export const aboutTimeline: { year: string; title: string; text: string }[] = [
  {
    year: '2018',
    title: 'Started the Journey',
    text: 'Began B.Sc. Computer Science and fell in love with building for the web.',
  },
  {
    year: '2021',
    title: 'First Internship',
    text: 'Joined BrightWave Labs as a frontend intern — selected as top intern.',
  },
  {
    year: '2022',
    title: 'Full Stack Roles',
    text: 'Moved into full-stack development at PixelForge Studio, shipping client products.',
  },
  {
    year: '2023',
    title: 'MERN Specialist',
    text: 'Joined TechVerse Solutions leading full-stack development on multiple products.',
  },
];
