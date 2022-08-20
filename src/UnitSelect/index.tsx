import { FC, memo } from 'react';

type Props = {
  unit: number;
  onChange: (unit: number) => void;
};

const UnitSelect: FC<Props> = ({ unit, onChange }) => {
  return (
    <div>
      <span>per page: </span>
      <select onChange={(e) => onChange(Number(e.target.value))} value={unit}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
    </div>
  );
};

export default memo(UnitSelect);
