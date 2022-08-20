import { useState } from 'react';

const usePagination = <T>(data: T[]) => {
  const [unit, setUnit] = useState<number>(5);
  const [current, setCurrent] = useState<number>(1);

  return {
    total: Math.ceil(data.length / unit),
    current,
    unit,
    setUnit,
    setCurrent,
    pagination:
      current === 1
        ? data.slice(0, unit)
        : data.slice((current - 1) * unit, current * unit),
  };
};

export default usePagination;
