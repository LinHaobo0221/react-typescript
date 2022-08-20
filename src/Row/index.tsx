import { FC } from 'react';
import { TableColumn, TableRow } from '../Table';
import { Base, StatusIcon } from './styles';
import { Model } from '../model';
import { Status } from '../enums';

type Props = {
  data: Model;
};
const Index: FC<Props> = ({ data }) => {
  const { id, name, status } = data;
  return (
    <TableRow>
      <TableColumn>{id}</TableColumn>
      <TableColumn>{name}</TableColumn>
      <TableColumn>
        <Base>
          <StatusIcon selected={status === Status.COMPLETED}>
            {Status.COMPLETED}
          </StatusIcon>
          <StatusIcon selected={status === Status.PROCESSING}>
            {Status.PROCESSING}
          </StatusIcon>
          <StatusIcon selected={status === Status.CANCELED}>
            {Status.CANCELED}
          </StatusIcon>
        </Base>
      </TableColumn>
    </TableRow>
  );
};

export default Index;
