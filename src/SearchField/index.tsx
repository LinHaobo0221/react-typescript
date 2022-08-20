import { ChangeEvent, FC, memo } from 'react';

import { Base } from './styles';

type Props = {
  keyword: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
const SearchField: FC<Props> = ({ keyword, onChange }) => {
  return (
    <Base
      value={keyword}
      onChange={onChange}
      placeholder="input keyword to search"
    />
  );
};

export default memo(SearchField);
