import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface SectionProps {
  id: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, subtitle, children, className = '' }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id={id} ref={ref} className={`section-pad relative ${className}`}>
      <div className="container-x">
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-12 max-w-2xl md:mb-16"
          >
            {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
            {title && <h2 className="section-title text-balance">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
