import { FC, ReactNode } from 'react';
import { Table, Col, Header } from './styles';

type Props = {
  colgroup: string[];
  header: ReactNode;
  children: ReactNode;
};

const SampleTable: FC<Props> = ({ colgroup, header, children }) => (
  <Table>
    <colgroup>
      {colgroup.map((width, index) => (
        <Col key={`col-${index.toString()}`} width={width} />
      ))}
    </colgroup>

    <Header>
      <tr>{header}</tr>
    </Header>
    <tbody>{children}</tbody>
  </Table>
);

export default SampleTable;
