import styled from 'styled-components';

export const Table = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  th,
  td {
    vertical-align: middle;
  }
`;

export const Header = styled.thead`
  position: sticky;
  top: 0;

  z-index: 1;
  > tr {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);

    > th {
      &:first-child {
        border-radius: 6px 0 0;
      }

      &:last-child {
        border-radius: 0 6px 0 0;
      }
    }
  }
`;

export const Col = styled.col<{ width: string }>`
  width: ${({ width }) => width};
`;

export const HeaderItem = styled.th`
  height: 48px;
  padding: 0 16px;
  background-color: #ffffff;
  color: #0a2642;
  font-size: 15px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
`;

export const TableRow = styled.tr`
  > td,
  > th {
    background-color: #ffffff;
    vertical-align: middle;
    margin: 0 0 -1px;
    border-bottom: 1px solid #eff4f4;
    border-top: 1px solid transparent;
  }

  &:hover {
    > td,
    > th {
      background-color: #cee0e4;
      cursor: pointer;
    }
  }
`;
export const TableColumn = styled.td`
  padding: 16px 16px 15px;
  color: #0a2642;
  font-size: 15px;
  border-top: 1px solid transparent;
  text-align: center;
`;
