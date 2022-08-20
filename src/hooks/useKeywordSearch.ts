import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import useDebounce from './useDebounce';

const useKeywordSearch = <T extends { name: string }>(source: T[]) => {
  const [keyword, setKeyword] = useState('');

  const [data, setData] = useState<T[]>([]);

  const debounce = useDebounce(300);

  useEffect(() => {
    setData(source);
  }, [source]);

  const onChangeKeyword = useCallback(
    debounce((pData: T[], keyVal: string) => {
      if (keyVal) {
        setData(source.filter((s) => s.name.includes(keyVal)));
      } else {
        setData(source);
      }
    }),
    [source]
  );

  useEffect(() => {
    onChangeKeyword(source, keyword);
  }, [keyword, source]);

  const onKeyChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  }, []);

  return {
    data,
    keyword,
    onKeyChange,
  };
};

export default useKeywordSearch;
