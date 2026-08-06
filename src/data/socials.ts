export interface Social {
  name: string;
  href: string;
  icon: string; // react-icons key resolved in component
}

export const socials: Social[] = [
  { name: 'GitHub', href: 'https://github.com/akshaypatel8989/Ecommerce-web/issues', icon: 'github' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/akshay-patel-0716122a1?utm_source', icon: 'linkedin' },
  { name: 'Email', href: 'mailto:akshaypatel10.g@gmail.com', icon: 'email' },
  { name: 'Phone', href: 'tel:+919926595561', icon: 'phone' },
];
