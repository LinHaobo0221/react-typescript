import React, { FC, useEffect, useState } from 'react';
import { HeaderItem, Table } from '../Table';
import Row from '../Row';
import { useKeywordSearch, usePagination } from '../hooks';

import { Base, SwitchContainer } from './styles';
import SearchField from '../SearchField';
import { Model } from '../model';
import { Status } from '../enums';
import SwitchMode from '../SwitchMode';
import UnitSelect from '../UnitSelect';
import PaginationBar from '../PaginationBar';

const Page: FC = () => {
  const [testData, setTestData] = useState<Model[]>([]);

  const [mode, setMode] = useState<0 | 1>(0);

  const { keyword, onKeyChange, data } = useKeywordSearch(testData);

  const { unit, setUnit, current, setCurrent, total, pagination } =
    usePagination(testData);

  useEffect(() => {
    fetch('http://localhost:8080/data')
      .then((res) => res.json())
      .then((apiData: Model[]) => setTestData(apiData));
  }, []);

  return (
    <Base>
      <SwitchContainer>
        <SwitchMode mode={mode} onChangeMode={setMode} />

        {mode === 1 && <UnitSelect unit={unit} onChange={setUnit} />}
      </SwitchContainer>

      {mode === 0 && <SearchField keyword={keyword} onChange={onKeyChange} />}

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
        {(mode === 0 ? data : pagination).map((d, index) => {
          return <Row key={`${index.toString()}`} data={d} />;
        })}
      </Table>

      {mode === 1 && (
        <PaginationBar total={total} current={current} moveTo={setCurrent} />
      )}
    </Base>
  );
};
export default Page;
