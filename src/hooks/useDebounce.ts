import { useEffect, useMemo, useRef } from 'react';

const useDebounce = (wait: number, immediate = false) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>();

  const func = useMemo(() => {
    return <T extends unknown[]>(callback: (...args: T) => unknown) => {
      return (...args: T) => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }

        if (immediate) {
          const runNow = !timerRef.current;

          timerRef.current = setTimeout(() => {
            timerRef.current = undefined;
          }, 0);

          if (runNow) {
            callback(...args);
          }
        } else {
          timerRef.current = setTimeout(() => {
            callback(...args);
          }, wait);
        }
      };
    };
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return func;
};

export default useDebounce;
