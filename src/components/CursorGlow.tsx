import { useEffect, useState } from 'react';

/** A soft glow that follows the cursor. Hidden on touch devices. */
export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[60] h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/30 blur-xl transition-transform duration-100"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}
