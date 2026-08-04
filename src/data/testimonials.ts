export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Rahul Mehta',
    role: 'Product Manager',
    company: 'TechVerse Solutions',
    avatar: 'https://i.pravatar.cc/120?img=12',
    quote:
      'Akshay delivered our property platform ahead of schedule and the code quality was exceptional. He thinks like a product owner, not just a developer.',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'Founder',
    company: 'ShopWave',
    avatar: 'https://i.pravatar.cc/120?img=45',
    quote:
      'Our e-commerce revenue grew 30% after launch. Akshay understood the business goals and built exactly what our customers needed.',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'CTO',
    company: 'PixelForge Studio',
    avatar: 'https://i.pravatar.cc/120?img=33',
    quote:
      'One of the most reliable developers I have worked with. Clean code, great communication, and he always ships on time.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'HR Director',
    company: 'Pulse HRMS',
    avatar: 'https://i.pravatar.cc/120?img=20',
    quote:
      'The HRMS Akshay built transformed our operations. Attendance, leave and payroll are now fully automated. Highly recommended.',
    rating: 5,
  },
];
