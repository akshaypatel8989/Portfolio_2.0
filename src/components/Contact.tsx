import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Section } from '@/components/Section';
import { SocialIcon } from '@/components/SocialIcon';
import { socials } from '@/data/socials';

type Status = 'idle' | 'loading' | 'success';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    window.setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      window.setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  const field =
    'w-full rounded-xl border border-slate-300 bg-white/60 px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 dark:border-white/10 dark:bg-white/5 dark:text-white';

  const contactItems = [
    { icon: Mail, label: 'Email', value: 'akshay.patel@example.com', href: 'mailto:akshay.patel@example.com' },
    { icon: Phone, label: 'Phone', value: '+91 90000 00000', href: 'tel:+919000000000' },
    { icon: MapPin, label: 'Location', value: 'Pune, Maharashtra, India', href: 'https://maps.google.com/?q=Pune' },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
      subtitle="Have a project in mind or just want to say hi? My inbox is always open."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="space-y-6"
        >
          <div className="glass-card p-6">
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              Get in touch
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              I usually respond within 24 hours. Whether it&apos;s a full project or a quick
              consultation, I&apos;m happy to help.
            </p>
            <ul className="mt-6 space-y-4">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.icon === MapPin ? '_blank' : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-4"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600 transition-transform group-hover:scale-110 dark:bg-brand-500/15 dark:text-brand-400">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {item.label}
                      </span>
                      <span className="block text-sm font-medium text-slate-900 dark:text-white">
                        {item.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-2 border-t border-slate-200/70 pt-5 dark:border-white/10">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 text-slate-700 transition-all hover:border-brand-500 hover:text-brand-600 hover:-translate-y-0.5 dark:border-white/10 dark:text-slate-200 dark:hover:text-brand-400"
                >
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card overflow-hidden p-0">
            <iframe
              title="Location map"
              src="https://www.google.com/maps?q=Pune,Maharashtra,India&output=embed"
              loading="lazy"
              className="h-56 w-full border-0 grayscale-[0.2] dark:grayscale dark:invert-[0.9] dark:hue-rotate-180"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="glass-card space-y-4 p-6 md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={field}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={field}
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Subject
            </label>
            <input
              id="subject"
              required
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className={field}
              placeholder="What's this about?"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${field} resize-none`}
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={status !== 'idle'}
            className="btn-primary w-full disabled:opacity-80"
          >
            {status === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
            {status === 'success' && <CheckCircle2 className="h-4 w-4" />}
            {status === 'idle' && <Send className="h-4 w-4" />}
            {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message sent!' : 'Send Message'}
          </button>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm text-emerald-600 dark:text-emerald-400"
            >
              Thanks for reaching out! I&apos;ll get back to you soon.
            </motion.p>
          )}
        </motion.form>
      </div>
    </Section>
  );
}
