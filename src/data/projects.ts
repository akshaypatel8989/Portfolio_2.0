export interface Project {
  id: string;
  title: string;
  category: 'React' | 'Node' | 'Full Stack';
  tag: 'Featured' | 'Project';
  image: string;
  blurb: string;
  description: string;
  tech: string[];
  highlights: string[];
  github: string;
  live: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'sippy-housing',
    title: 'Sippy Housing — Property Management System',
    category: 'Full Stack',
    tag: 'Featured',
    image:
      'https://i.pinimg.com/736x/98/2f/f3/982ff31b9b2da118f18d2ff4495a4640.jpg?auto=compress&cs=tinysrgb&w=1200',
    blurb:
      'A full-stack platform for listing, searching and managing rental properties with landlord & tenant portals.',
    description:
      'Sippy Housing is an end-to-end property management system built for a real-estate agency. It includes landlord and tenant dashboards, automated rent tracking, maintenance requests, document uploads, and an advanced property search with map filters. The platform serves 1,200+ active users with a 99.9% uptime.',
    highlights: [
      'Role-based auth (admin, landlord, tenant) with JWT and refresh tokens',
      'Advanced search with geolocation filtering and saved searches',
      'Automated rent reminders and digital lease management',
      'Admin dashboard with revenue analytics and occupancy reports',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux Toolkit', 'Mapbox', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://www.sippyhousing.com/',
    featured: true,
  },
  {
    id: 'ecommerce',
    title: 'ShopWave — E-Commerce Website',
    category: 'Full Stack',
    tag: 'Featured',
    image:
      'https://images.pexels.com/photos/7620619/pexels-photo-7620619.jpeg?auto=compress&cs=tinysrgb&w=1200',
    blurb:
      'A modern storefront with cart, checkout, Stripe payments and a powerful admin panel.',
    description:
      'ShopWave is a production-grade e-commerce platform featuring a fast storefront, secure Stripe checkout, order tracking, inventory management and a full admin dashboard. Includes product variants, discount codes, wishlist and reviews.',
    highlights: [
      'Stripe checkout with webhook-driven order fulfillment',
      'Admin panel for products, orders, coupons and analytics',
      'SEO-optimized product pages with structured data',
      'Cart persistence and guest checkout flow',
    ],
    tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redux Toolkit'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 'admin-dashboard',
    title: 'Nova Admin Dashboard',
    category: 'React',
    tag: 'Featured',
    image:
      'https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&w=1200',
    blurb:
      'A data-rich admin dashboard with charts, tables, dark mode and role-based access.',
    description:
      'Nova is a reusable admin dashboard template with 30+ UI components, interactive charts (Recharts), data tables with sorting and pagination, theme switching, and a fully responsive sidebar. Built to be dropped into any SaaS product.',
    highlights: [
      '20+ pre-built pages (analytics, users, orders, settings)',
      'Real-time charts and KPI widgets',
      'Light / dark mode with system preference detection',
      'Modular architecture — easy to extend',
    ],
    tech: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS', 'Redux Toolkit'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 'hrms',
    title: 'Pulse HRMS',
    category: 'Full Stack',
    tag: 'Featured',
    image:
      'https://images.pexels.com/photos/7693692/pexels-photo-7693692.jpeg?auto=compress&cs=tinysrgb&w=1200',
    blurb:
      'A human resource management system for employees, attendance, leave and payroll.',
    description:
      'Pulse HRMS streamlines HR operations with employee records, attendance tracking, leave management, payroll generation and performance reviews. Includes an employee self-service portal and approval workflows.',
    highlights: [
      'Attendance with geofencing and selfie check-in',
      'Automated leave approval workflows',
      'Payslip generation and export to PDF',
      'Org chart and reporting hierarchy',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 'news-portal',
    title: 'DailyWire — News Portal',
    category: 'Full Stack',
    tag: 'Featured',
    image:
      'https://images.pexels.com/photos/17706646/pexels-photo-17706646.jpeg?auto=compress&cs=tinysrgb&w=1200',
    blurb:
      'A high-traffic news portal with categories, search, comments and a CMS for editors.',
    description:
      'DailyWire is a news publishing platform with category-based browsing, full-text search, threaded comments, bookmarks and a headless CMS for editors. Optimized for SEO and Core Web Vitals.',
    highlights: [
      'Headless CMS for editors with rich-text and media management',
      'Server-side rendering for SEO and fast first paint',
      'Full-text search across 10k+ articles',
      'Lazy-loaded media for performance',
    ],
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 'ai-chat',
    title: 'Lumi — AI Chat Application',
    category: 'Full Stack',
    tag: 'Featured',
    image:
      'https://images.pexels.com/photos/32021560/pexels-photo-32021560.jpeg?auto=compress&cs=tinysrgb&w=1200',
    blurb:
      'A real-time AI chat app with streaming responses, conversation history and auth.',
    description:
      'Lumi is a real-time chat application powered by an LLM API, featuring streaming responses, markdown rendering, conversation history, prompt templates and user authentication. Built with WebSockets for live typing indicators.',
    highlights: [
      'Streaming AI responses with token-by-token rendering',
      'Conversation history saved per user',
      'Markdown and code-block rendering with syntax highlighting',
      'WebSocket-based presence and typing indicators',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSockets', 'OpenAI'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
];
