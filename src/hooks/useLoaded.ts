import { useEffect, useState } from 'react';

/** Returns true once the page has fully loaded, with a min display time for the loader. */
export function useLoaded(minMs = 1400) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;
    const start = performance.now();
    const finish = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, minMs - elapsed);
      window.setTimeout(() => mounted && setLoaded(true), wait);
    };
    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', finish, { once: true });
    return () => {
      mounted = false;
      window.removeEventListener('load', finish);
    };
  }, [minMs]);

  return loaded;
}
