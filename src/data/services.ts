export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    title: 'Frontend Development',
    icon: 'frontend',
    description:
      'Building responsive, accessible and animated interfaces with React, Next.js and Tailwind CSS.',
    features: ['Component architecture', 'Responsive design', 'Animations & micro-interactions'],
  },
  {
    title: 'Backend Development',
    icon: 'backend',
    description:
      'Designing secure, scalable Node.js and Express APIs with clean architecture and tests.',
    features: ['REST API design', 'Authentication & authorization', 'Error handling & logging'],
  },
  {
    title: 'Full Stack Development',
    icon: 'fullstack',
    description:
      'End-to-end product development from database schema to polished user interface.',
    features: ['Database to UI', 'CI/CD pipelines', 'End-to-end ownership'],
  },
  {
    title: 'REST API Development',
    icon: 'api',
    description:
      'Well-documented, versioned and rate-limited APIs ready for web and mobile clients.',
    features: ['OpenAPI documentation', 'Rate limiting & caching', 'Pagination & filtering'],
  },
  {
    title: 'Database Design',
    icon: 'database',
    description:
      'Modeling relational and NoSQL schemas for performance, integrity and scale.',
    features: ['Schema design', 'Query optimization', 'Indexing strategies'],
  },
  {
    title: 'Performance Optimization',
    icon: 'performance',
    description:
      'Auditing and improving Core Web Vitals, bundle size and runtime performance.',
    features: ['Lighthouse audits', 'Code splitting', 'Image & asset optimization'],
  },
  {
    title: 'Deployment & DevOps',
    icon: 'deploy',
    description:
      'Shipping to production with automated pipelines on Vercel, Render and AWS.',
    features: ['CI/CD setup', 'Containerization', 'Monitoring & alerts'],
  },
];
