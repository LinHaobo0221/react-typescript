import React, { FC, useEffect, useState } from 'react';
import { HeaderItem, Table } from '../Table';
import Row from '../Row';
import { useKeywordSearch } from '../hooks';

import { Base } from './styles';
import SearchField from '../SearchField';
import { Model } from '../model';
import { Status } from '../enums';

const Page: FC = () => {
  const [testData, setTestData] = useState<Model[]>([]);

  const { keyword, onKeyChange, data } = useKeywordSearch(testData);

  useEffect(() => {
    const tmpData = Array.from({ length: 200 }).map((_, index) => {
      const div = index % 2;

      let status: Status;
      if (div === 0) {
        status = Status.COMPLETED;
      } else if (div === 1) {
        status = Status.PROCESSING;
      } else {
        status = Status.CANCELED;
      }
      return {
        id: index + 1,
        name: `name-${index + 1}`,
        status,
      };
    });
    setTestData(tmpData);
  }, []);

  return (
    <Base>
      <SearchField keyword={keyword} onChange={onKeyChange} />

      <Table
        colgroup={['200px', '300px', '400px']}
        header={
          <>
            <HeaderItem>ID</HeaderItem>
            <HeaderItem>NAME</HeaderItem>
            <HeaderItem>STATUS</HeaderItem>
          </>
        }
      >
        {data.map((d, index) => {
          return <Row key={`${index.toString()}`} data={d} />;
        })}
      </Table>
    </Base>
  );
};
export default Page;
