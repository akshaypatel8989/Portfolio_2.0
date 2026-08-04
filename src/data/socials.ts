export interface Social {
  name: string;
  href: string;
  icon: string; // react-icons key resolved in component
}

export const socials: Social[] = [
  { name: 'GitHub', href: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Email', href: 'mailto:akshay.patel@example.com', icon: 'email' },
  { name: 'Phone', href: 'tel:+919000000000', icon: 'phone' },
];
