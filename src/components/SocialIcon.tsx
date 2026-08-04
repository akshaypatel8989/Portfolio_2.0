import type { IconType } from 'react-icons';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

const map: Record<string, IconType> = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
  phone: FiPhone,
};

export function SocialIcon({ name, className = 'h-5 w-5' }: { name: string; className?: string }) {
  const Icon = map[name] ?? FiMail;
  return <Icon className={className} />;
}
