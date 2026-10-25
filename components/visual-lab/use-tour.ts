import { useEffect, useState } from 'react';

// Steps through `stops` on its own until the reader chooses one. `stops` must keep its identity.
export function useTour<T>(stops: readonly T[], pause: number, autoplay = true) {
  const [at, setAt] = useState(stops[0]);
  const [touring, setTouring] = useState(true);

  useEffect(() => {
    if (!touring || !autoplay) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      setAt((current) => stops[(stops.indexOf(current) + 1) % stops.length]);
    }, pause);
    return () => window.clearInterval(timer);
  }, [touring, stops, pause, autoplay]);

  const choose = (stop: T) => {
    setTouring(false);
    setAt(stop);
  };
  return [at, choose] as const;
}
