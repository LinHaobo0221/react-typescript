import { FC, memo } from 'react';
import { Base, PageIndex } from './styles';

type Props = {
  total: number;
  current: number;
  moveTo: (page: number) => void;
};

const PaginationBar: FC<Props> = ({ total, current, moveTo }) => {
  return (
    <Base>
      {Array.from({ length: total }).map((_, index) => (
        <PageIndex
          key={`${index + 1}`}
          selected={index + 1 === current}
          onClick={() => {
            if (current !== index + 1) {
              moveTo(index + 1);
            }
          }}
        >
          {index + 1}
        </PageIndex>
      ))}
    </Base>
  );
};

export default memo(PaginationBar);
