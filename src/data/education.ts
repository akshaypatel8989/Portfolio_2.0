export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  status: 'Completed' | 'Pursuing';
}

export const education: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Savitribai Phule Pune University',
    period: '2021 — 2023',
    description:
      'Specialized in web technologies and distributed systems. Graduated with distinction.',
    status: 'Completed',
  },
  {
    degree: 'B.Sc. Computer Science',
    institution: 'Fergusson College, Pune',
    period: '2018 — 2021',
    description:
      'Foundations in algorithms, data structures, databases and software engineering.',
    status: 'Completed',
  },
];

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  credentialId: string;
  url: string;
}

export const certifications: Certification[] = [
  {
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    year: '2023',
    credentialId: 'META-FED-2023-0184',
    url: 'https://coursera.org',
  },
  {
    title: 'Node.js, Express, MongoDB & More',
    issuer: 'Udemy',
    year: '2022',
    credentialId: 'UC-2022-NODE-7741',
    url: 'https://udemy.com',
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2023',
    credentialId: 'AWS-CCP-2023-9920',
    url: 'https://aws.amazon.com',
  },
  {
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    year: '2022',
    credentialId: 'FCC-JADS-2022',
    url: 'https://freecodecamp.org',
  },
];
