import { useCallback, useEffect, useRef } from 'react';

const useDebounce = (callback: () => void, delay: number) => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dispatchDebounce = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => callback(), delay);
  }, [callback, delay]);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return dispatchDebounce;
};

export default useDebounce;
